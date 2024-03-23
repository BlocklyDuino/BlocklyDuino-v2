#*****************************************************************************
#
#  System        : 
#  Module        : 
#  Object Name   : $RCSfile$
#  Revision      : $Revision$
#  Date          : $Date$
#  Author        : $Author$
#  Created By    : Robert Heller
#  Created       : Fri Mar 22 12:20:38 2024
#  Last Modified : <240323.1127>
#
#  Description	
#
#  Notes
#
#  History
#	
#*****************************************************************************
## @copyright
#    Copyright (C) 2024  Robert Heller D/B/A Deepwoods Software
#			51 Locke Hill Road
#			Wendell, MA 01379-9728
#
#    This program is free software; you can redistribute it and/or modify
#    it under the terms of the GNU General Public License as published by
#    the Free Software Foundation; either version 2 of the License, or
#    (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU General Public License for more details.
#
#    You should have received a copy of the GNU General Public License
#    along with this program; if not, write to the Free Software
#    Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
# @file ArduinoHttpd.tcl
# @author Robert Heller
# @date Fri Mar 22 12:20:38 2024
# 
#
#*****************************************************************************


package require httpd

::clay::define ::docserver::server {
    superclass ::httpd::server
    
    method debug args {
        puts [list DEBUG {*}$args]
    }
    method log args {
        puts [list LOG {*}$args]
    }
    
}
::docserver::server create appmain port 8080

appmain plugin basic_url ::httpd::plugin.dict_dispatch

namespace eval TempFile {
    variable counter 0
    proc mkTempINO {{dir /tmp}} {
        variable counter
        incr counter
        set result [file join $dir [format "%06x" $counter]]
        while {[file exists $result]} {
            incr counter
            set result [file join $dir [format "%06x" $counter]]
        }
        file mkdir $result
        return [file join $result "[file tail $result].ino"]
    }
}


appmain uri direct * /* {} {
    set request [my request get REQUEST_URI]
    my log "($request)"
    set length [my request get CONTENT_LENGTH]
    set prog [my PostData $length]
    my log "($request) prog is \{$prog\}, length is $length" 
    set inofile [::TempFile::mkTempINO]
    set fp [open $inofile w]
    puts -nonewline $fp $prog
    close $fp
    my log "($request) saved as $inofile"
    if {[regexp {^/([^/]*)/(.*)$} $request => mode opts] < 1} {
        regexp {^/(.*)$} $request => mode
        my log "($request) mode is $mode"
        if {$mode ni {upload verify}} {
            set mode verify
        }
        set opts {}
    }
    switch $mode {
        upload {
            set cmd [list exec [auto_execok arduino] --upload]
        }
        verify {
            set cmd [list exec [auto_execok arduino] --verify]
        }
    }
    foreach o [split $opts ,] {
        if {[regexp {^([^=]+)=(.*)$} $o => opt value] > 0} {
            if {$value ne ""} {
                lappend cmd "--$opt" $value
            } else {
                lappend cmd "--$opt"
            }
        }
    }
    lappend cmd $inofile "2>@1"
    my log "($request) cmd is \{$cmd\}"
    set status [catch $cmd result]
    my reply set Access-Control-Allow-Origin *
    my reply set "Content-Type" "text/plain;charset=UTF-8"
    my log "($request) status is $status"
    my log "($request) result is $result"
    my puts $result
}

puts [list LISTENING on [appmain port_listening]]
cron::main


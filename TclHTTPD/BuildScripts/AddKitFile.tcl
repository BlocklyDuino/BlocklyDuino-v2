#* 
#* ------------------------------------------------------------------
#* AddKitFile.tcl - Add kit files (symlinked) to a kit lib dir
#* Created by Robert Heller on Wed Jan 10 14:19:51 2007
#* ------------------------------------------------------------------
#* Modification History: $Log$
#* Modification History: Revision 1.1  2007/02/01 20:00:51  heller
#* Modification History: Lock down for Release 2.1.7
#* Modification History:
#* Modification History: Revision 1.1  2002/07/28 14:03:50  heller
#* Modification History: Add it copyright notice headers
#* Modification History:
#* ------------------------------------------------------------------
#* Contents:
#* ------------------------------------------------------------------
#*  
#*     Model RR System, Version 2
#*     Copyright (C) 1994,1995,2002-2005  Robert Heller D/B/A Deepwoods Software
#* 			51 Locke Hill Road
#* 			Wendell, MA 01379-9728
#* 
#*     This program is free software; you can redistribute it and/or modify
#*     it under the terms of the GNU General Public License as published by
#*     the Free Software Foundation; either version 2 of the License, or
#*     (at your option) any later version.
#* 
#*     This program is distributed in the hope that it will be useful,
#*     but WITHOUT ANY WARRANTY; without even the implied warranty of
#*     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#*     GNU General Public License for more details.
#* 
#*     You should have received a copy of the GNU General Public License
#*     along with this program; if not, write to the Free Software
#*     Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
#* 
#*  
#* 

package provide app-AddKitFile 1.0

#*************************
# command line arguments: <kit name> <dir path> files...
#*************************

global srcdir
set srcdir {}
if {[string equal [lindex $argv 0] "-srcdir"]} {
  set srcdir [lindex $argv 1]
  set argv [lrange $argv 2 end]
}

if {$argc < 3} {
  puts stderr "usage: [file rootname [file tail [info script]]].kit <kit name> <dir path> files..."
  exit 99
}

set KitName [lindex $argv 0]
set rootname [file rootname $KitName]
set TopDir $rootname.vfs

set DirPath [lindex $argv 1]
set Dir  [file join $TopDir $DirPath]
file mkdir $Dir

set files [lrange $argv 2 end]
foreach file $files {
  if {![file exists $file] && [string length $srcdir] > 0} {
    set  file [file join $srcdir $file]
  }
  if {![file exists [file join $Dir [file tail $file]]]} {
    file link [file join $Dir [file tail $file]] [file normalize $file]
  }
}


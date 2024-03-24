#* 
#* ------------------------------------------------------------------
#* MakeVersion.tcl - Make Version.tcl
#* Created by Robert Heller on Sun Oct 21 10:32:11 2007
#* ------------------------------------------------------------------
#* Modification History: $Log$
#* Modification History: Revision 1.1  2007/10/22 17:17:26  heller
#* Modification History: 10222007
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

set namespace [lindex $argv 0]
set version   [lindex $argv 1]
set versionFP [open Version.tcl w]

puts $versionFP "namespace eval $namespace \{"

puts $versionFP "  variable VERSION $version"

foreach {name value} [lrange $argv 2 end] {
  puts $versionFP "  variable $name $value"
}

puts $versionFP "\}"

puts $versionFP "package provide Version $version"

close $versionFP


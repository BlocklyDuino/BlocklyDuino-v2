#* 
#* ------------------------------------------------------------------
#* AddKitDir.tcl - Add a symlinked directory to a kit
#* Created by Robert Heller on Wed Jan 10 14:27:14 2007
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

package provide app-AddKitDir 1.0


#*************************
# command line arguments: <kit name> <Subdirectory Path> <Directory Path>
#*************************

if {$argc != 3} {
  puts stderr "usage: [file rootname [file tail [info script]]].kit <kit name>  <Subdirectory Path> <Directory Path>"
  exit 99
}

set KitName [lindex $argv 0]
set rootname [file rootname $KitName]
set TopDir $rootname.vfs

set SubdirectoryPath [lindex $argv 1]
set Subdirectory  [file join $TopDir $SubdirectoryPath]
file mkdir $Subdirectory

set DirectoryPath [lindex $argv 2]
file link [file join $Subdirectory [file tail $DirectoryPath]] [file normalize $DirectoryPath]




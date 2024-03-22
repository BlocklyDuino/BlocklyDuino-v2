##-*- makefile -*-############################################################
#
#  System        : 
#  Module        : 
#  Object Name   : $RCSfile$
#  Revision      : $Revision$
#  Date          : $Date$
#  Author        : $Author$
#  Created By    : Robert Heller
#  Created       : Fri Mar 22 12:20:53 2024
#  Last Modified : <240322.1518>
#
#  Description	
#
#  Notes
#
#  History
#	
#  $Log$
#
##############################################################################
#
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
#
# 
#
##############################################################################


ACLOCAL_AMFLAGS = -I m4

SUBDIRS = BuildData BuildScripts

TCLKIT = $(top_builddir)/BuildData/tclkit${BEXEEXT}

BUILT_SOURCES = $(TCLKIT)

bin_SCRIPTS = ArduinoHttpd$(EXEEXT)

CLEANFILES = $(bin_SCRIPTS)


AllScripts = $(wildcard $(top_srcdir)/ArduinoHttpd.tcl $(top_srcdir)/Scripts/*.tcl) $(wildcard Scripts/*.tcl)

LibScripts = $(filter-out %ArduinoHttpd.tcl,$(AllScripts))

ArduinoHttpd$(EXEEXT): $(AllScripts)
	-rm -rf ArduinoHttpd.vfs
	$(TCLKIT) $(top_srcdir)/BuildScripts/sdx.kit qwrap $(srcdir)/ArduinoHttpd.tcl
	$(TCLKIT) $(top_srcdir)/BuildScripts/sdx.kit unwrap ArduinoHttpd.kit
	-rm -rf ArduinoHttpd.kit
	$(TCLKIT) $(top_srcdir)/BuildScripts/AddKitDir.kit ArduinoHttpd \
	 	lib $(dir $(HTTPDLIB))
	$(TCLKIT) $(top_srcdir)/BuildScripts/sdx.kit wrap \
		ArduinoHttpd$(EXEEXT) \
		-runtime $(top_srcdir)/BuildData/$(TCLKITRUN)
	-rm -rf ArduinoHttpd.vfs ArduinoHttpd.kit

$(top_builddir)/BuildData/tclkit${BEXEEXT}: FORCE
	$(MAKE) -C $(top_builddir)/BuildData tclkit${BEXEEXT}
	

FORCE:


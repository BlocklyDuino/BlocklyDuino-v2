#* 
#* ------------------------------------------------------------------
#* ax_tcl_libraries.m4 - Checks for Tcl Libraries
#* Created by Robert Heller on Sat Mar  2 15:25:28 2013
#* ------------------------------------------------------------------
#* Modification History: $Log: headerfile.text,v $
#* Modification History: Revision 1.1  2002/07/28 14:03:50  heller
#* Modification History: Add it copyright notice headers
#* Modification History:
#* ------------------------------------------------------------------
#* Contents:
#* ------------------------------------------------------------------
#*  
#*     Generic Project
#*     Copyright (C) 2010  Robert Heller D/B/A Deepwoods Software
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

AC_DEFUN([AX_HTTPD],[
AC_MSG_CHECKING(httpd dir)
searchdirs=`echo 'puts $auto_path'|${HOSTTCLSH}`
for dir in $searchdirs ; do
  dirs="${dir}/httpd* ${dir}/tcllib*/httpd*"
  for i in $dirs ; do
    if test -d "$i" -a -f "$i/pkgIndex.tcl"; then
      HTTPDLIB=`cd $i; pwd`
    fi
  done
done
AC_ARG_WITH(httpdlib, [  --with-httpdlib=DIR          use httpd from DIR], HTTPDLIB=$withval,)
if test x$HTTPDLIB != x -a -d $HTTPDLIB; then
   AC_MSG_RESULT([using httpd library in $HTTPDLIB])
else
   AC_MSG_ERROR(httpd library directory not found)
fi
AC_SUBST(HTTPDLIB)
])

AC_DEFUN([AX_URI],[
AC_MSG_CHECKING(uri dir)
searchdirs=`echo 'puts $auto_path'|${HOSTTCLSH}`
for dir in $searchdirs ; do
  dirs="${dir}/uri* ${dir}/tcllib*/uri*"
  for i in $dirs ; do
    if test -d "$i" -a -f "$i/pkgIndex.tcl"; then
      URILIB=`cd $i; pwd`
    fi
  done
done
AC_ARG_WITH(urilib, [  --with-urilib=DIR          use uri from DIR], URILIB=$withval,)
if test x$URILIB != x -a -d $URILIB; then
   AC_MSG_RESULT([using uri library in $URILIB])
else
   AC_MSG_ERROR(Uri library directory not found)
fi
AC_SUBST(URILIB)
])

AC_DEFUN([AX_DNS],[
AC_MSG_CHECKING(dns dir)
searchdirs=`echo 'puts $auto_path'|${HOSTTCLSH}`
for dir in $searchdirs ; do
  dirs="${dir}/dns* ${dir}/tcllib*/dns*"
  for i in $dirs ; do
    if test -d "$i" -a -f "$i/pkgIndex.tcl"; then
      DNSLIB=`cd $i; pwd`
    fi
  done
done
AC_ARG_WITH(dnslib, [  --with-dnslib=DIR          use dns from DIR], DNSLIB=$withval,)
if test x$DNSLIB != x -a -d $DNSLIB; then
   AC_MSG_RESULT([using dns library in $DNSLIB])
else
   AC_MSG_ERROR(Dns library directory not found)
fi
AC_SUBST(DNSLIB)
])

AC_DEFUN([AX_CRON],[
AC_MSG_CHECKING(cron dir)
searchdirs=`echo 'puts $auto_path'|${HOSTTCLSH}`
for dir in $searchdirs ; do
  dirs="${dir}/cron* ${dir}/tcllib*/cron*"
  for i in $dirs ; do
    if test -d "$i" -a -f "$i/pkgIndex.tcl"; then
      CRONLIB=`cd $i; pwd`
    fi
  done
done
AC_ARG_WITH(cronlib, [  --with-cronlib=DIR          use cron from DIR], CRONLIB=$withval,)
if test x$CRONLIB != x -a -d $CRONLIB; then
   AC_MSG_RESULT([using cron library in $CRONLIB])
else
   AC_MSG_ERROR(Cron library directory not found)
fi
AC_SUBST(CRONLIB)
])

AC_DEFUN([AX_COROUTINE],[
AC_MSG_CHECKING(coroutine dir)
searchdirs=`echo 'puts $auto_path'|${HOSTTCLSH}`
for dir in $searchdirs ; do
  dirs="${dir}/coroutine* ${dir}/tcllib*/coroutine*"
  for i in $dirs ; do
    if test -d "$i" -a -f "$i/pkgIndex.tcl"; then
      COROUTINELIB=`cd $i; pwd`
    fi
  done
done
AC_ARG_WITH(coroutinelib, [  --with-coroutinelib=DIR          use coroutine from DIR], COROUTINELIB=$withval,)
if test x$COROUTINELIB != x -a -d $COROUTINELIB; then
   AC_MSG_RESULT([using coroutine library in $COROUTINELIB])
else
   AC_MSG_ERROR(Coroutine library directory not found)
fi
AC_SUBST(COROUTINELIB)
])

AC_DEFUN([AX_MIME],[
AC_MSG_CHECKING(mime dir)
searchdirs=`echo 'puts $auto_path'|${HOSTTCLSH}`
for dir in $searchdirs ; do
  dirs="${dir}/mime* ${dir}/tcllib*/mime*"
  for i in $dirs ; do
    if test -d "$i" -a -f "$i/pkgIndex.tcl"; then
      MIMELIB=`cd $i; pwd`
    fi
  done
done
AC_ARG_WITH(mimelib, [  --with-mimelib=DIR          use mime from DIR], MIMELIB=$withval,)
if test x$MIMELIB != x -a -d $MIMELIB; then
   AC_MSG_RESULT([using mime library in $MIMELIB])
else
   AC_MSG_ERROR(Mime library directory not found)
fi
AC_SUBST(MIMELIB)
])

AC_DEFUN([AX_FILEUTIL],[
AC_MSG_CHECKING(fileutil dir)
searchdirs=`echo 'puts $auto_path'|${HOSTTCLSH}`
for dir in $searchdirs ; do
  dirs="${dir}/fileutil* ${dir}/tcllib*/fileutil*"
  for i in $dirs ; do
    if test -d "$i" -a -f "$i/pkgIndex.tcl"; then
      FILEUTILLIB=`cd $i; pwd`
    fi
  done
done
AC_ARG_WITH(fileutillib, [  --with-fileutillib=DIR          use fileutil from DIR], FILEUTILLIB=$withval,)
if test x$FILEUTILLIB != x -a -d $FILEUTILLIB; then
   AC_MSG_RESULT([using fileutil library in $FILEUTILLIB])
else
   AC_MSG_ERROR(FILEUTIL library directory not found)
fi
AC_SUBST(FILEUTILLIB)
])

AC_DEFUN([AX_WEBSOCKET],[
AC_MSG_CHECKING(websocket dir)
searchdirs=`echo 'puts $auto_path'|${HOSTTCLSH}`
for dir in $searchdirs ; do
  dirs="${dir}/websocket* ${dir}/tcllib*/websocket*"
  for i in $dirs ; do
    if test -d "$i" -a -f "$i/pkgIndex.tcl"; then
      WEBSOCKETLIB=`cd $i; pwd`
    fi
  done
done
AC_ARG_WITH(websocketlib, [  --with-websocketlib=DIR          use websocket from DIR], WEBSOCKETLIB=$withval,)
if test x$WEBSOCKETLIB != x -a -d $WEBSOCKETLIB; then
   AC_MSG_RESULT([using websocket library in $WEBSOCKETLIB])
else
   AC_MSG_ERROR(Websocket library directory not found)
fi
AC_SUBST(WEBSOCKETLIB)
])

AC_DEFUN([AX_MARKDOWN],[
AC_MSG_CHECKING(markdown dir)
searchdirs=`echo 'puts $auto_path'|${HOSTTCLSH}`
for dir in $searchdirs ; do
  dirs="${dir}/markdown* ${dir}/tcllib*/markdown*"
  for i in $dirs ; do
    if test -d "$i" -a -f "$i/pkgIndex.tcl"; then
      MARKDOWNLIB=`cd $i; pwd`
    fi
  done
done
AC_ARG_WITH(markdownlib, [  --with-markdownlib=DIR          use markdown from DIR], MARKDOWNLIB=$withval,)
if test x$MARKDOWNLIB != x -a -d $MARKDOWNLIB; then
   AC_MSG_RESULT([using markdown library in $MARKDOWNLIB])
else
   AC_MSG_ERROR(Markdown library directory not found)
fi
AC_SUBST(MARKDOWNLIB)
])

AC_DEFUN([AX_FUMAGIC],[
AC_MSG_CHECKING(fumagic dir)
searchdirs=`echo 'puts $auto_path'|${HOSTTCLSH}`
for dir in $searchdirs ; do
  dirs="${dir}/fumagic* ${dir}/tcllib*/fumagic*"
  for i in $dirs ; do
    if test -d "$i" -a -f "$i/pkgIndex.tcl"; then
      FUMAGICLIB=`cd $i; pwd`
    fi
  done
done
AC_ARG_WITH(fumagiclib, [  --with-fumagiclib=DIR          use fumagic from DIR], FUMAGICLIB=$withval,)
if test x$FUMAGICLIB != x -a -d $FUMAGICLIB; then
   AC_MSG_RESULT([using fumagic library in $FUMAGICLIB])
else
   AC_MSG_ERROR(Fumagic library directory not found)
fi
AC_SUBST(FUMAGICLIB)
])

AC_DEFUN([AX_CLAY],[
AC_MSG_CHECKING(clay dir)
searchdirs=`echo 'puts $auto_path'|${HOSTTCLSH}`
for dir in $searchdirs ; do
  dirs="${dir}/clay* ${dir}/tcllib*/clay*"
  for i in $dirs ; do
    if test -d "$i" -a -f "$i/pkgIndex.tcl"; then
      CLAYLIB=`cd $i; pwd`
    fi
  done
done
AC_ARG_WITH(claylib, [  --with-claylib=DIR          use clay from DIR], CLAYLIB=$withval,)
if test x$CLAYLIB != x -a -d $CLAYLIB; then
   AC_MSG_RESULT([using clay library in $CLAYLIB])
else
   AC_MSG_ERROR(Clay library directory not found)
fi
AC_SUBST(CLAYLIB)
])

AC_DEFUN([AX_LOG],[
AC_MSG_CHECKING(log dir)
searchdirs=`echo 'puts $auto_path'|${HOSTTCLSH}`
for dir in $searchdirs ; do
  dirs="${dir}/log* ${dir}/tcllib*/log*"
  for i in $dirs ; do
    if test -d "$i" -a -f "$i/pkgIndex.tcl"; then
      LOGLIB=`cd $i; pwd`
    fi
  done
done
AC_ARG_WITH(loglib, [  --with-loglib=DIR          use log from DIR], LOGLIB=$withval,)
if test x$LOGLIB != x -a -d $LOGLIB; then
   AC_MSG_RESULT([using log library in $LOGLIB])
else
   AC_MSG_ERROR(Log library directory not found)
fi
AC_SUBST(LOGLIB)
])

AC_DEFUN([AX_DICTTOOL],[
AC_MSG_CHECKING(dicttool dir)
searchdirs=`echo 'puts $auto_path'|${HOSTTCLSH}`
for dir in $searchdirs ; do
  dirs="${dir}/dicttool* ${dir}/tcllib*/dicttool*"
  for i in $dirs ; do
    if test -d "$i" -a -f "$i/pkgIndex.tcl"; then
      DICTTOOLLIB=`cd $i; pwd`
    fi
  done
done
AC_ARG_WITH(dicttoollib, [  --with-dicttoollib=DIR          use dicttool from DIR], DICTTOOLLIB=$withval,)
if test x$DICTTOOLLIB != x -a -d $DICTTOOLLIB; then
   AC_MSG_RESULT([using dicttool library in $DICTTOOLLIB])
else
   AC_MSG_ERROR(Dicttool library directory not found)
fi
AC_SUBST(DICTTOOLLIB)
])

AC_DEFUN([AX_VIRTCHANNEL_BASE],[
AC_MSG_CHECKING(virtchannel_base dir)
searchdirs=`echo 'puts $auto_path'|${HOSTTCLSH}`
for dir in $searchdirs ; do
  dirs="${dir}/virtchannel_base* ${dir}/tcllib*/virtchannel_base*"
  for i in $dirs ; do
    if test -d "$i" -a -f "$i/pkgIndex.tcl"; then
     VIRTCHANNEL_BASELIB=`cd $i; pwd`
    fi
  done
done
AC_ARG_WITH(virtchannel_baselib, [  --with-virtchannel_baselib=DIR          use virtchannel_base from DIR], VIRTCHANNEL_BASELIB=$withval,)
if test x$VIRTCHANNEL_BASELIB != x -a -d $VIRTCHANNEL_BASELIB; then
   AC_MSG_RESULT([using virtchannel_base library in $VIRTCHANNEL_BASELIB])
else
   AC_MSG_ERROR(Virtchannel_base library directory not found)
fi
AC_SUBST(VIRTCHANNEL_BASELIB)
])

AC_DEFUN([AX_VIRTCHANNEL_CORE],[
AC_MSG_CHECKING(virtchannel_core dir)
searchdirs=`echo 'puts $auto_path'|${HOSTTCLSH}`
for dir in $searchdirs ; do
  dirs="${dir}/virtchannel_core* ${dir}/tcllib*/virtchannel_core*"
  for i in $dirs ; do
    if test -d "$i" -a -f "$i/pkgIndex.tcl"; then
     VIRTCHANNEL_CORELIB=`cd $i; pwd`
    fi
  done
done
AC_ARG_WITH(virtchannel_corelib, [  --with-virtchannel_corelib=DIR          use virtchannel_core from DIR], VIRTCHANNEL_CORELIB=$withval,)
if test x$VIRTCHANNEL_CORELIB != x -a -d $VIRTCHANNEL_CORELIB; then
   AC_MSG_RESULT([using virtchannel_core library in $VIRTCHANNEL_CORELIB])
else
   AC_MSG_ERROR(Virtchannel_core library directory not found)
fi
AC_SUBST(VIRTCHANNEL_CORELIB)
])

AC_DEFUN([AX_BASE64],[
AC_MSG_CHECKING(base64 dir)
searchdirs=`echo 'puts $auto_path'|${HOSTTCLSH}`
for dir in $searchdirs ; do
  dirs="${dir}/base64* ${dir}/tcllib*/base64*"
  for i in $dirs ; do
    if test -d "$i" -a -f "$i/pkgIndex.tcl"; then
      BASE64LIB=`cd $i; pwd`
    fi
  done
done
AC_ARG_WITH(base64lib, [  --with-base64lib=DIR          use base64 from DIR], BASE64LIB=$withval,)
if test x$BASE64LIB != x -a -d $BASE64LIB; then
   AC_MSG_RESULT([using base64 library in $BASE64LIB])
else
   AC_MSG_ERROR(Base64 library directory not found)
fi
AC_SUBST(BASE64LIB)
])

AC_DEFUN([AX_MD5],[
AC_MSG_CHECKING(md5 dir)
searchdirs=`echo 'puts $auto_path'|${HOSTTCLSH}`
for dir in $searchdirs ; do
  dirs="${dir}/md5* ${dir}/tcllib*/md5*"
  for i in $dirs ; do
    if test -d "$i" -a -f "$i/pkgIndex.tcl"; then
      MD5LIB=`cd $i; pwd`
    fi
  done
done
AC_ARG_WITH(md5lib, [  --with-md5lib=DIR          use md5 from DIR], MD5LIB=$withval,)
if test x$MD5LIB != x -a -d $MD5LIB; then
   AC_MSG_RESULT([using md5 library in $MD5LIB])
else
   AC_MSG_ERROR(Md5 library directory not found)
fi
AC_SUBST(MD5LIB)
])


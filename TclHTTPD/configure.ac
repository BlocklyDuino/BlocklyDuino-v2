dnl Process this file with autoconf to produce a configure script.
AC_INIT([ArduinoHttpd],[0.0])
AC_CONFIG_SRCDIR([ArduinoHttpd.tcl])
AC_CONFIG_MACRO_DIR([m4])

AC_CANONICAL_BUILD
AC_CANONICAL_HOST
AC_SUBST(build)
AC_CANONICAL_TARGET
AC_SUBST(target)

AM_INIT_AUTOMAKE
if test "x${prefix}" = "xNONE"; then
    prefix=/usr/local
fi
if test "x${exec_prefix}" = "xNONE"; then
    exec_prefix="${prefix}"
fi
PACKAGE_NAME="ArduinoHttpd"

BUILD_DIR=`pwd`
TOP_DIR=${BUILD_DIR}

AC_SUBST(TOP_DIR)
AC_SUBST(BUILD_DIR)
srcdir=`dirname $0`
cd $srcdir
SRC_DIR=`pwd`
cd $BUILD_DIR

AC_SUBST(SRC_DIR)
m4_pattern_allow(PKG_)

AC_PATH_PROGS(HOSTTCLSH,[tclsh8.6 tclsh])

AX_HTTPD

AC_MSG_CHECKING([Checking target tclkit])
case $target_os in 
  linux-gnu)
    case $target_cpu in
      x86_64)
        AC_SUBST(TCLKITRUN, [tclkit-8.6.11-x86_64-Img1.4.7])
        ;;
      i*86)
        AC_SUBST(TCLKITRUN, [tclkit-8.6.11-i386-Img1.4.7])
        ;;
      arm*)
        AC_SUBST(TCLKITRUN, [tclkit-8.6.11-armv7l-Img1.4.8])
        ;;
      aarch64)
        AC_SUBST(TCLKITRUN, [tclkit-8.6.10-aarch64-Img1.4.14])
        ;;
      *)
        AC_MSG_ERROR([Unsupported Linux arch: $target_cpu])
        ;;
     esac
     ;;

   *) 
     AC_MSG_ERROR([Unsupported Operating System: $target_os])
     ;;
esac
AC_MSG_RESULT([TCLKITRUN is $TCLKITRUN])
AC_MSG_CHECKING([Checking build tclkit])
case $build_os in 
  linux-gnu)
    AC_SUBST(BEXEEXT, )
    case $build_cpu in
      x86_64)
        AC_SUBST(TCLKITBSRC, [tclkit-8.6.11-x86_64-Img1.4.7])
        ;;
      i*86)
        AC_SUBST(TCLKITBSRC, [tclkit-8.6.11-i386-Img1.4.7])
        ;;
      arm*)
        AC_SUBST(TCLKITBSRC, [tclkit-8.6.11-armv7l-Img1.4.8])
        ;;
      aarch64)
        AC_SUBST(TCLKITBSRC, [tclkit-8.6.10-aarch64-Img1.4.14])
        ;;
      *)
        AC_MSG_ERROR([Unsupported Linux arch: $build_cpu])
        ;;
     esac
     ;;

   *) 
     AC_MSG_ERROR([Unsupported Operating System: $build_os])
     ;;
esac
AC_MSG_RESULT([TCLKITBSRC is $TCLKITBSRC])

dnl Substitutions...

SYSTEMVERSION="$VERSION"
AC_SUBST(SYSTEMVERSION)

AC_CONFIG_FILES([Makefile \
          BuildScripts/Makefile \
          BuildData/Makefile
          ])
AC_OUTPUT


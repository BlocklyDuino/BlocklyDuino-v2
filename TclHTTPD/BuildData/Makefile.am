EXTRA_DIST=tclkit-8.6.10-aarch64-Img1.4.9 tclkit-8.6.11-armv7l-Img1.4.8 \
		tclkit-8.6.11-i386-Img1.4.7 tclkit-8.6.11-x86_64-Img1.4.7 \
		Tclxml3.1-GenericPureTcl.zip

BUILT_SOURCES = tclkit${BEXEEXT}

CLEANFILES = $(BUILT_SOURCES)

noinst_SCRIPTS = tclkit${BEXEEXT}

EXTRA_SCRIPTS = tclkit-8.6.10-aarch64-Img1.4.9 tclkit-8.6.11-armv7l-Img1.4.8 \
		tclkit-8.6.11-i386-Img1.4.7 tclkit-8.6.11-x86_64-Img1.4.7
#bin_SCRIPTS = $(TCLKITRUN)

tclkit${BEXEEXT}: $(TCLKITBSRC) $(top_builddir)/config.status
	cp $(srcdir)/$(TCLKITBSRC) ./tclkit${BEXEEXT}

FORCE:


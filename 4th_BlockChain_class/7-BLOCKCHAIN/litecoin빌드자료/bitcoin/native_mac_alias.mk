package=native_mac_alias
$(package)_version=1.1.0
$(package)_download_path=https://github.com/al45tair/mac_alias/archive/
$(package)_download_file=v$($(package)_version).tar.bz2
$(package)_file_name=$(package)-$($(package)_version).tar.bz2
$(package)_sha256_hash=421e6d7586d1f155c7db3e7da01ca0dacc9649a509a253ad7077b70174426499
$(package)_install_libdir=$(build_prefix)/lib/python/dist-packages
$(package)_patches=python3.patch

define $(package)_preprocess_cmds
  patch -p1 < $($(package)_patch_dir)/python3.patch
endef

define $(package)_build_cmds
    python setup.py build
endef

define $(package)_stage_cmds
    mkdir -p $($(package)_install_libdir) && \
    python setup.py install --root=$($(package)_staging_dir) --prefix=$(build_prefix) --install-lib=$($(package)_install_libdir)
endef

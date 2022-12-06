# Packaging (debian based)

- `dpkg` single package
  - dpkg database resides in _/var/lib/dpkg_
  - naming schema: _<name>*<version>-<revision_number>*<architecture>.deb_
  - package consists of (`apt-get source <name>`):
    - _tar.gz_ (source)
    - _.dsc_ (meta data like version and dependencies)
    - _diff.gz_ (patches to upstream source)
- `apt-get` and `apt-cache` with dependency handling
- `apt` := most common used command options from apt-get and apt-cache
- `apt search -n <name>` (--name-only and not also in description ect)
- `apt-cache search metapackage`: metapackage is a bundle of packages
- `apt-file`

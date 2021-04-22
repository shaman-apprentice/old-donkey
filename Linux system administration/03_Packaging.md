# Packaging (debian based)

- `dpkg` single package
  - dpkg database resides in */var/lib/dpkg*
  - naming schema: *<name>_<version>-<revision_number>_<architecture>.deb*
  - package consists of (`apt-get source <name>`):
    - *tar.gz* (source)
    - *.dsc* (meta data like version and dependencies)
    - *diff.gz* (patches to upstream source)
- `apt-get` and `apt-cache` with dependency handling
- `apt` := most common used command options from apt-get and apt-cache
- `apt search -n <name>` (--name-only and not also in description ect)
- `apt-cache search metapackage`: metapackage is a bundle of packages
- `apt-file`

## Todo
- dpkg -S /etc/init/networking.conf / `apt-file search <package name>`
- Exercises
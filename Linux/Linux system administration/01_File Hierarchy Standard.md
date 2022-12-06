# FHS Linux Standard Directory Tree

`/` must be able to boot the system, recover it, mount the rest.

- No custom folders on root level
- also see `man hier`
- `/bin` (critical binaries), `/usr` (shared application data, binaries, etc), `/usr/bin`, `/sbin`
- `/dev` (devices like storage, tty, stdin -> /proc/self/fd/0)
- `/etc` (machine local configuration files), `/etc/systemd`, `/etc/init.d`
- `/opt` (place if software package wants everything in one place (`opt/az/bin`, `opt/az/lib`))
- `/proc` per process one folder and things like:
  - `/proc/PID/cwd` Link to the current working directory.
  - `/proc/PID/cpu` Current and last cpu in which it was executed.
  - `ls -l /proc/PID/task` list PID's threads
  - `/proc/meminfo`
- `/sys` same as `/proc` for system
- `/var` (variable / volatile data like `/var/log`, `/var/lock`, `var/spool`)

### Some fun

- `du -xch -d 1 /` (disk usage: `-x` excludes dev, proc and sys as they are pseudo-files systems / in other partition)
- `cat /proc/mounts`

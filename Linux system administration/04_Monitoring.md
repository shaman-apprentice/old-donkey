## GUI-Tools

- gnome-system-monitor

## Processes

- `top`, `ps auxf -pid,cmd`, `pstree`, `free`
- `stress-ng` (c program for putting load on computer)

## Memory

- files in `/proc/sys/vm` control memory usage like _max dirty before flush_
- `vmstat [options] [delay] [count]`

## I/O

- `iostat`, `iotop`, `ionice`
- benchmark progs: _bonnie++_, _fm_mark_

- **VM** := Virtual memory, **VFS** := Virtual File System
- I/O Scheduler are configured via _/sys/block/<device>/queue/scheduler_ and _/sys/block/<device>/queue/iosched._

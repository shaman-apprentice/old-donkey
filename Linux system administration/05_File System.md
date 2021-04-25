## inodes

![inode](./assets/inode.png)

- directory file := file name + inode number
- hard link (`ln <src-file> <new-file-name>`) copies directory file with new file name
  - increments inode counter
  - `ls -i` shows inode numbers, `find <path> -inum <number>` finds all files sharing this inode
- soft link (`ln -s <src-file> <new-file-name>`) creates link to directory file

## Virtual File System (VFS)

Abstraction / interface for file systems (read, write, permissions, ...)

Not all vfs are mounted (e.g `/proc` is but _pipefs_ isn't)

## Mounting & Partitioning

### Mounting

- `sudo mkdir /mnt/<mountdir>`
- `sudo mount -t tmpfs none /mnt/<mountdir>` # creates RAM fs with max 50% RAM capacity
- `sudo umount /mnt/<mountdir>`

### Partitioning

- A partition is a physical contiguous region on the disk
- Useful for security management, performance tuning, swapping, ...
- `df -h <path>` displays partition information of path
- Partition tables:
  - **MBR** (deprecated): Master Boot Record, includes boot loader and partition of disk
  - **GPT (GUID Partition Table)**
  - `ls -l /dev` shows device nodes:
    - `sda2` := _sd_ device type, _a_ first hard drive, _2_ second partition
- `lsblk` shows info about block devices (disks, partitions, loop, ...)
- `blkid` wrapper of `libblkid` for working with block devices
- `fdisk /dev/sda` lets you format / partition your disk menu driven (`sfdisk` for use in scripts)
  - `mkfs.ext4 /dev/sda3` to make this partition to a filesystem
- `gparted` for gui-based

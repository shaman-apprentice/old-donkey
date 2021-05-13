## Commands / Tools

- `grep -- "-x"`, `grep -r -e "a" -e "b"`
- `which`, `tail -f`, `head`
- `find . -name "*.txt" -exec grep -Hn foo {} \;`
- `echo $$` contains pid of bash
- `setuid <name>` or `chmod +s <name>`-> execute file with permissions of owner instead of executer
- `jobs` shows bg processes (like `cmd &`), `fg` brings them into foreground

## Editors

### vi

```
i -> insert mode
esc*2 -> command mode
:q -> quit
:w -> write / save
delete:
  x -> next char
  dw -> next word
  d^ -> to beginning of line
  d$ -> to end of line
  dd -> delete full line
Cursor movement:
  0 / $ -> start / end of line
  G -> last line
  :n -> move to nth line
Copy:
  yy -> copy line
  yw -> copy word
  p -> paste
J -> Join current line with next one
:s/search/replace/g -> substitute all in line
ctrl G -> file name and status
U -> restore Line to before cursor entered
u -> undo (u again re-do)
/ ? -> forward or backward (kinda regex) search, "n" for next find, "N" for previous find
```

### less

Doesn't load full file into RAM like vi or nano

```
h // displays help
v // takes you to default visual editor. Can be configured via VISUAL env
`/<search word>` enter; `n` for next, `N` for previous, `?<search word>` for backwards
<n>g // go to line <n>
```

## Man (manual pages)

- `man -k <keyword>`
- `man [section] <page name>`

Parentheses after name represent the section.

```cmd
1   Executable programs or shell commands
2   System calls (functions provided by the kernel)
3   Library calls (functions within program libraries)
4   Special files (usually found in /dev)
5   File formats and conventions, e.g. /etc/passwd
6   Games
7   Miscellaneous (including macro packages and conventions), e.g. man(7), groff(7)
8   System administration commands (usually only for root)
9   Kernel routines [Non standard]
```

## Miscellaneous

- **cgroup**: Groups processes manually or rule based (`/etc/cgrules.conf`). cgroup enables restrictions like _blkio.throttle_ or cpu usage

#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

int main()
{
  printf("hello from prog\n");

  int pid = fork();
  if (pid == 0)
  {
    printf("hello from child\n");
  }
  else
  {
    printf("hello from main; created: %d\n", pid);
    // if this is outcommented, "end" will be printed twice, as `execl` overwrites current program
    execl("/bin/ls", "ls", "-l", NULL);
  }
  printf("end\n");
}

// my_ls.h
#ifndef MY_LS_H
#define MY_LS_H

#include <stdbool.h>

void printFileInfo(const char *path, const char *name, bool followSymlinks);
void listFiles(const char *path, bool displayAll, bool displayAlmostAll, bool doReverse, bool useLongFormat, bool followSymlinks);
void printPermissions(mode_t mode);

#endif // MY_LS_H

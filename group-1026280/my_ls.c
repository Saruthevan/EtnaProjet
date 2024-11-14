#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>
#include <sys/stat.h>
#include <dirent.h>
#include <errno.h>
#include <unistd.h>
#include <time.h>
#include <pwd.h>
#include <grp.h>
#include "main.h"

// ANSI colors for the terminal
#define ANSI_COLOR_BLUE "\x1b[34m"
#define ANSI_COLOR_BOLD "\x1b[1m"
#define ANSI_COLOR_RESET "\x1b[0m"

void printPermissions(mode_t mode)
{
    printf((mode & S_IRUSR) ? "r" : "-");
    printf((mode & S_IWUSR) ? "w" : "-");
    printf((mode & S_IXUSR) ? "x" : "-");
    printf((mode & S_IRGRP) ? "r" : "-");
    printf((mode & S_IWGRP) ? "w" : "-");
    printf((mode & S_IXGRP) ? "x" : "-");
    printf((mode & S_IROTH) ? "r" : "-");
    printf((mode & S_IWOTH) ? "w" : "-");
    printf((mode & S_IXOTH) ? "x" : "-");
}

void printFileInfo(const char *path, const char *name, bool followSymlinks)
{
    struct stat fileInfo;
    int status = followSymlinks ? stat(path, &fileInfo) : lstat(path, &fileInfo);

    if (status != 0)
    {
        fprintf(stderr, "Erreur lors de la récupération d'information %s: %s\n", path, strerror(errno));
        return;
    }

    printf(S_ISDIR(fileInfo.st_mode) ? "d" : "-");
    printPermissions(fileInfo.st_mode);
    printf(" %lu", (unsigned long)fileInfo.st_nlink);

    struct passwd *user = getpwuid(fileInfo.st_uid);
    struct group *group = getgrgid(fileInfo.st_gid);
    printf(" %s %s", user ? user->pw_name : "unknown", group ? group->gr_name : "unknown");

    printf(" %5ld", (long)fileInfo.st_size);

    char timeStr[16];
    strftime(timeStr, sizeof(timeStr), "%b %d %H:%M", localtime(&fileInfo.st_mtime));
    printf(" %s", timeStr);

    if (S_ISDIR(fileInfo.st_mode))
    {
        printf(ANSI_COLOR_BOLD ANSI_COLOR_BLUE " %s\n" ANSI_COLOR_RESET, name);
    }
    else
    {
        printf(" %s\n", name);
    }
}

void listFiles(const char *path, bool displayAll, bool displayAlmostAll, bool doReverse, bool useLongFormat, bool followSymlinks)
{
    (void)followSymlinks;
    DIR *dir = opendir(path);
    if (dir == NULL)
    {
        fprintf(stderr, "Ouverture impossible %s: %s\n", path, strerror(errno));
        return;
    }

    char *fileNames[1024];
    int fileCount = 0;

    struct dirent *entry;
    while ((entry = readdir(dir)) != NULL)
    {
        if (!displayAll && (strcmp(entry->d_name, ".") == 0 || strcmp(entry->d_name, "..") == 0))
            continue;
        if (!displayAll && !displayAlmostAll && entry->d_name[0] == '.')
            continue;

        fileNames[fileCount] = strdup(entry->d_name);
        fileCount++;
    }

    closedir(dir);

    for (int i = 0; i < fileCount - 1; i++)
    {
        for (int j = 0; j < fileCount - i - 1; j++)
        {
            if ((doReverse && strcmp(fileNames[j], fileNames[j + 1]) < 0) ||
                (!doReverse && strcmp(fileNames[j], fileNames[j + 1]) > 0))
            {
                char *temp = fileNames[j];
                fileNames[j] = fileNames[j + 1];
                fileNames[j + 1] = temp;
            }
        }
    }

    for (int i = 0; i < fileCount; i++)
    {
        if (useLongFormat)
        {
            char fullFilePath[1024];
            snprintf(fullFilePath, sizeof(fullFilePath), "%s/%s", path, fileNames[i]);
            struct stat fileInfo;
            if (lstat(fullFilePath, &fileInfo) == -1)
            {
                fprintf(stderr, "Erreur lors de la récupération d'information %s: %s\n", fullFilePath, strerror(errno));
                continue;
            }
            printFileInfo(fullFilePath, fileNames[i], followSymlinks);
        }
        else
        {
            struct stat fileInfo;
            char fullFilePath[1024];
            snprintf(fullFilePath, sizeof(fullFilePath), "%s/%s", path, fileNames[i]);
            if (lstat(fullFilePath, &fileInfo) == -1)
            {
                fprintf(stderr, "Erreur lors de la récupération d'information %s: %s\n", fullFilePath, strerror(errno));
                continue;
            }
            if (S_ISDIR(fileInfo.st_mode))
            {
                printf(ANSI_COLOR_BOLD ANSI_COLOR_BLUE "%s " ANSI_COLOR_RESET, fileNames[i]);
            }
            else
            {
                printf("%s ", fileNames[i]);
            }
        }
        free(fileNames[i]);
    }
    printf("\n");
}

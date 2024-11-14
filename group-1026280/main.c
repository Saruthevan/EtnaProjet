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
#include <bits/getopt_core.h>
#include "main.h"

int main(int argc, char **argv)
{
    int option;
    bool displayAll = false, displayAlmostAll = false, doReverse = false, useLongFormat = false, followSymlinks = false;

    while ((option = getopt(argc, argv, "aAlLr")) != -1)
    {
        switch (option)
        {
        case 'a':
            displayAll = true;
            break;
        case 'A':
            displayAlmostAll = true;
            break;
        case 'r':
            doReverse = true;
            break;
        case 'l':
            useLongFormat = true;
            break;
        case 'L':
            followSymlinks = true;
            break;
        default:
            fprintf(stderr, "Erreur ! Veuillez utiliser les flags suivants : - aArlL.\n");
            exit(EXIT_FAILURE);
        }
    }

    int startIndex = optind > 1 ? optind : 1;
    if (startIndex == argc)
    {
        listFiles(".", displayAll, displayAlmostAll, doReverse, useLongFormat, followSymlinks);
    }
    else
    {
        for (int i = startIndex; i < argc; i++)
        {
            listFiles(argv[i], displayAll, displayAlmostAll, doReverse, useLongFormat, followSymlinks);
            if (i < argc - 1)
                printf("\n");
        }
    }

    return 0;
}
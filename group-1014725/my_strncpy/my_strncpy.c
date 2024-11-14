/*
** ETNA PROJECT, 12/10/2023 by thevan_s
** /home/saru/group-1014571
** File description:
**      ...
*/

#include <stdio.h>

char *my_strncpy(char *dest, const char *src, int n)
{
    int i;
    for (i=0; i < n && src[i] != '\0'; i++)
    {
        dest[i] = src [i];

    }
    return dest;
    
}


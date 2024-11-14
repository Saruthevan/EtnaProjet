#include <stdio.h>
/*
** ETNA PROJECT, 12/10/2023 by thevan_s
** /home/saru/group-1014571
** File description:
**      ...
*/


char *my_strcpy(char *dest, const char *src)
{
    int i=0; 
    while (src[i] != '\0')
    {
        dest[i] = src[i];
        i++; 
        
    }
    return dest;
}


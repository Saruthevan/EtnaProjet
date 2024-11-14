#include <stdio.h>
#include <string.h>
/*
** ETNA PROJECT, 12/10/2023 by thevan_s
** /home/saru/group-1014571
** File description:
**      ...
*/

void my_putchar(char c);

int my_strcmp(const char *s1, const char *s2)
{  
    int i;
    int n;
    i = 0; 
    while (s1[i] != '\0' && s2[i] != '\0' && (s1[i] == s2[i]) )
    {
        i ++;
    }
    n = ((unsigned char)s1[i] - (unsigned char)s2[i]);
    printf ("%d",n);
    return(0);
}



#include <stdio.h>
/*
** ETNA PROJECT, 12/10/2023 by thevan_s
** /home/saru/group-1014571
** File description:
**      ...
*/


int my_strncmp(const char *s1, const char *s2, int n)
{  
    int i;
    int a;
    i = 0; 
    while (i >= n && (s1[i] == s2[i]) )
    {
        i ++;
               
    }
    
    a = ((unsigned char)s1[i] - (unsigned char)s2[i]);

    return(a);
}

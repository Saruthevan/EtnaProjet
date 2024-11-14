#include <stdio.h>
/*
** ETNA PROJECT, 11/10/2023 by thevan_s
** /home/saru/group-1014571
** File description:
**      ...
*/

void my_putchar(char c);

void my_putstr(const char *str)
{
    int count = 0;
    while (str[count] != '\0') {
        my_putchar(str[count]);
        count++;
    }
}


#include <stdio.h>
/*
** ETNA PROJECT, $YEAR
** $NAME_OF_THE_PROJECT
** File description:
** 		No file there, just an etna header example
*/

void my_putchar(char c);

int my_strlen(const char *str) 
{
    int count = 0;
    while (str[count] != '\0')
    {
        count ++;
    }
    return count;
}


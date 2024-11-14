#include <stdio.h>
/*
** ETNA PROJECT, $YEAR
** $NAME_OF_THE_PROJECT
** File description:
** 		No file there, just an etna header example
*/

void my_putchar(char c);

void my_print_revalpha() 
{
    int value = 0;
      my_putchar(value);
    for (value = 122; value >= 97; value --) {

        my_putchar(value);
    }
}


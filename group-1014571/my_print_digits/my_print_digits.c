#include <stdio.h>
/*
** ETNA PROJECT, $YEAR
** $NAME_OF_THE_PROJECT
** File description:
** 		No file there, just an etna header example
*/

void my_putchar(char c);
void my_print_digits() {
    int value = 0;
    for (value = 48; value <= 57; value++) 
    {
        my_putchar((value));
    }
}


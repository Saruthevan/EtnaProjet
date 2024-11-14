#include <stdio.h>
/*
** ETNA PROJECT, $YEAR
** $NAME_OF_THE_PROJECT
** File description:
** 		No file there, just an etna header example
*/

void my_putchar(char c);

void my_print_alpha() {
    int Value;
    for (Value = 97; Value <= 122; Value++) {
        my_putchar((Value));
    }
    my_putchar('\n');
}


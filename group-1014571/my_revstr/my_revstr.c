#include <stdio.h>
#include <string.h>

/*
** ETNA PROJECT, $YEAR
** $NAME_OF_THE_PROJECT
** File description:
** 		No file there, just an etna header example
*/

void my_putchar (char c);
int my_strlen(const char *str);

char *my_revstr(char *str)
{
    int i = my_strlen(str) - 1;
    int j = 0;
    char tmp;
    
    while (j<i)
    {

        tmp = str[i];
        str[i] = str[j];
        str[j] = tmp;
        
        j++;
        i--;
    }
    return 0;
}

#include <stdio.h>
/*
** ETNA PROJECT, 14/10/2023 by thevan_s
** /home/saru/group-1014571
** File description:
**      ...
*/

void my_putchar(char c);

int my_getnbr(const char *str)
{
    int i = 0;
    long entier = 0;
    int flag =0;
    while (str[i] != '\0')
    {
        if (str[i] >= '0' && str[i] <= '9')
        {   
            if (i > 0)
            {
                if ( str[i-1] == '-'  ) 
                {
                    flag = 1;
                }
            }
            while (str[i] >= '0' && str[i] <= '9')
            {   

                if (entier < (-2147483648) || entier > 2147483647 )
                {
                    return 0;
                }
                entier = entier * 10 + (str[i] - '0');
                i++;
            }
            break;
        }
        i++; 
    } 
    if (flag)
    {
    entier = entier * (-1);
    } 
        return (int)entier;   
}

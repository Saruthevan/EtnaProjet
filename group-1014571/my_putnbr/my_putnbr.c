#include <stdio.h>
/*
** ETNA PROJECT, 13/10/2023 by thevan_s
** /home/saru/group-1014571
** File description:
**      ...
*/

void my_putchar(char c);

void my_putnbr(int n)
{
    int reste   = 0;
    int tab[10] = {0};
    int count   = 9;
    char tmp    = 0;
    if(n < 0)
    {
        n = n* (-1);
        my_putchar('-');
    }
    while (n != 0)
    {   
        reste      = n%10;
        n          = n/10;
        tab[count] = reste;
        count --; 
    }

    for (int i = count+1; i <= 9; i++)
    {
        tmp = tab[i] + 48; 
        my_putchar(tmp);
        
    }
    my_putchar('\n');
} 


  
           
          


       




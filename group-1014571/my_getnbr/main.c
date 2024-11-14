#include  <stdio.h>


int my_getnbr(const char *str);

int main (void)
{
    int x = my_getnbr("+---+--++---+---+---+--42 ");
    printf("%d\n", x);
}
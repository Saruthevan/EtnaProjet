#include <stdio.h>
void my_putstr(const char *str);
int my_strlen(const char *str);
char *my_revstr(char *str);
char *my_strncpy(char *dest, const char *src, int n);
int my_strncmp(const char *s1, const char *s2, int n);
int my_strcmp(const char *s1, const char *s2);
char *my_strcpy(char *dest, const char *src);

int main( int argc, char *argv[ ] )
{
    int n = 3;
    char str[50] = "aaaforte";
    char dest[100] = "porte";
    my_strncpy(dest, str, n);

    return 0;
}
 
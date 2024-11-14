#include <stdio.h>
#include <stdlib.h>
#include <dirent.h>
#include <string.h>

int compare(const void *a, const void *b)
{
    return strcmp(*(const char **)b, *(const char **)a);
}

int main()
{
    // Ouvrir le répertoire courant
    DIR *dir = opendir(".");
    if (dir == NULL)
    {
        perror("Impossible d'ouvrir le répertoire");
        return 1;
    }

    // Lire les noms de fichiers dans le répertoire
    struct dirent *entry;
    char **entries = NULL;
    int num_entries = 0;
    while ((entry = readdir(dir)) != NULL)
    {
        // Ignorer les fichiers spéciaux "." et ".."
        if (strcmp(entry->d_name, ".") != 0 && strcmp(entry->d_name, "..") != 0)
        {
            entries = (char **)realloc(entries, (num_entries + 1) * sizeof(char *));
            entries[num_entries] = strdup(entry->d_name);
            num_entries++;
        }
    }
    closedir(dir);

    qsort(entries, num_entries, sizeof(char *), compare);

    // Afficher les noms de fichiers triés
    for (int i = 0; i < num_entries; i++)
    {
        printf("%s\n", entries[i]);
        free(entries[i]);
    }
    free(entries);

    return 0;
}

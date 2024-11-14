
# Solution 

***
README: Analyse de la complexité O(n) du code yin_yang
# Introduction:

La fonction yin_yang(s), conçue pour vérifier l'équilibre des délimiteurs dans une chaîne de caractères, fonctionne avec une complexité temporelle de O(n), où n représente la longueur de la chaîne d'entrée s. Cela signifie que le temps d'exécution de la fonction augmente linéairement avec la longueur de la chaîne.

 `Itération`: L'opération principale qui prend du temps est la boucle for qui parcourt chaque caractère (caractere) de la chaîne s. Cette boucle s'exécute n fois, contribuant directement à la complexité temporelle linéaire.

`Gestion des délimiteurs`: À l'intérieur de la boucle, la fonction vérifie si caractere est un délimiteur.
La fonction effectue également des opérations sur la pile (empiler et dépiler) à l'aide du tableau pile.

`Longueur de la chaîne`: Le facteur principal affectant la complexité temporelle est la longueur de la chaîne d'entrée n. Plus la chaîne est longue, plus la fonction doit traiter de caractères et effectuer d'itérations, augmentant ainsi le temps d'exécution de manière linéaire.

`Types de délimiteurs`: Le nombre et les types de délimiteurs (d'ouverture et de fermeture) utilisés dans la chaîne peuvent également influencer la complexité temporelle. Plus il y a de types de délimiteurs, plus de vérifications et de comparaisons peuvent être nécessaires, mais cet impact est relativement mineur par rapport à la longueur globale de la chaîne.
# Conclusion:

***
La fonction yin_yang(s) présente une complexité temporelle de O(n), démontrant une performance efficace pour vérifier l'équilibre des délimiteurs dans des chaînes de longueurs variables. Cette complexité temporelle linéaire garantit que le temps d'exécution de la fonction augmente proportionnellement à la taille de la chaîne d'entrée.
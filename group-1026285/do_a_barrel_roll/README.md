# Solution

La fonction "do_a_barrel_roll" va prendre en premier paramètre un tableau d'entiers "numbers" et en second paramètre un entier "k". Cette fonction devra effectuer "k" rotations vers la gauche du tableau.
Une rotation correspond au décalage d'un cran vers la gauche de chaque élément du tableau : le second élément devient le premier, le troisième devient le second, ..., le premier devient le dernier.

1. On commence par vérifier si l'entier "k" qui correspond au nombre de décalage souhaité est égal à 0, s'il est égal 0 il va retourner directement le tableau.

2. On crée une constante "n" qui va correspondre à la longueur du tableau. 

3. On va initialiser un tableau vide result qui va contenir les éléments du tableau initial après le décalage.

On commence par créer une boucle 'for' qui va parcourir tous les éléments du tableau initial. La variable i représente l'indice de l'élément actuellement traité dans le tableau initial.

À chaque itération de la boucle, dans la constante newIndex, nous calculons l'indice de la position après le décalage pour l'élément à l'indice i pour effectuer le décalage vers la gauche. L'indice de la nouvelle position est calculé en soustrayant k (le nombre de décalages à effectuer) à l'indice actuel i. Si cet indice est négatif, nous ajoutons n pour le ramener dans la plage des indices valides. Ensuite, nous prenons le modulo n pour gérer le cas où l'indice calculé dépasse la taille du tableau pour optimiser le temps d'exécution de la fonction.

4. Une fois que nous avons calculé l'indice de la nouvelle position après le décalage, nous plaçons l'élément correspondant du tableau initial à cette nouvelle position dans le tableau result. On retournera cette constante "result" pour avoir le résultat de notre décalage.

5. Explication de la complexité: Nous parcourons le tableau une seule fois (complexité linéaire). Pour chaque élément du tableau initial "numbers", nous calculons la nouvelle position après le décalage en utilisant l'opération de modulo (%). Ensuite, nous plaçons chaque élément à sa nouvelle position dans un tableau "result". 

La complexité temporelle de cette boucle est linéaire par rapport à la taille du tableau, car chaque élément est traité une seule fois. Cela garantit que le nombre total d'itérations est proportionnel à la taille du tableau, ce qui maintient une complexité temporelle linéaire.

Cette approche ne nécessite pas de boucles imbriquées, ce qui garantit une complexité temporelle linéaire de O(n).

On peut conclure que cette solution respecte la contrainte de complexité algorithmique O(n), car le temps d'exécution de l'algorithme augmente linéairement avec la taille de l'entrée ce qui répond aux contraintes du sujet concernant la complexité algorithmique.










## Description
Cette fonction `set_et_match` implémente un algorithme pour vérifier s'il existe une paire d'éléments dans un tableau dont la somme est égale à un nombre donné.

Elle prend deux paramètres en entrée : 
- `numbers`: un tableau d'entiers dans lequel nous recherchons la paire.
- `n`: le nombre cible pour la somme de la paire.

La fonction parcourt le tableau et utilise un ensemble (`Set`) pour stocker les éléments déjà parcourus. Pour chaque élément du tableau, elle calcule le complément nécessaire pour atteindre le nombre cible `n` en soustrayant l'élément actuel de `n`. Ensuite, elle vérifie si ce complément existe déjà dans l'ensemble. Si oui, cela signifie qu'il existe une paire dont la somme est égale à `n`, et la fonction retourne `true`. Sinon, elle ajoute l'élément actuel à l'ensemble et continue à parcourir le tableau. Si aucune paire n'est trouvée après avoir parcouru tout le tableau, la fonction retourne `false`.

## Implémentation
La fonction commence par créer un nouvel ensemble vide à l'aide de `const set = new Set()`.

Ensuite, elle parcourt le tableau `numbers` à l'aide d'une boucle `for`. Pour chaque élément du tableau, elle calcule le complément nécessaire pour atteindre `n`, vérifie s'il existe dans l'ensemble à l'aide de `set.has(complement)`, et retourne `true` si c'est le cas. Sinon, elle ajoute l'élément actuel à l'ensemble à l'aide de `set.add(numbers[i])`.

Si aucune paire n'est trouvée après avoir parcouru tout le tableau, la fonction retourne `false`.

## Complexité
La complexité de cette fonction est linéaire, O(n), où n est la taille du tableau `numbers`. Cela est dû au fait que la fonction parcourt le tableau une seule fois pour rechercher la paire de nombres.

## Pour tester la fonction
Pour tester la fonction `set_et_match`, vous pouvez décommenter l'appel de fonction dans le code en retirant les deux barres obliques (`//`) devant `console.log(set_et_match([1, 2, 3, 4, 5], 8));` dans le fichier contenant la fonction, puis exécuter le fichier.


//console.log(set_et_match([1, 2, 3, 4, 5], 8));
module.exports = { set_et_match };
# Solution

***

La fonction `tux(numbers)` a pour objectif de trouver l'indice d'un élément dans un tableau `numbers` qui satisfait des conditions spécifiques, en respectant une complexité temporelle optimale O(n), où n est la longueur du tableau `numbers`.

## Conditions de partitionnement

Un tableau est considéré comme partitionné avec un pivot à l'index k si et seulement si :
- Tous les éléments qui précèdent l'index k dans le tableau sont strictement inférieurs à la valeur à l'index k.
- Tous les éléments qui suivent l'index k dans le tableau sont supérieurs ou égaux à la valeur à l'index k.

## Fonctionnement de la fonction

1. **Vérification de la longueur du tableau :**
   - La fonction vérifie d'abord si le tableau est vide. Si c'est le cas, elle renvoie immédiatement `-1`.
   - Si le tableau contient un seul élément, elle renvoie `0` car il est considéré comme partitionné.

2. **Initialisation des tableaux auxiliaires :**
   - Deux tableaux auxiliaires `leftMax` et `rightMin` sont créés pour stocker respectivement les éléments les plus grands à gauche et les plus petits à droite de chaque élément du tableau d'entrée `numbers`.

3. **Remplissage des tableaux auxiliaires :**
   - Les boucles `for` remplissent les tableaux `leftMax` et `rightMin` en parcourant le tableau `numbers` de gauche à droite pour `leftMax` et de droite à gauche pour `rightMin`.

4. **Recherche du pivot :**
   - Une dernière boucle parcourt le tableau `numbers` pour vérifier si chaque élément satisfait les conditions de partitionnement en comparant avec les valeurs des tableaux `leftMax` et `rightMin`. Dès qu'un pivot est trouvé, la fonction renvoie son indice.

5. **Gestion des cas particuliers :**
   - Si aucun pivot n'est trouvé, la fonction renvoie `-1`.

## Complexité

La fonction respecte la complexité O(n) car elle parcourt le tableau `numbers` un nombre constant de fois, ce qui est proportionnel à sa taille. Les opérations à chaque itération sont en temps constant, assurant ainsi une efficacité linéaire même pour de grandes quantités de données.

## Exemple d'utilisation

```javascript
const { tux } = require('./tux.js');

const inputArray = [3, 5, 2, 8, 7, 9, 10];
console.log(tux(inputArray)); // Renvoie 5
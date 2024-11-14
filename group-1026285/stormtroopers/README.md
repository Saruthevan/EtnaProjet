# Solution

***

La fonction `stormtroopers` vise à filtrer un tableau d'entiers en ne conservant que les éléments qui n'apparaissent qu'une seule fois.

## Fonctionnement

1. La première étape consiste à récuperer un tableau d'entier à l'aide de notre fonction `function stormtroopers(numbers)`. 

2. Ensuite, à l'aide d'une `const occurrences = {};`, qui contiendra un objet dans lequel on pourra stocker les occurrences des nombres.

3. Puis, nous allons parcourir le tableau `numbers` avec une boucle `for (of)` et nous allons vérifier si le nombre existe déjà dans l'objet `occurrences`. Si oui, alors nous incrémentons la valeur de l'objet correspondant. Si non, alors nous créons une nouvelle entrée dans l'objet avec la clé correspondant au nombre et la valeur 1.

4. Après la boucle nous initialisons un tableau vide `const result = [];`, qui nous servira à retourner seulement les entiers qui n'apparaissent qu'une seule fois.

5.  Puis, nous parcourons l'objet `occurrences` avec une autre boucle `for (of)` et nous ajoutons dans le tableau `result` les clés qui ont une valeur de 1.

6. Enfin, nous retournons le tableau `result` qui contient uniquement les nombres qui n'apparaissent qu'une seule fois.

## Contrainte

1. La première boucle qui itère sur tous les éléments du tableau `numbers` pour mettre à jour les occurrences a une complexité en temps de O(n), où n est la taille du tableau `numbers`.
  
2. La deuxième boucle qui itère également sur tous les éléments du tableau `numbers` a également une complexité en temps de O(n).
  
3. Ainsi, la complexité totale de la fonction est déterminée par la boucle la plus coûteuse, qui est de O(n).

Par conséquent, cette fonction respecte la contrainte de complexité en temps de O(n).

## Exemple d'utilisation

```javascript
const { stormtroopers } = require('./stormtroopers.js');

const inputArray = [3, 5, 2, 8, 7, 9, 10, 3, 5, 2];
console.log(stormtroopers(inputArray)); // Renvoie [8, 7, 9, 10]

# Solution

***

La fonction `daemon` vise à déterminer si un tableau d'entiers est partitionné en fonction d'un indice donné `k`.

## Fonctionnement

1. La première étape consiste à récuperer le tableau et l'index `k` à l'aide de notre fonction `function daemon(numbers, k)`. 

2. Ensuite, nous devons vérifier si l'index `k` est valide. En utilisant un `if ()`, si l'index est inférieur à 0 ou supérieur à la taille du tableau, nous renvoyons false. Sinon, nous poursuivons.

3. Ensuite nous parcourons le tableau une seule fois grâce la fonction `for ()` pour que l'algorithme puisse être efficace peut importe le nombre d'éléments dans le tableau. 

4. Après ça dans la boucle `for ()` nous avons deux conditions `if` qui nous permettent de savoir si les conditions demandées dans l'énoncé sont remplies sinon elle renvoient false.

5. Mais si toutes les conditions sont remplies, alors nous sortons de la boucle et nous pouvons renvoyer true.

## Contrainte

1. La fonction parcourt le tableau une seule fois à l'aide d'une boucle for qui itère sur tous les éléments du tableau une seule fois, de gauche à droite.

2. À chaque itération, la fonction effectue une opération constante, qui consiste en une comparaison et un accès à un élément du tableau.

3. La boucle parcourt l'ensemble du tableau, donc le temps d'exécution est linéaire par rapport à la taille du tableau, ce qui respecte la complexité en temps de O(n).

Ainsi, cette fonction répond aux exigences de la contrainte de complexité en temps de O(n).

## Exemple d'utilisation

```javascript
const { daemon } = require('./daemon.js');

const inputArray = [3, 5, 2, 8, 7, 9, 10];
const k = 3;
console.log(daemon(inputArray, k)); // Renvoie true

# Solution

***

La fonction `yulaw` a pour but de supprimer les doublons d'une chaîne de caractères en conservant l'ordre d'apparition des caractères uniques.

## Fonctionnement

1. La première étape consiste à récuperer une chaîne de caractère à l'aide de notre fonction `function yulaw(s)`, nous allons juste vérifier si la chaîne n'est pas vide à l'aide d'un `if (s.length === 0)`. 

2. Ensuite, on initialise une nouvelle chaîne de caractère à l'aide d'une varibale (`let result = "";`).

3. Puis, j'ai créer une boucle `for (let i = 0; i < s.length; i++)` pour parcourir la chaîne de caractère.

4. Dans cette boucle j'ai placé un `if (!result.includes(s[i]))` pour vérifier si le caractère n'est pas déjà présent dans la chaîne résultat. Sinon elle sera ajoutée à la fin de la chaîne.

5.  Puis, on `return result;` pour retourner la chaîne résultat.

## complexité

1. La fonction parcourt la liste une seule fois à l'aide d'une boucle for qui itère sur tous les éléments de la liste une seule fois, de gauche à droite.

2. à chaque itération , la fonction effectue une opération , qui consist à verifer si le caractère n'est pas déjà présent dans la chaîne résultat, si c'est pas le cas elle sera ajoutée à la fin de la chaine.

3. La boucle parcourt l'ensemble de la liste, donc le temps d'exécution est linéaire par rapport à la taille du tableau, ce qui respecte la complexité en temps de O(n).

## Exemple d'utilisation

```javascript
const { yulaw } = require('./yulaw.js');

const input = "aabbccddeeff";
console.log(yulaw(input)); // Renvoie "abcdef"

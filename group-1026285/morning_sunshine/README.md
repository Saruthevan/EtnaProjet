# Solution

***

La fonction `morning_sunshine` prend un tableau de nombres comme argument et renvoie un nouveau tableau contenant les nombres qui sont strictement plus grands que tous les nombres à leur droite dans le tableau d'origine. Elle respecte la contrainte de complexité O(n) en temps, où n est la longueur du tableau d'entrée.

## Fonctionnement

1. Vérification de la longueur du tableau d'entrée :
   - Si le tableau est vide, la fonction renvoie un tableau vide, car il n'y a aucun nombre à traiter.

2. Initialisation des variables :
   - `result`: Un tableau vide qui stockera les nombres qui sont strictement plus grands que tous les nombres à leur droite.
   - `currentMax`: Le maximum courant, initialisé au dernier élément du tableau d'entrée.

3. Ajout du dernier élément au résultat :
   - Comme le dernier élément du tableau est toujours le plus grand à droite, nous l'ajoutons directement au début du tableau `result`.

4. Parcours du tableau en sens inverse :
   - À partir de l'avant-dernier élément du tableau, nous parcourons le tableau en sens inverse.
   - Si un nombre est plus grand que le `currentMax` (maximum courant), cela signifie qu'il est plus grand que tous les nombres à sa droite.
   - Nous mettons à jour le `currentMax` avec ce nombre et l'ajoutons au début du tableau `result`.

5. Retour du résultat :
   - Une fois le parcours terminé, `result` contiendra les nombres qui sont strictement plus grands que tous les nombres à leur droite dans le tableau d'origine.
   - Nous retournons ce tableau en résultat de la fonction.

## Contrainte

- La fonction ne parcourt le tableau qu'une seule fois en sens inverse à partir de l'avant-dernier élément jusqu'au premier élément.
- Chaque élément du tableau est examiné une seule fois pour déterminer s'il est plus grand que le `currentMax` actuel.
- Les opérations effectuées à chaque itération ont une complexité constante.
- Ainsi, la complexité totale de la fonction est proportionnelle à la longueur du tableau d'entrée, ce qui correspond à une complexité O(n) en temps.

## Exemple d'utilisation

```javascript
const { morning_sunshine } = require('./morning_sunshine.js');

const inputArray = [3, 5, 2, 8, 7, 9, 10];
console.log(morning_sunshine(inputArray)); // Renvoie [5, 8, 9, 10]
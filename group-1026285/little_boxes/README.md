## Little_boxes 

## Description 
La fonction `little_boxes` prend une chaîne de caractères `s` en entrée et renvoie une nouvelle chaîne obtenue en triant les caractères de `s` par ordre croissant. Voici une description des étapes :
Diviser la chaîne d'entrée `s` en un tableau de caractères en utilisant la méthode `split('')`. Cela crée un tableau où chaque élément représente un seul caractère de la chaîne d'entrée. Puis, trier le tableau de caractères dans l'ordre croissant en utilisant la méthode `sort()`. Je joins le tableau trié de caractères en une seule chaîne en utilisant la méthode `join('')`. Cela reconstruit la chaîne triée.

## Approche
La fonction utilise une approche simple pour trier les caractères de la chaîne d'entrée. 
J'ai pris le choix de faire cette approche car elle est simple et efficace pour les petites entrées et elle trie directement les caractères en temps linéaire.

## Analyse de la complexité
La complexité est déterminée par le tableau de caractères créé lors de l'étape de division. Puisque ce tableau contient tous les caractères de la chaîne d'entrée, sa taille est proportionnelle à la taille de l'entrée, ce qui conduit à une complexité de O(n). Donc la fonction `little_boxes` trie efficacement les caractères d'une chaîne d'entrée par ordre croissant en utilisant une approche simple. Bien que la complexité temporelle soit 0(n) en raison de l'étape de tri, cette fonction fournit une solution pratique pour les petites tailles d'entrée. De plus, l'implémentation est concise et facile à comprendre.

## Pour tester le code 
```Javascript
console.log(little_boxes('HelloWorld'));
# Solution

Nous allons mettre en place une fonction appelée "playset" qui prendra en paramètre la chaîne de caractères "s" que nous souhaitons comparer. L'objectif est de déterminer si la chaîne de caractères contient des doublons. La fonction renverra true si des doublons sont présents, sinon elle renverra false.

1. On crée un objet vide "charOccurrences" qui sera utilisé pour enregistrer les occurrences des caractères que nous rencontrons dans la chaîne. On utilise une boucle "for" pour parcourir chaque caractère de la chaîne s. i représente l'indice actuel dans la boucle. 

2. On extrait le caractère à l'indice i de la chaîne s et on le stocke dans la variable currentChar. On vérifie si le caractère actuel "currentChar" est déjà présent dans l'objet charOccurrences. 

3. Si c'est le cas, cela signifie que le caractère a déjà été rencontré, et donc la fonction retourne true, indiquant la présence d'un caractère en double. 

4. Si le caractère n'est pas déjà présent, on l'ajoute à l'objet "charOccurrences" avec une valeur true. Cela indique que nous avons rencontré ce caractère pour la première fois. 

5. Si aucune correspondance n'est trouvée, la fonction retourne false, signalant l'absence de doublons dans la chaîne.

6. Explication de la complexité: L'algorithme utilise une seule boucle for pour parcourir la chaîne caractère par caractère. La complexité de cette boucle est linéaire, O(n), car le nombre d'opérations augmente proportionnellement à la taille de la chaîne. 

L'utilisation de l'objet "charOccurrences" n'introduit pas de complexité supplémentaire par rapport à la boucle. Les opérations effectuées sur cet objet, comme l'accès à une propriété et l'ajout d'une nouvelle propriété, sont des opérations constantes (O(1)). 

Cette fonction utilise une seule boucle, évitant ainsi une complexité quadratique (qui utilise des boucles imbriquées). La vérification de la présence d'un caractère dans l'objet "charOccurrences" et l'ajout de ce caractère sont des opérations de temps constant, indépendamment de la taille de la chaîne.

L'algorithme final a une complexité en temps de O(n), où n est la longueur de la chaîne reçue. Cela signifie que le temps d'exécution de l'algorithme augmente de manière linéaire avec la taille de l'entrée, ce qui répond aux contraintes du sujet concernant la complexité algorithmique.




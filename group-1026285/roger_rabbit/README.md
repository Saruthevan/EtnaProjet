# Fonction Roger Rabbit

## Description
La fonction `roger_rabbit` implémentée dans ce code prend en entrée un entier `n`. Elle génère une séquence de chaînes binaires jusqu'à la valeur `n` et retourne cette séquence dans un tableau.

## Implémentation
La fonction commence par initialiser un tableau vide `result`. Ensuite, elle itère de 1 à `n`. Pour chaque itération, elle convertit l'indice actuel en binaire en utilisant une boucle `while`. À chaque itération, elle divise l'indice par 2 et ajoute le reste binaire à la chaîne `binary`. Une fois que le calcul binaire est terminé, la chaîne `binary` est ajoutée au tableau `result`. Si l'indice est 0, alors '0' est ajouté au tableau.

Enfin, la fonction retourne le tableau `result` contenant la séquence de chaînes binaires.

## Approche choisie
Cette approche a été choisie pour sa simplicité et son efficacité. En utilisant une boucle simple pour itérer de 1 à `n`, la fonction convertit chaque nombre en binaire de manière itérative. Cela évite la nécessité de stocker toutes les valeurs binaires jusqu'à `n` en mémoire, ce qui pourrait être coûteux en termes de ressources pour de grandes valeurs de `n`.

## Complexité
Complexité linéaire (O(n)):
La boucle principale de la fonction itère de 1 à n, et pour chaque itération, elle effectue une série d'opérations pour convertir l'entier actuel en binaire. Par conséquent, le nombre total d'opérations effectuées est proportionnel à la valeur de n, ce qui donne une complexité en temps linéaire par rapport à n.
Complexité logarithmique (O(log n)):
 Étant donné que le nombre de chiffres binaires dans la représentation d'un nombre est logarithmique par rapport à ce nombre, la complexité de cette conversion est généralement considérée comme logarithmique. Ainsi, la boucle interne de la fonction a une complexité en temps logarithmique par rapport à la valeur de l'entrée n.
 Ainsi, la complexité globale de la fonction roger_rabbit est déterminée par la complexité de la boucle externe, qui est linéaire (O(n)), car la complexité logarithmique de la boucle interne est dominée par la boucle externe lors de l'analyse de la complexité

## Conclusion 

Par consequent, la complexité globale de la fonction roger_rabbit est déterminée par la complexité de la boucle externe, qui est linéaire (O(n)), car la complexité logarithmique de la boucle interne est dominée par la boucle externe lors de l'analyse de la complexité 
Ainsi, la complexité temporelle de la fonction roger_rabbit peut être évaluée comme O(n * log(n)).
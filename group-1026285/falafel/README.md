#  Solution 

***
Je vous détaille ici la fonction falafel, qui nous permet de reperer un palyndrome quelque soit l'ordre du mot entré ou il n'y en a pas. 

# FONCTIONNEMENT 

*** 

1.  Déclaration de variables:
leftHalf : cette variable contiendra finalement la première moitié du palindrome en construction.
middleChar : cette variable contiendra le caractère (s'il en existe un) qui apparaît un nombre impair de fois et devient le caractère du milieu.
2. Traitement des caractères:

La boucle for...in iterère sur chaque caractère (char) et son nombre d'occurrences correspondant (count) dans l'objet charCount.

Si count est impair (count % 2 === 1) :

Si middleChar est vide (aucun caractère central défini) :

Définir middleChar avec le char actuel.

Décrémenter charCount[char] de 1 car ce caractère sera utilisé au centre et ne sera pas répété dans la première moitié.
Sinon, si middleChar est déjà défini (plusieurs caractères impairs) :

Renvoyer un message indiquant qu'il est impossible de former un palindrome.
Sinon (si count est pair) :

Ajouter le char actuel répété count / 2 fois à leftHalf. Cela construit la première moitié en utilisant la moitié des occurrences de chaque caractère avec un nombre d'occurrences pair.

# COMPLEXITE 

*** 

La boucle for...in itère sur chaque caractère (n fois).
Le traitement de chaque caractère prend un temps constant.
La construction du palindrome prend un temps proportionnel à la longueur du mot (n).
La mémoire utilisée pour stocker les caractères et la première moitié du palindrome est proportionnelle à la longueur du mot (n).
Conclusion: Le programme est efficace et sa complexité est acceptable pour la plupart des cas d'utilisation.
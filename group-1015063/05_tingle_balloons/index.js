var nom = process.argv[2];
var positionEspace = nom.lastIndexOf(' ') + 1;
var taille = nom.length;
var premierCaractere = nom[0];
console.log(premierCaractere.toUpperCase() + "." + nom[positionEspace].toUpperCase());

let nom: string = process.argv[2];
let positionEspace: number = nom.lastIndexOf(' ') + 1;
let taille: number = nom.length;
let premierCaractere: string = nom[0];


console.log(premierCaractere.toUpperCase()+`.`+nom[positionEspace].toUpperCase());
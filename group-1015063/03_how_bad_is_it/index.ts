let currentSize: number = (parseInt (process.argv[2]));

let missing_fairies: number;


missing_fairies = (348 - currentSize)/3;
missing_fairies = Math.ceil(missing_fairies);

console.log(`The Great Fairy is missing ${missing_fairies} Stray Fairies.`);
if (missing_fairies < 10){
    console.log(`It's not too bad yet, it shouldn't take too much time to heal her.`);
} else if (missing_fairies >= 10 && missing_fairies <= 39 ){
    console.log(`Whoever did this to her was clearly playing some mischievous prank!`);
} else if (missing_fairies >= 40 && missing_fairies <= 99 ){
    console.log(`She has been greatly damaged. We must save her as soon as possible!`);
} else {
    console.log(`What happened to her!? It's just awful!`);
}


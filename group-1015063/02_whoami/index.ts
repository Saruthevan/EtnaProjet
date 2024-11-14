let username: string = process.argv[2];

if (username === `Link`){

    console.log(`Welcome, Hero.`);
}
else if (username === `Zelda`){
    console.log(`Greetings, Princess.`);
}
else{
    console.log(`You can't be here, get away!`)
}
let song: string = process.argv[2];
let count1: number = 0;
let count2: number = 0;
let count3: number = 0;
let i = 0;
while (i < song.length)
{
    if ( song[i] === `a` || song[i] ===  'A'){
        count1 ++;
    }
    
    if ( song[i] === `r`|| song[i] ===  'R'){
        count2 ++;
    }
    
    if ( song[i] === `d` ||song[i] ===  'D'){
        count3 ++;
    }
    i++;
}
if(count1 === 2 && count2 === 2 && count3 === 2){
    console.log(`Playing the Song of Time...`);
}
else{
    console.log(`That doesn't feel right.`);
}
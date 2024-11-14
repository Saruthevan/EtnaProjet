export default function printEnemies(array: string[]){
    
    for (const name of array) {
        const lowerCaseName = name.toLowerCase().replace(` `,`_`);
        if (lowerCaseName.includes(`evil`)||lowerCaseName.includes(`bad`) ||lowerCaseName.includes(`mean`) ||lowerCaseName.includes(`rotten`) ||lowerCaseName.includes(`cruel`)) {
        console.log(lowerCaseName);
        } 
    }  
}



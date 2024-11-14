const fs = require('fs');
import Recipe from "./Recipe";

export default function searchRecipe(name: string, path: string){
    const files = fs.readFileSync(path,"UTF-8"); 
    const jsonObject: Recipe[] = JSON.parse(files); 
    
    for (let recipe of jsonObject) {    
        if (recipe.name === name)
        {
            console.log("=== "+recipe.name+" ===");
            for (let i = 0; i <  recipe.ingredients.length; i++){
                console.log( '- ' + recipe.ingredients[i]);
            }
            return 0;
        }      
    }
     console.log('No match.');
}

//  const nom: string = process.argv[2];
// onst chemin: string = process.argv[3];

// searchRecipe(nom, chemin);




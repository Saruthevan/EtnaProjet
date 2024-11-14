const fs = require('fs');
import Recipe from "./Recipe";

export default function displayRecipe(path: string) {
     const files = fs.readFileSync(path,"UTF-8"); 
const jsonObject: Recipe = JSON.parse(files);
console.log('==== '+ jsonObject.name +' ====');
for (let i = 0; i <  jsonObject.ingredients.length; i++) 
console.log( '- ' + jsonObject.ingredients[i]);
}

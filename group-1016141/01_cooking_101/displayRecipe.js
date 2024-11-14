"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
function displayRecipe(path) {
    var files = fs.readFileSync(path, "UTF-8");
    var jsonObject = JSON.parse(files);
    console.log('==== ' + jsonObject.name + ' ====');
    for (var i = 0; i < jsonObject.ingredients.length; i++)
        console.log('-' + jsonObject.ingredients[i]);
}
exports.default = displayRecipe;
displayRecipe('./recipe.json');

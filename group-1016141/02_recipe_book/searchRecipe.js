"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
function searchRecipe(name, path) {
    var files = fs.readFileSync(path, "UTF-8");
    var jsonObject = JSON.parse(files);
    for (var _i = 0, jsonObject_1 = jsonObject; _i < jsonObject_1.length; _i++) {
        var recipe = jsonObject_1[_i];
        if (recipe.name === name) {
            console.log("=== " + recipe.name + " ===");
            for (var i = 0; i < recipe.ingredients.length; i++) {
                console.log('- ' + recipe.ingredients[i]);
            }
            return 0;
        }
    }
    console.log('No match.');
}
exports.default = searchRecipe;
var nom = process.argv[2];
var chemin = process.argv[3];
searchRecipe(nom, chemin);

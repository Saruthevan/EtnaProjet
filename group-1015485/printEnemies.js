"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printEnemies(array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var name_1 = array_1[_i];
        var lowerCaseName = name_1.toLowerCase().replace(" ", "_");
        if (lowerCaseName.includes("evil") || lowerCaseName.includes("bad") || lowerCaseName.includes("mean") || lowerCaseName.includes("rotten") || lowerCaseName.includes("cruel")) {
            console.log(lowerCaseName);
        }
    }
}
exports.default = printEnemies;
printEnemies(['EVIL Seed', 'Nice Bat', 'BAD BAT', 'Rotten Tree', 'fairy_tree']);

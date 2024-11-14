"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sheet = 'AXAXLYL';
var sonata = ['A', 'X', 'A', 'X', 'L', 'Y', 'L'];
var sonataIndex = 0;
function isSonataAwakening(sheet, sonata) {
    var count = 0;
    for (var i = 0; i < sheet.length; i++) {
        sonataIndex++;
        if (sheet[i].toLowerCase() === sonata[i].toLowerCase()) {
            count++;
        }
    }
    if (count === sonataIndex) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isSonataAwakening(sheet, sonata));
exports.default = isSonataAwakening(sheet, sonata);

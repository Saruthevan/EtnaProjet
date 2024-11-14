"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printArray(array) {
    console.log("List of destinations :");
    for (var i = 0; i < array.length; i++) {
        console.log("".concat(i + 1, " - ").concat(array[i]));
    }
}
exports.default = printArray;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
function questionbook() {
    try {
        fs.readFileSync(process.argv[process.argv.length - 1], 'utf-8');
        if (process.argv[2] === "--list" && process.argv.length === 4) {
            console.log("Using list.");
        }
        else if (process.argv[2] === "--info" && process.argv.length === 5) {
            console.log("Using info.");
        }
        else if (process.argv[2] === "--add" && process.argv.length === 20) {
            console.log("Using add.");
        }
        else {
            console.error("Wrong use of the program.");
        }
    }
    catch (error) {
        console.error("Wrong use of the program.");
    }
}
exports.default = questionbook;
questionbook();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLuhnValid(number) {
    var digits = number.split("").map(Number).reverse();
    var sum = 0;
    for (var i = 0; i < digits.length; i++) {
        var digit = digits[i];
        if (i % 2 === 1) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }
    return sum % 10;
}
function main() {
    var args = process.argv.slice(2);
    var flagIndex = args.indexOf("-c");
    if (flagIndex === -1 || flagIndex === args.length - 1) {
        console.error("Usage: node script.js -c <number>");
        process.exit(1);
    }
    var numberToCheck = args[flagIndex + 1];
    var verifyNumberToCheck = isLuhnValid(numberToCheck);
    if (verifyNumberToCheck === 0) {
        console.log("OK");
    }
    else {
        console.log("KO");
    }
}
main();

import { kill } from "process";

function isLuhnValid(number: string) {
  const digits = number.split("").map(Number).reverse();

  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i];

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
  const args = process.argv.slice(2);

  const flagIndex = args.indexOf("-c");

  if (flagIndex === -1 || flagIndex === args.length - 1) {
    console.error("Usage: node script.js -c <number>");
    process.exit(1);
  }

  const numberToCheck = args[flagIndex + 1];
  const verifyNumberToCheck = isLuhnValid(numberToCheck);

  if (verifyNumberToCheck === 0) {
    console.log("OK");
  } else {
    console.log("KO");
  }
}
main();

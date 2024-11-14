function playset(s) {
    const charOccurrences = {};

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        if (charOccurrences[currentChar]) {
            return true;
        }

        charOccurrences[currentChar] = true;
    }

    return false;
}

module.exports = { playset }
// console.log(playset("abcde"))
// console.log(playset("abbcdde"))
// console.log(playset("abbcdde"))


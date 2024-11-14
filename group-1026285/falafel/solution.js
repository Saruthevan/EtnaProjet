function falafel(s) {
    // Convertir le mot en tableau de caractères
    let characters = s.split('');

    const charCount = {};
    for (const char of characters) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let leftHalf = '';
    let middleChar = '';
    for (const char in charCount) {
        const count = charCount[char];
        if (count % 2 === 1) {

            if (middleChar !== '') {
                return false;
            }
            middleChar = char;
            charCount[char]--;
        }

        leftHalf += char.repeat(count / 2);
    }

    const rightHalf = leftHalf.split('').reverse().join('');

    const palindrome = leftHalf + middleChar + rightHalf;
    return true;
}
module.exports = { falafel }

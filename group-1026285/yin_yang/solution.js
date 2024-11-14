function yin_yang(s) {
    const open = ['(', '[', '{'];
    const close = [')', ']', '}'];
    const delimiter = ['\"', "\'"];

    const pile = [];
    let reading = null;
    // if (s == "" || s.length % 2 != 0) {
    //     return false;
    // }
    for (let caractere of s) {
        if (delimiter.includes(caractere)) {
            if (!reading) {
                reading = caractere;
            } else if (caractere === reading) {
                reading = null;
            }
        } else if (!reading) {
            if (open.includes(caractere)) {
                pile.push(caractere);
            } else if (close.includes(caractere)) {
                const lastOpen = pile.pop();
                if (!lastOpen || open.indexOf(lastOpen) !== close.indexOf(caractere)) {
                    return false;
                }
            }
        }
    }

    return pile.length === 0 && reading === null;
}


module.exports = { yin_yang }


// console.log(yin_yang("] ["));  //false
// console.log(yin_yang("()"));  //true
// console.log(yin_yang("[()]"));  //true 
// console.log(yin_yang("("));  //false
// console.log(yin_yang("(()"));  //false
// console.log(yin_yang("[(])"));  // false
// console.log(yin_yang("[("));  // false
// console.log(yin_yang("\" \""));  //true
// console.log(yin_yang("'\""));  //false

function do_a_barrel_roll(numbers, k) {
    
    if (k === 0) {
        return numbers;
    }
    const n = numbers.length; // n correspond à la longueur du tableau

    const result = [];
    for (let i = 0; i < n; i++) {
        const newIndex = (i - k + n + n) % n; // calcul et optimise le nombre de décalage avec l'opération de modulo "%" si k est supérieur à la longueur du tableau
       
        result[newIndex] = numbers[i]; // Placer l'élément à la nouvelle position dans le tableau "result"
    }

    return result;
}

module.exports = { do_a_barrel_roll }



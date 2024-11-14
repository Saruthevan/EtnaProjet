function set_et_match(numbers, n) {
  const set = new Set();

    for (let i = 0; i < numbers.length; i++) {
        const complement = n - numbers[i];
        if (set.has(complement)) {
            return true;
        }

        set.add(numbers[i]);
    }
    return false;
}

module.exports = { set_et_match }
// console.log(set_et_match([2, 3, 4, 5], 1))

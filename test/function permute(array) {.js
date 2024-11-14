function permute(array) {
    const result = [];

    function swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function generatePermutations(arr, n) {
        if (n === 1) {
            result.push([...arr]);
            return;
        }

        for (let i = 0; i < n; i++) {
            generatePermutations(arr, n - 1);
            if (n % 2 === 0) {
                swap(arr, i, n - 1);
            } else {
                swap(arr, 0, n - 1);
            }
        }
    }

    generatePermutations(array, array.length);
    return result;
}

// Exemple d'utilisation
const myArray = [1, 2, 3];
const permutations = permute(myArray);
console.log(permutations);

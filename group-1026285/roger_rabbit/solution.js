function roger_rabbit(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        let binary = '';
        let num = i;
        while (num > 0) {
            binary = (num % 2) + binary;
            num = Math.floor(num / 2);
        }
        result.push(binary || '0');
    }
    return result;
}
// let n = 3;
// console.log (roger_rabbit(n));
module.exports = { roger_rabbit };
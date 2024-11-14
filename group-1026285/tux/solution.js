function tux(numbers) {
  const n = numbers.length;

  if (n === 0) {
    return -1;
  }

  if (n === 1) {
    return 0;
  }

  const leftMax = new Array(n);
  const rightMin = new Array(n);
  leftMax[0] = numbers[0];
  rightMin[n - 1] = numbers[n - 1];

  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], numbers[i]);
  }

  for (let i = n - 2; i >= 0; i--) {
    rightMin[i] = Math.min(rightMin[i + 1], numbers[i]);
  }

  for (let i = 0; i < n; i++) {
    if (leftMax[i] <= numbers[i] && numbers[i] <= rightMin[i]) {
      return i;
    }
  }

  return -1;
}

module.exports = { tux };

function daemon(numbers, k) {
  if (k < 0 || k >= numbers.length) {
    return false;
  }

  // Parcourir le tableau une seule fois
  for (let i = 0; i < numbers.length; i++) {
    if (i < k && numbers[i] >= numbers[k]) {
      return false;
    }

    if (i > k && numbers[i] < numbers[k]) {
      return false;
    }
  }

  return true;
}
module.exports = { daemon };

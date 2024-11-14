function morning_sunshine(numbers) {
  const lengthEntry = numbers.length;
  if (lengthEntry === 0) {
    return [];
  }

  const result = [];
  let currentMax = numbers[lengthEntry - 1];
  result.unshift(currentMax);

  for (let i = lengthEntry - 2; i >= 0; i--) {
    if (numbers[i] > currentMax) {
      currentMax = numbers[i];
      result.unshift(numbers[i]);
    }
  }

  return result;
}

module.exports = { morning_sunshine };

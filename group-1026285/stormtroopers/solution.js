function stormtroopers(numbers) {
  const occurrences = {};

  for (const num of numbers) {
    occurrences[num] = (occurrences[num] || 0) + 1;
  }

  const result = [];

  for (const num of numbers) {
    if (occurrences[num] === 1) {
      result.push(num);
    }
  }

  return result;
}

module.exports = { stormtroopers };

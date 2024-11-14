function yulaw(s) {
  if (s.length === 0) {
    return s;
  }

  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (!result.includes(s[i])) {
      result += s[i];
    }
  }

  return result;
}

// console.log(yulaw("abcdabcd"));
module.exports = { yulaw };

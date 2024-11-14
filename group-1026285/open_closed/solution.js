function open_closed(s) {

  const stackOpen = "[{(";
  const stackClose = "]})";
  const stackDoubleQuote = "\"";
  const stackQuote = "\'";
  let countOpen = 0;
  let countClose = 0;
  let countDoubleQuote = 0;
  let countQuote = 0;

  if (s == "" || s.length % 2 != 0) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (stackOpen.includes(s[i])) {
      countOpen += stackOpen.indexOf(s[i]) + 1;
    }
    else if (stackClose.includes(s[i])) {
      countClose += stackClose.indexOf(s[i]) + 1;
    }
    else if (stackDoubleQuote.includes(s[i])) {
      countDoubleQuote++;
    }
    else if (stackQuote.includes(s[i])) {
      countQuote++;
    }
    else {
      return false;
    }

    if (countOpen < countClose) {
      return false;
    }
  }

  if (countOpen == countClose && countDoubleQuote % 2 == 0 && countQuote % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = { open_closed }




// console.log(open_closed("()"));  //true
// console.log(open_closed("]["));  //false
// console.log(open_closed("[()]"));  //true 
// console.log(open_closed("("));  //false
// console.log(open_closed("(()"));  //false
// console.log(open_closed("[(])"));  // false
// console.log(open_closed("[)"));  // false
// console.log(open_closed("\"\""));  //true
// console.log(open_closed("'\""));  //false
// console.log(open_closed("'''"));  //true
// console.log(open_closed("''\""));  //false


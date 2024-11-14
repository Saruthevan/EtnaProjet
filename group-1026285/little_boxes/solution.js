function little_boxes(s) {
    const charArray = s.split('');
    charArray.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    return charArray.join('');
}

// const sortedString = little_boxes("HelloWorld");
// console.log(sortedString);
module.exports = { little_boxes }


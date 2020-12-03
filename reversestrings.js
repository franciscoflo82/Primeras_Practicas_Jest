const reverseStrings = str =>

  str
    .toLowerCase()
    .split('')
    .reverse()
    .join('');

module.exports = reverseStrings;
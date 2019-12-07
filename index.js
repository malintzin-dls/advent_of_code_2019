const fs = require('fs');
const path = require('path');

module.exports.getInputSeparatedBy = (key, char) =>
  fs
    .readFileSync(path.join(__dirname) + '/' + key + '/input.txt')
    .toString()
    .split(char)
    .map(Number);

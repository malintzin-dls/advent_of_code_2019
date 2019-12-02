const fs = require('fs');
const path = require('path');

const getLineSeparatedInput = key =>
  fs
    .readFileSync(path.join(__dirname) + '/' + key + '/input.txt')
    .toString()
    .split('\n');

const getCommaSeparatedInput = key =>
  fs.readFileSync(path.join(__dirname) + '/' + key + '/input.txt').toString().split(',').map(Number);

module.exports = {
  getLineSeparatedInput: getLineSeparatedInput,
  getCommaSeparatedInput: getCommaSeparatedInput,
};

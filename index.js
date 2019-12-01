const fs = require('fs');

const getInput = key =>
  fs
    .readFileSync('/Documents/Dev/AdventOfCode/2019/' + key + '/input.txt')
    .toString()
    .split('\n');

module.exports = getInput;

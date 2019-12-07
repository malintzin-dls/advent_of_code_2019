const helpers = require('../index');

const input = helpers.getInputSeparatedBy(4, '-');

const fn1 = array => {
  const [start, end] = array;
  const result = [];
  for (let i = start; i < end; i++) {
    const digits = (i + '').split('').map(Number);
    let areTwoAdjacentDigitsTheSame = false;
    const isIncreasing = digits.every((value, index) => {
      if (index !== digits.length - 1) {
        if (value === digits[index + 1]) areTwoAdjacentDigitsTheSame = true;
        return value <= digits[index + 1];
      }
      return true;
    });
    if (areTwoAdjacentDigitsTheSame && isIncreasing) result.push(i);
  }
  return result.length;
};
//544

const fn2 = array => {
  const [start, end] = array;
  const result = [];
  for (let i = start; i < end; i++) {
    const digits = (i + '').split('').map(Number);
    let areTwoAdjacentDigitsTheSame = false;
    const countingDigits = new Map();
    const isIncreasing = digits.every((digit, index) => {
      countingDigits.has(digit)
        ? countingDigits.set(digit, countingDigits.get(digit) + 1)
        : countingDigits.set(digit, 1);
      if (index !== digits.length - 1) {
        return digit <= digits[index + 1];
      }
      return true;
    });
    for (const values of countingDigits.values()) {
      if (values === 2) areTwoAdjacentDigitsTheSame = true;
    }
    if (areTwoAdjacentDigitsTheSame && isIncreasing) result.push(i);
  }
  return result.length;
};
//334

module.exports = {
  fn1: fn1,
};

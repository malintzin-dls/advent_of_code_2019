const getInput = require('../index');

const input = getInput.getLineSeparatedInput(1);

const fn1 = arr =>
  arr.reduce((acc, val) => acc + Math.floor(Number(val) / 3) - 2, 0);
// 3384232

const fn2 = () => {
  let accumulator = 0;
  return (recusion = arr => {
    arr.reduce((acc, val) => {
      const fuel = Math.floor(Number(val) / 3) - 2;
      if (fuel <= 0) return accumulator;
      accumulator = accumulator + massFuel;
      return recusion([massFuel]);
    }, accumulator);
    return accumulator;
  });
};
// 5073456

module.exports = {
  fn1: fn1,
  fn2: fn2,
};

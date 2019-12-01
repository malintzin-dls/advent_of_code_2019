const getInput = require('../index');

const input = getInput(1);

const fn1 = arr =>
  arr.reduce((acc, val) => acc + Math.floor(Number(val) / 3) - 2, 0);
// 3384232

const fn2 = () => {
  let accumulator = 0;
  return (recusion = arr => {
    arr.reduce((acc, val) => {
      const necessaryFuel = Math.floor(Number(val) / 3) - 2;
      if (necessaryFuel <= 0) return accumulator;
      const massFuel = Math.floor(Number(val) / 3) - 2;
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

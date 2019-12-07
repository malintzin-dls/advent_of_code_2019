const helpers = require('../index');

const input = helpers.getInputSeparatedBy(2, ',');

const fn1 = ([...array], noun, verb) => {
  array[1] = noun;
  array[2] = verb;
  let posOpcode = 0;
  array.forEach((val, index) => {
    if (index === posOpcode) {
      const opcode = val;
      if (opcode === 99) return;
      const result =
        opcode === 1
          ? array[array[index + 1]] + array[array[index + 2]]
          : array[array[index + 1]] * array[array[index + 2]];
      array[array[index + 3]] = result;
      posOpcode += 4;
    }
  });
  return array;
};
// 6087827

const fn2 = () => {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const result = fn1(input, noun, verb)[0];
      if (result === 19690720) {
        return [noun, verb];
      }
    }
    verb = 0;
  }
};
// [53, 79]

module.exports = {
  fn1: fn1,
};

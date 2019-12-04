const getInput = require('../index');

const input = getInput.getCommaSeparatedInput(2);

input[1] = 12;
input[2] = 2;

const fn1 = array => {
    let posOpcode = 0;
    array.forEach((val, index) => {
    if (index === posOpcode) {
      const opcode = val;
      if (opcode === 99) return;
      const result =
        opcode === 1
          ? array[array[index + 1]] + array[array[index + 2]]
          : array[array[index + 1]] * array[array[index + 2]];
        const posResult = array[index +3];
        array[posResult] = result;
        posOpcode += 4;
    }
  });
  return array;
};

module.exports = {
  fn1: fn1,
};

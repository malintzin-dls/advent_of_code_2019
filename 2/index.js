const getInput = require('../index');

const input = getInput.getCommaSeparatedInput(2);

const fn1 = (param) => {
    console.log('param', param);
    return param;
}

module.exports = {
    fn1: fn1,
  };
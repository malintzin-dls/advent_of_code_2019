const fns = require('./index');

const io1 = [[[111110, 111121], 9]];

describe('function 1', () => {
  io1.map(io =>
    it(`with input ${io[0]} it retuns output ${io[1]}`, () => {
      expect(fns.fn1(io[0])).toBe(io[1]);
    }),
  );
});

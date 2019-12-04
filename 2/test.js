const fns = require('./index');

const io1 = [
  [[1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50],
  [3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]],
];

describe('function 1', () => {
  io1.map(io =>
    it(`with input ${io[0]} it retuns output ${io[1]}`, () => {
      expect(fns.fn1(io[0]).join(',')).toBe(io[1].join(','));
    }),
  );
});

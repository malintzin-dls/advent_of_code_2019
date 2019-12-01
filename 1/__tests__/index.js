const fns = require('../index');

const io1 = [
  [[12], 2],
  [[14], 2],
  [[1969], 654],
  [[100756], 33583],
];

const io2 = [
  [[14], 2],
  [[1969], 966],
  [[100756], 50346],
];

describe('function 1', () => {
  io1.map(io =>
    it(`with input ${io[0]} it retuns output ${io[1]}`, () => {
      expect(fns.fn1(io[0])).toBe(io[1]);
    }),
  );
});

describe('function 2', () => {
  io2.map(io =>
    it(`with input ${io[0]} it retuns output ${io[1]}`, () => {
      expect(fns.fn2()(io[0])).toBe(io[1]);
    }),
  );
});

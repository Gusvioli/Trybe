const { sum } = require('./exercise2');

describe('Exercise 2', () => {
  test('Quando a entrada for (1, 2, 3, 4, 5) retorne 15', () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });
});

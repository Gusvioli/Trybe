const { rectangleArea } = require('./exercise1');

describe('Exercise 1', () => {
  test('rectangleArea', () => {
    expect(rectangleArea(1, 2)).toBe(2);
    expect(rectangleArea(3, 5)).toBe(15);
    expect(rectangleArea(6, 9)).toBe(54);
  });
});
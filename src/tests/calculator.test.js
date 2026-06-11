const calc = require('../calculator');

describe('Calculator operations', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(calc.subtract(10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(calc.multiply(45, 2)).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(calc.divide(20, 5)).toBe(4);
  });

  test('supports floats', () => {
    expect(calc.add(2.5, 1.25)).toBeCloseTo(3.75);
    expect(calc.divide(7.5, 2.5)).toBeCloseTo(3.0);
  });

  test('division by zero throws', () => {
    expect(() => calc.divide(5, 0)).toThrow(/Division by zero/);
  });

  test('invalid numeric input throws', () => {
    expect(() => calc.add('a', 1)).toThrow(/Invalid number/);
    expect(() => calc.multiply(1, 'b')).toThrow(/Invalid number/);
  });
});

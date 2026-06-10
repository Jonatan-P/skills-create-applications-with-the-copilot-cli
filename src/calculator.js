/**
 * Calculator module supporting the following operations:
 * - addition (+)
 * - subtraction (-)
 * - multiplication (× or *)
 * - division (÷ or /)
 *
 * Exports: add, subtract, multiply, divide
 */

function toNumber(value) {
  const n = Number(value);
  if (Number.isNaN(n)) throw new TypeError(`Invalid number: ${value}`);
  return n;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new RangeError('Division by zero');
  return a / b;
}

module.exports = {
  add: (x, y) => add(toNumber(x), toNumber(y)),
  subtract: (x, y) => subtract(toNumber(x), toNumber(y)),
  multiply: (x, y) => multiply(toNumber(x), toNumber(y)),
  divide: (x, y) => divide(toNumber(x), toNumber(y)),
};

/**
 * Calculator module supporting the following operations:
 * - addition (+)
 * - subtraction (-)
 * - multiplication (× or *)
 * - division (÷ or /)
 * - modulo (%)
 * - exponentiation (power)
 * - square root (sqrt)
 *
 * Exports: add, subtract, multiply, divide, modulo, power, squareRoot
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

function modulo(a, b) {
  if (b === 0) throw new RangeError('Modulo by zero');
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) throw new RangeError('Square root of negative number');
  return Math.sqrt(n);
}

module.exports = {
  add: (x, y) => add(toNumber(x), toNumber(y)),
  subtract: (x, y) => subtract(toNumber(x), toNumber(y)),
  multiply: (x, y) => multiply(toNumber(x), toNumber(y)),
  divide: (x, y) => divide(toNumber(x), toNumber(y)),
  modulo: (x, y) => modulo(toNumber(x), toNumber(y)),
  power: (x, y) => power(toNumber(x), toNumber(y)),
  squareRoot: (x) => squareRoot(toNumber(x)),
};

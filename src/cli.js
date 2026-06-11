#!/usr/bin/env node
/**
 * CLI for the calculator module.
 * Supported operations (per the image & repository issue):
 * - addition (+ or add)
 * - subtraction (- or subtract)
 * - multiplication (×, x, * or multiply)
 * - division (÷, / or divide)
 *
 * Usage examples:
 *   node src/cli.js add 2 3
 *   node src/cli.js 2 + 3
 */

const calc = require('./calculator');

function usage() {
  console.error('Usage:');
  console.error('  calc <number> <operator> <number>    (e.g. calc 2 + 3)');
  console.error('  calc <operation> <number> <number>   (e.g. calc add 2 3)');
  console.error('\nSupported operations: add (+), subtract (-), multiply (* or x), divide (/).');
  process.exit(1);
}

const args = process.argv.slice(2);
if (args.length !== 3) usage();

let a, b, op;

// Detect style: [num, op, num] or [op, num, num]
if (!isNaN(Number(args[0])) && !isNaN(Number(args[2]))) {
  // form: 2 + 3
  a = args[0];
  op = args[1];
  b = args[2];
} else if (isNaN(Number(args[0])) && !isNaN(Number(args[1])) && !isNaN(Number(args[2]))) {
  // form: add 2 3
  op = args[0];
  a = args[1];
  b = args[2];
} else {
  usage();
}

function mapOp(opRaw) {
  const o = String(opRaw).toLowerCase();
  if (['+', 'add'].includes(o)) return 'add';
  if (['-', 'subtract', 'sub'].includes(o)) return 'subtract';
  if (['*', 'x', '×', 'multiply', 'mul'].includes(o)) return 'multiply';
  if (['/', '÷', 'divide', 'div'].includes(o)) return 'divide';
  return null;
}

const mapped = mapOp(op);
if (!mapped) {
  console.error(`Unknown operator: ${op}`);
  usage();
}

try {
  let result;
  switch (mapped) {
    case 'add':
      result = calc.add(a, b);
      break;
    case 'subtract':
      result = calc.subtract(a, b);
      break;
    case 'multiply':
      result = calc.multiply(a, b);
      break;
    case 'divide':
      result = calc.divide(a, b);
      break;
    default:
      throw new Error('Unhandled operation');
  }
  // Print with minimal formatting
  console.log(result);
} catch (err) {
  console.error('Error:', err.message || err);
  process.exit(1);
}

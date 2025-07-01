// prime check

import assert from "assert";
const makeArray = (length, startNum = 1) => {
  return Array.from({ length }, (_, i) => i + startNum);
};

const isPrime = (n) => {
  if (n === 1) return false;
  return makeArray(Math.sqrt(n) - 1, 2).every((a) => n % a !== 0);
};

// const hasPrime = (arr) => arr.some(a => isPrime(a));
// const hasPrime = (arr) => arr.some(isPrime);
const hasPrime = (arr) => arr.find(isPrime);

assert.strictEqual(hasPrime([1, 2, 3]), true);
assert.strictEqual(hasPrime([1, 2, 4]), true);

// 피보나치 수열을
// 1) Loop를 이용하여 작성하시오.
// 2) 순수 재귀를 이용하여 작성하시오.
// 3) memoization하여 작성하시오.

// 수열의 규칙은 f(n) = f(n - 2) + f(n - 1)  (단, n <= 1 일 때 f(n) = n)
// 즉, 0 ~ 9까지의 값은 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] 이다.

var asserts = require("assert");
const { assert } = require("console");

function loopFibonacci(n) {
  if (n <= 1) return n;
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    // let temp = prev;
    // prev = curr;
    // curr = temp + curr;
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}

function recurFibonacci(n) {
  if (n <= 1) return n;
  return recurFibonacci(n - 2) + recurFibonacci(n - 1);
}

const memoFibonacci = memoized(function (n) {
  if (n <= 1) return n;
  return memoFibonacci(n - 2) + memoFibonacci(n - 1);
});

const lf3 = loopFibonacci(3);
console.log("🚀 lf3:", lf3);

const lf7 = loopFibonacci(7);
console.log("🚀 lf7:", lf7);

console.log("------------");

asserts.equal(recurFibonacci(3), 2);
asserts.equal(recurFibonacci(5), 5);
asserts.equal(recurFibonacci(7), 13);

asserts.equal(memoFibonacci(3), 2);
asserts.equal(memoFibonacci(5), 5);
asserts.equal(memoFibonacci(7), 13);

function memoized(fn) {
  const cache = {};
  return function (k) {
    return cache[k] || (cache[k] = fn(k));
  };
}

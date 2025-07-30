// 피보나치 수열을 memoization하여 작성하시오.

// 수열의 규칙은 f(n) = f(n - 2) + f(n - 1)  (단, n <= 1 일 때 f(n) = n)
// 즉, 0 ~ 9까지의 값은 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] 이다.
//  - 9번째 피보나치 수 : 34

import assert from "assert";

const memoized = (fn) => {
  const cache = {};
  return function (k) {
    if (k in cache) return cache[k];
    return (cache[k] = fn(k));
  };
};

const memoFibonacci = memoized(function (n) {
  if (n <= 1) return n;
  return memoFibonacci(n - 2) + memoFibonacci(n - 1);
});

memoFibonacci(30); // 832040

assert.equal(memoFibonacci(0), 0); // ✅ 추가 테스트도 통과
assert.equal(memoFibonacci(1), 1);
assert.equal(memoFibonacci(5), 5);
assert.equal(memoFibonacci(7), 13);
assert.equal(memoFibonacci(30), 832040);

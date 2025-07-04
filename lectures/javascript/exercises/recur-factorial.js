// 재귀함수, memoized 익히기
// factorial 함수 구현
// e.g. 3! = 3*2*1
//      4! = 4*3*2*1

const recurFactorial = (n) => {
  if (n <= 1) return 1;
  return n * recurFactorial(n - 1);
};

// recurFactorial(5);
// console.log("🚀 recurFactorial:", recurFactorial(5));

const memoized = (fn) => {
  const cache = {};
  return function (k) {
    return cache[k] || (cache[k] = fn(k));
  };
};

const memoFactorial = memoized(function (num) {
  if (num <= 1) return 1;
  return num * memoFactorial(num - 1);
});

console.log(memoFactorial(5));

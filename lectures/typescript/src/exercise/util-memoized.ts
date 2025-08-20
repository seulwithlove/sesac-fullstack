// JS 시간에 작성했던 memoized 함수를 범용성을 고려하여 TS로 작성하시오.
function memoized<T>(fn: Function) {
  const memoizedTable = {};
  return function B(...k: T[]) {
    return memoizedTable[k] ?? (memoizedTable[k] = fn(...k));
  };
}

// test
const memoizeAdd = memoized((a: number, b: number) => {
  return a + b;
});

console.log(memoizeAdd(1, 2)); // 3
console.log(memoizeAdd(3, 4)); // 7

// const memoizeFactorial도 테스트(실행)) 해보세요!

// 다음과 같은 push, pop, shift, unshift 를 순수 함수로 작성하시오.
// (단, 입력값은 다음 예시로 한정함)

import assert from "assert";
const arr = [1, 2, 3, 4];

const push = (arr, ...args) => [...arr, ...args];

const pop = (arr, n = 1) => {
  if (n === 1) return arr.slice(-n)[0];
  return arr.slice(-n);
};

const unshift = (arr, ...args) => [...args, ...arr]; // 앞에서부터 추가

const shift = (arr, n = 1) => {
  const deleted = arr.splice(0, n);
  return [deleted, arr];
}; // 앞에서부터 삭제

assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
// assert.deepStrictEqual(shift(arr), [[1], [2, 3, 4]]); // [shift되는 원소들, 남은 원소들]
assert.deepStrictEqual(shift(arr, 2), [
  [1, 2],
  [3, 4],
]); // 2개 shift
// assert.deepStrictEqual(arr, [1, 2, 3, 4]);

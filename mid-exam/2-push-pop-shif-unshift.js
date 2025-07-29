// 다음과 같은 push, pop, shift, unshift 를 순수 함수로 작성하시오.
// (단, 입력값은 다음 예시로 한정함)

import assert from "assert";

const push = (array, ...args) => [...array, ...args];
const pop = (array, cnt) =>
  cnt === undefined ? array.at(-1) : array.slice(cnt);
const unshift = (array, ...args) => [...args, ...array];
const shift = (array, cnt = 1) => [array.slice(0, cnt), array.slice(cnt)];
const arr = [1, 2, 3, 4];
assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
assert.deepStrictEqual(shift(arr), [[1], [2, 3, 4]]); // [shift되는 원소들, 남은 원소들]
assert.deepStrictEqual(shift(arr, 2), [
  [1, 2],
  [3, 4],
]); // 2개 shift
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

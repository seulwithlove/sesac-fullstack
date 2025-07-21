//다음과 같은 push, pop, shift, unshift 를 순수 함수로 작성하시오.
//(단, 입력값은 다음 예시로 한정함)

/*
4개 모두 비순수함수 - 원본 배열을 바꿈
1. push : 값을 마지막에 추가, 전체 배열 리턴
- destructuring

2. pop : 마지막부터 값 숫자 개수만큼 제거, 제거한 값을 리턴
- slice
- 개수를 인자로 받으면 해당 개수만큼 제거, 안받으면 1개만 제거

3. shift : 첫번째 원소부터 숫자 개수만큼 제거, [[제거한 원소], [남은 배열]] 리턴
- slice(start, end)
  - start부터 end/끝까지 요소 추출해서 배열로 리턴
- 개수를 인자로 받으면 해당 개수만큼 제거, 안받으면 1개만 제거

4. unshift : 배열 앞에서부터 값 추가(여러 인자를 받을수 있음), 전체 배열 리턴
- destructuring

*/

import assert from "assert";

const arr = [1, 2, 3, 4];

// push
// const push = (arr, ...args) => [...arr, ...args];
function push(item, ...n) {
  const copy = [...item];
  copy.push(...n);
  return copy;
}

// assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
// console.log("🚀 push(arr, 5, 6):", push(arr, 5, 6));

// pop
const pop = (arr, num) => (num === undefined ? arr.at(-1) : arr.slice(-num));

// function pop(item, n) {
//   const copy = [...item];
//   if (n === undefined) {
//     return copy.pop();
//   } else {
//     return copy.slice(n, item.length);
//   }
// }

// assert.deepStrictEqual(pop(arr), 5);
// console.log("🚀 pop(arr):", pop(arr));

// assert.deepStrictEqual(pop(arr, 2), [4, 5]); // 2개 팝!
// console.log("🚀 pop(arr, 2):", pop(arr, 2));

// unshift
// const unshift = (arr, ...args) => [...args, ...arr];
function unshift(item, ...n) {
  const copy = [...item];
  return [...n, ...copy];
}

assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
console.log("🚀 unshift(arr, 0):", unshift(arr, 0));

// assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
// console.log("🚀 unshift(arr, 7, 8):", unshift(arr, 7, 8));

// shift
// const shift = (arr, num = 1) => [arr.slice(0, num), arr.slice(num)];

function shift(item, n) {
  const copy = [...item];
  if (n === undefined) {
    return [copy.slice(0, 1), copy.slice(1, item.length)];
  } else {
    return [copy.slice(0, n), copy.slice(n, item.length)];
  }
}

// assert.deepStrictEqual(shift(arr), [[1], [2, 3, 4]]); // [shift되는 원소들, 남은 원소들]
// console.log("🚀 shift(arr),:", shift(arr));

// assert.deepStrictEqual(shift(arr, 2), [
//   [1, 2],
//   [3, 4],
// ]); // 2개 shift
// console.log("🚀 shift(arr, 2):", shift(arr, 2));

// assert.deepStrictEqual(arr, [1, 2, 3, 4]);

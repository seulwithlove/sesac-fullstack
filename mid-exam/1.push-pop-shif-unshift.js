//다음과 같은 push, pop, shift, unshift 를 순수 함수로 작성하시오.
//(단, 입력값은 다음 예시로 한정함)

/*
4개 모두 비순수함수 - 원본 배열을 바꿈
1. push : array 마지막에 값을 추가 (+ 수정된 배열 길이를 리턴)
- destructuring 이용

1) 새로운 배열을 만들고
2) 기존 arr 값을 펼치고 새로 받은 인자를 펼쳐서
3) 새로운 배열에 할당

2. pop : array 마지막에서 값을 삭제 (+ 삭제한 값 리턴)
- ~TODO~: slice 개념 정리

1) 새로운 배열을 만들고
2) 인자를 안받으면 array[-1] 슬라이스해서 배열에 담고 값만 출력
3) 인자(n)를 받으면 array[-n] 슬라이스해서 배열에 담기

3. shift : array 맨 앞에 값을 삭제 (+ 삭제한 값 리턴)
- slice활용

~1) 새로운 배열을 만들고~
2) 인자를 안받으면 array[0] 슬라이스해서 배열에 담고
2) 인자(n)를 받으면 array[n] 슬라이스해서 배열에 담기

4. unshift : array 맨 앞의 값을 추가 (+ 새로운 배열 길이 리턴)
- destructuring

1) 빈 array 만들고
2) 새로 받은 값을 펼치고, 기존 배열 값을 펼쳐서 빈 배열에 할당

*/

import assert from "assert";

const push = (array, ...args) => {
  return [...array, ...args];
};

const pop = (array, cnt = 1) => {
  if (cnt === 1) return array.slice(-1)[0]; // 값이 하나일떄는 배열이 아닌 값만 리턴하기위해
  return array.slice(-cnt);
};

const unshift = (array, ...args) => [...args, ...array];

const shift = (array, cnt = 0) => {
  if (cnt === 0) return [array.slice(0, 1), array.slice(1, array.length)];
  return [array.slice(0, cnt), array.slice(cnt, array.length)];
};

const arr = [1, 2, 3, 4];

assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
// console.log("🚀 push(arr, 5, 6):", push(arr, 5, 6));

assert.deepStrictEqual(pop(arr), 4);
// console.log("🚀 pop(arr):", pop(arr));

assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!
// console.log("🚀 pop(arr, 2):", pop(arr, 2));

assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
// console.log("🚀 unshift(arr, 0):", unshift(arr, 0));

assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
// console.log("🚀 unshift(arr, 7, 8):", unshift(arr, 7, 8));

assert.deepStrictEqual(shift(arr), [[1], [2, 3, 4]]); // [shift되는 원소들, 남은 원소들]
console.log("🚀 shift(arr),:", shift(arr));

assert.deepStrictEqual(shift(arr, 2), [
  [1, 2],
  [3, 4],
]); // 2개 shift
console.log("🚀 shift(arr, 2):", shift(arr, 2));

// assert.deepStrictEqual(arr, [1, 2, 3, 4]);

// Array.prototype.reduce 함수를 직접 구현하시오.
/*
reduce((acc, a) => fn, 초기값)
- acc : 함수의 결과값을 담는 변수 (accumulator)
- fn : 함수의 인자는 acc, a! 
  - 누적된 값(acc)에 배열의 원소를 하나씩 넣어서 함수를 실행 

1) 배열, 함수, 초기값을 인자로 받고
2) 값을 저장할 acc 변수를 만들고 acc의 초기값을 할당
  - 초기값이 없으면 배열의 첫번째 인자
3) 배열의 원소 1개를 꺼내서 : 초기값으로 첫번째 인자를 사용하면 두번째 값
4) 함수에 인자로 넣고
5) acc와 a를 함수로 실행
6) 결과값을 acc에 할당
7) 배열의 마지막 원소까지 반복
8) 최종 acc의 값을 리턴

*/

import assert from "assert";

// function reduce(arr, fn, initValue) {
//   let result;
//   let index;

//   if (initValue === undefined) {
//     if (arr.length === 0) {
//       throw new Error("error");
//     }
//     result = arr[0];
//     index = 1;
//   } else {
//     result = initValue;
//     index = 0;
//   }

//   for (let i = index; i < arr.length; i++) {
//     result = fn(result, arr[i], i, arr);
//   }

//   return result;
// }

reduce([1, 2, 3], (a, b) => a + b, 0); // 6이면 통과!
console.log(
  "🚀 reduce([1, 2, 3], (a, b) => a + b, 0):",
  reduce([1, 2, 3], (a, b) => a + b, 0)
);
// cf. [1,2,3].reduce((a,b) => a + b, 0);       // 6

// reduce([1, 2, 3, 4, 5], (a, b) => a + b); // 15면 통과!
console.log(
  "🚀 reduce([1, 2, 3, 4, 5], (a, b) => a + b):",
  reduce([1, 2, 3, 4, 5], (a, b) => a + b)
);

// // reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1); // 120이면 통과!
console.log(
  "🚀 reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1):",
  reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1)
);

// // reduce([2, 2, 2], (a, b) => a * b); // 8이면 통과!
console.log(
  "🚀 reduce([2, 2, 2], (a, b) => a * b):",
  reduce([2, 2, 2], (a, b) => a * b)
);

// // reduce([3, 3, 3], (a, b) => a * b, 0); // 0이면 통과!
console.log(
  "🚀 reduce([3, 3, 3], (a, b) => a * b, 0):",
  reduce([3, 3, 3], (a, b) => a * b, 0)
);

// reduce(users, (acc, user) => acc + user.name); // [object Object]LeePark

const a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur, 0),
  a10.reduce((acc, cur) => acc + cur, 0)
);

function reduce(arr, fn, initVal) {
  let i = 0;
  let acc = initVal !== undefined ? initVal : arr[i++];
  for (; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }
  return acc;
}

const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park];

assert.deepStrictEqual(
  reduce(users, (acc, user) => acc + user.name),
  users.reduce((acc, user) => acc + user.name)
);

assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur, 0),
  a10.reduce((acc, cur) => acc + cur, 0)
);

assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur),
  a10.reduce((acc, cur) => acc + cur)
);

assert.deepStrictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
  [1, 2, 3, 4, 5].reduce((a, b) => a * b, 1)
);

assert.deepStrictEqual(
  reduce(users, (acc, user) => acc + user.name),
  users.reduce((acc, user) => acc + user.name)
);
// const reduce = (arr, fn, initValue) => {
//   let i = 0;
//   let acc = initValue !== undefined ? initValue : arr[i++];
//   for (; i < arr.length; i++) {
//     acc = fn(acc, arr[i]);
//   }
//   return acc;
// };

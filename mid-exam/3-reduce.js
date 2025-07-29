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
const reduce = (arr, fn, initValue) => {
  let [i, acc] = initValue === undefined ? [1, arr[0]] : [0, initValue];
  for (; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }
  return acc;
};

const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park];

const a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur, 0),
  a10.reduce((acc, cur) => acc + cur, 0)
);

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

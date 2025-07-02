// 피보나치 수열을 memoization하여 작성하시오.

// 수열의 규칙은 f(n) = f(n - 2) + f(n - 1)  (단, n <= 1 일 때 f(n) = n)
// 즉, 0 ~ 9까지의 값은 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] 이다.

/*
Memoization 
- 함수를 리턴해줌
- 이전에 계산한 값을 기억해서 같은 계산을 반복하지 않도록 하는것
- 재귀함수가 이미 계산한 값을 저장해두고 다시 사용하는것

- 값을 효율적으로 얻기 위해 테이블을 만들어서 사용하는 것
*/

/*
Fibonacci Sequence
- 앞의 수를 차례로 더해가는 수열
- 5를 넣으면 5가 나와야함

0 1 2 3 4 5 : index
0 1 1 2 3 5 : 값 => 5가 나와야함


1. loopFibonacci
- 받은 숫자 인덱스 만큼 반복문이 돌아야함
- 결과 = 이전값 + 현재값
    - 결과가 현재값이 됨
- 결과 리턴
*/

import assert from "assert";
function loopFibonacci(num) {
  let prev = 0;
  let cur = 1;
  for (let i = 1; i < num; i++) {
    // let temp = cur;
    // cur = prev + cur;
    // prev = temp;
    [prev, cur] = [cur, prev + cur];
  }
  return cur;
}

assert.equal(loopFibonacci(5), 5);
assert.equal(loopFibonacci(7), 13);
assert.equal(loopFibonacci(30), 832040);

// ============

function recurFibonacci(num) {
  // if (num === 0) return 0;
  // if (num === 1) return 1;
  if (num <= 1) return num;
  return recurFibonacci(num - 2) + recurFibonacci(num - 1);
}

assert.equal(recurFibonacci(5), 5);
assert.equal(recurFibonacci(7), 13);
assert.equal(recurFibonacci(30), 832040);

// ============

const memoFibonacci = memoized(recurFibonacci); // 함수를 리턴함

function memoized(fn) {
  const cache = {};
  return function (k) {
    return cache[k] || (cache[k] = fn(k)); // 여기에서 recurFibonacci(k) 호출
  };
}

assert.equal(memoFibonacci(5), 5); // 이렇게 되면 memoized의 k에 값을 전달하게됨 - k값을 가진 함수를 리턴하니까
assert.equal(memoFibonacci(7), 13);
assert.equal(memoFibonacci(30), 832040);

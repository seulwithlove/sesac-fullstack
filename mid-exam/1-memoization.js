// 피보나치 수열을 memoization하여 작성하시오.

// 수열의 규칙은 f(n) = f(n - 2) + f(n - 1)  (단, n <= 1 일 때 f(n) = n)
// 즉, 0 ~ 9까지의 값은 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] 이다.
//  - 9번째 피보나치 수 : 34

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

// const loopFibonacci;


assert.equal(loopFibonacci(3), 2);
assert.equal(loopFibonacci(5), 5);
assert.equal(loopFibonacci(7), 13);
assert.equal(loopFibonacci(30), 832040);

// ============

// const recurFibonacci;

assert.equal(recurFibonacci(5), 5);
assert.equal(recurFibonacci(7), 13);
assert.equal(recurFibonacci(30), 832040);

// // // ============

assert.equal(memoFibonacci(5), 5);
console.log("➡️ ~ memoFibonacci(5):", memoFibonacci(5));
assert.equal(memoFibonacci(7), 13);
console.log("➡️ ~ memoFibonacci(7):", memoFibonacci(7));
assert.equal(memoFibonacci(30), 832040);
console.log("➡️ ~ memoFibonacci(30):", memoFibonacci(30));

// Array.prototype.reduce 함수를 직접 구현하시오.
/*
reduce((acc, a) => acc + a, 초기값)
- 배열의 각 원소를 하나씩 꺼내서 함수를 실행하고 처음 값에 그 값을 더해준다
- 초기값이 없으면 0부터 시작

1) 


*/

const reduce = (arr, fn, initValue) => {};

reduce([1, 2, 3], (a, b) => a + b, 0); // 6이면 통과!
// cf. [1,2,3].reduce((a,b) => a + b, 0);       // 6
reduce([1, 2, 3, 4, 5], (a, b) => a + b); // 15면 통과!
reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1); // 120이면 통과!
reduce([2, 2, 2], (a, b) => a * b); // 8이면 통과!
reduce([3, 3, 3], (a, b) => a * b, 0); // 0이면 통과!

// reduce(users, (acc, user) => acc + user.name); // [object Object]LeePark

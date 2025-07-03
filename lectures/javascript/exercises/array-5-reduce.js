// Array.prototype.reduce 함수를 직접 구현하시오.
// const result = arr.reduce((acc, cur, index, array) => {
//   return acc + cur;
// }, initialValue);
// --> 배열을 왼쪽부터 순회하면서 누적값을 계산함

// // ===== try 1.
// const reduce = (arr, fn, initValue) => {
//   let acc = initValue;

//   for (let i = 0; i < arr.length; i++) {
//     acc = fn(acc, arr[i], i, arr); // arg 수가 맞지 않아도 필요한만큼만 꺼내서 씀
//   }
//   return acc;
// };

// ======== try 2.
// const reduce = (arr, fn, initVal = 0) => {
//   let acc = initVal;
//   for (let i = 0; i < arr.length; i++) {
//     acc = fn(acc, arr[i]);
//   }
//   return acc;
// };

// teacher's
const reduce = (arr, fn, initValue) => {
  let i = 0;
  // initValue = initValue ?? arr[i++];
  // initValue ??= arr[i++];
  let acc = initValue ?? arr[i++];
  for (; i < arr.length; i++) {
    acc = fn(acc, arr[i], i, arr);
  }
  return acc;
};

reduce([1, 2, 3], (a, b) => a + b, 0); // 6이면 통과!
console.log(reduce([1, 2, 3], (a, b) => a + b, 0));
// cf. [1,2,3].reduce((a,b) => a + b, 0);       // 6
reduce([1, 2, 3, 4, 5], (a, b) => a + b); // 15면 통과!
reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1); // 120이면 통과!
reduce([2, 2, 2], (a, b) => a * b); // 8이면 통과!
console.log(
  "🚀 reduce([2, 2, 2], (a, b) => a * b):",
  reduce([2, 2, 2], (a, b) => a * b)
);
reduce([3, 3, 3], (a, b) => a * b, 0); // 0이면 통과!
// reduce(users, (acc, user) => acc + user.name); // [object Object]LeePark

// console.log("======== 1 ========");
// // 다음과 같은 push, pop, shift, unshift 를 "순수 함수"로 작성하시오.
// // (단, 입력값은 다음 예시로 한정함)
// (function () {
//   import assert from 'assert';//   // const push = (array, ...args) => {}
//   // const pop = (array, cnt = 1) => …
//   const arr = [1, 2, 3, 4];

//   const push = (array, ...args) => [...array, ...args];
//   const pop = (array, cnt = 1) =>
//     cnt === 1 ? array.at(-1) : array.slice(-cnt);
//   const unshift = (arr, ...args) => [...args, ...arr];
//   const shift = (array, cnt = 1) => [array.slice(0, cnt), array.slice(cnt)];

//   assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
//   assert.deepStrictEqual(pop(arr), 4);
//   assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!
//   assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
//   assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
//   assert.deepStrictEqual(shift(arr), [[1], [2, 3, 4]]); // [shift되는 원소들, 남은 원소들]
//   assert.deepStrictEqual(shift(arr, 2), [
//     [1, 2],
//     [3, 4],
//   ]); // 2개 shift
//   assert.deepStrictEqual(arr, [1, 2, 3, 4]);
// })();

// console.log("======== 2 ========");
// function ex2() {
//     const deleteArray = (array, startIdxOrKey, endIdxOrVal = array.length) => {
//         const cb = typeof startIdxOrKey === 'number' ? (_, i) => i < startIdxOrKey || i >= endIdxOrVal : a => a[startIdxOrKey !== endIdxOrVal;
//         // if (typeof startIdxOrKey === 'number')
//         return array.filter(_, i) => i < startIdx || i >= endIdx
// } ;
// }

console.log("======== 3 ========");
const hong = { id: 1, name: "Hong" };
const lee = { id: 3, name: "Lee" };
console.log("🚀 hong:", hong);
const kim = { id: 2, name: "Kim" };
const choi = { id: 5, name: "Choi" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park];

// Object.defineProperty() 활용해야함!

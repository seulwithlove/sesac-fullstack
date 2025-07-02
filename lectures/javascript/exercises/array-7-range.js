// 다음과 같은 정수 배열을 생성하는 range 함수를 구현하시오.
// argumnet 수에 따라 분기처리!

// ======== try.1  ERROR; 인자가 1개일떄 순서가 거꾸로 출력됨
// const range = (initVal = 1, endVal = 1, interval = 1) => {
//   if (initVal === endVal) return [initVal];

//   let arr = [];
//   //   if (initVal < endVal && interval < 0) interval = -interval;
//   if (initVal >= endVal && interval > 0) interval = -interval;

//   if (interval > 0) {
//     for (let i = initVal; i <= endVal; i += interval) arr.push(i);
//   } else {
//     for (let i = initVal; i >= endVal; i += interval) {
//       arr.push(i);
//     }
//   }
//   return arr;
// };

// ========= try 2. FAIL
// * rules - f(s, e, step)
//  - step 기본값 = s > e ? -1 : 1
//  - step === 0 || s === e ? [s]
//  - e 가 없다면,
//   ⇒ s > 0 ? e = s, s = 1
//   ⇒ s < 0 ? e = -1
//   ⇒ s === 0 ? [0]
// - 비정상(예외)
//   ⇒ s > e && step > 0 ? []
//   ⇒ s < e && setp < 0 ? []
//   즉, (s - e) * step > 0

// const range = (init, end, step) => {
//     if (step === 0 || init === end) return [init];
//     if (!end) {
//         if (init > 0)
//     }
//     step = init > end ? -1 : 1;

//         init = init < 0 ? ;

// }

// ==== gpt
const range = (init, end, step) => {
  // end가 없을때 : 인자가 하나일때
  if (end === undefined) {
    if (init > 0) {
      end = init;
      init = 1;
    } else if (init < 0) {
      end = -1;
    } else {
      return [0];
    }
  }

  if (step === undefined) step = init > end ? -1 : 1; // step은 3항연산자로 위에서 바로 적용할수 있음

  // exception : step === 0 || init === end
  if (step === 0 || init === end) return [init];

  // exception : wrong direction - step 방향이 잘못되었을때
  if ((init - end) * step > 0) return [];

  const result = [];
  if (step > 0) {
    for (let i = init; i <= end; i += step) result.push(i);
  } else {
    for (let i = init; i >= end; i += step) result.push(i);
  }

  return result;
};

range(1, 10, 1); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log("🚀 range(1, 10, 1):", range(1, 10, 1));

range(1, 10, 2); // [1, 3, 5, 7, 9]
console.log("🚀 range(1, 10, 2):", range(1, 10, 2));

range(1, 10); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log("🚀 range(1, 10):", range(1, 10));

range(10, 1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log("🚀 range(10, 1):", range(10, 1));

range(10, 1, -2); // [10, 8, 6, 4, 2]
console.log("🚀 range(10, 1, -2):", range(10, 1, -2));

range(5); // [1, 2, 3, 4, 5]
console.log("🚀 range(5):", range(5));

range(100); // [1, 2, 3, 4, 5, …, 99, 100]
console.log("🚀 range(100):", range(100));

range(-5); // [-5, -4, -3, -2, -1]
console.log("🚀 range(-5):", range(-5));

range(5, 5); // [5]
console.log("🚀 range(5, 5):", range(5, 5));
range(1, 5, 0); // [1]
range(5, 5, 0); // [5]
range(0, 5); // [0, 1, 2, 3, 4, 5]
range(5, 5, -1); // [5]
range(0, -1); // [0, -1]
range(5, 1, 1); // []
range(0, -3); // [0, -1, -2, -3]
range(1, 5, -1); // []
range(-3, 0); // [-3, -2, -1, 0]
range(1, 5, 6); // [1]
range(5, 1); // [5, 4, 3, 2, 1]
range(0); // [0]
range(0, 0); // [0]
range(0, 0, 5); // [0]
range(2, 1, -5); // [2]
console.log("🚀 range(2, 1, -5):", range(2, 1, -5));

range(0, -1, -5); // [0]
console.log("🚀 range(0, -1, -5):", range(0, -1, -5));

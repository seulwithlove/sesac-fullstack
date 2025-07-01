//=========== 1 : for문을 이용하여 다음과 같이 정확한 숫자를 출력하는 코드를 작성하시오.
// console.log("1 ===========try 1");
// for (let i = 0.1; i < 1; i = i + 0.1) console.log(i);

// console.log("1 ===========try 2");
// for (let i = 0.1; i < 1; i = i + 0.1) console.log(i.toFixed(1)); //string : toFixed()는 항상 str으로 타입변환

console.log("1 ===========try 3");
for (let i = 0.1; i < 1; i = i + 0.1) console.log(+i.toFixed(1)); // number : `+` 붙여서 number type 변환

// // claude advice
// for (let i = 0.1; i <= 1; i += 0.1) {
//   console.log(parseFloat(i.toFixed(1)));
// }

// // 선우님 코드
// for (let i = 1; i <= 10; i++) {
//   console.log(i / 10);
// }

//========= 2 : 1 ~ 10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력 / Math.sqrt() 사용, 무리수만 출력!

console.log("2 ===========try 1");
for (let i = 1; i <= 10; i += 1) console.log(Math.sqrt(i).toFixed(3));
// 무리수가 아닌 수 : 1, 4, 9까지 출력됨

console.log("2 ===========try 2");
for (let i = 1; i <= 10; i += 1) {
  if (!Number.isInteger(Math.sqrt(i))) {
    // Number.isInteger() : 정수인지 확인하는 method
    console.log(Math.sqrt(i).toFixed(3));
  }
}

//============ 3.큰 수가 무리수가 아닐 때 까지 sqrt 값을 출력하는 printIrr함수를 작성하시오.
console.log(
  "🚀 ============ 3.큰 수가 무리수가 아닐 때 까지 sqrt 값을 출력하는 printIrr함수를 작성하시오:"
);
// ex1)  printIrr(5);
// 5 2.236
// 6 2.449
// 7 2.646
// 8 2.828

// ex2) printIrr(9);
// 9 3
// 10 3.162
// 11 3.317
// 12 3.464
// 13 3.606
// 14 3.742
// 15 3.873

// console.log("3 ========= try 1");
// function printIrr(num) {
//   for (num; Math.sqrt(num) % 1 != 0; num += 1) {  // 자기 자신은 실행 X
//     console.log(num, Math.sqrt(num).toFixed(3));
//   }
// }
// printIrr(5);
// printIrr(9);

console.log("3 ========= try 2");
// do... while 문은 무조건 자기 자신을 실행!
function printIrr(num) {
  do {
    console.log(num, Math.sqrt(num).toFixed(3));
    num += 1;
  } while (Math.sqrt(num) % 1 != 0);
}
printIrr(5);
printIrr(9);

// //============ 4.오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, switch문을 사용하지 않은 더 간단한 방법도!
console.log(
  "🚀 ============ 4.오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, switch문을 사용하지 않은 더 간단한 방법도!:"
);
console.log("4 ========= try 1");
const today = new Date();
// const today = new Date().getDay();
const WEEK_NAMES = "월화수목금토일";
console.log(`오늘은 ${WEEK_NAMES[today.getDay()]}요일입니다.`);

console.log("4 ========= try 2: using 'switch statement'"); // using 'switch statement'
switch (today.getDay()) {
  case 1:
    console.log(`오늘은 ${WEEK_NAMES[1]}요일입니다.`);
    break;
  case 2:
    console.log(`오늘은 ${WEEK_NAMES[2]}요일입니다.`);
    break;
  case 3:
    console.log(`오늘은 ${WEEK_NAMES[3]}요일입니다.`);
    break;
  case 4:
    console.log(`오늘은 ${WEEK_NAMES[4]}요일입니다.`);
    break;
  case 5:
    console.log(`오늘은 ${WEEK_NAMES[5]}요일입니다.`);
    break;
  case 6:
    console.log(`오늘은 ${WEEK_NAMES[6]}요일입니다.`);
    break;
  default:
    console.log(`오늘은 ${WEEK_NAMES[7]}요일입니다.`);
}

//======== 5.다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오. (단, 소숫점 자리수는 긴쪽에 맞춘다)

console.log("5 =========try 1");
// check decimal point number
// function getDecimalPlaces(num) {
//   const str = num.toString();
//   if (str.indexOf(".") === -1) return 0; // 소숫점 자리 있는지 확인
//   return str.split(".")[1].length;
// }

// console.log("0.234".split("."));
// console.log("9.345".split(".")[1]); // 소수점자리가 출력 -> 우리가 필요한건 자리수

function addPoints(a, b) {
  function getDecimalPlaces(num) {
    const str = num.toString();
    if (str.indexOf(".") === -1) return 0; // 소숫점 자리 있는지 확인
    return str.split(".")[1].length;
  }

  const maxDecimalPlaces = Math.max(getDecimalPlaces(a), getDecimalPlaces(b));
  return +(a + b).toFixed(maxDecimalPlaces);
}

console.log(addPoints(0.21354, 0.1));
console.log(addPoints(0.14, 0.28));
console.log(addPoints(0.34, 0.226));
console.log(addPoints(0.143, -10.28));
console.log(addPoints(0.143, -10));

//======= 6. 다음 소수 배열의 평균을 소수점 2자리까지 구해보세요. (단, toFixed를 사용하지 말고, 정상적인 숫자가 아닌 경우는 평균에서 제외하세요!)
console.log("6 =============");

const prices = [
  10.34232323,
  15,
  "xxx",
  5.67899,
  null,
  20.9,
  1.005121,
  0,
  15.234,
  undefined,
  0.5,
];

// console.log("  try1 =====");
// let sum;
// let length = prices.length;
// console.log(length);
// for (let i of prices) { if isNaN(i) ? console.log((sum += Number(i))) : i = 0 };

// console.log("  try2 =====");
// let sum = 0;
// let validCount = 0; // check valid number

// for (let i of prices) {
//   if (!isNaN(i) && i !== null && i !== undefined) {
//     sum += Number(i);
//     validCount += 1;
//   }
// }

// const average = sum / validCount;
// const result = Math.round(average * 100) / 100;
// console.log(result);

// console.log("  try3 =====");
// const validPrices = prices.filter(
//   (price) => !isNaN(price) && price !== null && price !== undefined
// );

// const sum = validPrices.reduce((acc, price) => acc + Number(price), 0); // 누적해서 합산하는 reduce method 사용
// const average = sum / validPrices.length;
// const result = Math.round(average * 100) / 100; // 소수점 2자리 오른쪽으로 이동시켜서 정수 만든다음 다시 2자리 소수점 왼쪽 이동하면 소수점 2자리로 바뀜

// console.log(result);

console.log("  try4 ====="); // str 타입도 허용하는 경우
const secondPrices = [
  10.34,
  19,
  "xxx",
  5.678,
  null,
  "20.9",
  1.005,
  0,
  undefined,
  0.5,
];

// const validPrices = secondPrices.filter(
//   (price) =>
//     !isNaN(price) && price !== null && price !== undefined && !!Number(price)  // 여기에서 !!Number(price)가 0을 제외시켜서 평균낼때 값이 달라짐
// );

const validPrices = secondPrices.filter(
  (price) => !isNaN(price) && price !== null && price !== undefined
);

const sum = validPrices.reduce((acc, price) => acc + Number(price), 0); // 누적해서 합산하는 reduce method 사용
const average = sum / validPrices.length;
const result = Math.round(average * 100) / 100; // 소수점 2자리 오른쪽으로 이동시켜서 정수 만든다음 다시 2자리 소수점 왼쪽 이동하면 소수점 2자리로 바뀜

console.log(result);

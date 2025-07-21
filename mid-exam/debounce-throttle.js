/* 
====== Debounce - 함수 이해하기: 자바스크립트의 핵심 개념 1:22:47
 일정시간동안 기다렸다가 실행하는 것
 마지막 함수 호출되면 delay 후에 실행! 
 - 이전 호출은 모두 무시함
 e.g. 자동 검색 키워드 기능




===== Throttle
단위시간 안에 무조건 1회 실행


*/

const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    console.log("Arguments received:", args);
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

// console.log("Starting script at:", Date.now());

const actD = debounce((a) => console.log(a + 1), 1000);
// console.log("=== Debounce comparison ===");
// actD(1);
// actD(2);
// actD(3);
// actD(4);

// const test = (a, b, c) => console.log("Received:", a, b, c);
// const debouncedTest = debounce(test, 2000);

// debouncedTest(1, 2, 3);
// debouncedTest(1, 2, 3);
// debouncedTest(1, 2, 3);
// debouncedTest(1, 2, 3);
// // console.log("Script setup complete at:", Date.now());

const throttle = (fn, delay) => {
  let timer;
  return (...args) => {
    console.log("Throttle called, timer exists?", !!timer);
    if (timer) {
      console.log("Timer exists - ignoring this call");
      return; // 타이머가 있으면 무시
    }
    console.log("No timer - setting up new one");
    timer = setTimeout(() => {
      console.log("Timer expired - executing function");
      fn(...args); // 일정시간 지난후 실행
      timer = null; // 다시 실행하도록 초기화
      console.log("Timer reset to null");
    }, delay);
  };
};

const actT = throttle((a) => console.log("Result:", a + 1), 1000);
// console.log("=== Test 1: Single call ===");
// actT(100);

console.log("=== Test 2: Rapid calls ===");
actT(1);
actT(2);
actT(3);
actT(4);

// setTimeout(() => {
//   console.log("=== Test 3: After delay ===");
//   actT(200);
//   actT(300);
// }, 2000); // Wait 2 seconds, then try more calls

// 1 ~ n까지의 원소로 이루어진 배열을 만드는 함수를 재귀함수로 작성하시오.
// (단, array 메소드를 사용하지 말고, destructuring을 사용하시오) - loop X

function makeArray(n) {
  if (n === 1) return [1];
  const arr = makeArray(n - 1);
  return [...arr, n];
}

function makeReverseArray(n) {
  if (n === 1) return [1];
  const arr = makeReverseArray(n - 1);
  return [n, ...arr];
}
console.log("🚀 makeArray:", makeArray(10));
console.log("🚀 makeReverseArray:", makeReverseArray(5));

function makeArrayTCO(n, acc = []) {
  if (n === 1) return [1, ...acc];
  const arr = makeArrayTCO(n - 1, [n, ...acc]);
  return [...arr];
}

console.log("🚀 makeArrayTCO:", makeArrayTCO(10));

function sumArray(arr) {
  if (arr.length === 0) return 0;
  const [head, ...tail] = arr;
  return head + sumArray(tail);
}
console.log("🚀 sumArray:", sumArray([1, 2, 3, 4]));

function reverseStr(str) {
  if (str.length === 0) return "";
  return reverseStr(str.slice(1)) + str[0];
}
console.log("🚀 reverseStr:", reverseStr("hello"));

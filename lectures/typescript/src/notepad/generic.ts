function swap<T, U>(a: T, b: U) {
  return [b, a];
}
const [a, b] = swap("1", 2);

function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// console.log("🚀 ~ num: ", num);

function func<T>(value: T): T {
  return value;
}

let num2 = func(10);

function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}
let str = returnFirstValue2([1, "hello", "maynameis"]);

function map<T, U>(arr: T[], callback: (item: T) => U): U[] {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]!));
  }
  return result;
}

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]!);
  }
}

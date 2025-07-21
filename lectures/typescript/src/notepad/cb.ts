function customMap(arr: number[], cb: (n: number) => number) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (value != undefined) {
      result.push(cb(value));
    }
  }
  return result;
}

const result = customMap([1, 2, 3], (n) => n * 2);
console.log("🚀 ~ result: ", result);

function customForEach(arr: number[], cb: (n: number) => void) {
  for (const item of arr) {
    cb(item);
  }
}

customForEach([1, 2, 3], (n) => console.log(n));

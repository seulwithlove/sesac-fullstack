interface DeleteArray<T> {}

const deleteArray = <T>(
  array: T[],
  startIdxOrKey: number | keyof T,
  endIdxOrValue: number = array.length
) => {
  const cb =
    typeof startIdxOrKey === "number"
      ? (_, i) => i < startIdxOrKey || i >= endIdxOrValue //index-based removal
      : (a) => a[startIdxOrKey] !== endIdxOrValue; // property-based removal

  return array.filter(cb);
};

const arr = [1, 2, 3, 4];
console.log(deleteArray(arr, 2)); // [1, 2]
console.log(deleteArray(arr, 1, 3)); // [1, 4]
console.log(arr); // [1, 2, 3, 4]

// const users = [
//   { id: 1, name: "Hong" },
//   { id: 2, name: "Kim" },
//   { id: 3, name: "Lee" },
// ];

// console.log(deleteArray(users, 2)); // [Hong, Kim]
// console.log(deleteArray(users, 1, 2)); // [Hong, Lee]
// console.log(deleteArray(users, "id", 2)); // [Hong, Lee]
// console.log(deleteArray(users, "name", "Lee")); // [Hong, Kim]

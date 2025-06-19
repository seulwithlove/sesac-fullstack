// 1. 배열을 객체로 만드시오. (makeObjectFromArray)
// => { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }

data = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];

function makeObjectFromArray(arr) {
  const obj = new Object();
  for (const [key, ...value] of arr) {
    // console.log(key, value);
    obj[key] = value;
  }
  return obj;
}

const dataObj = makeObjectFromArray(data);
console.log("🚀 dataObj:", dataObj);

// 2. 위에서 만든 객체를 다시 배열로 만드시오. (makeArrayFromObject)
// dataObj = { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }
// => [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]

function makeArrayFromObject(obj) {
  const arr = [];
  for (const key in obj) {
    // console.log(key);
    //  [key, obj[key]] = arr;   // error: arr는 빈 array -> 이건 arr에 있는걸 꺼내서 넣으려는 것
    arr.push([key, ...obj[key]]);
  }
  return arr;
}

const dataArr = makeArrayFromObject(dataObj);
console.log("🚀 dataArr:", dataArr);

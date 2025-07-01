// 원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을
// Object의 클래스 메소드 또는 spread(...) 연산자를 사용하지 말고 작성하시오.

/*
1. Shallow copy
- stack에 있는 값만 복사

1) 빈 객체를 만들고
2) in 으로 kim object의 키를 하나씩 꺼내서 
3) 빈 객체의 해당 키 자리에 object 값을 넣어줌 

2. Deep copy
- stack에 있는 참조값을 따라가서 heap에 있는 값까지 전체 복사

- 재귀함수 활용?

*/

const shallowCopy = (obj) => {
  const result = {};
  for (const [k, v] in Object.entries(obj)) result[k] = v;
  return result;
};

// ===== first try.
// const deepCopy = (obj) => {
//   const result = {};
//   for (const o in obj) {
//     if (typeof obj[o] === "object") deepCopy(obj[o]);
//     else result[o] = obj[o];
//   }
//   return result;
// };

const deepCopy = (obj) => {
  const result = {};
  for (const [k, v] of Object.entries(obj)) {
    // typeof null === "object" 이므로 null 조건을 걸어야함!
    if (v !== null && typeof v === "object") result[k] = deepCopy(v);
    else result[k] = v;
  }
  return result;
};

// 1) shallow copy
const kim = { nid: 3, nm: "Kim", addr: "Pusan" };
const newKim1 = shallowCopy(kim);
newKim1.addr = "Daegu";
console.log(kim.addr !== newKim1.addr); // true면 통과!

// 2) 이하 deep copy
const kim2 = {
  nid: 3,
  nm: "Kim",
  addr: { city: "Pusan", road: "Haeundaero", zip: null },
};

const newKim2 = deepCopy(kim2);
console.log("🚀 newKim2:", newKim2);
newKim2.addr.city = "Daegu";
console.log(kim2.addr.city !== newKim2.addr.city); // true면 통과!

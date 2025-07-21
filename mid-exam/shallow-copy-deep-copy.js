// 원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을
// Object의 클래스 메소드 또는 spread(...) 연산자를 사용하지 말고 작성하시오.

/*
1. Shallow copy
- 스택에 있는 값을 복사
- 각 키와 프로퍼티 값을 복사해서 새로운 객체 생성

- kim에 있는 키의 개수만큼 반복문?


2. Deep copy
- 힙에 있는 값까지 새로 복사

*/

// 1) shallow copy
function shallowCopy(obj) {
  const result = {};
  for (let [k, v] of Object.entries(obj)) {
    console.log("k, v:", k, v);
    result[k] = v;
  }
  return result;
}

const kim = { nid: 3, nm: "Kim", addr: "Pusan" };
const newKim1 = shallowCopy(kim);
newKim1.addr = "Daegu";
console.log(kim.addr !== newKim1.addr); // true면 통과!

// // 2) 이하 deep copy
const kim2 = {
  nid: 3,
  nm: "Kim",
  addr: { city: "Pusan", road: "Haeundaero", zip: null },
};

function deepCopy(obj) {
  const result = {};
  for (let [k, v] of Object.entries(obj)) {
    result[k] = typeof v === "object" && v !== null ? deepCopy(v) : v;

    // if (typeof v === "object" && v !== null) {
    //   result[k] = deepCopy(v);
    // } else {
    //   result[k] = v;
    // }
  }
  return result;
}

const newKim2 = deepCopy(kim2);
console.log("🚀 newKim2:", newKim2);
newKim2.addr.city = "Daegu";
console.log("🚀 newKim2.addr.city:", newKim2.addr.city);
console.log("🚀 kim2.addr.city:", kim2.addr.city);
console.log(kim2.addr.city !== newKim2.addr.city); // true면 통과!

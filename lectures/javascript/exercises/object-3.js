// 원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을
// Object의 클래스 메소드 또는 spread(...) 연산자를  사용하지 말고 작성하시오.

// 1) shallow copy
console.log("======== 1. shallow copy =======");
const kim = { nid: 3, nm: "Kim", addr: "Pusan" };

function shallowCopy(obj) {
  let shallCopied = {};
  // console.log("🚀 shallowCopy copied:", shallCopied);
  for (o in obj) {
    shallCopied[o] = obj[o];
  }
  return shallCopied;
}

const newKim1 = shallowCopy(kim);
console.log("🚀 newKim1:", newKim1);
console.log("🚀 kim:", kim);

newKim1.addr = "Daegu";
console.log("🚀 newKim1 after modifying:", newKim1);
console.log("🚀 kim:", kim);
// console.log(kim.addr);
// console.log(newKim1.addr);
console.log(kim.addr !== newKim1.addr); // true면 통과!

// // 2) 이하 deep copy
console.log("======== 2. deep copy =======");
const kim2 = {
  nid: 3,
  nm: "Kim",
  addr: { city: "Pusan", road: "Haeundaero", zip: null },
};

function deepCopy(obj) {
  const deepCopied = {};
  // // === try 1:
  // for (o in obj) {
  //   // console.log(typeof obj[o]);
  //   if (typeof obj[o] == "object") {
  //     // console.log("🚀 deepCopy obj[o]:", obj[o]);
  //     // console.log("o: ", o);
  //     for (i in obj[o]) {
  //       // console.log("i", i);
  //       // console.log("o[i] : ", obj[o][i]);
  //       deepCopied[o] = obj[o][i];
  //     }
  //   }
  //   deepCopied[o] = obj[o];
  // }

  // return deepCopied;

  // easy peasy
  return JSON.parse(JSON.stringify(obj));
  // JSON.stringify(o): 객체를 JSON 문자열로 변환
  // JSON.parse(): JSON 문자열을 새로운 객체로 변환
}

const newKim2 = deepCopy(kim2);
console.log("🚀 newKim2:", newKim2);
newKim2.addr.city = "Daegu";
console.log("🚀 newKim2 after modifying:", newKim2);
console.log("🚀 kim2:", kim2);
console.log(kim2.addr.city !== newKim2.addr.city); // true면 통과!

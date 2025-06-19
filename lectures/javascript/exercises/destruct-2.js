// const user = { id: 1, name: "Hong", addr: { city: "Seoul" } };
// 이 user 객체를 받아서 id와 name을 출력하는 함수를 작성하시오.

const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };
// f1(hong);  f2(hong)  ⇒ 1, 'Hong'
// f1(lee);  f2(lee)  ⇒ 2, 'Lee'

// function f1 : print usr's 'id'
function f1(usr) {
  const { id } = usr;
  return id;
}
// function f2 : print usr's 'name'
function f2(usr) {
  const { name } = usr;
  return name;
}

console.log("🚀 f1(hong):", f1(hong));
console.log("🚀 f2(hong):", f2(hong));
console.log("🚀 f1(lee):", f1(lee));
console.log("🚀 f2(lee):", f2(lee));

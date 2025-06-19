// 다음과 같이 key를 전달하면 해당 값의 첫 글자를 제외한 문자를 리턴하는 함수를
// destructing을 최대한 활용하여 (가),(나),(다) 부분을 작성하시오.

const user = { name: "Hong", passwd: "xyz", addr: "Seoul" };
console.log("🚀 user:", user);
// const { name, ...others } = user;
// console.log("🚀 name:", name);

// ==== try 1.
// function getValueExceptInitial(k) {
//   const { k, ...remains } = user;
//   //   const [first, ...others] = val; // [...val]
//   //   return others.toString();
//   return k;
// }

// error:
// const { k, ...remains } = user;
//         ^
// SyntaxError: Identifier 'k' has already been declared

// ==== try 2.
function getValueExceptInitial(k) {
  const { [k]: val, ...others } = user; //const { [k]: value } = user; // ✅ 'user["name"]' 처럼 동작
  //   console.log("val:", val);
  const [first, ...remains] = val;
  //   console.log("🚀 getValueExceptInitial remains:", remains); // ['o', 'n', 'g'] 문자배열로 쪼개짐
  // why?
  return remains.join("");
}

console.log(getValueExceptInitial("name")); // 'ong'
console.log(getValueExceptInitial("passwd")); // 'yz'
console.log(getValueExceptInitial("addr")); // 'eoul'

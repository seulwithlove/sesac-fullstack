import assert from "assert";
// 아래 users 배열에 대하여 추가/수정/삭제하는 순수 함수를 작성하시오.

/*
전체 함수는 새로운 배열을 리턴

1. addUser
- 기존 users 배열의 객체와  인자로 받은 객체를 배열 마지막에 추가해서 리턴

2. removeUser
- 기존 users 배열에서 인자로 받은 객체를 제외하고 새로운 배열에 담아서 리턴
- arr.filter(fn) : 요소 제거
  - 배열의 원소를 조건을 담은 함수에 전달하고 실행 결과값을 담은 새로운 배열을 리턴
  - 조건을 실행한 값이 true인 원소만 남김


3. changeUser
- 기존 users 배열에서 인자로 받은 첫번째 값 대신에 두번쨰 값으로 바꿔서 배열에 담아 리턴 
- arr.map(fn) : 요소 변경
  - 함수를 실행해서 값을 바꾸거나 그대로 유지
*/

const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };

const users = [kim, lee, park]; // 오염되면 안됨!!

//=========addUser()
const addUser = (user) => [...users, user];

//=========removeUser()

// try 1.
// const removeUser = (user) => {
//   const result = [];
//   for (u of users) {
//     if (u === user) continue;
//     result.push(u);
//   }
//   return result;
// };

// try 2. filter()
const removeUser = (user) => users.filter((u) => u !== user);

//==========changeUser()
const changeUser = (userFrom, userTo) =>
  users.map((u) => (u === userFrom ? userTo : u));

assert.deepStrictEqual(addUser(hong), [kim, lee, park, hong]);
// console.log("🚀 addUser(hong):", addUser(hong));
assert.deepStrictEqual(users, [kim, lee, park]);

assert.deepStrictEqual(changeUser(kim, choi), [choi, lee, park]);
// console.log("🚀 changeUser(kim, choi):", changeUser(kim, choi));
assert.deepStrictEqual(users, [kim, lee, park]);

assert.deepStrictEqual(removeUser(lee), [kim, park]);
// console.log("🚀 removeUser(lee):", removeUser(lee));
assert.deepStrictEqual(users, [kim, lee, park]);

// users.addUser(hong); // [kim, lee, park, hong]
// users.removeUser(lee); // [kim, park]
// users.changeUser(kim, choi); // [choi, lee, park]
// (주의) Array.prototype 조작 금지! (: 모든 배열에 addUser함수가?!)

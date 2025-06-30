import assert from "assert";
// 아래 users 배열에 대하여 추가/수정/삭제하는 순수 함수를 작성하시오.

/*
전체 함수는 새로운 배열을 리턴

1. addUser
1) 빈 배열을 만들고
2) users 의 값을 펼치고
3) 인자로 받은 값을 할당

2. removeUser
- 🚫rest 연산자 활용 
1) const [삭제할변수, ...나머지] = users
- 삭제할 변수를 인자로 받은 값으로 사용해야하는데 새로운 변수 할당을 해야 뒤에 ...나머지 변수를 사용할수 잇음

=> filter(callbackFn) 활용
TODO: filter() 익숙해지기
- 배열의 각 원소를 꺼내서 인자로 받은 콜백함수를 실행함
- 그 실행 결과를 모두 담은 새로운 배열을 리턴

** arrays.filter(e => e !== deletedUser)

- 삭제할 유저이름이 아닌 것만 필터해서 배열에 넣기


3. changeUser
- let a of arr 활용

1) 조건문으로 a가 바꿀 user이면 a대신에 새로운 user이름 넣기

*/

const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };

const users = [kim, lee, park]; // 오염되면 안됨!!

const addUser = (user) => [...users, user];

const changeUser = (fromUser, toUser) => {
  const result = [];
  for (let u of users) {
    if (u === fromUser) result.push(toUser);
    else result.push(u); // else 넣어야 if 조건문 이외의 경우만 실행됨
  }
  return result;
};

const removeUser = (user) => users.filter((u) => u !== user); // 매개변수는 자동으로 타입선언됨!

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

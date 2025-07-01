// 아래 users 배열에 대하여 추가/수정/삭제하는 순수 함수를 작성하시오.

const hong = { id: 1, name: "Hong" };
const lee = { id: 3, name: "Lee" };
const kim = { id: 2, name: "Kim" };
const choi = { id: 5, name: "Choi" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park];

console.log("🚀 users:", users);

const addUser = (arg) => {
  return [...users, arg];
};

console.log("🚀 addUser(hong):", addUser(hong)); // [ { id: 2, name: 'Kim' }, { id: 3, name: 'Lee' }, { id: 4, name: 'Park' }, { id: 1, name: 'Hong' }]

const removeUser = (arg) => {
  return users.filter((user) => user.id !== arg.id);
};

console.log("🚀 removeUser(lee);:", removeUser(lee)); // [ { id: 2, name: 'Kim' }, { id: 4, name: 'Park' } ]

const changeUser = (arg1, arg2) => {
  return users.map((user) => {
    if (user.id === arg1.id) {
      return arg2;
    } else {
      return user;
    }
  });
};

console.log("🚀 changeUser(kim, choi);:", changeUser(kim, choi)); // [ { id: 5, name: 'Choi' }, { id: 3, name: 'Lee' },{ id: 4, name: 'Park' } ]

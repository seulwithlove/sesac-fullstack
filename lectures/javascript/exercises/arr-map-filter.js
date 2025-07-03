/*
보충 문제 : map, filter method 연습
*/

const users = [16, 20, 12, 25];

// filtering above age 18
const adults = users.filter((age) => age >= 18);
console.log("🚀 adults:", adults);

// +1 to all age
const nextYearAge = users.map((age) => age + 1);
console.log("🚀 nextYearAge:", nextYearAge);

//=======

// Find EVEN numbers
const num1 = [1, 2, 3, 4, 5, 6];
const evenNum = num1.filter((n) => n % 2 === 0);
console.log("🚀 evenNum:", evenNum);

// Square all nums

const num2 = [1, 2, 3, 4];
const sqrNum = num2.map((n) => n ** 2);
console.log("🚀 sqrNum:", sqrNum);

// Leave users whose name is 'admin'
const user2 = [
  { id: 1, name: "admin" },
  { id: 2, name: "guest" },
  { id: 3, name: "admin" },
];

// const adminUser = user2.filter((o) => o[name] === "admin"); // why not?
const adminUser = user2.filter((o) => o.name === "admin"); // why not?

console.log("🚀 adminUser:", adminUser);

// Add Mr./Ms. to each name : map은 기존의 배열을 활용해서 새로운 배열을 만든다고 생각!!
const user3 = [
  { id: 1, name: "Lee" },
  { id: 2, name: "Kim" },
];

// 객체 리터럴 그대로 리턴하려면 ({...}) 싸줘야함!
const newName = user3.map((u) => ({
  id: u.id,
  name: `Mr./Ms. ${u.name}`,
}));
console.log("🚀 newName:", newName);

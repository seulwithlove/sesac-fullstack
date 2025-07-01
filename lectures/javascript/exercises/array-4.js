import assert from "assert";

// ex1) 배열의 각 원소를 String으로 변환하시오.
const arr = [1, 2, 3, true];
const ret1 = arr.map((item) => item.toString()); // `${}`
assert.deepStrictEqual(ret1, ["1", "2", "3", "true"]);

// ex2) 다음과 같이 작동하는 classNames 함수를 작성하시오.
// const classNames = (...args) => args.join(" "); // error;
const classNames = (
  ...args // ...args 는 rest parameter 문법 :  여러개 인자를 하나의 배열로 묶어줌
) =>
  // args.filter((ele) => ele.trim().length > 0).join(" "); // 문자길이가 있는 원소만 추출해서 join
  args.filter(Boolean).join(" "); // filter(Boolean)은 truthy 값만 걸러줌!
const ret2 = classNames("", "a b c", "d", "", "e");
assert.strictEqual(ret2, "a b c d e");

// 주의: ' a b c d  e'면 안됨!!
// cf. example in React
// <div classNames=({x ? 'a b' : ''}, {'' ? 'c' : ''}, {z && 'e f'})

// console.log(".trim());

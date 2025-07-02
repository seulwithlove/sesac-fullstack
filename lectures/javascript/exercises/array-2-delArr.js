// 다음과 같은 deleteArray를 순수 함수로 작성하시오.
// 인자 패턴이 달라지기때문에 'overloading'이 필요함 - 매개변수에 따라 다르게 동작
// 1. 인덱스 기반(array) , 2. 객체 속성 기반(obj) 삭제
import assert from "assert";
const arr3 = [1, 2, 3, 4];

function deleteArray(arr, a, b) {
  // 1. 객체 속성 기반 삭제
  if (typeof a === "string" && b !== undefined) {
    return arr.filter((item) => item[a] !== b);
  }

  // 2. Delete based on index
  const start = a;
  const end = b === undefined ? arr.length : b;
  // slice로 분리하고 합치기
  return [...arr.slice(0, start), ...arr.slice(end)];
}

assert.deepStrictEqual(deleteArray(arr3, 2), [1, 2]); // 2번 인덱스 부터 끝까지 지우고 나머지 리턴
assert.deepStrictEqual(deleteArray(arr3, 1, 3), [1, 4]); // 1번 인덱스 부터 3번 인덱스 앞까지 지우고 나머지 리턴
assert.deepStrictEqual(arr3, [1, 2, 3, 4]); // 순수함수 체크

const Hong = { id: 1, name: "Hong" };
const Kim = { id: 2, name: "Kim" };
const Lee = { id: 3, name: "Lee" };
const users = [Hong, Kim, Lee];

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, "id", 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, "name", "Lee"), [Hong, Kim]);

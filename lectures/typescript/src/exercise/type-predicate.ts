const isStringNumber = (value: unknown): value is [string, number] =>
  Array.isArray(value) &&
  value.length === 2 &&
  typeof value[0] === "string" &&
  typeof value[1] === "number";

const f1 = (value: number | string | boolean | [string, number]) => {
  if (isStringNumber(value)) {
    console.log(value[0].toUpperCase(), value[1].toFixed());
  }
};

// ============
// 이런 문제가 더 실무에서 많음
// 타입 확장

interface Animal {}
interface Dog extends Animal {
  name: string;
}
interface Cat extends Animal {
  punch(): void;
}
class Retriever implements Dog {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

// type guard function
function isDog(a: Animal): a is Dog {
  // 이 부분을 작성하시오 : 최대한 걸수 있는게 있는지 고민해서 => 일종의 테스트 코드 짜는것과 동일!
  return typeof a === "object" && a !== null && "name" in a && !("punch" in a);
}

export {};

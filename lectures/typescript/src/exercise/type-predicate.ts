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

interface Animal {}
interface Dog extends Animal {
  name: string;
}
interface Cat extends Animal {
  punch(): void;
}
class Retriever implements Dog {
  name = "Happy";
}

// type guard function
function isDog(a: Animal): a is Dog {
  // 이 부분을 작성하시오
  return "name" in a; // 'key' in obj : 특정 속성이 있는지 런타임에서 체크
}

export {};

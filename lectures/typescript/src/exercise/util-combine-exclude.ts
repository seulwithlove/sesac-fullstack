// 두 타입을 합치고 일부는 제외하는 CombineExclude 유틸리티 타입 만들기
// * 힌트: 두 타입의 같은 key 라면 union type, 그렇지 않다면 각 타입의 key type

interface IUser {
  id: number;
  age: number;
  name: string;
}

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

type t = [keyof IUser & keyof IDept];
type tt = [keyof (IUser & IDept)];
type CombineExclude = {};
type ICombineExclude = CombineExclude<IUser, IDept, "name" | "dname">;

// test code
let combineExclude: ICombineExclude = {
  id: 0,
  age: 33,
  captain: "ccc",
};

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

type Change<T, K extends keyof T, U> = {
  [k in keyof T]: k extends K ? U : T[k];
};
type DeptCaptain = Change<IDept, "id" | "captain", IUser>;
// type Err = Change<IDept, "xxx", IUser>; // 존재하지 않는 키는 Error!!!

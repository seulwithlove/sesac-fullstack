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
  [P in keyof T]: P extends K ? U : T[P];
};
type DeptCaptain = Change<IDept, "captain", IUser>;
// type Err = Change<IDept, "xxx", IUser>; // 존재하지 않는 키는 Error!!!

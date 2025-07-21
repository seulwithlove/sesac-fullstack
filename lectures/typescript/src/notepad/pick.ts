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

type Except<T, U> = { [k in keyof T as k extends U ? never : k]: T[k] };

type O<T> = Except<T, "id" | "age">;
// type O<T> = Omit<T, "id" | "age">;

let o: O<IDept> = {
  dname: "xx",
  captain: "ccc",
};
type Odept = O<IDept>; // ?

type P1<T extends IDept> = Pick<T, "id" | "age">; // Error: extends 조건 걸어야 해결
type P<T extends IUser | IDept> = Pick<T, "id" | "age">;
type Pdept = P<IDept>; // ?

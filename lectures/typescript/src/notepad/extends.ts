interface IDept {
  id: number;
  age: number;
  dname: string;
  captain: string;
}

interface IUser {
  id: number;
  age: number;
  name: string;
}

type Except<T, U> = T extends U ? never : T; // never는 씹힌다!(같으면 제외)
type Ex0 = Except<IUser, IDept>; // IUser
type Ex1 = Except<keyof IUser, keyof IDept>; // name
type Ex2 = Except<keyof IDept, keyof IUser>; // dname | captain

type Intersect<T, U> = T extends U ? T : never; // never는 씹힌다!(같으것만!)
type Ext1 = Intersect<keyof IUser, keyof IDept>; // id | age
type Ext2 = Intersect<keyof IDept, keyof IUser>; // id | age

export {};

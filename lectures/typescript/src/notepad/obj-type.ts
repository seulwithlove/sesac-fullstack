export type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  hometown: string;
};

let animal: Animal = {
  name: "giraff",
  color: "yellow",
};

let dog: Dog = {
  name: "doggy",
  color: "brown",
  hometown: "korea",
};

animal = dog;
// dog = animal; // error! downcasting!

//=======

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "One bite react",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;
// programmingBook = book; // error!

export {};

import assert from "assert";

Array.prototype.mapBy = function (prop) {
  return this.map((a) => a[prop]);
};

Array.pprototype.filterBy = function (prop, val, isInclude = false) {
  return this.filter((a) => a[prop] === value);
};

Object.defineProperties(Array.prototype, {
  firstObject: {
    get() {
      return this[0];
    },
  },
  lastObject: {
    get() {
      return this.at(-1);
    },
  },
});

class Stack(){
    #arr;
    constructor(...args){
        this.#arr = args ?? [];
    }
    push(x) {
        this.#arr.push(x);
    }
    pop()
}
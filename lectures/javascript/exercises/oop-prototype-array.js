import assert from "assert";

const arr = [1, 2, 3, 4, 5];
const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const users = [hong, lee, kim];

// prop = key 와 같음!
// 해당 key에 대한 값을 추출
Array.prototype.mapBy = function (prop) {
  return this.map((a) => a[prop]);
};

// 검색할때 어떤 값이 있는지, 없는지를 확인할때 isInclude 필요
Array.prototype.filterBy = function (prop, value, isInclude = false) {
  return this.filter((a) =>
    isInclude ? a[prop].includes(value) : a[prop] === value
  );
};

Array.prototype.rejectBy = function (prop, value, isInclude = false) {
  const cb = isInclude
    ? (a) => !a[prop].includes(value)
    : (a) => a[prop] !== value;
  return this.filter(cb);
};

Array.prototype.findBy = function (prop, value) {
  return this.find((a) => a[prop] === value);
};

Array.prototype.sortBy = function (prop_direction) {
  const [prop, direction = "asc"] = prop_direction.split(":");
  const dirNum = direction === "asc" ? 1 : -1;
  return this.sort((a, b) => (a[prop] > b[prop] ? dirNum : -dirNum));
};

Object.defineProperties(Array.prototype, {
  firstObject: {
    get() {
      return this[0];
    },
    set(x) {
      this[0] = x;
    },
  },
  lastObject: {
    get() {
      return this.at(-1);
    },
    set(x) {
      this[this.length - 1] = x;
    },
  },
});

assert.deepStrictEqual([arr.firstObject, arr.lastObject], [1, 5]);
assert.deepStrictEqual(users.mapBy("id"), [1, 3, 2]);
assert.deepStrictEqual(users.mapBy("name"), ["Hong", "Lee", "Kim"]);
assert.deepStrictEqual(users.filterBy("id", 2), [kim]);
assert.deepStrictEqual(users.filterBy("name", "i", true), [kim]); // key, value일부, isInclude
assert.deepStrictEqual(users.rejectBy("id", 2), [hong, lee]);
assert.deepStrictEqual(users.rejectBy("name", "i", true), [hong, lee]);
assert.deepStrictEqual(users.findBy("name", "Kim"), kim);
assert.deepStrictEqual(users.sortBy("name:desc"), [lee, kim, hong]);
assert.deepStrictEqual(users.sortBy("name"), [hong, kim, lee]);
assert.deepStrictEqual(users.firstObject, hong);
assert.deepStrictEqual(users.lastObject, lee);
users.firstObject = kim;
assert.deepStrictEqual(users.firstObject, kim);
users.lastObject = hong;
assert.deepStrictEqual(users.lastObject, hong);

const hongx = { id: 1, name: "Hong", dept: "Server" };
const kimx = { id: 2, name: "Kim", dept: "Server" };
const leex = { id: 3, name: "Lee", dept: "Client" };
const users = [hongx, leex, kimx];

// JS 객체의 key로 사용할수 있는 타입
type PropType = string | number | symbol;

declare global {
  interface Array<T> {
    firstObject: T;
    lastObject: T;
    mapBy<P extends keyof T>(prop: P): T[P][];
    filterBy<P extends keyof T>(
      prop: P,
      value: T[P],
      isIncludes?: boolean
    ): T[];
    rejectBy<P extends keyof T>(
      prop: P,
      value: T[P],
      isIncludes?: boolean
    ): T[];
    findBy<P extends keyof T>(prop: P, value: T[P]): T | undefined;
    sortBy<P extends keyof T | `${keyof T & string}:${"asc" | "desc"}`>(
      prop: P
    ): T[];
    groupBy<GF extends (a: T) => PropType>(gfn: GF): Record<PropType, T[]>;
  }
}

// 배열의 각 요소에서 특정 속성만 꺼내서 새로운 배열을 만드는 함수
Array.prototype.mapBy = function <T, P extends keyof T>(
  this: T[],
  prop: P
): T[P][] {
  return this.map((a) => a[prop]);
};
console.log(users.mapBy("id")); // [1, 3, 2];
console.log(users.mapBy("name")); // ['Hong', 'Lee', 'Kim']);

// 객체 배열에서 prop === value인 항목만 필터링
// isIncludes가 true면 : prop 이 문자열/배열 일때 includes(value) 조건으로 작동
Array.prototype.filterBy = function <T, P extends keyof T>(
  this: T[],
  prop: P,
  value: T[P],
  isIncludes: boolean = false
) {
  if (isIncludes) {
    return this.filter((a) => {
      return (
        Array.isArray(a[prop]) ||
        (typeof a[prop] === "string" &&
          typeof value === "string" &&
          a[prop].includes(value))
      );
    });
  }
  return this.filter((a) => a[prop] === value);
};
console.log("filterBy", users.filterBy("id", 2)); // [kim]);
console.log("filterBy", users.filterBy("name", "i", true)); // [kim]

// 객체 배열에서 prop !== value인 항목만 필터링
// 조건에 해당하지 않는 요소만 반환

Array.prototype.rejectBy = function <T, P extends keyof T>(
  this: T[],
  prop: P,
  value: T[P],
  isIncludes: boolean = false
) {
  if (isIncludes) {
    return this.filter((a) => {
      return !(
        Array.isArray(a[prop]) ||
        (typeof a[prop] === "string" &&
          typeof value === "string" &&
          a[prop].includes(value))
      );
    });
  }
  return this.filter((a) => a[prop] !== value);
};
console.log(users.rejectBy("id", 2)); // [hong, lee]
console.log(users.rejectBy("name", "i", true)); // [hong, lee]

// 조건에 맞는 하나의 요소 반환
Array.prototype.findBy = function <T, P extends keyof T>(
  this: T[],
  prop: P,
  value: T[P]
) {
  return this.find((a) => a[prop] === value);
};
console.log(users.findBy("name", "Kim")); //  kim;

// 속성 기준 정렬(asc/desc)
Array.prototype.sortBy = function <
  T,
  P extends keyof T | `${keyof T & string}:${"asc" | "desc"}`,
>(this: T[], prop: P) {
  const [key, dir = "asc"] = (
    typeof prop === "string" && prop.includes(":") ? prop.split(":") : [prop]
  ) as [keyof T, "asc" | "desc"];

  const direction = dir.toLowerCase() === "desc" ? -1 : 1;
  return this.slice().sort((a, b) =>
    a[key] > b[key] ? direction : -direction
  );
};
console.log(users.sortBy("name:desc")); //  [lee, kim, hong];
console.log(users.sortBy("name")); // [hong, kim, lee]

// 특정 기준으로 그룹핑
Array.prototype.groupBy = function <T, GF extends (a: T) => PropType>(
  this: T[],
  gfn: GF
) {
  const ret: Record<PropType, T[]> = {};
  for (const a of this) {
    // this는 users!
    const k = gfn(a);
    ret[k] ??= []; // null or undefined면 빈 배열로 초기화
    ret[k].push(a);
  }

  return ret;
};
console.log(users.groupBy(({ dept }) => dept));
// (user) => {
//   const dept = user.dept;
//   return dept;
// }

/*
{
  Server: [
    { id: 1, name: 'Hong', dept: 'Server' },
    { id: 2, name: 'Kim', dept: 'Server' },
  ],
  Client: [
    { id: 3, name: 'Lee', dept: 'Client' }
  ],
}
*/

// 속성처럼 접근하고 싶을때 get/set을 활용
// users.firstObject
Object.defineProperties(Array.prototype, {
  firstObject: {
    get<T>(this: T[]) {
      return this[0];
    },
    set<T>(this: T[], value: T) {
      this[0] = value;
    },
  },
  lastObject: {
    get<T>(this: T[]) {
      return this.at(-1);
    },
    set<T>(this: T[], value: T) {
      this[this.length - 1] = value;
    },
  },
});

console.log(users);
console.log("first/last=", users.firstObject.name, users.lastObject.name); // hong/lee
users.firstObject = kimx; // 객체를 넣는것!
users.lastObject = hongx;
console.log("first/last=", users.firstObject.name, users.lastObject.name); // kim/hong
console.log(users);

export {};

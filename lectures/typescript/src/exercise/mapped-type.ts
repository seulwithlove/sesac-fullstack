type User = {
  id: number;
  name: string;
  12: number;
};

// 1) 다음에서 key가 number 타입이면 key앞에 user_를 붙이세요.

type UserNumKeyPrefix = {
  [k in keyof User as k extends number ? `user_${k}` : k]: User[k];
};

// 2) 다음에서 key가 string 타입인 것만 남기세요.

type UserOnlyStrKey = {
  [k in keyof User as k extends string ? k : never]: User[k];
};

// 3) User에서 key가 string 타입인 것만 남기고 prefix(user_)를 붙이세요 (2가지)

type UserOnlyStrKeyPrefix1 = {
  [k in keyof User as k extends string ? `user_${k}` : never]: User[k];
};

type UserOnlyStrKeyPrefix2 = {
  [k in keyof User as k extends number ? never : `user_${k}`]: User[k];
};

export {};

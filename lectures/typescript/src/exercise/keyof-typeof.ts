// 1) 다음에서 T1과 동일한 타입으로 T2를 정의하시오.

const cart = {
  X: 1,
  Y: 2,
  Z: 3,
};

type T1 = "X" | "Y" | "Z";
type T2 = keyof typeof cart; //이 부분을 작성하시오;

// 2) 다음에서 T3과 동일한 타입으로 T4를 정의하시오.(valof)

const constCart = {
  X: 1,
  Y: 2,
  Z: 3,
} as const;

type T3 = 1 | 2 | 3;
type T4 = (typeof constCart)[keyof typeof constCart]; //이 부분을 작성하시오;

export {};

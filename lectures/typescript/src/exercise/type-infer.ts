// 특정 함수의 인자 타입을 추출하는 유틸리티 타입을 작성하시오. (infer)

function add(a: number, b: string) {
  return `${a} - ${b}`;
}

// let test: number = 3;

// function add2(a: number, b: number, c: string) {
//   return a + b + (+c);
// }

type GetParams<F> = F extends (...args: infer A) => any ? A : never;
// A: args의 타입들
// F extends (...args: infer A) => any : 이부분은 함수인지를 확인하려는 것! 함수이면 A 타입이 되고, 함수가 아니면 never

// type FirstArgs<F> = GetParams<F>[0];
type FirstArgs<T> = Parameters<T>[0];

type SecondArgs<F> = GetParams<F>[1];
type Args<F> = GetParams<F>[number];

type A = FirstArgs<typeof add>; // number
type B = SecondArgs<typeof add>; // string
type C = Args<typeof add>; // number | string
// type D = FirstArgs<typeof test>;
// type E = FirstArgs<typeof add2>;
// type F = SecondArgs<typeof add2>;
// type G = Args<typeof add2>; // number | string

type AX = Args<typeof String.prototype.endsWith>;
// ⇒ string | number | undefined
type AXX = Args<typeof String.prototype.charAt>;
// ⇒ number

export {};

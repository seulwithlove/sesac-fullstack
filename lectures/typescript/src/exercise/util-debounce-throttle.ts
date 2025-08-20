// debounce와 throttle 함수를 TypeScript로 작성하시오.
// 방법1) …args를 Generic으로!

// 방법2) cb 을 Generic으로!

function debounce<T>(cb: T, delay: number) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>[]) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args);
  };
}

function throttle<T>(cb: T, delay: number) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>[]) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args), (timer = null);
    }, delay);
  };
}

// test
const debo = debounce((a: number, b: string) => console.log(a + 1, b), 1000);
for (let i = 10; i < 15; i++) debo(i, "abc"); // 15, 'abc'

const thro = throttle((a: number) => console.log(a + 1), 1000);
for (let i = 10; i < 15; i++) thro(i); // 11

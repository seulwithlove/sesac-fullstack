// function findSum(n) {
//   if (n <= 1) return n;
//   return n + findSum(n - 1);
// }
// console.log("🚀 find-sum:", findSum(10000));

let sum = 0;
for (let i = 1; i <= 10000; i += 1) sum += i;
console.log("🚀  sum:", sum, neverOverflowSum(10000));

// 스택 털어주기
// 함수 종료 조건: return, threw
function neverOverflowSum(n) {
  let tot = 0;
  let curRunN = n; // 언제까지 돌았는지 세는 카운트
  // 순수함수를 만들기 위해 함수 내부에 만들어줌
  function runner(m) {
    curRunN = m;
    if (m <= 1) return m;
    try {
      return m + runner(m - 1);
    } catch (err) {
      return 0;
    }
  }
  while (curRunN > 1) {
    // curRunN이 1이면 끝남
    console.log("curRunN=", curRunN);
    tot += runner(curRunN);
    console.log("curRunN=", curRunN);
  }
  return tot;
}

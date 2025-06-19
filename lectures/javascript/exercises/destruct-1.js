// 다음 arr의 첫 번째 원소와 두 번째 원소를 swap 해보세요.
// (hint) [a, b] = [b, a];

const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]]; // arr 내부 값을 변경
// [arr[0], arr[1]] = [2, 3];
console.log(arr);
// 출력결과: [2, 1]

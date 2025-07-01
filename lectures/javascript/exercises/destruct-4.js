// 다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오.
// (destructuring 활용)

const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
// cf. const id1 = arr[0][0].id; // Bad
// const     ?     = arr;

const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
console.log(id1, id2, id3);
// 출력결과: 1 2 3

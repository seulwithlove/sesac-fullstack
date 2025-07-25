/*
TODO: 강의영상 보고, 코드 정리
- 인프런 강의
- 룸 강의

=> 내용 정리 안되는 경우 수업때 질문!



*/

import assert from "assert";

const ALPHA_NUMERIC = [..."LMNRlmnr013678"].map((a) => a.charCodeAt());
// ["L", "M", "N", "R", "l", "m", "n", "r",...]
console.log("🚀 ~ ALPHA_NUMERIC: ", ALPHA_NUMERIC);
const ㄱ = "ㄱ".charCodeAt();
const ㅎ = "ㅎ".charCodeAt();
const 가 = "가".charCodeAt();
const 힣 = "힣".charCodeAt();
// for (let i = 가; i <= "깋".charCodeAt(); i++) {
//   console.log(i - 44032, String.fromCharCode(i), (i - 44032) % 28);
// }

const isEndJaum = (str) => {
  const lastChar = str.charCodeAt(str.length - 1); // 마지막글자 charcode

  // 1. 단독 자음인지 검사
  // if (/[ㄱ-ㅎ]/.test(lastChar)) return true;
  if (lastChar >= ㄱ && lastChar <= ㅎ) return true;

  // 2. 한글 완성형이고 받침이 있는지 확인
  if (lastChar >= 가 && lastChar <= 힣 && (lastChar - 가) % 28 !== 0)
    return true;

  // 3. 알파벳, 숫자 예외처리
  if (ALPHA_NUMERIC.includes(lastChar)) return true;

  return false;
};

// 문자열이 한글 자음으로 끝나는지 체크하는 함수를 작성하시오.
isEndJaum("강원도"); // false
isEndJaum("바라당"); // true
isEndJaum("ㅜㅜ"); // false
isEndJaum("케잌"); // true
isEndJaum("점수 A"); // false lmnr   cf. isEndJaum('알파벳L')은 true
isEndJaum("24"); // false   cf. isEndJaum('23')은 true 136780

assert.equal(isEndJaum("아지오"), false);
assert.equal(isEndJaum("북한강"), true);
assert.equal(isEndJaum("뷁"), true);
assert.equal(isEndJaum("강원도"), false);
assert.equal(isEndJaum("바라당"), true);
assert.equal(isEndJaum("ㅜㅜ"), false);
assert.equal(isEndJaum("케잌"), true);
assert.equal(isEndJaum("점수 A"), false);
assert.equal(isEndJaum("알파벳L"), true);
// assert.equal(isEndJaum("24"), false);
// assert.equal(isEndJaum("23"), true);

//===================================================

// 조사 '이/가, 을/를, 은/는'를 알아서 붙이는 함수를 작성하시오.
// `고성군${iga("고성군")}`; // 고성군이  cf. `강원도${iga('강원도')}` ⇒ 강원도가
// `고성군${eunun("고성군")}`; // 고성군은  cf. `강원도${eunun('강원도')}` ⇒ 강원도는
// `고성군${eulul("고성군")}`; // 고성군을  cf. `강원도${eulul('강원도')}` ⇒ 강원도를
// (추가) ~이어야/여야, ~이랑/랑           isEndJaum('북면') ?  '이' : '가')

// const iga = (str) => {
//   if (isEndJaum(str)) return "이";
//   return "가";
// };
// const eunun = (str) => {
//   if (isEndJaum(str)) return "은";
//   return "는";
// };
// const eulul = (str) => {
//   if (isEndJaum(str)) return "을";
//   return "를";
// };
// const eyuya = (str) => {
//   if (isEndJaum(str)) return "이어야";
//   return "여야";
// };

const josa = (str, jaum, moum) => (isEndJaum(str) ? jaum : moum);
const iga = (str) => josa(str, "이", "가");
const eunun = (str) => josa(str, "은", "는");
const eulul = (str) => josa(str, "을", "를");
const eyuya = (str) => josa(str, "이어야", "여야");

assert.equal(`고성군${iga("고성군")}`, "고성군이");
assert.equal(`고성군${eunun("고성군")}`, "고성군은");
assert.equal(`고성군${eulul("고성군")}`, "고성군을");
assert.equal(`성동구${iga("성동구")}`, "성동구가");
assert.equal(`성동구${eunun("성동구")}`, "성동구는");
assert.equal(`성동구${eulul("성동구")}`, "성동구를");
assert.equal(`고성군${eyuya("고성군")}`, "고성군이어야");
assert.equal(`성동구${eyuya("성동구")}`, "성동구여야");

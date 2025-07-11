// 초성 검색을 하는 search함수를 정규식을 이용하여 작성하시오.

/*
👉핵심 개념: 한글 초성 분해
한글은 유니코드상에서 초성, 중성, 종성을 계산할 수 있는 구조

- 한글 완성형 시작: "가" → 유니코드 0xAC00 (44032)
- 초성은 19개: ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ
- 한 글자당 588개의 조합 (21중성 × 28종성)
==> 초성 인덱스 구하는 방법 : 
  초성 인덱스 = Math.floor((charCode - 0xAC00) / 588)
 
-------
s에 있는 주소에서 초성으로 검색하기
- 한글 음절 구성 : 초성 + 중성 + 종성

- 초성: 해당 음절의 자음
  - 강원도 -> ㄱㅇㄷ

==> 범위가 가-깋 사이에 있다면 ㄱ으로 검색되면 됨
  - ㄱ 범위 => 가 ~ 깋 / regex range : [가-깋]
*/

import assert from "assert";

const s = ["강원도 고성군", "고성군 토성면", "토성면 북면", "북면", "김1수"];

const CHOSUNG = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
const BEGIN = "가까나다따라마바빠사싸아자짜차카타파하";
const searchByKoreanInitialSound = (data, input) => {
  const reg = [...input].reduce((acc, a) => {
    const idx = CHOSUNG.indexOf(a);
    const begin = BEGIN[idx]; // ㄱ → '가'
    const end = BEGIN[idx + 1].charCodeAt(0) - 1; // 다음 초성 시작직전
    return `${acc}[${a}${begin}-${String.fromCharCode(end)}]+`; // 이렇게 하나씩 다 쌓는 이유: 한글이 아닌 문자가 포함될 경우를 대비!
  }, "");
  const regExp = new RegExp(reg);
  return data.filter((d) => regExp.test(d));
};

// searchByKoreanInitialSound(s, "ㄱㅅㄱ");
// searchByKoreanInitialSound(s, "ㅌㅅㅁ");
// searchByKoreanInitialSound(s, "ㅂㅁ");
// searchByKoreanInitialSound(s, "ㅍㅁ");
// searchByKoreanInitialSound(s, "ㄱ1ㅅ");

assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱㅇ"), [
  "강원도 고성군",
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱㅅㄱ"), [
  "강원도 고성군",
  "고성군 토성면",
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅌㅅㅁ"), [
  "고성군 토성면",
  "토성면 북면",
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅂㅁ"), [
  "토성면 북면",
  "북면",
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅍㅁ"), []);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱ1ㅅ"), ["김1수"]);

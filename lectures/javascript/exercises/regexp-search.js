// 초성 검색을 하는 search함수를 정규식을 이용하여 작성하시오.

/*
👉함수 핵심 기능:
"사용자가 입력한 초성 문자열을 정규식으로 변환해, 해당 초성 패턴과 일치하는 한글 단어를 필터링한다."
-------
s에 있는 주소에서 초성으로 검색하기
- 한글 음절 구성 : 초성 + 중성 + 종성

- 초성: 해당 음절의 자음
  - 강원도 -> ㄱㅇㄷ

==> 범위가 가-깋 사이에 있다면 ㄱ으로 검색되면 됨
  - ㄱ 범위 => 가 ~ 깋 / regex range : [가-깋]

초성, 시작점 배열을 활용해서 
입력으로 받은 값의 초성배열의 인덱스 값을 구하고,
  - 만약 입력으로 받은 값이 초성배열에 없는 경우 예외처리 => 바로 acc에 추가
  - 해당 인덱스에 해당하는 BEGIN의 값이 그 초성의 시작지점, 
그 다음 인덱스 바로 직전(= 1개 전) 까지가 그 초성의 마지막 지점
  - 여기에서의 코드값(charCodeAt(0))을 알아내서 이 코드값을 이용해 문자로 변환 : String.fromCharCode
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

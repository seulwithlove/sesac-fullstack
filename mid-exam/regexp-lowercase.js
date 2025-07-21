// 문자열 str에서 대문자만 골라 소문자로 변환하세요. (trythis: 대문자 <-> 소문자)
// upperToLower('Senior Coding Learning JS');
//          // ⇒ '*s*-enior *c*-oding *l*-earning *j*-*s*-'

/*
- replace의 콜백구조
str.repalce(pattern, replacement)
str.replace(regex, function(match, group1, group2, ..., offset, input) {})
                              |       |      |
                        여기 부분을 인자로 사용하는 것!

function replacer(match, p1, p2, …,  pN, offset, string, groups) {
  return replacement;
}
===> 정규식에서 () 캡처 그룹을 만들면, 
      replace 콜백에서 두 번째 인자부터 차례대로 그룹 결과가 들어감

*/

import assert from "assert";

// function upperToLower(str = "") {
//   return str.replace(/[A-Z]/g, function result(string) {
//     return `*${string.toLowerCase()}*-`;
//   });
// }

function upperToLower(str) {
  return str.replace(
    /([A-Z]*)([a-z]*)/g,
    (_foundStr, upper, lower) => `${upper.toLowerCase()}${lower.toUpperCase()}`
  );
}

// // upper to lower
// assert.strictEqual(
//   upperToLower("Senior Coding Learning JS"),
//   "*s*-enior *c*-oding *l*-earning *j*-*s*-"
// );

// lower <-> upper
assert.strictEqual(
  upperToLower("Senior Coding Learning JS"),
  "sENIOR cODING lEARNING js"
);

upperToLower("Senior Coding Learning JS");
console.log(
  `🚀 upperToLower("Senior Coding Learning JS"):`,
  upperToLower("Senior Coding Learning JS")
);

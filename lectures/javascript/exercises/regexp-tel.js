// 전화번호를 정확한 형식으로 출력하는 함수를 작성하시오.

// telfmt("0101234567"); // '010-123-4567'
// telfmt("01012345678"); // '010-1234-5678'
// telfmt("0212345678"); // '02-1234-5678'
// telfmt("021234567"); // '02-123-4567'
// telfmt("0331234567"); // '033-123-4567'
// telfmt("15771577"); // '1577-1577'
// telfmt("07012341234"); // '070-1234-1234'
// ex) in JSX
//    <small>{telfmt(user.tel)}</small>

/*
1. 총 length가 8개인 경우
- 4-4 나누기
- index 4에 - 추가

2. 지역번호 2자리 : 02
- 9자리 : 02-[3]-[4]
- 10자리 : 02-[4]-[4]

3. 지역번호 3자리, 휴대폰 010
- 10자리 : [3]-[3]-[4]
- 11자리 : [3]-[4]-[4]

*/

import assert from "assert";

// const telfmt = (numStr) => {
//   const len = numStr.length;
//   if (/^\d{8}$/.test(numStr)) return numStr.replace(/(\d{4})(\d{4})/, "$1-$2");
//   if (/^02\d{len-2}}/)
//     return numStr.replace(/(02)(\d{(len-4)})(\d{4})/, "$1-$2-$3");
//   return numStr.replace(/(\d{3})(\d{(len-4)})(\d{4})/, "$1-$2-$3");
// };
// 정규식에서는 변수를 사용할수 없음!

const telfmt = (numStr) => {
  if (/^\d{8}$/.test(numStr)) {
    return numStr.replace(/(\d{4})(\d{4})/, "$1-$2");
  }
  if (/^02\d+/.test(numStr)) {
    return numStr.replace(/(02)(\d+)(\d{4})/, "$1-$2-$3");
  }
  if (/^\d{10}$/.test(numStr)) {
    return numStr.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  }
  if (/^\d{11}$/.test(numStr)) {
    return numStr.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  }
  if (/^\d{12}$/.test(numStr)) {
    return numStr.replace(/(\d{4})(\d{4})(\d{4})/, "$1-$2-$3");
  }
};

assert.deepStrictEqual(telfmt("0101234567"), "010-123-4567");
assert.deepStrictEqual(telfmt("01012345678"), "010-1234-5678");
assert.deepStrictEqual(telfmt("0212345678"), "02-1234-5678");
assert.deepStrictEqual(telfmt("021234567"), "02-123-4567");
assert.deepStrictEqual(telfmt("0331234567"), "033-123-4567");
assert.deepStrictEqual(telfmt("15771577"), "1577-1577");
assert.deepStrictEqual(telfmt("07012341234"), "070-1234-1234");
assert.deepStrictEqual(telfmt("050712345678"), "0507-1234-5678");

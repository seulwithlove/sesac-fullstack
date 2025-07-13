// 전화번호를 정확한 형식으로 출력하는 함수를 작성하시오.
/* 
=> 경우에 따라 해당 경우의 숫자 패턴을 가진 정규식을 활용해 배열을 출력한다
/[\d{}]-[\d{}]-[\d{}]/

1. 지역번호인 경우
- 지역번호 2자리
  - 9개: ㅇㅇ-ㅇㅇㅇ-ㅇㅇㅇㅇ
  /[\d{2}]-[\d{3}]-[\d{4}]/
  - 10개: ㅇㅇ-ㅇㅇㅇㅇ-ㅇㅇㅇㅇ : 02-ㅇㅇㅇㅇ-ㅇㅇㅇㅇ

- 지역번호 3자리
  - 10개: ㅇㅇㅇ-ㅇㅇㅇ-ㅇㅇㅇㅇ
  - 11개: ㅇㅇㅇ-ㅇㅇㅇㅇ-ㅇㅇㅇㅇ

2. 핸드폰 번호인 경우
- 10개: ㅇㅇㅇ-ㅇㅇㅇ-ㅇㅇㅇㅇ

- 11개: ㅇㅇㅇ-ㅇㅇㅇㅇ-ㅇㅇㅇㅇ


3. 그외
- 8개 : ㅇㅇㅇㅇ-ㅇㅇㅇㅇ

- 11개 : ㅇㅇㅇ-ㅇㅇㅇㅇ-ㅇㅇㅇㅇ

- 12개 : ㅇㅇㅇㅇ-ㅇㅇㅇㅇ-ㅇㅇㅇㅇ


*/

import assert from "assert";

const telfmt = (numStr) => {
  const len = numStr.length;
  if (/^02\d+/.test(numStr)) {
    return numStr.replace(/(02)(\d{3,4})(\d{4})/, "$1-$2-$3");
  }
  if (/^\d{8}$/.test(numStr)) {
    return numStr.replace(/(\d{4})(\d{4})/, "$1-$2");
  }
  if (/^\d{10}$/.test(numStr)) {
    return numStr.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3");
  }
  if (/^\d{11}$/.test(numStr)) {
    return numStr.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3");
  }
  if (/^\d{12}$/.test(numStr)) {
    return numStr.replace(/(\d{4})(\d{3,4})(\d{4})/, "$1-$2-$3");
  }
};

// telfmt("0101234567"); // '010-123-4567'
// telfmt("01012345678"); // '010-1234-5678'
// telfmt("0212345678"); // '02-1234-5678'
// telfmt("021234567"); // '02-123-4567'
// telfmt("0331234567"); // '033-123-4567'
// telfmt("15771577"); // '1577-1577'
// telfmt("07012341234"); // '070-1234-1234'
// ex) in JSX
//    <small>{telfmt(user.tel)}</small>

assert.deepStrictEqual(telfmt("0101234567"), "010-123-4567");
assert.deepStrictEqual(telfmt("01012345678"), "010-1234-5678");
assert.deepStrictEqual(telfmt("0212345678"), "02-1234-5678");
assert.deepStrictEqual(telfmt("021234567"), "02-123-4567");
assert.deepStrictEqual(telfmt("0331234567"), "033-123-4567");
assert.deepStrictEqual(telfmt("15771577"), "1577-1577");
assert.deepStrictEqual(telfmt("07012341234"), "070-1234-1234");
assert.deepStrictEqual(telfmt("050712345678"), "0507-1234-5678");

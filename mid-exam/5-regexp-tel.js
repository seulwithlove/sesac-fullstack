// 전화번호를 정확한 형식으로 출력하는 함수를 작성하시오.

import assert from "assert";
const patterns = [
  { regExp: /^(\d{4})(\d{4})(\d{4})$/, format: "$1-$2-$3" },
  { regExp: /^(\d{4})(\d{4})$/, format: "$1-$2" },
  { regExp: /^(02)(\d{3,4})(\d{4})$/, format: "$1-$2-$3" },
  { regExp: /^(\d{3})(\d{3,4})(\d{4})$/, format: "$1-$2-$3" },
];

const telfmt = (numStr) => {
  for (let { regExp, format } of patterns) {
    if (regExp.test(numStr)) {
      return numStr.replace(regExp, format);
    }
  }
  return numStr;
};

assert.deepStrictEqual(telfmt("050712345678"), "0507-1234-5678");
assert.deepStrictEqual(telfmt("15771577"), "1577-1577");
assert.deepStrictEqual(telfmt("0101234567"), "010-123-4567");
assert.deepStrictEqual(telfmt("01012345678"), "010-1234-5678");
assert.deepStrictEqual(telfmt("0212345678"), "02-1234-5678");
assert.deepStrictEqual(telfmt("021234567"), "02-123-4567");
assert.deepStrictEqual(telfmt("0331234567"), "033-123-4567");
assert.deepStrictEqual(telfmt("07012341234"), "070-1234-1234");

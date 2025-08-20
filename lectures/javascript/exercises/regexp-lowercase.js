// 문자열 str에서 대문자만 골라 소문자로 변환하세요. (trythis: 대문자 <-> 소문자)
// upperToLower('Senior Coding Learning JS');
//          // ⇒ '*s*-enior *c*-oding *l*-earning *j*-*s*-'

function upperToLower(s) {
  // return s.replace(/[A-Z])/g, foundChar => foundChar.toLowerCase())
  return s.replace(
    /([A-Z]*)([a-z]*)/g,
    (foundStr, upper, lower) => `${upper.toLowerCase()}${lower.toUpperCase()}`
  );
}

upperToLower("Senior Coding Learning JS");

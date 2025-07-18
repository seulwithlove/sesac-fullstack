// Index Signiture 문제
interface User {
  id: number;
  name: string;
}

interface Dept {
  id: number;
  dname: string;
  captain: string;
}
interface Ud2 {
  // <이 부분을 작성하시오>
  id: number; // 명시된건 인덱스시그니처 영향을 받지 않음!
  addr: string;
  // name?: string;
  // dname?: string;
  // captain?: string;
  [k: string]: string | number;
}

// 다음 코드가 오류가 없으면 통과!
const ud2: Ud2 = { id: 1, name: "HH", addr: "Seoul" };
const ud3: Ud2 = { id: 1, dname: "HH", captain: "HH", addr: "Seoul" };

export {};

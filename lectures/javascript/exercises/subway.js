const LINE2 = [
  "신도림",
  "성수",
  "신설동",
  "용두",
  "신답",
  "용답",
  "시청",
  "충정로",
  "아현",
  "이대",
  "신촌",
  "공항철도",
  "홍대입구",
  "합정",
  "당산",
  "영등포구청",
  "문래",
  "대림",
  "구로디지털단지",
  "신대방",
  "신림",
  "봉천",
  "서울대입구",
  "낙성대",
  "사당",
  "방배",
  "서초",
  "교대",
  "강남",
  "역삼",
  "선릉",
  "삼성",
  "종합운동장",
  "신천",
  "잠실",
  "잠실나루",
  "강변",
  "구의",
  "건대입구",
  "뚝섬",
  "한양대",
  "왕십리",
  "상왕십리",
  "신당",
  "동대문역사문화공원",
  "을지로4가",
  "을지로3가",
  "을지로입구",
];

class Subway {
  #start; // private으로 해야 외부에서 값을 변경할수 없게됨
  #end; // 이 값을 변경하게되면 iterable 속성이 깨짐
  #currIdx;
  #didEnd = false;
  constructor(start, end) {
    this.#start = start;
    this.#end = end;
    this.#currIdx = LINE2.indexOf(start);
  }
  nextStation() {
    if (this.#currIdx === LINE2.length) {
      this.#currIdx = 0;
    }
    this.#didEnd = this.#currIdx === LINE2.indexOf(this.#end);
    return LINE2[this.#currIdx++];
  }

  *[Symbol.iterator]() {
    while (true) {
      // if (this.#currIdx === LINE2.indexOf(this.#end)) {
      if (this.#didEnd) {
        this.#didEnd = false;
        this.#currIdx = LINE2.indexOf(this.#start); // iterator가 한번 실행된 뒤에도 동일하게 실행되도록! -> 시작을 원위치로
        break;
      }
      yield this.nextStation();
    }
  }

  iterator() {
    return this[Symbol.iterator](); // 사용하기 편하게 하기 위한 매핑 함수
  }

  toString() {
    return `=== ${this.#start} ~ ${this.#end} (This stop is: ${
      LINE2[this.#currIdx - 1]
    })===`;
  }
}

const routes = new Subway("문래", "신림");
console.log([...routes]);
console.log([...routes]);

console.log("-----------");
const it1 = routes[Symbol.iterator]();
console.log([...routes]); // [ '문래', '대림', '구로디지털단지', '신대방', '신림' ]
console.log(it1.next()); // { value: '문래', done: false }
console.log(routes.toString());
console.log(it1.next()); // { value: '신림', done: false }
console.log(routes.toString());
console.log(it1.next()); // { value: undefined, done: true }
console.log(routes.toString());
console.log(it1.next()); // { value: undefined, done: true }

console.log("-----------");
const routes2 = new Subway("구로디지털단지", "성수"); // 32개 정거장

// bad code : iterator를 다시 배열로 만드는 꼴
// console.log([...routes2]); // ['구로디지털단지', '신대방', ..., '성수']
// console.log(routes2.[Symbol.iterator]()); // ['구로디지털단지', '신대방', ..., '성수']
for (const s of routes.iterator()) {
  console.log("s: ", s);
}

const it2 = routes2[Symbol.iterator]();
while (true) {
  const x = it2.next();
  console.log(x);
  if (x.done) break;
}
const route3 = new Subway("문래", "합정"); // 46개 정거장이면 통과!
const route4 = new Subway("신도림", "을지로입구"); // 48개 정거장이면 통과!

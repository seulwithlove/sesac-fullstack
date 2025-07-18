// 다음에서 '가', '나', '다' 어떤 걸 throw 해도 에러 메시지를 출력하도록 (라) 부분을 수정(개선)하시오.
// (type predicate)
const hasMessageError = (err: unknown): err is Error =>
  err instanceof Error ||
  (typeof err === "object" && err !== null && "message" in err);

try {
  throw new Error("some error!!!!"); // 가
  throw "some string error!!!"; // 나
  throw ["some", "array", "error"]; // 다
} catch (error) {
  // console.log((error as Error).message); // (라)
  console.log(hasMessageError(error) ? error.message : JSON.stringify(error)); //(라) 정답
}

export {};

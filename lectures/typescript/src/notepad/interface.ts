// type Novel = "Novel";

// interface IndexSignature {
//   [key: Novel]: string;
// } // error: 아래처럼 아예 literal type으로 써야함 - index signature에는 리터럴 타입 불가!

interface Book {
  Novel: string;
}

/*
이전 챕터에서 작성한 Stack과 Queue 클래스를 iterator로 작성하시오.
(iterable한 클래스로 작성하세요)   iterator or generator 모두 사용 가능!
===
class와 Array를 이용하여 Stack과 Queue를 구현하시오.

ex1) Stack
const stack = new Stack(); // or new Stack(1,2); // ⇐⇒ (1,2)
stack.push(3); // 추가하기
console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기
ex2) Queue
const queue = new Queue();
queue.enqueue(3); // 추가하기
queue.enqueue(2); // 추가하기
console.log(queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
===

*/

function* stack() {
  const arr = [];
  const e1 = yield "Give me the element!";
}

function* queue() {
  const arr = [];
}

console.log([...stack], [...queue]);
for (const s of stack) console.log(s);
for (const q of queue) console.log(q);

const itStack = stack[Symbol.iterator](); // 또는 const itStack = stack.iterator();
console.log(itStack.next());
console.log(itStack.next());

const itQueue = queue.iterator();
console.log(itQueue.next());

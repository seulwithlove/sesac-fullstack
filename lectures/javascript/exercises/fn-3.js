// template 함수 완성하기

const before = () => console.log('before....');
const after = (result) => console.log('after...', result);

const someFn = (name, greeting) => `${greeting}, ${name}`;
const someFn2 = (id, nickname, email, level) => `${id}/${nickname}/${email}/${level}`;

const template = // 코드를 완성하세요.

const temp = template(someFn);  // before → someFn → after 실행
const temp2 = template(someFn2);  // before → someFn2 → after 실행

temp('sico', 'hello');
console.log('temp1>>', temp2(1, 'sico', 'sico@gmail.com', 5));

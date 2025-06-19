const arr = [100, 200, 300, 400, 500, 600, 700];

// 1. for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.
console.log("==== 1. for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.");
for (a in arr) console.log(a);

// 2. for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)
console.log("==== 2. for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)");
for (a in arr) console.log(arr[a]);

const obj = { name: "Kim", addr: "Yongsan", level: 1, role: 9, receive: false };

// 3. for-in문을 사용하여 프로퍼티 이름(키)을 출력하시오.
console.log("==== 3. for-in문을 사용하여 프로퍼티 이름(키)을 출력하시오.");
for (o in obj) console.log(o);

// 4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
console.log("==== 4. for-in문을 사용하여 프로퍼티 값을 출력하시오.");
for (o in obj) console.log(obj[o]);

// 5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
console.log("====5. for-of문을 사용하여 프로퍼티 값을 출력하시오.");
for (o of Object.keys(obj)) console.log(obj[o]);

// 6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오.
//  // Object.defineProperty
console.log("==== 6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오.");
Object.defineProperty(obj, "level", {
  enumerable: false,
});
for (const o in obj) console.log(o); // 'level' 빠짐

// 7. role 프로퍼티는 읽기전용으로 설정하시오. // Object.defineProperty
console.log("==== 7. role 프로퍼티는 읽기전용으로 설정하시오.");
Object.defineProperty(obj, "role", {
  writable: false,
});

obj.role = 99;
console.log(obj.role); // 여전히 9

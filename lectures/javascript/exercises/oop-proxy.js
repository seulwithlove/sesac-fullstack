class User {
  constructor() {
    return new Proxy(this, {
      get(target, prop, receiver) {
        if (prop === "fullName") {
          return `${target.firstName} ${target.lastName}`;
        } else {
          return target[prop];
        }
      },
      set(target, prop, value, receiver) {
        if (prop === "fullName") {
          const [f, l] = value.split(" ");
          target.firstName = l ? f : target.firstName;
          target.lastName = l ? l : f;
          return true; // why?
          /* 
            위 리턴문 없을땐 아래 에러 발생!
hong.fullName = "Kildong Hong"; // split하여 firstName, lastName 셋
              ^

TypeError: 'set' on proxy: trap returned falsish for property 'fullName'
            */
        } else {
          target[prop] = value;
          return true; // why?
        }
      },
    });
  }
}
const hong = new User();
hong.fullName = "Kildong Hong"; // split하여 firstName, lastName 셋
console.log("11=", hong.fullName); // 'Kildong HONG' 출력하면 통과!
hong.x = 123;
hong.fullName = "Lee";
console.log("22=", hong.firstName, hong.lastName, hong.x); // 'Kildong LEE' 출력하면 통과!

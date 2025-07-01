// 다음 코드를 올바르게 수정하시오. (1초 후에 강아지의 이름을 출력)
const dog = {
  name: "Maxx",
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(() => this.showMyName(), 1000);
  },
};

dog.whatsYourName();

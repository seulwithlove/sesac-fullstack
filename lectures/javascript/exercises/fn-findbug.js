function Dog(name, power) {
  const dog = {}; // 낙동강 오리알?
  dog.name = name;
  dog.power = power;

  return dog; // 이건 new로 객체를 생성하면 리턴되지 않음
}

Dog.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`);
  this.power += amount;
};

const maxx = new Dog("Maxx", 7);
maxx.eat(5);

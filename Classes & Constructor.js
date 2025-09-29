console.clear();

function person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log(`${this.name} is ${this.age} years old`);
    }

};

const person1 = person("Alice", 20);
const person2 = person("Bob", 22);

person1.sayHello();
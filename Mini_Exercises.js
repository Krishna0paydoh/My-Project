console.clear();


/*
TASKS:

1. For each student, print:
- Name
- Marks in each subject
- Total marks
- Average marks
- Grade:
Avg ≥ 90 → "A"
Avg ≥ 75 → "B"
Avg ≥ 60 → "C"
Else → "D"

2. At the end, print:
"<Name> is the topper with <Average Marks> average!"
*/

// let students = [
//     { name: "Aarav", marks: { math: 90, english: 85, science: 88 } },
//     { name: "Ishita", marks: { math: 78, english: 82, science: 80 } },
//     { name: "Kabir", marks: { math: 95, english: 92, science: 96 } },
//     { name: "Riya", marks: { math: 60, english: 70, science: 65 } }
// ];

// for (let i = 0; i < students.length; i++) {
//     let sum = 0;
//     console.log("Name :", students[i].name); {
//         for (let subject in students[i].marks) {
//             console.log(subject, ":", students[i].marks[subject]);
//             sum += students[i].marks[subject];
//         }
//         console.log("Total Marks :", sum);
//     }
// }

// function Person(name, age) {
//     this.name = name;   // property ban gayi
//     this.age = age;

//     this.greet = function () {
//         console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//     }
// }

// const p1 = new Person("Alice", 22);
// const p2 = new Person("Ale", 24);
// const p3 = new Person("Alce", 21);
// p1.greet(); // Hi, I am Alice and I am 22 years old
// p2.greet(); // Hi, I am Alice and I am 22 years old
// p3.greet(); // Hi, I am Alice and I am 22 years old


// class Parent {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHello() {
//         console.log(`Hello, I am ${this.name}`);
//     }
// }

// class Child extends Parent {
//     constructor(name, age) {
//         super(name);
//         this.age = age;
//     }

//     sayAge() {
//         console.log(`${this.name} is ${this.age} years old`);
//     }
// }

// const child1 = new Child("Alice", 22);
// child1.sayHello();
// child1.sayAge();   

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) resolve("User data received ✅");
            else reject("Error ❌");
        }, 2000);
    });
}

getData().then((data) => console.log(data)).catch((error) => console.log(error));

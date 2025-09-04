console.clear();

//Variables and Data Types

let name = "Krishna";
let age = 22;
let isStudent = true;

console.log("Hello " + name + ", you are " + age + " years old. Students: " + isStudent);


// Loops and Arrays 

let marks = [45, 67, 32, 89, 90];

for (let i = 0; i < marks.length; i++) {
    let result = marks[i] * 2;
    console.log(marks[i] + " -> " + result);
}


// Arrow Functions

let add = (a, b) => a + b;
console.log("Addition:", add(3, 4));

let arr = [1, 3, 4, 5, 22, 3];

let firstarr = arr => arr[0];
let lastarr = arr => arr[arr.length - 1];

console.log("First data of array is:", firstarr(arr));
console.log("Last data of array is:", lastarr(arr));

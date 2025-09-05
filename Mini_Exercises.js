console.clear();

// //Variables and Data Types

// let name = "Krishna";
// let age = 22;
// let isStudent = true;

// console.log("Hello " + name + ", you are " + age + " years old. Students: " + isStudent);


// // Loops and Arrays 

// let marks = [45, 67, 32, 89, 90];

// for (let i = 0; i < marks.length; i++) {
//     let result = marks[i] * 2;
//     console.log(marks[i] + " -> " + result);
// }


// // Arrow Functions

// let add = (a, b) => a + b;
// console.log("Addition:", add(3, 4));

// let arr = [1, 3, 4, 5, 22, 3];

// let firstarr = arr => arr[0];
// let lastarr = arr => arr[arr.length - 1];

// console.log("First data of array is:", firstarr(arr));
// console.log("Last data of array is:", lastarr(arr));


// Phase 1 Hard Challenge Question 


let students = [
    { name: "Prince", marks: [95, 88, 92] },
    { name: "Madhav", marks: [78, 85, 80] },
    { name: "Chirag", marks: [45, 50, 60] },
    { name: "Krishna", marks: [99, 95, 100] }
];


for (let i = 0; i < students.length; i++) {
    console.log("------------");
    console.log("Students : " + students[i].name);
    let sum = 0;
    let avg = 0;
    for (let j = 0; j < students[i].marks.length; j++) {
        sum += students[i].marks[j];
        avg = sum / students[i].marks.length;
        console.log("Marks : ", students[i].marks[j]);
    }
    console.log("Sum : ", sum);
    console.log("Average : ", avg);
    console.log("------------");
}



// if ((students[i].marks[j]) >= 90) {
//     students[i].grade = "A";
// }
// else if (students[i].marks[j] >= 75) {
//     students[i].grade = "B";
// }
// else if (students[i].grade >= 50) {
//     students[i].grade = "C";
// }
// else {
//     students[i].grade = "F";
// }
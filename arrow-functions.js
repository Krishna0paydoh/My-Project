console.clear();

// const stats = numbers => {
//   let sum = 0;
//   let max = numbers[0];
//   let min = numbers[0];

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     if (numbers[i] > max) max = numbers[i];
//     if (numbers[i] < min) min = numbers[i];
//   }

//   let avg = sum / numbers.length;
//   return { sum, avg, max, min };
// };

// console.log(stats([10, 1, 8, 12, 99, 192, 2]));


// const getStudentInfo = (name, marks) => {
//   let sum = 0;
//   for (let i = 0; i < marks.length; i++) {
//     sum += marks[i];
//   }
//   let avg = sum / marks.length;
//   return { name, marks, sum, avg };
// }


// console.log(getStudentInfo("Krishna", [82, 93, 85]));


// let doubleArray = num => {
//   let result = [];
//   for (let i = 0; i < num.length; i++) {
//     result.push(num[i] * 2);
//   }
//   return result;
// }

// console.log(doubleArray([90, 12, 69, 55]));


// 

// //Q1:

// const add = (a, b) => {
//     return a + b;
// }

// console.log("Addition :", add(2, 5));

// //Q2:

// const square = x => {
//     return x * x;
// }

// console.log("Square :", square(12));

// //Q3:

// let greet = (name) => {
//     console.log("Hello", name);
// }
// greet("Krishna");

// //Q4:

// const checkEven = a => {
//     if (a % 2 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(checkEven(6));
// console.log(checkEven(7));


// //Q5:

// const makeUser = (a, b) => {
//     return { id: a, name: b };
// }

// console.log(makeUser(1, "Aman"));



// const addArray = num => {
//     let total = 0;
//     for (let i = 0; i < num.length; i++) {
//         total += num[i];
//     }
//     return total;
// }

// console.log(addArray([1, 2, 3, 4, 5]));




// const maxArray = num => {
//     let total = num[0];
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] > total) {
//             total = num[i];
//         }
//     }
//     return total;
// }

// console.log(maxArray([1, 3, 45, 5, 2]));


// const sumEven = num => {
//     let total = 0
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] % 2 == 0) {
//             total += num[i];
//         }
//     }
//     return total;
// }

// console.log(sumEven([2, 3, 4, 5, 6, 7, 8, 9, 10]));



// const longestString = (string) => {
//     let longest = string[0];
//     for (let i = 0; i < string.length; i++) {
//         if (string[i].length > longest.length) {
//             longest = string[i];
//         }
//     }
//     return longest;
// }


// console.log(longestString(["Hell", "Hi", "Welcome", "Cone"]));


// const countOccurence = (arr, rep) => {
//     let repetation = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (rep == arr[i]) {
//             repetation = repetation + 1;
//         }
//     }
//     return repetation;
// }

// console.log(countOccurence([1, 2, 3, 4, 5, 1, 3, 4, 1, 3, 1], 1));



// const double = num => num * 2;

// console.log(double(16));



// const isEven = num => num % 2 == 0;

// console.log(isEven(3));



// const greetUser = name => `Hello, ${name}`;

// console.log(greetUser("Krishna"));



// const getArea = (width, height) => width * height;

// console.log(getArea(5, 10));


// const makePerson = (id, name) => ({ id, name });

// console.log(makePerson(1, "Krishna"));



// const numbers = [1, 2, 3, 4];
// const double = numbers.map(n => n * n);

// console.log(double);



// const fruits = ["apple", "banana", "kiwi"];
// const length = fruits.map(n => n.length);

// console.log(length);



// const persons = ["Aman", "Krishna"];
// const names = persons.map(n => ({ Name: n }));

// console.log(names);




// const square = num => num.map(n => n ** 2);

// console.log(square([1, 2, 3, 4]));




// const greater = num => num.filter(n => n > 10);

// console.log(greater([12, 5, 8, 130, 44]));



// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const map = num.map(n => n ** 2);
// const filter = map.filter(n => n > 20);

// console.log(filter);



// const func = arr => {
//     return arr
//         .map(n => n ** 2)
//         .filter(n => n > 20);
// };

// console.log(func([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



// const coins = [1, 2, 5, 10];


// // Wrong Function

// function total(coins) {
//     coins.reduce((container, coin) => {
//         return container + coin;
//     }, 0);
// }


// console.log(total([1, 2, 3, 4]));

// const nums = [2, 4, 6, 8];
// const result = nums.map(n => n * n);

// console.log(result);

// const nums1 = [10, 55, 32, 80, 99];
// const result1 = nums1.filter(n => n > 50);

// console.log(result1);

// const nums2 = [5, 10, 15];
// const result2 = nums2.reduce((a, b) => a + b, 0);

// console.log(result2);



// const num = [2, 5, 8, 10, 3];
// const result = num
//     .map(n => n * n)
//     .filter(n => n > 50);

// console.log(result);


// const fruits = ["apple", "banana", "kiwi", "grape"];
// const length = fruits
//     .filter(n => n.length > 4)
//     .reduce((a, b) => a + b.length, 0);

// console.log(length);


// const students = [
//     { name: "Aman", marks: [80, 90, 70] },
//     { name: "Krishna", marks: [60, 75, 85] },
//     { name: "Riya", marks: [95, 88, 92] },
//     { name: "Sam", marks: [40, 55, 60] }
// ];

// const result = students
//     .map(student => {
//         const doubled = student.marks.map(n => n * 2);
//         const avgOfDoubleMarks = doubled.reduce((a, b) => a + b, 0) / student.marks.length;
//         return {
//             name: student.name,
//             doubledmarks: doubled,
//             Average: avgOfDoubleMarks,
//         };
//     })
//     .filter(student => student.Average > 150);


// console.log(result);


// const employees = [
//     { name: "Aman", department: "IT", salaries: [40000, 42000, 44000] },
//     { name: "Krishna", department: "HR", salaries: [30000, 32000, 31000] },
//     { name: "Riya", department: "Finance", salaries: [50000, 52000, 51000] },
//     { name: "Sam", department: "IT", salaries: [25000, 26000, 27000] }
// ];

// const newArr = [];
// const Result = employees
//     .map(employee => {
//         const Average = employee.salaries.reduce((a, b) => a + b / employee.salaries.length, 0);
//         return newArr.push(employee.name, ` Avg : ${Average}`);
//     })
// console.log(newArr);


// const employees = [
//     { name: "Aman", dept: "IT", salary: 75000 },
//     { name: "Krishna", dept: "HR", salary: 50000 },
//     { name: "Riya", dept: "IT", salary: 90000 },
//     { name: "Sam", dept: "Finance", salary: 45000 }
// ];

// const grouped = employees.reduce((acc, e) => {
//     acc[e.dept] ??= [];
//     acc[e.dept].push(e);
//     return acc;
// }, {});
// console.log(grouped);



// const students = [
//     { name: "Aman", grade: "A" },
//     { name: "Krishna", grade: "A" },
//     { name: "Riya", grade: "B" },
//     { name: "Sam", grade: "C" },
//     { name: "Anita", grade: "B" },
//     { name: "Anit", grade: "B" },
//     { name: "Ania", grade: "C" },
//     { name: "Anta", grade: "B" },
//     { name: "Aita", grade: "C" }
// ];


// const grouped = students.reduce((student, a) => {
//     student[a.grade] ??= [];
//     student[a.grade].push(a.name);
//     return student;
// }, {});

// console.log(grouped);



// const students = [
//     { name: "Krishna", marks: [80, 90, 70] },
//     { name: "Mansi", marks: [95, 88, 92] },
//     { name: "Aman", marks: [60, 75, 85] },
//     { name: "Isha", marks: [40, 45, 25] },
//     { name: "Anita", marks: [40, 37, 29] }
// ];


// const result = students.map(student => {
//     const doubledMarks = student.marks.map(n => n * 2);
//     const AvgMarks = student.marks.reduce((a, b) => a + b, 0) / student.marks.length;
//     const status = AvgMarks >= 40 ? "Pass" : "Fail";
//     return {
//         name: student.name,
//         doubledMarks: doubledMarks,
//         Average: AvgMarks,
//         status
//     };
// });

// console.log(result);

const students = [
    { name: "Aman", marks: [60, 45, 50] },
    { name: "Krishna", marks: [80, 90, 80] },
    { name: "Mansi", marks: [95, 88, 92] },
    { name: "Akshay", marks: [30, 45, 25] },
    { name: "Anita", marks: [38, 45, 35] }
];

const grouped = students.reduce((acc, student) => {
    const avg = student.marks.reduce((a, b) => a + b, 0) / student.marks.length;
    const status = avg >= 40 ? "Pass" : "Fail";

    acc[status] ??= [];
    acc[status].push({ name: student.name, average: avg });

    if (!acc.topper || avg > acc.topper.average) {
        acc.topper = { name: student.name, average: avg };
    }
    return acc;

}, {});

console.log(grouped);

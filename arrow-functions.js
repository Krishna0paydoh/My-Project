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

function total(coins) {
    coins.reduce((container, coin) => {
        return container + coin;
    }, 0);
}


console.log(total([1, 2, 3, 4]));
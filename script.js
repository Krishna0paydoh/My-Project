// // let num = 18;
// // if (num >= 18) {
// //   console.log("You can drive");
// // } else {
// //   console.log("You cant drive");
// // }

// // let num = 14;
// // console.log(num >= 18 ? "You can drive" : "You can't drive");

// // let a = 1;
// // for (let i = 0; i < 100; i++) {
// //   console.log("Number is ", a + i);
// // }
// // let i = 0;
// // while (i < 5) {
// //   console.log(i);
// //   i++;
// // }
// // // ____________________________________ //

// // for (let i = 0; i < 5; i++) {
// //   console.log(i);
// // }
// function print(x) {
//   console.log("I am a function", x);
// }

// print(1);
// print(2);
// print(3);

// variable = (x) => {
//   console.log("I am arrow function ", x);
// };

// variable(1);
// variable(2);
// variable(3);

// let greet = (name) => "Hello " + name;
// // greet(krishna);
// // console.log(greet(abc));

// a = Math.random() < 0.1;
// console.log(a);

// let x = 1;
// let y = 2;

// sum = x + y;
// if (sum >= 10)
//     console.log("Big Number");
// else
//     console.log("small number");


// function checkNumber(num) {
//     if (num % 2 == 0)
//         console.log("Even");
//     else
//         console.log("Odd");
// }
// console.log("The number is 10");
// checkNumber(10);
// console.log("The number is 3");
// checkNumber(3);


// function printTable(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(num + " X " + i + " = " + (num * i));
//     }
// }
// printTable(8);


// let fruit1 = "Mango";
// let fruit2 = "Apple";
// let fruit3 = "Orange";             Wrong way X

// let fruits = ["Mango", "Apple", "Orange", "Banana"];

// console.log(fruits[1]);


// let friends = ["Aman", "Sameer", "Prince", "Chirag", "Madhav", "Jakir", "undefined"];

// for (i = 0; i < friends.length; i++) {
//     console.log("Hello " + friends[i] + " !");
// }



// Challenge: “Friends Score Game”
// You have 5 friends.
// Each friend has a score (number) in a game.
// Your task:
// Store friends’ names in an array.
// Store their scores in another array (same order).
// Write a function that loops through both arrays and prints:
// <Friend> scored <score> points
// Then, print the name of the friend with the highest score.


let friends = ["Aman", "Sameer", "Prince", "Chirag", "Madhav"];
let scores = [45, 78, 88, 60, 55];

for (i = 0; i < friends.length; i++) {
    console.log(friends[i] + " scored " + scores[i] + " points ");
}

/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

  + --> - 
  - --> *
  * --> /
  / --> +


It performs wrong operation 90% of the times

*/

let random = Math.random();
// console.log(random);

let a = prompt("Enter 1st Number = ");
let b = prompt("Enter operation = ");
let c = prompt("Enter 2nd Number = ");

let obj = {
  "+": " - ",
  "-": " * ",
  "*": " / ",
  "/": " + ",
};

if (random < 0.1) {
  // Wrong Calculation = 10% of time
  b = obj[b];
  console.log(`The result is ${eval(`${a} ${b} ${c}`)}`);
  alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
} else {
  // Correct calculation = 90% of time
  console.log(`The result is ${eval(`${a} ${b} ${c}`)}`);
  alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}

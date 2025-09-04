console.clear();

// function print(x) {
//   console.log("I am a function", x);
// }

// print(1);
// print(2);
// print(3);

// function calculateArea(length, width) {
//   return length * width;
// }

// console.log("The area is " + calculateArea(5, 10));
// console.log("The area is " + calculateArea(7, 3));
// calculateArea(7, 3);


// function printBill(name = "Customer", amount = 0) {
//   console.log("Hello " + name + ", your bill is ₹" + amount);
// }

// printBill("Krishna", 500);
// printBill();


// function calculateTotal(amount, taxRate = 0.1) {
//   return (amount + amount * taxRate);
// }
// // console.log(calculateTotal(500));

// function printBill(name = "Customer", amount) {
//   let result = calculateTotal(amount);
//   console.log("Hello " + name + ", your final bill with tax is ₹" + result);
// }

// printBill("Krishna", 1000);


// let multiply = function (a, b) {
//   return a * b;
// }

// let check = function (a, b) {
//   let result = multiply(a, b);
//   if (result % 2 == 0) {
//     return "The multiplication of " + a + " & " + b + " is " + result + " and is even";
//   }
//   return "The multiplication of " + a + " & " + b + " is " + result + " and is odd";
// }

// console.log(check(7, 3));


let isEven = function (num) {
  return num % 2 == 0;
}
let arr = [2, 5, 7, 10];

function arraymultiplier(arr, multiplier) {
  for (let i = 0; i < arr.length; i++) {
    let total = arr[i] * multiplier;
    if (isEven(total)) {
      console.log(arr[i] + " * " + multiplier + " is " + total + " --> Even");
    }
    else {
      console.log(arr[i] + " * " + multiplier + " is " + total + " --> Odd");
    }
  }
}

arraymultiplier(arr, 3);







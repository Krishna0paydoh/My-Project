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


let doubleArray = num => {
  let result = [];
  for (let i = 0; i < num.length; i++) {
    result.push(num[i] * 2);
  }
  return result;
}

console.log(doubleArray([90, 12, 69, 55]));
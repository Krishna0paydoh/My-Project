console.clear();


function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4));
// console.log(sum(5, 10));


const [first, second, ...rest] = [10, 20, 30, 40];
console.log(first);
console.log(rest);


console.clear();

let arr = [3, 8, 12, 5, 9, 20];
let newarr = [];

function isEven(num) {
    return num % 2 == 0;
}

function processNumbers(arr, multiplier) {
    for (let i = 0; i < arr.length; i++) {
        let total = arr[i] * multiplier;
        if (isEven(total)) {
            newarr.push({
                original: arr[i],
                result: total,
                type: "Even"
            });
        }
        else {
            newarr.push({
                original: arr[i],
                result: total,
                type: "Odd"
            });
        }
    }
}

processNumbers(arr, 7);

console.log(newarr);


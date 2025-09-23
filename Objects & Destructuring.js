console.clear();

// const student = {
//     name: "John",
//     age: 20,
//     isActive: true,
//     courses: ["Math", "Science", "History"],
// };
// student.city = "New York";
// student.age = 22;
// console.log(student);


const car = { brand: "Tesla", model: "Model 3", year: 2023 };

for (let key in car) {
    console.log(key, car[key]);
}

console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));

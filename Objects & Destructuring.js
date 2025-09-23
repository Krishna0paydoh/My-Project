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


// const car = { brand: "Tesla", model: "Model 3", year: 2023 };

// for (let key in car) {
//     console.log(key, car[key]);
// }

// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));

// const user =
// {
//     username: "chishiya",
//     email: "chishiya123@xyzmail.com",
//     password: "securepassword"
// };

// const { username, email } = user;
// console.log([{ username, email }]);


const product = {
    id: 101,
    name: "Laptop",
    price: 999.99,
    specs: {
        cpu: "Intel i7",
        ram: "16GB",
        storage: "512GB SSD"
    }
};

const { name, price, specs: { cpu, ram } } = product;
console.log(product);

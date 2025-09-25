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


// const product = {
//     id: 101,
//     name: "Laptop",
//     price: "79,000",
//     specs: {
//         cpu: "Intel i7",
//         ram: "16GB",
//         storage: "512GB SSD"
//     }
// };

// const { name, price, specs: { cpu, ram } } = product;
// console.log(product);


// const employee = { name: "Amit", role: "Developer", salary: 50000 };

// const showDetails = ({ name, role, salary }) => {
//     return (`${name} is a ${role} and earns ${salary}`);
// };

// console.log(showDetails(employee));


// const user = { id: 11, name: "Krishna", role: "Junior Developer" };

// for (let key in user) {
//     console.log(key, ":", user[key]);
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// const person = {
//     name: "Akash",
//     age: 22,
//     isStudent: false,
//     hobbies: ["Reading ", " Travelling ", " Gaming"],
//     skills: {
//         primary: "JavaScript",
//         secondary: "Python",
//         optional: "C++"
//     }
// };

// const { name, age, hobbies, isStudent, skills: { primary, secondary, optional } } = person;
// console.log(`${name} is ${age} years old. Primary skill: ${primary}, Secondary skill: ${secondary} and optional skills is ${optional} and hobbies are ${hobbies} and is he a student? ${isStudent}`);


// const employees = [
//     {
//         id: 1,
//         name: "Akash",
//         age: 22,
//         isStudent: false,
//         hobbies: ["Reading", "Travelling", "Gaming"],
//         skills: { primary: "JavaScript", secondary: "Python", optional: "C++" }
//     },
//     {
//         id: 2,
//         name: "Riya",
//         age: 24,
//         isStudent: true,
//         hobbies: ["Painting", "Dancing"],
//         skills: { primary: "React", secondary: "Node.js", optional: "CSS" }
//     },
//     {
//         id: 3,
//         name: "Sahil",
//         age: 21,
//         isStudent: true,
//         hobbies: ["Football", "Gaming"],
//         skills: { primary: "Python", secondary: "Django", optional: "SQL" }
//     }
// ];


// for (let single_object_destructuring of employees) {
//     const { name, age, isStudent } = single_object_destructuring;
//     console.log("Name :", name, ",", "Age :", age, ",", "Is Student :", isStudent);
// }

// for (let Nested_Destructuring of employees) {
//     const { primary, secondary } = Nested_Destructuring.skills;
//     console.log("Primary Skill :", primary, ",", "Secondary Skill :", secondary);
// }


// function fetchData(callback) {
//     setTimeout(() => {
//         callback("Data loaded!");
//     }, 10);
// }

// fetchData((msg) => console.log(msg));


// PAYDOH BANK

function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
            console.log(`Deposited: ${amount}, Balance: ${balance}`);
        },
        withdraw(amount) {
            if (amount > balance) {
                console.log("Insufficient funds!");
            } else {
                balance -= amount;
                console.log(`Withdrew: ${amount}, Balance: ${balance}`);
            }
        },
        getBalance() {
            console.log(balance);
        }
    };
}

const account = createBankAccount(0);
account.getBalance();


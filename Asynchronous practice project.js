console.clear();

// class User {
//     constructor(name, username) {
//         this.name = name;
//         this.username = username;
//     }

//     greet() {
//         console.log(`Hello, I am ${this.name} ( ${this.username} )`);
//     }
// }
// class Admin extends User {
//     constructor(name, username, role) {
//         super(name, username);
//         this.role = role;
//     }

//     showRole() {
//         console.log(`${this.name} is an ${this.role}`);
//     }
// }
// async function fetchUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         if (!response.ok) throw new Error("Failed to fetch users");
//         const users = await response.json();
//         return users;
//     } catch (error) {
//         console.log("Error:", error.message);
//         return [];
//     }
// }
// async function showUsers() {
//     const users = await fetchUsers();

//     users.slice(0, 4).forEach(u => {
//         const name = u?.name ?? "No Name";
//         const username = u?.username ?? "No username";

//         const user = new User(name, username);
//         user.greet();
//     });

//     const adminData = users[1];
//     const admin = new Admin(adminData?.name ?? "Unknown", adminData?.username ?? "No username", "Admin");
//     admin.showRole();
// }
// showUsers();


// class User {
//     constructor(name, username) {
//         this.name = name;
//         this.username = username;
//     }
//     greet() {
//         console.log(`Hello I am ${this.name} , Username : (${this.username})`);
//     }
// };

// class Admin extends User {
//     constructor(name, username, role) {
//         super(name, username);
//         this.role = role;
//     }
//     showadmin() {
//         console.log(`${this.name} is an ${this.role}`);
//     }
// };

// async function fetchuser() {
//     const result = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await result.json();
//     return users;
// };

// async function showusers() {
//     const users = await fetchuser();

//     users.slice(0, 6).forEach(u => {
//         const name = u.name;
//         const username = u.username;
//         const user = new User(name, username);
//         user.greet();
//     });
//     const admindata = users[1];
//     const admin = new Admin(admindata.name, admindata.username, "Admin");
//     admin.showadmin();
// };


// showusers();


// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     greet() {
//         console.log(`Hello, I am ${this.name}`);
//     }
// }

// class Admin extends User {
//     deleteUser(user) {
//         console.log(`${this.name} deleted ${user.name}`);
//     }
// }

// async function loadUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();

//         data.forEach(u => {
//             const name = u?.name ?? "No Name";
//             const email = u?.email ?? "No Email";
//             console.log(`${name} - ${email}`);
//         });

//         return data;
//     } catch (error) {
//         console.log("Error fetching users:", error.message);
//     }
// }

// async function adminActions() {
//     const users = await loadUsers();
//     const admin = new Admin("Bob", "admin@mail.com");

//     if (users && users.length > 0) {
//         admin.deleteUser(new User(users[0]?.name ?? "Unknown", users[0]?.email ?? ""));
//     }
// }

// adminActions();


class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
}

class Admin extends User {
    deleteUser(user, container) {
        console.log(`${this.name} deleted ${user.name}`);
        // Remove from DOM
        if (container) {
            const userDiv = document.getElementById(user.name);
            if (userDiv) container.removeChild(userDiv);
        }
    }
}

const loadBtn = document.getElementById("loadBtn");
const userContainer = document.getElementById("userContainer");

async function loadUsers() {
    userContainer.innerHTML = "Loading users...";
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        userContainer.innerHTML = ""; // clear loading

        const admin = new Admin("Bob", "admin@mail.com");

        data.forEach(u => {
            const name = u?.name ?? "No Name";
            const email = u?.email ?? "No Email";

            const userDiv = document.createElement("div");
            userDiv.id = name;
            userDiv.style.border = "1px solid #ccc";
            userDiv.style.padding = "10px";
            userDiv.style.margin = "5px 0";
            userDiv.innerHTML = `<strong>${name}</strong> - ${email} 
        <button id="del_${name}">Delete</button>`;

            userContainer.appendChild(userDiv);

            // Admin delete action
            document.getElementById(`del_${name}`).addEventListener("click", () => {
                const userObj = new User(name, email);
                admin.deleteUser(userObj, userContainer);
            });
        });

    } catch (error) {
        userContainer.innerHTML = "Error: " + error.message;
    }
}

loadBtn.addEventListener("click", loadUsers);

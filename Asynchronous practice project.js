console.clear();

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    greet() {
        console.log(`Hello, I am ${this.name} ( ${this.email} )`);
    }
}
class Admin extends User {
    constructor(name, email, role) {
        super(name, email);
        this.role = role;
    }

    showRole() {
        console.log(`${this.name} is an ${this.role}`);
    }
}
async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch users");
        const users = await response.json();
        return users;
    } catch (error) {
        console.log("Error:", error.message);
        return [];
    }
}
async function showUsers() {
    const users = await fetchUsers();

    users.slice(0, 10).forEach(u => {
        const name = u?.name ?? "No Name";
        const email = u?.email ?? "No Email";

        const user = new User(name, email);
        user.greet();
    });

    const adminData = users[0];
    const admin = new Admin(adminData?.name ?? "Unknown", adminData?.email ?? "No Email", "Admin");
    admin.showRole();
}
showUsers();

const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const usersContainer = document.getElementById("usersContainer");

let users = [];

const createUser = (name, email, age) => ({
    id: Date.now(),
    name,
    email,
    age,
    tasks: []
});

const renderUsers = () => {
    usersContainer.innerHTML = "";

    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");

        const userHeader = document.createElement("div");
        userHeader.classList.add("user-header");

        const userInfo = document.createElement("h3");
        userInfo.textContent = `${user.name} (${user.age}) - ${user.email}`;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete User";
        deleteBtn.style.background = "#dc3545";
        deleteBtn.style.color = "#fff";
        deleteBtn.style.border = "none";
        deleteBtn.style.padding = "5px 10px";
        deleteBtn.style.borderRadius = "5px";
        deleteBtn.style.cursor = "pointer";

        deleteBtn.addEventListener("click", () => {
            users = users.filter(u => u.id !== user.id);
            renderUsers();
        });

        userHeader.appendChild(userInfo);
        userHeader.appendChild(deleteBtn);
        userCard.appendChild(userHeader);

        const taskDiv = document.createElement("div");
        const taskInput = document.createElement("input");
        taskInput.placeholder = "Add task";
        taskInput.classList.add("task-input");

        const addTaskBtn = document.createElement("button");
        addTaskBtn.textContent = "Add Task";
        addTaskBtn.classList.add("add-task-btn");

        taskDiv.appendChild(taskInput);
        taskDiv.appendChild(addTaskBtn);
        userCard.appendChild(taskDiv);

        const taskList = document.createElement("ul");
        taskList.classList.add("task-list");

        user.tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task.text;
            if (task.completed) li.classList.add("completed");

            li.addEventListener("click", () => {
                task.completed = !task.completed;
                renderUsers();
            });

            const delTaskBtn = document.createElement("button");
            delTaskBtn.textContent = "X";
            delTaskBtn.style.marginLeft = "10px";
            delTaskBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                user.tasks.splice(index, 1);
                renderUsers();
            });

            li.appendChild(delTaskBtn);
            taskList.appendChild(li);
        });

        userCard.appendChild(taskList);

        addTaskBtn.addEventListener("click", () => {
            const taskValue = taskInput.value.trim();
            if (taskValue) {
                user.tasks.push({ text: taskValue, completed: false });
                taskInput.value = "";
                renderUsers();
            }
        });

        usersContainer.appendChild(userCard);
    });
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newUser = createUser(nameInput.value, emailInput.value, ageInput.value);
    users.push(newUser);
    renderUsers();
    form.reset();
});

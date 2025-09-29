const input = document.getElementById("input");
const btn = document.getElementById("AddTaskBtn");
const tasks = document.getElementById("task");

btn.addEventListener('click', () => {
    const task = input.value.trim();
    if (task === "") {
        alert("Please Enter a Task !");
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;
    tasks.appendChild(li);

    const delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    delBtn.style.marginLeft = "20px";
    delBtn.textContent = "💀";

    delBtn.addEventListener('click', () => {
        tasks.removeChild(li);
    });

    li.addEventListener('click', () => {
        li.classList.toggle("completed");
    });

    li.appendChild(delBtn);

    input.value = "";
});
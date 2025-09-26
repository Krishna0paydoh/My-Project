const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameValue = name.value;
    const passwordValue = password.value;

    message.textContent = `Hello ${nameValue} your password is ${passwordValue} and sending this sensitive credentials to public pages | Dont worry your data is secured ♥`;

    form.reset();
});
const title = document.getElementById("title");
// console.log(title);

title.textContent = "Oops ! Title changed";

const para = document.querySelectorAll(".text");


const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    title.textContent = "Why you clicked that !"
    title.style.color = "red"
    title.style.fontSize = "64px"
    para.forEach(p => {
        p.textContent = "The paragraph got changed !"
    });
});



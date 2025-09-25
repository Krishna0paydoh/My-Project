document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("main-title");
    const paragraphs = document.querySelectorAll(".text");
    const changeTextBtn = document.getElementById("change-text");
    const toggleColorBtn = document.getElementById("toggle-color");
    const addParagraphBtn = document.getElementById("add-paragraph");

    changeTextBtn.addEventListener("click", () => {
        title.textContent = "DOM Manipulation is Fun!";
    });

    toggleColorBtn.addEventListener("click", () => {
        title.classList.toggle("highlight");
    });

    addParagraphBtn.addEventListener("click", () => {
        const newPara = document.createElement("p");
        newPara.textContent = "I am a new paragraph!";
        newPara.classList.add("text");
        document.body.appendChild(newPara);
    });
});

console.clear();

// const promise = new Promise((resolve, reject) => {
//     let success = false;

//     if (success) {
//         resolve("✅ Data fetched successfully!");
//     } else {
//         reject("❌ Error fetching data");
//     }
// });

// promise
//     .then((msg) => console.log(msg))
//     .catch((err) => console.log(err));



// function orderPizza() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("🍕 Pizza is ready!"), 5000);
//     });
// }

// async function eatPizza() {
//     console.log("Ordering pizza...");
//     const pizza = await orderPizza();
//     console.log(pizza);
// }

// eatPizza();


// async function getUsers() {
//     console.log("Fetching users...");
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
// }

// getUsers();


// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log("Error:", error));


// async function getPost() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const data = await response.json();
//     console.log(data);
// }
// getPost();

// async function createPost() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             title: "My first post",
//             body: "Hello world!",
//             userId: 1
//         })
//     });

//     const data = await response.json();
//     console.log(data); // server response
// }
// createPost();


// // 1️⃣ Grab elements
// const input = document.getElementById("titleInput");
// const button = document.getElementById("submitBtn");
// const responseBox = document.getElementById("responseBox");

// // 2️⃣ Function to submit post
// async function submitPost() {
//     const title = input.value; // Phase 1/2: variables

//     if (!title) {
//         alert("Please enter a title!");
//         return;
//     }

//     try {
//         // Phase 3: POST API call
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ title, userId: 1 })
//         });

//         const data = await response.json(); // get returned data
//         responseBox.textContent = JSON.stringify(data, null, 2); // show nicely
//     } catch (error) {
//         responseBox.textContent = "Error: " + error.message;
//     }
// }

// // 3️⃣ Add event listener (Phase 2: DOM + events)
// button.addEventListener("click", submitPost);



// const loadBtn = document.getElementById("loadBtn");
// const postsContainer = document.getElementById("postsContainer");

// async function loadPosts() {
//     postsContainer.innerHTML = "Loading posts...";

//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const posts = await response.json();

//         postsContainer.innerHTML = "";

//         posts.slice(0, 5).forEach(post => {
//             const postDiv = document.createElement("div");
//             postDiv.style.border = "1px solid #ccc";
//             postDiv.style.padding = "10px";
//             postDiv.style.margin = "5px 0";
//             // postDiv.innerHTML = `<strong>${post.title}</strong><p>${post.body}</p>`;
//             // postDiv.innerHTML = `<p>${post.body}<p>`;
//             postDiv.textContent = post;
//             postsContainer.appendChild(postDiv);
//         });
//     } catch (error) {
//         postsContainer.innerHTML = "Error: " + error.message;
//     }
// }

// loadBtn.addEventListener("click", loadPosts);


// async function fetchData(url) {
//     try {
//         const response = await fetch(url);
//         console.log("Calling API")
//         if (!response.ok) throw new Error("API request failed! Status: " + response.status);

//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// }

// fetchData("https://jsonplaceholder.typicode.com/wrong-url");


// async function showThis() {
//     setTimeout(() => console.log(this), 2000);
//     console.log("wait");
// }

// showThis();

// function getData(callback) {
//     setTimeout(() => {
//         callback("Data received");
//     }, 1000);
// }

// getData((data) => {
//     console.log("Logging :", data);
// });

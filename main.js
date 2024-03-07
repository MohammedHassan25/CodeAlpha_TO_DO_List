// Return The Elements from HTML

let ts = document.querySelector(".ts");
let text = document.querySelector(".text");
let contentTask = document.querySelector("#contentTask");
let btn = document.querySelector(".btn");
let tasks = document.querySelector(".tasks");

// Add Event to ADD TASK button

btn.addEventListener("click", () => {
  if (contentTask.value.length >= 5 && contentTask.value.length <= 50) {
    // create Elements , Classes , Css and delete button for tasks
    let tx = document.createElement("div");
    tx.classList.add("tx");
    let p = document.createElement("p");
    let del = document.createElement("button");
    del.classList.add("btn-del");
    p.textContent = contentTask.value;
    del.textContent = "Delete";
    tx.appendChild(p);
    tx.appendChild(del);
    tasks.appendChild(tx);
    tx.style.cssText = `
    padding: 5px;
    background-color: white;
    margin: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    font-size: 13px;
    font-family: sans-serif;
    `;
    del.style.cssText = `
    background-color: crimson;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 2px 6px;
    cursor: pointer;
    `;
    // when delete task from list
    del.addEventListener("click", () => {
      tx.remove();
      window.localStorage.setItem("tasks", tasks.innerHTML);
      if (tasks.innerHTML === "") {
        tasks.style.cssText = "height: 50px";
      }
    });
    if (tasks.innerHTML !== "") {
      tasks.style.cssText = "height: fit-content";
    }
    // add to Local Storage
    window.localStorage.setItem("tasks", tasks.innerHTML);
  }
});

tasks.innerHTML = window.localStorage.getItem("tasks");
// After Add Task to Local Storage
if (tasks.innerHTML === "") {
  tasks.style.cssText = "height: 50px";
}

// for Delete Button After Add Task to Local Storage

let tx = document.querySelector(".tx");
let del = document.querySelectorAll(".btn-del");

for (let i = 0; i < del.length; i++) {
  del[i].addEventListener("click", function () {
    if (del[i].className === "btn-del") {
      del[i].parentNode.remove();
      window.localStorage.setItem("tasks", tasks.innerHTML);
      if (tasks.innerHTML === "") {
        tasks.style.cssText = "height: 50px";
      }
    }
  });
}

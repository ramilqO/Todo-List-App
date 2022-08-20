let input = document.querySelector('.inputt');
let btn = document.querySelector(".add_new_task");
let out = document.querySelector(".oll");

let tasks = [];

const createTask = () => { 
    let taskName = input.value;
    tasks.push(taskName);
    console.log(tasks);
    input.value = "";

    let div = document.createElement('div'); //create a dom-element in JS memory
    div.className = "task";
    div.innerHTML = `${taskName} <input class="checkboxx" type="checkbox" />`;
    out.appendChild(div) //past a dom-element in my layout
}

btn.addEventListener("click", createTask);







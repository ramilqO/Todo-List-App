let input = document.querySelector('.inputt');
let btn = document.querySelector(".add_new_task");
let ol = document.querySelector(".oll");

let tasks = [];

const createTask = () => { 
    let taskName = input.value;
    tasks.push(taskName);
    console.log(tasks);
    input.value = "";

    let li = document.createElement('li'); //create a dom-element in JS memory
    li.innerHTML = taskName;
    ol.appendChild(li) //past a dom-element in my layout
}

btn.addEventListener("click", createTask);




let input = document.querySelector('.inputt');
let btn = document.querySelector(".add_new_task");
let out = document.querySelector(".out");
let ol = document.querySelector(".oll");

let tasks = [];

const createTask = () => { 
    let taskName = input.value;
    tasks.push(taskName);
    console.log(tasks);
    input.value = "";

    showTasks;
}

const showTasks = () => {
    // tasks.map(task => ol.createElement('li').innerHTML = `<li>${task}</li>`); not working..
    // tasks.map(task => `<li>${task}</li>`) also doesn't working
}

btn.addEventListener("click", createTask);





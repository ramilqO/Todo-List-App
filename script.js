let input = document.querySelector('.inputt');
let btn = document.querySelector(".add_new_task");
let ol = document.querySelector(".oll");

let tasks = [];

const createTask = () => { 
    let taskName = input.value;
    tasks.push(taskName);
    console.log(tasks);
    input.value = "";

    showTasks();
}

const showTasks = () => {
    tasks.map(task => 
        {
            let li = document.createElement('li');
            li.innerHTML = task;
            ol.appendChild(li)
        })
}

btn.addEventListener("click", createTask);




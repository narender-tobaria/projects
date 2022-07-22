const addTaskButton = document.querySelector("#add-task-button");
const newInputTask = document.querySelector("#new-task-input");
const tasks = document.querySelector(".tasks");

let totalTasks = document.querySelector(".total-tasks span");
let completedTasks = document.querySelector(".total-completed span");
let pendingTasks = document.querySelector(".total-pending span");

const completedTaskColor = "rgb(77, 177, 77)";
const pendingTaskColor = "rgb(137, 137, 137)";

let toEditTask = 0;
let newTask = "";

addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    const inputedValue = newInputTask.value.trim();
    if(inputedValue){
        if(!checkTaskPresentOrNot(inputedValue)){
            if(!newTask){
                addNewTask(inputedValue);
                newInputTask.value = "";
            }
            else{
                addNewTask(inputedValue);
                newInputTask.value = "";
                newTask = "";
                addTaskButton.value = "Add Task";
            }
        }
        else{
            newInputTask.value = "";
            newInputTask.placeholder = "Task Already Present";
            setTimeout( () => {
                newInputTask.placeholder = "Enter Your New To Do Task";
            },2000)
        }
    }
    else{
        newInputTask.value = "";
            newInputTask.placeholder = "Please Enter Something";
            setTimeout( () => {
                newInputTask.placeholder = "Enter Your New To Do Task";
        },2000)
    }
})

tasks.addEventListener("click", (event) => {
    const forTask = event.target.parentNode.parentNode;
    toEditTask = forTask.querySelector(".task");

    if(event.target.classList.contains("edit")){
        newTask = "edit";
        newInputTask.value = toEditTask.textContent;
        addTaskButton.value = "Edit Task";
        newInputTask.placeholder = "Enter New Task To Edit"
    }
    else if(event.target.classList.contains("done")){
        forTask.style.backgroundColor = completedTaskColor;
        toEditTask.style.textDecoration = "line-through";
        forTask.querySelector(".done").style.display = "none";
        changeTasksStatus()
    }
    else if(event.target.classList.contains("remove")){
        forTask.remove();
        changeTasksStatus()
    }
})

// for adding new task to the list
function addNewTask(taskValue){
    if(!newTask){
        const newRow = document.createElement("ul");
        newRow.classList.add("task-box");
        newRow.innerHTML = `<li class="task">${taskValue}</li>
        <div class="task-buttons">
            <button class="btn edit" type="button">Edit</button>
            <button class="btn done" type="button">Done</button>
            <button class="btn remove" type="button">Remove</button>
        </div>`
        tasks.appendChild(newRow);
        changeTasksStatus();
    }
    else{
        toEditTask.textContent = taskValue;
        changeTasksStatus()
    }
}

// for checking that the inputed task is already present or not
function checkTaskPresentOrNot(taskValue){
    if(!newTask){
        const tasksList = tasks.querySelectorAll(".task");
        const tasksArray = [];
        for(let i=0;i<tasksList.length;i++){
            tasksArray.push(tasksList[i].textContent);
        }
        return tasksArray.some((task) => {
            return task === taskValue?true:false
        })
    }
}

// for changin tasks status
function changeTasksStatus(){
    allTasks = tasks.querySelectorAll(".task-box");
    let comp = 0;
    let pend = 0;
    for(let i=0;i<allTasks.length;i++){
        if(allTasks[i].style.backgroundColor === completedTaskColor){
            comp++;
        }
        else{
            pend++;
        }
    }

    // total tasks
    totalTasks.textContent = tasks.querySelectorAll(".task").length;

    // completed tasks
    completedTasks.textContent = comp;

    // pending tasks 
    pendingTasks.textContent = pend;
}


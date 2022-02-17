let checkList = document.querySelector('.check-list');
let taskText = document.querySelector('.task-text');
let important = document.querySelector('.important');
let taskAdd = document.querySelector('.task-add');
let tasks = [];

if (localStorage.getItem('todo')){
  tasks = JSON.parse(localStorage.getItem('todo'));
  addTasks();
}

function createTask() {
  if(taskText.value === '') return;
  let newTask = {
    task: taskText.value,
    complete: false,
    important: false,
  };
  if (important.checked) {
    tasks.unshift(newTask);
    newTask.important = true;
  } else {
      tasks.push(newTask);
    }
  addTasks();
  localStorage.setItem('todo', JSON.stringify(tasks));
  taskText.value = '';
  important.checked = false;
};

taskAdd.addEventListener('click' , createTask);
document.addEventListener('keydown' , e => {
  if (e.keyCode === 13) createTask();
});


function addTasks() {
  let addTask = '';
  if (tasks.length === 0) checkList.innerHTML = '';
  tasks.forEach(function(item, index) {
    addTask += `
              <div class = "container-task">
                <li class="task ${item.complete ? 'task-complete' : ''} ${item.important ? 'task-important' : ''} item_c${index}" id="item_d${index}">
                  ${item.task}
                </li>
                <div class="container-btn">
                  <button class="btn-complete" id="item_c${index}" onclick="completeTask(${index})" title="Mission complete">Complete</button>
                  <button class="btn-delete" id="item_d${index}" onclick="deleteTask(${index})" title="Delete task">Delete</button>
                </div>
              </div>
            `;
    checkList.innerHTML = addTask;
  });
};

function completeTask(index) {
  tasks[index].complete = !tasks[index].complete;
  let completeTask = tasks.filter(item => item.complete === true);
  let activeTask= tasks.filter(item => item.complete === false);
  tasks = [...activeTask,...completeTask];
  addTasks();
  localStorage.setItem('todo', JSON.stringify(tasks));
}

function deleteTask(index) {
  tasks.splice(index, 1);
  addTasks();
  localStorage.setItem('todo', JSON.stringify(tasks));
}
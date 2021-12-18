let checkList = document.querySelector('.check-list');
let taskText = document.querySelector('.task-text');
let important = document.querySelector('.important');
let taskAdd = document.querySelector('.task-add');

let tasks = [];

if (localStorage.getItem('todo')){
  tasks = JSON.parse(localStorage.getItem('todo'));
  addTasks();
}

taskAdd.addEventListener('click', function() {
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
});

function addTasks() {
  let addTask = '';

  if (tasks.length === 0) checkList.innerHTML = '';

  tasks.forEach(function(item, index) {
    addTask += `<li class="task ${item.complete ? 'task-complete' : ''} ${item.important ? 'task-important' : ''} item_c${index}" id="item_d${index}">${item.task}<button class="btn-complete" id="item_c${index}" onclick="completeTask(${index})" title="Mission complete">Complete</button><button class="btn-delete" id="item_d${index}" onclick="deleteTask(${index})" title="Delete task">Delete</button></li>`;
    checkList.innerHTML = addTask;
    });
  };

  function completeTask(index) {
    tasks[index].complete = !tasks[index].complete;
    console.log(index);
    let completeTask = tasks.filter(item => item.complete === true);
    let acticeTask= tasks.filter(item => item.complete === false);
    tasks = [...acticeTask,...completeTask];
    addTasks();
    localStorage.setItem('todo', JSON.stringify(tasks));
  }

  function deleteTask(index) {
    tasks.splice(index, 1);
    console.log(index);
    addTasks();
    localStorage.setItem('todo', JSON.stringify(tasks));
  }

/*
   checkList.addEventListener('click', function(event) {
    let idComplete = event.target.getAttribute('id');
    let taskComplete = document.querySelector('.' + idComplete).childNodes[0].nodeValue;
    Tasks.forEach( function(item) {
      if (item.task === taskComplete) {
        item.complete = !item.complete;
        addTasks();
        localStorage.setItem('todo', JSON.stringify(Tasks));
      }
    });
  });
*/

/*
  checkList.addEventListener('click', function(event) {
    let idDelete = event.target.getAttribute('id');
    let taskDelete = checkList.querySelector('#' + idDelete).childNodes[0].nodeValue;
    Tasks.forEach( function(item, index) {
      if (item.task === taskDelete) {
        Tasks.splice(index, 1);
        addTasks();
        localStorage.setItem('todo', JSON.stringify(Tasks));
      }
    });
  });
  */
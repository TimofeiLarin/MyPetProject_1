let checkList = document.querySelector('.check-list');
let taskText = document.querySelector('.task-text');
let important = document.querySelector('.important');
let taskAdd = document.querySelector('.task-add');

taskAdd.addEventListener('click', function() {
  
  if(taskText.value === '') return;
  addDeleteTasks(taskText.value);

  taskText.value = '';
});

function addDeleteTasks(value) {

  let task = document.createElement('li');
  let buttonCompleteTask = document.createElement('button');
  let buttonDeleteTask = document.createElement('button');
  

  task.className = 'task';
  task.textContent = value;
  if (important.checked) {
    checkList.prepend(task);
    task.classList.add('task-important');
  } else {
    checkList.appendChild(task);
  }

  buttonCompleteTask.className = 'btn-complete';
  buttonCompleteTask.textContent = 'Complete';
  buttonCompleteTask.title = 'Mission complete';
  task.appendChild(buttonCompleteTask);

  buttonDeleteTask.className = 'btn-delete';
  buttonDeleteTask.textContent = 'Delete';
  buttonDeleteTask.title = "Delete task";
  task.appendChild(buttonDeleteTask);

  

  buttonDeleteTask.addEventListener('click', function() {
    checkList.removeChild(task);
  });

  buttonCompleteTask.addEventListener('click', function() {
    task.classList.toggle('task-complete');
  })
}

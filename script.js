let checkList = document.querySelector('.check-list');
let taskText = document.querySelector('.task-text');
let important = document.querySelector('.important');
let taskAdd = document.querySelector('.task-add');

let Tasks = [];

taskAdd.addEventListener('click', function() {
  
  let newTask = {
    task: taskText.value,
    complete: false,
    important: false,
  };

  Tasks.push(newTask);

  if(taskText.value === '') return;
  addDeleteTasks();

  taskText.value = '';
});



function addDeleteTasks() {

  let addTask = '';
  
  Tasks.forEach(function(item, index) {
  
    addTask += `
    <li class='task ${item.complete ? 'task-complete' : ''}'> ${item.task}
    <button class="btn-complete" title="Mission complete">Complete</button>
    <button class="btn-delete" title="Delete task">Delete</button>
    </li>
    `;
    
    checkList.innerHTML = addTask;

    
    })

    Tasks.forEach(function(item, index) {
      let buttonCompleteTask = document.querySelector('.btn-complete');

    
      buttonCompleteTask.addEventListener('click', function() {
        item.complete = !item.complete;
        console.log(item.complete);
    })

  });
    
/*
    let task = document.createElement('li');
    let buttonCompleteTask = document.createElement('button');
    let buttonDeleteTask = document.createElement('button');
    
    task.className = 'task'; 
    task.textContent = item.task;
    if (important.checked) {
      checkList.prepend(task);
      task.classList.add('task-important');
    } else {
      checkList.appendChild(task);
    }
*/
    /*
    buttonCompleteTask.className = 'btn-complete';
    buttonCompleteTask.textContent = 'Complete';
    buttonCompleteTask.title = 'Mission complete';
    task.appendChild(buttonCompleteTask);
  
    buttonDeleteTask.className = 'btn-delete';
    buttonDeleteTask.textContent = 'Delete';
    buttonDeleteTask.title = "Delete task";
    task.appendChild(buttonDeleteTask);
    */
    /*
    buttonDeleteTask.addEventListener('click', function() {
      checkList.removeChild(task);
    });
  
    buttonCompleteTask.addEventListener('click', function() {
      task.classList.toggle('task-complete');
    })
    */
  


}

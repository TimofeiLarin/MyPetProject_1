let checkList = document.querySelector('.check-list');
let taskText = document.querySelector('.task-text');
let important = document.querySelector('.important');
let taskAdd = document.querySelector('.task-add');

let Tasks = []

function render () {
  Tasks.forEach((element, index, array) => {

  })
}

function addTask(value) {
  const newTask = {
    id: Tasks.length + 1,
    text: value,
    status: "active",
    time: new Date()
  }
  Tasks.push(newTask)
  render()

}

function deteleTask (id) {
  Tasks = Tasks.filter((el) => el.id !== id)
  render()
}

function changeStatusTask (id) {
  Tasks = Tasks.map(el => {
      if (el.id === el) {
        return {
          ...el,
          status: someTask.status === "active" ? "complete" : "active"
        }
      }
      return el
    }
  )


  render()
}

taskAdd.addEventListener('click', function() {
  
  if(taskText.value === '') return;
  addDeleteTasks(taskText.value);

  taskText.value = '';
});

function addDeleteTasks(value) {
  console.log(value, "value")
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

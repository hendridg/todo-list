import Tasks from './modules/index.js';
import './style.css';

const inTsk = {};
const objTasks = new Tasks();

if (localStorage.savedTasks) {
  objTasks.tasks = JSON.parse(localStorage.getItem('savedTasks'));
}

const btnClearTasks = document.createElement('button');
const root = document.querySelector('.root');
const ulElement = document.querySelector('.ul-element');
const inputElement = document.querySelector('.input-element');
btnClearTasks.innerHTML = 'Clear all completed';
btnClearTasks.classList.add('btn-clear-task');

inputElement.addEventListener('change', () => {
  inTsk.description = inputElement.value;
  inTsk.completed = false;
  inTsk.index = objTasks.tasks.length;
  objTasks.addTask(new Tasks(inTsk.description, inTsk.completed, inTsk.index));
});

window.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    inputElement.value = '';
  }
});

btnClearTasks.addEventListener('click', () => {
  const result = objTasks.tasks.filter((task) => task.completed === false);
  objTasks.tasks = result;
  objTasks.populateFields();
  ulElement.innerHTML = '';
  root.innerHTML = `
    <div class="title">
      <p>Today's To Do</p><i class="fas fa-sync-alt"></i>
    </div>
    <div class="container-todo">
      <ul class='ul-element'></ul>
    </div>
  `;
  root.append(objTasks.displayTasks(), btnClearTasks);
});

objTasks.displayTasks();
root.append(btnClearTasks);

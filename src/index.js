import Tasks from './modules/index.js';
import clearTasks from './modules/clearTask.js';
import './style.css';

const inTsk = {};
const objTasks = new Tasks();

if (localStorage.savedTasks) {
  objTasks.tasks = JSON.parse(localStorage.getItem('savedTasks'));
}

const btnClearTasks = document.querySelector('.btn-clear-task');
const root = document.querySelector('.root');
const ulElement = document.querySelector('.ul-element');
const inputElement = document.querySelector('.input-element');

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
  clearTasks(objTasks);
  ulElement.innerHTML = '';
  root.append(objTasks.displayTasks(), btnClearTasks);
});

objTasks.displayTasks();
root.append(btnClearTasks);

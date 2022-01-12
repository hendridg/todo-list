import Task from './components/task.js';
import './style.css';

const arrayTasks = [
  {
    description: 'wash the dogs',
    completed: false,
    index: 0,
  },
  {
    description: 'Complete To Do list project',
    completed: false,
    index: 1,
  },
  {
    description: 'fix car',
    completed: false,
    index: 2,
  },
];

function component() {
  const containerElement = document.createElement('div');
  const titleElement = document.createElement('div');
  const paragraphTitle = document.createElement('div');
  const iconRefresh = document.createElement('div');
  const inputElement = document.createElement('input');
  const ulElement = document.createElement('ul');
  const btnClearTasks = document.createElement('button');

  containerElement.classList.add('container-todo');
  titleElement.classList.add('title');
  paragraphTitle.innerHTML = "Today's To Do";
  iconRefresh.innerHTML = '<i class="fas fa-sync-alt"></i>';
  titleElement.append(paragraphTitle, iconRefresh);
  inputElement.placeholder = 'Add to your list...';
  btnClearTasks.textContent = 'Clear all completed';
  btnClearTasks.classList.add('btn-clear-task');
  btnClearTasks.disabled = true;

  arrayTasks.map((task) => {
    ulElement.appendChild(Task(task));
    return 'done';
  });

  containerElement.append(titleElement, inputElement, ulElement, btnClearTasks);

  return containerElement;
}

const root = document.querySelector('.root');

root.appendChild(component());

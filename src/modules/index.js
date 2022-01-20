/* eslint-disable comma-dangle */
import { JSDOM } from 'jsdom';

export const dom = new JSDOM(
  `<body>
<div class="root">
    <div class="title">
        <p>Today's To Do</p><i class="fas fa-sync-alt"></i>
    </div>
    <div class="container-todo">
        <input class='input-element' placeholder="Add to your list..." />
        <ul class='ul-element'></ul>
    </div>
</div>
</body>`
);

const containerElement = dom.window.document.querySelector('.container-todo');
const ulElement = dom.window.document.querySelector('.ul-element');

const Tasks = class {
  constructor(description, completed = false, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
    this.tasks = [
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
        description: 'fix car in the morning',
        completed: false,
        index: 2,
      },
    ];
  }

  populateFields = () => {
    let i = -1;
    this.tasks.forEach((task) => {
      i += 1;
      task.index = i;
    });
    localStorage.setItem('savedTasks', JSON.stringify(this.tasks));
  };

  removeTask(task) {
    const result = this.tasks.filter((b) => b.index !== task.index);
    this.tasks = result;
    this.populateFields();
    this.displayTasks();
  }

  addTask = (newTask) => {
    this.tasks.push(newTask);
    this.populateFields();
    this.displayTasks();
  };

  displayTasks = () => {
    ulElement.innerHTML = '';
    this.tasks.map((task) => {
      const li = dom.window.document.createElement('li');
      const itemTaskElement = dom.window.document.createElement('div');
      const checkBox = dom.window.document.createElement('input');
      const checkBoxContainer = dom.window.document.createElement('div');
      checkBoxContainer.classList.add('checkbox-container');
      const label = dom.window.document.createElement('label');
      const textInput = dom.window.document.createElement('input');
      const icon = dom.window.document.createElement('div');
      textInput.classList.add('text-input', 'hidden');
      icon.classList.add('icon-menu-container');
      li.classList.add(`li${task.index}`);
      itemTaskElement.classList.add('item-element');
      icon.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
      const iconMenu = '<i class="fas fa-ellipsis-v"></i>';
      const iconDelete = '<i class="fas fa-trash-alt"></i>';
      checkBox.type = 'checkbox';
      checkBox.id = `check${task.index}`;
      textInput.value = task.description;
      label.innerHTML = task.description;
      checkBox.checked = task.completed;

      if (checkBox.checked) {
        label.style.textDecoration = 'line-through';
      }

      label.addEventListener('click', () => {
        label.classList.add('hidden');
        textInput.classList.remove('hidden');
        li.classList.add('editing');
        icon.innerHTML = iconDelete;
        icon.style.cursor = 'pointer';
        textInput.focus();
      });

      textInput.addEventListener('focus', () => {
        this.populateFields();
        icon.innerHTML = iconDelete;
        icon.style.cursor = 'pointer';
      });

      textInput.addEventListener('change', (e) => {
        task.description = e.target.value;
        label.innerHTML = task.description;
        this.populateFields();
        icon.innerHTML = iconDelete;
        icon.style.cursor = 'pointer';
      });

      textInput.addEventListener('blur', () => {
        label.classList.remove('hidden');
        textInput.classList.add('hidden');
        li.classList.remove('editing');
        setTimeout(() => {
          icon.innerHTML = iconMenu;
          icon.style.cursor = 'menu';
        }, 150);
      });

      checkBox.addEventListener('click', () => {
        if (checkBox.checked) {
          label.style.textDecoration = 'line-through';
          task.completed = checkBox.checked;
          this.populateFields();
        } else {
          label.style.textDecoration = 'none';
          task.completed = checkBox.checked;
          this.populateFields();
        }
      });

      icon.addEventListener('click', () => {
        if (icon.innerHTML === iconDelete) {
          this.removeTask(task);
          ulElement.removeChild(li);
        }
      });

      li.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          checkBox.focus();
          textInput.classList.add('hidden');
          label.classList.remove('hidden');
          li.classList.remove('editing');
        }
      });

      checkBoxContainer.append(checkBox, label, textInput);
      itemTaskElement.append(checkBoxContainer, icon);

      li.appendChild(itemTaskElement);
      ulElement.appendChild(li);
      return ulElement;
    });
    containerElement.appendChild(ulElement);
    return containerElement;
  };
};

export default Tasks;

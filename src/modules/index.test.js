import Tasks from './index.js';

beforeAll(() => {
  document.body.innerHTML = `
  <div class="root">
    <div class="title">
        <p>Today's To Do</p><i class="fas fa-sync-alt"></i>
    </div>
    <div class="container-todo">
        <input class='input-element' placeholder="Add to your list..." />
        <ul class='ul-element'></ul>
    </div>
</div>`;
});
const objTasks = new Tasks();
describe('Add and Delete task', () => {
  test('using addTask function adds an element to DOM with given description', () => {
    objTasks.addTask({
      description: 'Task from test 2',
      completed: false,
      index: 0,
    });
    const liElement = document.querySelectorAll('li');
    expect(liElement[3].textContent).toEqual('Task from test 2');
  });
  test('using addTask increases size of li array in DOM by 1', () => {
    objTasks.addTask({
      description: 'Task from test 3',
      completed: false,
      index: 0,
    });
    const liElement = document.querySelectorAll('li');
    expect(liElement.length).toEqual(5);
  });
  test('Should be add a item', () => {
    objTasks.addTask({
      description: 'Task from test 4',
      completed: false,
      index: 0,
    });
    const liElement = document.querySelectorAll('li');
    expect(liElement[5].textContent).toEqual('Task from test 4');
  });
  test('using removeTask removes exactly 1 task from the DOM', () => {
    const ulElement = document.querySelector('.ul-element');
    objTasks.removeTask({
      description: 'wash the dogs',
      completed: false,
      index: 0,
    });
    expect(ulElement.childElementCount).toEqual(5);
  });
  test('Should be delete a item', () => {
    const ulElement = document.querySelector('.ul-element');
    objTasks.removeTask({
      description: 'Task from test 4',
      completed: false,
      index: 0,
    });
    expect(ulElement.childElementCount).toEqual(4);
  });
  test('Empty description does not add anything to DOM', () => {
    const ulElement = document.querySelector('.ul-element');
    objTasks.addTask({
      description: '',
      completed: false,
      index: 0,
    });
    expect(ulElement.childElementCount).toEqual(4);
  });
});

describe('Test localStorage memory', () => {
  test('should save to localStorage', () => {
    expect(localStorage.length).toBe(1);
  });
  test('"savedTasks" array should be saved in localStorage ', () => {
    expect(Object.getOwnPropertyNames(localStorage)[6]).toBe('savedTasks');
  });
});

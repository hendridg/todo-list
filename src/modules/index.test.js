import Tasks, { dom } from './index.js';

const objTasks = new Tasks();
describe('Add and Delete task', () => {
  test('Should be add a item', () => {
    objTasks.addTask({
      description: 'Task from test 2',
      completed: false,
      index: 0,
    });
    const liElement = dom.window.document.querySelectorAll('li');
    expect(liElement[3].textContent).toEqual('Task from test 2');
  });
  test('Should be add a item', () => {
    objTasks.addTask({
      description: 'Task from test 3',
      completed: false,
      index: 0,
    });
    const liElement = dom.window.document.querySelectorAll('li');
    expect(liElement[4].textContent).toEqual('Task from test 3');
  });
  test('Should be add a item', () => {
    objTasks.addTask({
      description: 'Task from test 4',
      completed: false,
      index: 0,
    });
    const liElement = dom.window.document.querySelectorAll('li');
    expect(liElement[5].textContent).toEqual('Task from test 4');
  });
  test('Should be delete a item', () => {
    const ulElement = dom.window.document.querySelector('.ul-element');
    objTasks.removeTask({
      description: 'wash the dogs',
      completed: false,
      index: 0,
    });
    expect(ulElement.childElementCount).toEqual(5);
  });
  test('Should be delete a item', () => {
    const ulElement = dom.window.document.querySelector('.ul-element');
    objTasks.removeTask({
      description: 'Task from test 4',
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

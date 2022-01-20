import clearTasks from './modules/clearTask.js';
import Tasks from './modules/index.js';

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
      <button class="btn-clear-task">Clear all completed</button>
  </div>`;
});
const objTasks = new Tasks();
describe('Clear Functionality', () => {
  test('checking delete 1 task complete', () => {
    objTasks.tasks[0].completed = true;
    clearTasks(objTasks);
    expect(objTasks.tasks.length).toBe(2);
  });
  test('checking delete 2 tasks', () => {
    objTasks.tasks[0].completed = true;
    objTasks.tasks[1].completed = true;
    clearTasks(objTasks);
    expect(objTasks.tasks.length).toBe(0);
  });
});

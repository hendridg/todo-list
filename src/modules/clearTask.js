const clearTasks = (objTasks) => {
  const result = objTasks.tasks.filter((task) => task.completed === false);
  objTasks.tasks = result;
  objTasks.populateFields();
};

export default clearTasks;

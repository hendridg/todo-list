export default function Task(task) {
  let isSelected = false;
  const li = document.createElement('li');
  const itemTaskElement = document.createElement('div');
  const checkBox = document.createElement('input');
  const checkBoxContainer = document.createElement('div');
  checkBoxContainer.classList.add('checkbox-container');
  const label = document.createElement('label');
  const iconMenu = document.createElement('div');
  const iconDelete = document.createElement('div');
  iconMenu.classList.add('icon-menu-container');
  itemTaskElement.classList.add('item-element');
  iconMenu.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
  iconDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
  checkBox.type = 'checkbox';
  checkBox.id = `check${task.index}`;
  label.htmlFor = `check${task.index}`;
  label.innerText = task.description;

  label.addEventListener('click', () => {
    isSelected = !isSelected;
    if (isSelected === true) {
      label.style.textDecoration = 'line-through';
    } else {
      label.style.textDecoration = 'none';
    }
  });

  checkBox.addEventListener('click', () => {
    if (checkBox.checked) {
      label.style.textDecoration = 'line-through';
    } else {
      label.style.textDecoration = 'none';
    }
  });

  checkBoxContainer.append(checkBox, label);
  itemTaskElement.append(checkBoxContainer, iconMenu);
  li.appendChild(itemTaskElement);
  return li;
}

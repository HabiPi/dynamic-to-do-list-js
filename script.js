document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText === '') {
        alert('Please enter a task.');
        return;
      }
  
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
  
      const removeButton = document.createElement('button');
      removeButton.classList.add('remove-btn');
      removeButton.textContent = 'Remove';
  
      removeButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
      });
  
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
  
      taskInput.value = '';
    }
  
    addButton.addEventListener('click', addTask);
  
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    // Initial task addition
    addTask(); // Add an initial task to the list
  });
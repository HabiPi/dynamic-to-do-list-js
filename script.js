document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => addTask(taskText, false)); // Load tasks without saving to avoid duplication
    }
  
    function addTask(taskText, save = true) {
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
        removeTaskFromStorage(taskText); 
      });
  
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
  
      if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }
  
      taskInput.value = '';
    }
  
    function removeTaskFromStorage(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = storedTasks.filter(storedTask => storedTask !== taskText); 
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  
    addButton.addEventListener('click', () => addTask(taskInput.value));
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask(taskInput.value);
      }
    });
  
    loadTasks(); // Load tasks from Local Storage on page load
  });
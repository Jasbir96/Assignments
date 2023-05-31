Que 
## Description
You are developing an online task management application that allows users to drag and drop tasks between different categories. Implement the drag and drop functionality using the Drag and Drop API Below is a code stub to get you started:

```javascript
opy code
// Code Stub
const tasks = document.querySelectorAll('.task');
const categories = document.querySelectorAll('.category');

// Implement drag and drop functionality here

```

## Solution : 


```javascript
const tasks = document.querySelectorAll('.task');
const categories = document.querySelectorAll('.category');

tasks.forEach(task => {
  task.addEventListener('dragstart', handleDragStart);
});

categories.forEach(category => {
  category.addEventListener('dragover', handleDragOver);
  category.addEventListener('drop', handleDrop);
});

function handleDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  const taskId = event.dataTransfer.getData('text/plain');
  const task = document.getElementById(taskId);
  event.target.appendChild(task);
}

```


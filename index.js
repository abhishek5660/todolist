function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('task-list');

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('span');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove';
        removeButton.onclick = () => li.remove();
        li.appendChild(removeButton);

        taskList.appendChild(li);
        taskInput.value = '';
    }
}
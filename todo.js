const lists = ['backlog', 'todo', 'ongoing', 'done'];

const tasks = [
    { id: 1, text: 'Task 1', status: 'backlog' },
    { id: 2, text: 'Task 2', status: 'todo' },
    { id: 3, text: 'Task 3', status: 'ongoing' },
    { id: 4, text: 'Task 4', status: 'done' }
];

function renderTasks() {
    lists.forEach(list => {
        const listElement = document.getElementById(list);
        listElement.innerHTML = `<h2>${list.charAt(0).toUpperCase() + list.slice(1)}</h2>`;
        tasks.filter(task => task.status === list).forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task';
            taskElement.innerHTML = `
                ${task.text}
                ${list !== 'backlog' ? `<button onclick="moveTask(${task.id}, 'left')">←</button>` : ''}
                ${list !== 'done' ? `<button onclick="moveTask(${task.id}, 'right')">→</button>` : ''}
            `;
            listElement.appendChild(taskElement);
        });
    });
}

function moveTask(id, direction) {
    const task = tasks.find(t => t.id === id);
    const currentIndex = lists.indexOf(task.status);
    const newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
    
    if (newIndex >= 0 && newIndex < lists.length) {
        task.status = lists[newIndex];
        renderTasks();
    }
}

renderTasks();
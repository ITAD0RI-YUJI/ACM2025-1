import { createTask } from './createTask.js';

export const addNewTask = function(e) {
    e.preventDefault();
    
    const title = document.getElementById('task-input').value;
    const description = document.getElementById('task-description').value;
    const status = document.getElementById('task-status').value;

    if(!title || !description || !status) return;

    const taskInfo = {
        title: title,
        description: description,
        status: status
    };

    const taskHTML = createTask(taskInfo);
    
    document.getElementById('taskList').insertAdjacentHTML('beforeend', taskHTML);
    
    e.target.reset();
};
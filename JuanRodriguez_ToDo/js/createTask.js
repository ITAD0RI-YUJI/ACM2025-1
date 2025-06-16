export const createTask = function(taskInfo) {
    let statusText = '';
    if(taskInfo.status === 'pendiente') statusText = 'Pendiente';
    else if(taskInfo.status === 'en-proceso') statusText = 'En Proceso';
    else if(taskInfo.status === 'completada') statusText = 'Completada';

    return `
        <li class="task-item">
            <span class="task-title">${taskInfo.title}</span>
            <span class="task-description">${taskInfo.description}</span>
            <div class="task-details">
                <span class="status-${taskInfo.status}">${statusText}</span>
            </div>
        </li>
    `;
};
let i = 0;

export const create_task = function(task_info) {
    const taskId = `task${i++}`;
    const task_HTML = `
        <article class="task">
            <input type="checkbox" id="${taskId}" />
            <label for="${taskId}" class="p_task_title">${task_info}</label>
        </article>
    `;
    return task_HTML;
}
import { create_task } from "./create_task.js";
import { task_container } from "./index.js";

export const add_new_task = function(e) {
    e.preventDefault();

    const value = e.target.querySelector("[name='task_title']").value;

    if (!value) return;

    const task = create_task(value);

    task_container.innerHTML += task;

    e.target.reset();
};
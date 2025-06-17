import { add_new_task } from "./add_new_task.js";

export const task_container = document.getElementById('creadas');

const my_form = document.querySelector(".form");

function main() {
    if (my_form) {
        my_form.addEventListener('submit', add_new_task)
    } else {
        console.error("Error: El formulario no existe")
    }
}

main()
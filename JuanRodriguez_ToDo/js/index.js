import { addNewTask } from "./addNewTask.js";

document.addEventListener('DOMContentLoaded', () => {
    const myForm = document.getElementById('task-form');
    
    if(myForm) {
        myForm.addEventListener('submit', addNewTask);
    } else {
        console.error("Error: el formulario no existe");
    }
});
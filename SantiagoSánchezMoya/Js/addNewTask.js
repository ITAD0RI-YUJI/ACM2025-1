import { createNewTask } from "./createNewTask.js";
import { taskContainer } from "./main.js";
console.log("hola");
export const addNewTask = function (e) {
  e.preventDefault();

  const { value } = e.target.taskText;
  if (!value) {
    return;
  }

  const task = createNewTask(value);

  taskContainer.innerHTML += task;
};

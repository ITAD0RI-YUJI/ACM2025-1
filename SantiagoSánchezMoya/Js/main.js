import { addNewTask } from "./addNewTask.js";

export const taskContainer = document.getElementById("task_container");
const myForm = document.querySelector(".form");

function main() {
  if (myForm) {
    myForm.addEventListener("submit", addNewTask);
  } else {
    console.error("Formulario no encontrado");
  }

  console.log(myForm);
}

main();

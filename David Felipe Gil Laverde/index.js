import { comprobarTarea } from "./nuevaTarea.js";

export const tablaTareas = document.getElementById('tablaTareas');

const formulario = document.getElementById('formulario');

function main(){

    if(formulario){
        formulario.addEventListener('submit', comprobarTarea);
    }
    else{
        console.error('Error: el formulario no fue encontrado');
    }
}

main();
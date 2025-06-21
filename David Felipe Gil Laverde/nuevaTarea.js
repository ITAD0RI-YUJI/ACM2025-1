import { crearTarea } from "./crearTarea.js";
import { tablaTareas } from "./index.js";

export const comprobarTarea = function(e){
    e.preventDefault();

    const tareaFormulario = e.target.tarea.value;
    const fechaFormulario = e.target.fecha.value;
    const horaFormulario = e.target.hora.value;
    const notasFormulario = e.target.notas.value;
    
    if(!tareaFormulario && !fechaFormulario && !horaFormulario && !notasFormulario){
        return;
    }
    
    const tarea = crearTarea(tareaFormulario, fechaFormulario, horaFormulario, notasFormulario);

    tablaTareas.innerHTML += tarea;

}
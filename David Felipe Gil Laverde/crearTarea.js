export const crearTarea = function(tarea, hora, fecha, notas ) {
    const tareaHTML = `
        <table border="1">
            <tr>
                <td>${tarea}</td>
                <td>${fecha}</td>
                <td>${hora}</td>
                <td>${notas}</td>
                <td><input type='checkbox' id='tareaRealizada' name='tareaRealizada'></td>
            </tr>
        </table>
        `

    return tareaHTML;
}
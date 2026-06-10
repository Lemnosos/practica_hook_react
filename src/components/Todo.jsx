
// tarea = { titulo, descripcion }

export const Todo = ({ tarea }) => {

    return (
        <div>
            <h3>{tarea.titulo}</h3>
            <h3>{tarea.descripcion}</h3>
        </div>
    )
}

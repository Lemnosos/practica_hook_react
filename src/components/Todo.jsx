export const Todo = ({ tarea, onDelete, onToggle }) => {

    return (
        <div>
            <h3>{tarea.titulo}</h3>

            <p>{tarea.descripcion}</p>

            <p>
                {tarea.estado ? "Completada" : "Pendiente"}
            </p>

            <button onClick={() => onDelete(tarea.id)}>
                Borrar
            </button>

            <button onClick={() => onToggle(tarea.id)}>
                Estado
            </button>
        </div>
    )
}
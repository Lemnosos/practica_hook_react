export const Todo = ({ tarea, dispatch }) => {

    const handleDelete = (ev) => {
        dispatch({
            type: 'DELETE_TAREA',
            payload: tarea.id
        })
    }

    const handleToggle = (ev) => {
        dispatch({
            type: 'TOGGLE_TAREA',
            payload: tarea.id
        })
    }

    return (
        <div>
            <h3>Titulo: {tarea.titulo}</h3>
            <p>Descripcion: {tarea.descripcion}</p>
            <p>{tarea.estado ? "Completada" : "Pendiente"}</p>

            <button onClick={handleDelete}>Borrar</button>
            <button onClick={handleToggle}>Estado</button>
        </div>
    )
}
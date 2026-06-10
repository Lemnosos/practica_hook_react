
// tarea = { titulo, descripcion }

export const Todo = ({ tarea }) => {

    console.log(tarea)
    return (
        <div>
            <pre>{JSON.stringify(tarea)}</pre>
            <h3>{tarea?.titulo}</h3>
            <h3>{tarea?.descripcion}</h3>
        </div>
    )
}

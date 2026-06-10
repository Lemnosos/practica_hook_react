import { Todo } from './Todo'

export const ListaTodos = ({ todos, dispatch }) => {

    return (
        <div>
            <h3>Lista de tareas</h3>

            {todos.length === 0 ? (
                <p>No hay tareas todavía</p>
            ) : (
                todos.map((tarea) => (
                    <Todo
                        key={tarea.id}
                        tarea={tarea}
                        dispatch={dispatch}
                    />
                ))
            )}
        </div>
    )
}
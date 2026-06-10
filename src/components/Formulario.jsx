import { useReducer } from 'react'
import { tareaReducer } from '../hooks/tareaReducer'

// tarea = { titulo, descripcion }

export const Formulario = ({ onUpdate }) => {

    const [todos, dispatch] = useReducer(tareaReducer, [])

    const handleSubmit = (ev) => {
        ev.preventDefault()

        const titulo = ev.target.titulo.value.trim()
        const descripcion = ev.target.descripcion.value.trim()

        if (titulo.length < 1 || descripcion.length < 1) return

        const tarea = {
            id: Date.now(),
            titulo,
            descripcion
        }

        const action = {
            type: 'anadir tarea',
            payload: tarea
        }

        dispatch(action)

    }
    console.log(todos)
    return (
        <>
            <h2>Añadir tarea</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" name="titulo" id="titulo" placeholder='Titulo de la tarea' />
                <textarea name="descripcion" id="descripcion" placeholder='Descripcion de la tarea'></textarea>
                <input type="submit" value='Añadir' />
            </form>
        </>
    )
}

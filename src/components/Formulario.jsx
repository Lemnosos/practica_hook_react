export const Formulario = ({ onAdd }) => {

    const handleSubmit = (ev) => {
        ev.preventDefault()

        const titulo = ev.target.titulo.value.trim()
        const descripcion = ev.target.descripcion.value.trim()

        if (!titulo || !descripcion) return

        const tarea = {
            id: Date.now(),
            titulo,
            descripcion,
            estado: false
        }

        const accion = {
            type: 'ADD_TAREA',
            payload: tarea
        }

        onAdd(accion)

        ev.target.reset()
    }

    return (
        <>
            <h2>Añadir tarea</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="titulo"
                    placeholder="Titulo de la tarea"
                />

                <textarea
                    name="descripcion"
                    placeholder="Descripcion de la tarea"
                />

                <input type="submit" value="Añadir" />
            </form>
        </>
    )
}
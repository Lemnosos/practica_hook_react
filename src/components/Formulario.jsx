import React from 'react'

export const Formulario = () => {
    return (
        <>
            <h2>
                Añadir tarea
            </h2>
            <form>
                <input type="text" name="tarea" id="tarea" placeholder='Titulo de la tarea' />
                <textarea name="descripcion" id="descripcion" placeholder='Descripcion de la tarea'></textarea>
                <input type="submit" value='Añadir' />
            </form>
        </>
    )
}

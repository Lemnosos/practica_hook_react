import React, { useState } from 'react'
import { Todo } from './Todo'

export const ListaTodos = ({ lista }) => {

    return (
        <div>
            <h3>Lista de tareas existentes hasta ahora</h3>
            {
                lista?.map((tarea) => (
                    <>
                        <Todo key={tarea.id} tarea={tarea} />
                    </>
                )
                )
            }
        </div>
    )
}

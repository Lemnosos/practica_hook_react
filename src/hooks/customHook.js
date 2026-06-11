import { useReducer, useEffect } from 'react'
import { tareaReducer } from '../reducers/tareaReducer'

//Cargar desde localStorage
const init = () => {
    const storedTodos = localStorage.getItem('todos')
    return storedTodos ? JSON.parse(storedTodos) : []
}

export const useTodoList = () => {

    const [todos, dispatch] = useReducer(tareaReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (newTodo) => {
        dispatch({
            type: 'ADD_TAREA',
            payload: newTodo
        })
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'DELETE_TAREA',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: 'TOGGLE_TAREA',
            payload: id
        })
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
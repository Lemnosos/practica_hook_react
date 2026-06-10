export const tareaReducer = (state, action) => {

    switch (action.type) {

        case 'ADD_TAREA':
            return [...state, action.payload]

        case 'DELETE_TAREA':
            return state.filter(todo => todo.id !== action.payload)

        case 'TOGGLE_TAREA':
            return state.map(todo =>
                todo.id === action.payload
                    ? { ...todo, estado: !todo.estado }
                    : todo
            )

        default:
            return state
    }
}
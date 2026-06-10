export const tareaReducer = (state = [], action) => {

    console.log({ action })

    switch (action.type) {

        case 'anadir tarea':
            return [...state, action.payload]

        case 'borrar todo':
            console.log(action.payload)
            const newState = state.filter(todo => todo.id != action.payload)
            return newState

        default:
            return state

    }

}
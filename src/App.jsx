import './App.css'
import { useReducer } from 'react'
import { Formulario } from './components/Formulario'
import { ListaTodos } from './components/ListaTodos'
import { tareaReducer } from './hooks/tareaReducer'

function App() {

  const [todos, dispatch] = useReducer(tareaReducer, [])

  return (
    <>
      <header></header>

      <main>
        <Formulario dispatch={dispatch} />
        <ListaTodos todos={todos} dispatch={dispatch} />
      </main>

      <footer></footer>
    </>
  )
}

export default App
import { Formulario } from './components/Formulario'
import { ListaTodos } from './components/ListaTodos'
import { useTodoList } from './hooks/customHook'

export function App() {

  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  } = useTodoList()

  return (
    <>
      <header></header>
      <main>
        <Formulario onAdd={handleNewTodo} />

        <ListaTodos
          todos={todos}
          onDelete={handleDeleteTodo}
          onToggle={handleToggleTodo}
        />
      </main>
      <footer></footer>
    </>

  )
}
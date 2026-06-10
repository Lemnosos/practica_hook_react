import { useTodoList } from './hooks/customHook'

function App() {

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
import TodoForm from '../components/TodoForm.jsx'
import TodoFilters from '../components/TodoFilters.jsx'
import TodoList from '../components/TodoList.jsx'
import TodoStats from '../components/TodoStats.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'

const EMPTY_STATES = {
  all: 'No tasks yet. Add your first task above to get started.',
  active: 'No active tasks. Everything on your list is completed.',
  completed: 'No completed tasks yet. Check off a task to see it here.',
}

function TodoPage({ todoState, filter, onFilterChange }) {
  const { todos, addTodo, editTodo, toggleTodo, deleteTodo } = todoState

  usePageMeta({
    title: 'Flowtick — A simple, fast todo list',
    description:
      'Flowtick is a lightweight todo list that runs entirely in your browser. Add, edit, complete, and filter tasks in seconds — no account needed.',
  })

  const visibleTodos = todos.filter((todo) => {
    if (filter === 'active') {
      return !todo.completed
    }
    if (filter === 'completed') {
      return todo.completed
    }
    return true
  })

  const remaining = todos.filter((todo) => !todo.completed).length
  const counts = {
    all: todos.length,
    active: remaining,
    completed: todos.length - remaining,
  }

  return (
    <>
      <h1>Flowtick</h1>
      <p className="app-tagline">
        Capture tasks in seconds. Everything stays on this device — no account, no setup.
      </p>
      <TodoForm onAdd={addTodo} />
      <section className="todo-section" id="tasks" tabIndex={-1} aria-label="Your tasks">
        <h2 className="todo-heading">Your tasks</h2>
        <TodoFilters filter={filter} onChange={onFilterChange} counts={counts} />
        <TodoStats remaining={remaining} total={todos.length} />
        <TodoList
          todos={visibleTodos}
          onToggle={toggleTodo}
          onEdit={editTodo}
          onDelete={deleteTodo}
          emptyState={EMPTY_STATES[filter]}
        />
      </section>
    </>
  )
}

export default TodoPage

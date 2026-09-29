import TodoItem from './TodoItem.jsx'

function TodoList({ todos, onToggle, onEdit, onDelete, emptyState }) {
  if (todos.length === 0) {
    return <p className="todo-empty">{emptyState}</p>
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default TodoList

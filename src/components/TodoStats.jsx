function TodoStats({ remaining, total }) {
  if (total === 0) {
    return null
  }
  return (
    <p className="todo-stats" aria-live="polite">
      {remaining} {remaining === 1 ? 'task' : 'tasks'} remaining out of {total}
    </p>
  )
}

export default TodoStats

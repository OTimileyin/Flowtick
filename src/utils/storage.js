const STORAGE_KEY = 'flowtick.todos'

function isValidTodo(value) {
  return (
    value !== null &&
    typeof value === 'object' &&
    typeof value.id === 'string' &&
    value.id.length > 0 &&
    typeof value.text === 'string' &&
    typeof value.completed === 'boolean'
  )
}

export function loadTodos() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return []
    }
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) {
      return []
    }
    return parsed
      .filter(isValidTodo)
      .map((todo) => ({ id: todo.id, text: todo.text, completed: todo.completed }))
  } catch {
    return []
  }
}

export function saveTodos(todos) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  } catch {
    // Storage unavailable (private mode, quota). App keeps working in memory.
  }
}

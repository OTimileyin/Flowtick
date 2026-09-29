import { useCallback, useEffect, useState } from 'react'
import { loadTodos, saveTodos } from '../utils/storage.js'

function createId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `todo-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
}

export function useTodos() {
  const [todos, setTodos] = useState(loadTodos)

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  const addTodo = useCallback((text) => {
    const trimmed = text.trim()
    if (!trimmed) {
      return false
    }
    setTodos((current) => [...current, { id: createId(), text: trimmed, completed: false }])
    return true
  }, [])

  const editTodo = useCallback((id, text) => {
    const trimmed = text.trim()
    if (!trimmed) {
      return false
    }
    setTodos((current) => current.map((todo) => (todo.id === id ? { ...todo, text: trimmed } : todo)))
    return true
  }, [])

  const toggleTodo = useCallback((id) => {
    setTodos((current) =>
      current.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    )
  }, [])

  const deleteTodo = useCallback((id) => {
    setTodos((current) => current.filter((todo) => todo.id !== id))
  }, [])

  return { todos, addTodo, editTodo, toggleTodo, deleteTodo }
}

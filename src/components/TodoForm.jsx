import { useId, useState } from 'react'

function TodoForm({ onAdd }) {
  const [text, setText] = useState('')
  const [error, setError] = useState('')
  const inputId = useId()
  const errorId = useId()

  function handleSubmit(event) {
    event.preventDefault()
    if (!text.trim()) {
      setError('Enter a task before adding it.')
      return
    }
    onAdd(text)
    setText('')
    setError('')
  }

  function handleChange(event) {
    setText(event.target.value)
    if (error) {
      setError('')
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit} noValidate>
      <div className="todo-form-row">
        <label className="todo-form-label" htmlFor={inputId}>
          Add a task
        </label>
        <input
          id={inputId}
          className="todo-form-input"
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="e.g. Review pull requests"
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? errorId : undefined}
        />
      </div>
      {error && (
        <p className="todo-form-error" id={errorId} role="alert">
          {error}
        </p>
      )}
      <button className="button button-primary" type="submit">
        Add task
      </button>
    </form>
  )
}

export default TodoForm

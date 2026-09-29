import { useEffect, useId, useRef, useState } from 'react'

function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(todo.text)
  const [error, setError] = useState('')
  const checkboxId = useId()
  const editInputRef = useRef(null)
  const editButtonRef = useRef(null)
  const editId = useId()

  useEffect(() => {
    if (isEditing && editInputRef.current) {
      editInputRef.current.focus()
      editInputRef.current.select()
    }
  }, [isEditing])

  function startEditing() {
    setDraft(todo.text)
    setError('')
    setIsEditing(true)
  }

  function returnFocusToEditButton() {
    if (editButtonRef.current) {
      editButtonRef.current.focus()
    }
  }

  function cancelEditing() {
    setIsEditing(false)
    setError('')
    returnFocusToEditButton()
  }

  function saveEdit() {
    if (!draft.trim()) {
      setError('Task text cannot be empty.')
      return
    }
    onEdit(todo.id, draft)
    setIsEditing(false)
    setError('')
    returnFocusToEditButton()
  }

  function handleEditKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      saveEdit()
    } else if (event.key === 'Escape') {
      event.preventDefault()
      cancelEditing()
    }
  }

  return (
    <li className={`todo-item${todo.completed ? ' todo-item-completed' : ''}`}>
      {isEditing ? (
        <div className="todo-item-edit">
          <label className="visually-hidden" htmlFor={editId}>
            Edit task
          </label>
          <input
            id={editId}
            ref={editInputRef}
            className="todo-item-edit-input"
            type="text"
            value={draft}
            onChange={(event) => {
              setDraft(event.target.value)
              if (error) {
                setError('')
              }
            }}
            onKeyDown={handleEditKeyDown}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={error ? `${editId}-error` : undefined}
          />
          {error && (
            <p className="todo-form-error" id={`${editId}-error`} role="alert">
              {error}
            </p>
          )}
          <div className="todo-item-actions">
            <button className="button button-primary" type="button" onClick={saveEdit}>
              Save
            </button>
            <button className="button" type="button" onClick={cancelEditing}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <input
            id={checkboxId}
            className="todo-item-checkbox"
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <label className="todo-item-text" htmlFor={checkboxId}>
            {todo.text}
          </label>
          <div className="todo-item-actions">
            <button ref={editButtonRef} className="button button-small" type="button" onClick={startEditing}>
              Edit
            </button>
            <button className="button button-small button-danger" type="button" onClick={() => onDelete(todo.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  )
}

export default TodoItem

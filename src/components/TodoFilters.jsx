const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
]

function TodoFilters({ filter, onChange, counts }) {
  return (
    <div className="todo-filters" role="group" aria-label="Filter tasks">
      {FILTERS.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          className={`button button-filter${filter === value ? ' button-filter-active' : ''}`}
          aria-pressed={filter === value}
          onClick={() => onChange(value)}
        >
          {label} ({counts[value]})
        </button>
      ))}
    </div>
  )
}

export default TodoFilters

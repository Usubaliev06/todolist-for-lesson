export const TodoItem = ({ id, text, isDone, onToggleTodo }) => {
  
  const handleToggleTodo = () => {
    onToggleTodo?.(id)
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleToggleTodo}
      />
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{text}</span>
    </li>
  )
}

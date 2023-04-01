import { TodoItem } from '../todo-item'

export const TodoList = ({ title, items, onToggleTodo,className, style }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <ul>
        {
          items.map(todo => (
            <TodoItem 
              key={todo.id}
              {...todo}
              onToggleTodo={onToggleTodo}
              style={style}
            />
          ))
        }
      </ul>
      </div>
  )
}

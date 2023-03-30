import styled from 'styled-components'
import { TodoList } from './components/todo-list'
import { startTodolist } from './data'
import { useTodoList } from './hooks/useTodoList'



const StyledTodoList = styled(TodoList)`
background-color:pink;
margin-top: 50px;
`


function App() {
  const { todos, toggleTodo } = useTodoList(startTodolist)
  // const [todos, setTodos] = useState(startTodolist)

  const getOverdueTodos = () => {
    const today = new Date()
    return todos.filter((todo) => new Date(todo.deadline) < today && !todo.isDone)
  }

  const getActualTodos = () => {
    const today = new Date()
    return todos.filter((todo) => new Date(todo.deadline) >= today && !todo.isDone)
  }

  const getSuccsesfullTodos = () => {
    return todos.filter((todo) => todo.isDone)
  }

  return (
    <div>
      <h1>Todo List</h1>
      <StyledTodoList
        title="Overdue"
        items={getOverdueTodos()}
        onToggleTodo={toggleTodo}
      />
      <StyledTodoList
        title="Actual"
        items={getActualTodos()}
        onToggleTodo={toggleTodo}
      />
      <StyledTodoList
        title="Completed"
        items={getSuccsesfullTodos()}
        onToggleTodo={toggleTodo}
      />
    </div>
  )
}


export default App

import { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { TodoList } from './components/todo-list'
import { startTodolist } from './data'
import { useTodoList } from './hooks/useTodoList'



function App() {

  const GlobalStyle = createGlobalStyle`
*{  margin:0px;
  padding:0px;
  box-sizing:border-box;
}
body{
  background-color:gray;
height:100vh;
}
  `

  const [colors, setColors] = useState({
    bac: "background-color:pink;",
    color: "color:red;",
    status: 1,
  })



  const StyledTodoList = styled(TodoList)`
${colors.bac}
margin-top: 50px;


&>h2{
font-size:30px;
}
& ul{
  padding:0px;
}
`
  const StyledWrapper = styled.div`

${colors.color}
& h1{
  font-size:40px;
}
padding: 15px;
`

  const { todos, toggleTodo } = useTodoList(startTodolist)


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

  const handleChangeColors = () => {
    if (colors.status === 1) {
      setColors({
        bac: "background-color:green;",
        color: "color:blue;",
        status: 2
      })
    }
    else if (colors.status === 2) {
      setColors({
        bac: "background-color:brown;",
        color: "color:black;",
        status: 3
      })
    }
    else {
      setColors({
        bac: "background-color:pink;",
        color: "color:red;",
        status: 1
      })
    }
  }



  return (<>
    <GlobalStyle />
    <StyledWrapper>
      <h1>Todo List</h1>
      <StyledTodoList
        title="Overdue"
        items={getOverdueTodos()}
        onToggleTodo={toggleTodo}
        style={colors}
      />
      <StyledTodoList
        title="Actual"
        items={getActualTodos()}
        onToggleTodo={toggleTodo}
        style={colors}

      />
      <StyledTodoList
        title="Completed"
        items={getSuccsesfullTodos()}
        onToggleTodo={toggleTodo}
        style={colors}

      />
      <button onClick={handleChangeColors}>Change colors</button>
    </StyledWrapper>
  </>
  )
}


export default App

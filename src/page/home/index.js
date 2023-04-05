import { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { TodoList } from '../../components/todo-list/index'
import { useSelector } from 'react-redux'
import React from 'react';
import {Link }from 'react-router-dom'

const Home = () => {
  const todos = useSelector(state => console.log(state) || state.todo.items)

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


  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <h1>Todo List</h1>

        <Link to="/form">go to form</Link>

        <StyledTodoList
          title="Overdue"
          items={getOverdueTodos()}
          style={colors}
        />
        <StyledTodoList
          title="Actual"
          items={getActualTodos()}
          style={colors}

        />
        <StyledTodoList
          title="Completed"
          items={getSuccsesfullTodos()}
          style={colors}

        />
        <button onClick={handleChangeColors}>Change colors</button>
      </StyledWrapper>
    </>
  );
}

export default Home;

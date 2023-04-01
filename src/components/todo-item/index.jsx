import styled from "styled-components";

export const TodoItem = ({ id, text, isDone, onToggleTodo, style }) => {
  const handleToggleTodo = () => {
    onToggleTodo?.(id);
  };

  console.log(style);

  const TodoContainer = styled.li`
    ${style.color}
    list-style-type: none;
    margin-top: 6px;

    & :hover {
      color: blue;
    }
    & > input {
      margin-left: 15px;
    }
  `;
  const TodoText = styled.span`
    text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
  `;

  return (
    <TodoContainer>
      <input type="checkbox" checked={isDone} onChange={handleToggleTodo} />
      <TodoText isDone={isDone}>{text}</TodoText>
    </TodoContainer>
  );
};

import styled from "styled-components";
import { todoActions } from "../../store/todoSlice";
import { useDispatch } from "react-redux";

export const TodoItem = ({ id, text, isDone, style }) => {

  const dispatch = useDispatch();

  const handleToggleTodo = () => {
    dispatch(todoActions.toggleTodo({id}));
  };

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

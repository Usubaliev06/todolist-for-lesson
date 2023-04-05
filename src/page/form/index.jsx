import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { todoFormActions } from "../../store/fromSlice";
import { todoActions } from "../../store/todoSlice";

const FormBLock = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 30px;
  background-color: #626161;
  & input {
    margin: 20px 0;
  }
  * {
    font-size: 20px;
  }
`;

const Form = () => {
  const { text, deadline } = useSelector((state) => state.todoForm.form);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(
      todoFormActions.changeField({
        name: e.target.name,
        value: e.target.value,
      })
    );
  };

  const handleAddData = () => {
    dispatch(todoActions.addTodo({ text, deadline }));
    dispatch(todoFormActions.clearField());
    navigate("/");
  };

  return (
    <FormBLock>
      <Link to="/"> Go back</Link>
      <textarea
        name="text"
        value={text}
        onChange={handleChange}
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <input
        name="deadline"
        value={deadline}
        onChange={handleChange}
        type="date"
      />
      <button onClick={handleAddData}>save todo</button>
    </FormBLock>
  );
};

export default Form;

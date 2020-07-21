import React from "react";
import styled from "styled-components";

const TodoInput = styled.input`
  margin: 30px 0px;
  width: 80%;
  line-height: 40px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  outline: none;

  &::placeholder {
    color: #dad9e2;
  }
`;

const AddBtn = styled.button`
  background-color: #93b3d7;
  width: 20%;
  line-height: 40px;
  border: 1px solid #93b3d7;
  border-radius: 4px;
  outline: none;
`;

const TodoCreate = ({ text, onChange, onCreate }) => {
  return (
    <>
      <TodoInput
        type="text"
        placeholder="Add task"
        name="text"
        onChange={onChange}
        value={text}
      />
      <AddBtn onClick={onCreate}>Add</AddBtn>
    </>
  );
};

export default TodoCreate;

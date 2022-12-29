import React from "react";
import TodoAddform from "./TodoAddform";
import TodosContainer from "./TodosContainer";
import styled from "styled-components";

const TodoApp = () => {
  return (
    <TodoAppWrap>
      <TodoAddform></TodoAddform>
      <TodosContainer></TodosContainer>
    </TodoAppWrap>
  );
};

const TodoAppWrap = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

export default TodoApp;

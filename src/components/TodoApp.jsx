import React, { useEffect } from "react";
import TodoAddform from "./TodoAddform";
import TodosContainer from "./TodosContainer";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getTodo } from "../redux/modules/todos";

const TodoApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodo());
  }, [dispatch]);

  return (
    <TodoAppWrap>
      <TodoAddform></TodoAddform>
      <TodosContainer isActive={false}></TodosContainer>
      <TodosContainer isActive={true}></TodosContainer>
    </TodoAppWrap>
  );
};

const TodoAppWrap = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default TodoApp;

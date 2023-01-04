import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const TodoPage = () => {
  const { todos } = useSelector((state) => state.todos);
  const param = useParams();
  const todo = todos.find((todo) => todo.id === param.id);
  return (
    <TodoPageWrap>
      <Content>
        <div>제목 : {todo.title}</div>
        <div>내용 : {todo.content}</div>
        <Link to={`/`}>
          <span>돌아가기</span>
        </Link>
      </Content>
    </TodoPageWrap>
  );
};

const TodoPageWrap = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  gap: 50px;
  width: 400px;
  height: 400px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

export default TodoPage;

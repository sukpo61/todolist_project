import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __addTodo } from "../redux/modules/todos";
import styled from "styled-components";
import uuid from "react-uuid";
import CusttomButton from "./CusttomButton";

const TodoAddform = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    let NewData = {
      id: uuid(),
      title,
      content,
      isDone: false,
      displaytoggle: true,
    };

    dispatch(__addTodo(NewData));

    setTitle("");
    setContent("");
  };
  return (
    <TodoAddformWrap>
      <form onSubmit={onSubmitHandler}>
        <TodoInput
          className="title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TodoInput
          className="contents"
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <CusttomButton>추가하기</CusttomButton>
      </form>
    </TodoAddformWrap>
  );
};

export default TodoAddform;

const TodoAddformWrap = styled.div`
  display: flex;
  gap: 24px;
  padding: 30px;
`;

const TodoInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;

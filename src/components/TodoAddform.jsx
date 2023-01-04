import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __addTodo } from "../redux/modules/todos";
import styled from "styled-components";
import uuid from "react-uuid";
import CusttomButton from "./CusttomButton";
import useInput from "../hooks/useInput";

const TodoAddform = () => {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");

  const { title, setinputTitle, content, setinputContent, onSubmitHandler } =
    useInput("");

  // const dispatch = useDispatch();

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   if (content === "" || title === "") {
  //     window.alert("제목및 내용을 입력하세요");
  //     return;
  //   }

  //   let NewData = {
  //     id: uuid(),
  //     title,
  //     content,
  //     isDone: false,
  //     displaytoggle: true,
  //   };

  //   dispatch(__addTodo(NewData));

  //   // setTitle("");
  //   // setContent("");
  // };

  return (
    <TodoAddformWrap>
      <TodoForm onSubmit={onSubmitHandler}>
        <TodoInput
          className="title"
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={setinputTitle}
        />
        <TodoInput
          className="contents"
          type="text"
          placeholder="내용을 입력하세요"
          value={content}
          onChange={setinputContent}
        />
        <CusttomButton>추가</CusttomButton>
      </TodoForm>
    </TodoAddformWrap>
  );
};

export default TodoAddform;

const TodoAddformWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;
const TodoForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

const TodoInput = styled.input`
  border: 1px solid #eee;
  margin: 0 12px;
  height: 25px;
  width: 40%;
  border-radius: 12px;
  outline: none;
`;

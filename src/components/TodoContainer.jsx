import React from "react";
import styled from "styled-components";
import CusttomButton from "./CusttomButton";
import { __deleteTodo, __updateTodo } from "../redux/modules/todos";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TodoContainer = ({ todo }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);
  // const canSave = [content, title].every(Boolean);
  const UpdateTodo = () => {
    // if (content === "" || title === "") {
    //   window.alert("제목및 내용을 입력하세요");
    //   return;
    // }
    console.log(todo);
    let NewTodo = {
      ...todo,
      title,
      content,
      displaytoggle: !todo.displaytoggle,
    };
    console.log(NewTodo);

    dispatch(__updateTodo(NewTodo));
  };

  const ToggleTodo = () => {
    let NewTodo = {
      ...todo,
      displaytoggle: !todo.displaytoggle,
    };

    dispatch(__updateTodo(NewTodo));
  };

  const ToggleisDone = () => {
    let NewTodo = {
      ...todo,
      isDone: !todo.isDone,
    };
    console.log(NewTodo);

    dispatch(__updateTodo(NewTodo));
  };

  return (
    <TodoContainerWrap>
      <TitleWrap>
        <div>제목 : {todo.title}</div>
        <CusttomButton
          onClickFuntion={() => {
            navigate(`/${todo.id}`);
          }}
        >
          보기
        </CusttomButton>
      </TitleWrap>
      {todo.displaytoggle ? (
        <div> 내용 : {todo.content} </div>
      ) : (
        <InputsWrap>
          <TodoInput
            className="contents"
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TodoInput
            className="contents"
            type="text"
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </InputsWrap>
      )}
      {todo.displaytoggle ? (
        <ButtonsWrap>
          <CusttomButton
            onClickFuntion={() => {
              dispatch(__deleteTodo(todo.id));
            }}
          >
            삭제
          </CusttomButton>
          <CusttomButton onClickFuntion={ToggleTodo}>수정</CusttomButton>
          <CusttomButton onClickFuntion={ToggleisDone}>
            {todo.isDone ? "취소" : "완료"}
          </CusttomButton>
        </ButtonsWrap>
      ) : (
        <ButtonsWrap>
          <CusttomButton onClickFuntion={ToggleTodo}>취소</CusttomButton>
          <CusttomButton onClickFuntion={UpdateTodo}>수정</CusttomButton>
        </ButtonsWrap>
      )}
    </TodoContainerWrap>
  );
};

export default TodoContainer;

// Tailwind
// https://www.youtube.com/watch?v=pYaamz6AyvU&list=PL0Zuz27SZ-6M8znNpim8dRiICRrP5HPft

const TodoInput = styled.input`
  border: 1px solid #eee;
  margin: 0 12px;
  height: 25px;
  width: 90%;
  border-radius: 12px;
  outline: none;
`;

const TodoContainerWrap = styled.div`
  height: 200px;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

const ButtonsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-end;
`;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { __addTodo } from "../redux/modules/todos";

const useInput = (initialValue = "") => {
  const [title, setTitle] = useState(initialValue);
  const [content, setContent] = useState(initialValue);
  const dispatch = useDispatch();

  const setinputTitle = (e) => {
    setTitle(e.target.value);
  };
  const setinputContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (content === "" || title === "") {
      window.alert("제목및 내용을 입력하세요");
      return;
    }

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

  return { title, setinputTitle, content, setinputContent, onSubmitHandler };
};

export default useInput;

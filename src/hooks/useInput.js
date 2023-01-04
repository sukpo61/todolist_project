import React, { useState } from "react";

const useInput = (initialValue = "") => {
  const [title, setTitle] = useState(initialValue);
  const [content, setContent] = useState(initialValue);

  const setinputTitle = (e) => {
    setTitle(e.target.value);
  };
  const setinputContent = (e) => {
    setContent(e.target.value);
  };

  return { title, setinputTitle, content, setinputContent };
};

export default useInput;

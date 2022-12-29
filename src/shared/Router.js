import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoApp from "../components/TodoApp";
import Header from "../components/Header";
import TodoPage from "../components/TodoPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/:id" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

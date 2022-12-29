import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/:id" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

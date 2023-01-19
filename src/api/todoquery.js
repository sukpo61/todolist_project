import axios from "axios";

// 공통으로 뺐어요
const SERVER_URI = "http://localhost:3003/todos";

const getTodos = async () => {
  const response = await axios.get(`${SERVER_URI}/todos`);
  return response.data;
};

const addTodo = async (newTodo) => {
  await axios.post(`${SERVER_URI}/todos`, newTodo);
};

export { getTodos, addTodo };

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getTodo = createAsyncThunk(
  "todos/getTodo",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3002/todos");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addTodo = createAsyncThunk(
  "todos/addTodo",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      await axios.post("http://localhost:3002/todos", payload);
      const data = await axios.get("http://localhost:3002/todos");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      await axios.delete(`http://localhost:3002/todos/${payload}`);
      const data = await axios.get("http://localhost:3002/todos");
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      await axios.patch(`http://localhost:3002/todos/${payload.id}`, payload);
      const data = await axios.get("http://localhost:3002/todos");
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __getTodos = createAsyncThunk(
//   "todos/getTodos",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.get("http://localhost:3002/todos");
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

const initialState = {
  todos: [
    {
      id: 1,
      title: "제목1",
      content: "내용1",
      isDone: false,
      displaytoggle: true,
    },
    {
      id: 2,
      title: "제목2",
      content: "내용2",
      isDone: false,
      displaytoggle: true,
    },
  ],
  isLoading: false,
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodo.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getTodo.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getTodo.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    [__addTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__addTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__addTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__deleteTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__deleteTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__updateTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__updateTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, updateTodo, toggleDisplay } =
  todosSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todosSlice.reducer;

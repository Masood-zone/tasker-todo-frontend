import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  view: false,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = updatedTask;
      }
    },
    toggleView: (state) => {
      state.view = !state.view;
    },
  },
});

export const { addTask, removeTask, updateTask, toggleView } =
  taskSlice.actions;

export default taskSlice.reducer;

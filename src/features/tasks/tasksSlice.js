import { createSlice } from "@reduxjs/toolkit";
const localStorageKey = "tasksData";

const getInitialTasks = () => {
  try {
    const storedValue = localStorage.getItem(localStorageKey);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
  } catch (error) {
    console.error("Błąd ładowania stanu z Local Storage:", error);
  }
  return [];
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getInitialTasks(),
    hideDone: false,
  },
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push(payload);
    },

    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },

    toggleTaskDone: (state, { payload }) => {
      const index = state.tasks.findIndex(({ id }) => id === payload);
      state.tasks[index].done = !state.tasks[index].done;
    },

    removeTask: (state, { payload: taskId }) => {
      const index = state.tasks.findIndex((task) => task.id === taskId);
      state.tasks.splice(index, 1);
    },

    setAllDone: (state) => {
      state.tasks.forEach((task) => {
        task.done = true;
      });
    },
  },
});
export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
} = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;

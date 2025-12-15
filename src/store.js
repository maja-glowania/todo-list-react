import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";

const localStorageKey = "tasksData";

const saveTasksToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state.tasks.tasks);
    localStorage.setItem(localStorageKey, serializedState);
  } catch (error) {
    console.error("Błąd zapisu stanu do Local Storage:", error);
  }
};

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

store.subscribe(() => {
  saveTasksToLocalStorage(store.getState());
});

export default store;

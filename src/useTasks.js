import { useState, useEffect } from "react";

const localStorageKey = "tasksData";

const defaultTasks = [
  { id: 1, content: "przejść na Styled Components", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

const getInitialTasks = () => {
  const storedValue = localStorage.getItem(localStorageKey);

  if (storedValue) {
    return JSON.parse(storedValue);
  }
  return defaultTasks;
};

export const useTasks = () => {
  const [tasks, setTasks] = useState(getInitialTasks);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));
  }, [tasks]);

  const addNewTask = (content) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? Math.max(...tasks.map((task) => task.id)) + 1 : 1,
      },
    ]);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  return {
    tasks,
    addNewTask,
    removeTask,
    toggleTaskDone,
    setAllDone,
  };
};

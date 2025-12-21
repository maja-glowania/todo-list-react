export const getExampleTasks = async () => {
  const response = await fetch("/todo-list-react/tasks.json");

  if (!response.ok) {
    throw new Error("Błąd podczas pobierania danych");
  }

  return await response.json();
};

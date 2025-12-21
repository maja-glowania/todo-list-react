import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTasks } from "./tasksSlice";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";
import Form from "./Form";
import TasksContainer from "./TasksContainer";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";
import Search from "./Search";
import FetchExampleTasksButton from "./FetchExampleTasksButton";

function Tasks() {
  const dispatch = useDispatch();

  useEffect(() => {
    const tasks = getTasksFromLocalStorage();
    dispatch(setTasks(tasks));
  }, [dispatch]);

  return (
    <Container>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<FetchExampleTasksButton />}
      />

      <Section title="Wyszukiwarka" body={<Search />} />

      <Section
        title="Lista zadań"
        body={<TasksContainer />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;

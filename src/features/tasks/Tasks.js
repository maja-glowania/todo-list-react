import { useSelector } from "react-redux";
import { useTasks } from "../../useTasks";
import Form from "./Form";
import TasksContainer from "./TasksContainer";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";
import { selectTasks } from "./tasksSlice";

function Tasks() {
  const {
    // tasks,
    hideDone,
    addNewTask,
    removeTask,
    toggleTaskDone,
    setAllDone,
    toggleHideDone,
  } = useTasks();

  const { tasks } = useSelector(selectTasks);

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <TasksContainer
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={<Buttons setAllDone={setAllDone} />}
      />
    </Container>
  );
}

export default Tasks;

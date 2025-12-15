import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";
import { TaskList, ListItem, TaskButton, Content } from "./styled";

const TasksContainer = ({ removeTask, toggleTaskDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  return (
    <TaskList>
      {tasks.map((task) => (
        <ListItem key={task.id} $hidden={task.done && hideDone}>
          <TaskButton onClick={() => toggleTaskDone(task.id)} $toggleDone>
            {task.done ? "✓" : ""}
          </TaskButton>
          <Content $done={task.done}>{task.content}</Content>
          <TaskButton onClick={() => removeTask(task.id)} $remove>
            🗑️
          </TaskButton>
        </ListItem>
      ))}
    </TaskList>
  );
};

export default TasksContainer;

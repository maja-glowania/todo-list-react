import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";
import { TaskList, ListItem, TaskButton, Content } from "./styled";

const TasksContainer = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <TaskList>
      {tasks.map((task) => (
        <ListItem key={task.id} $hidden={task.done && hideDone}>
          <TaskButton
            onClick={() => dispatch(toggleTaskDone(task.id))}
            $toggleDone
          >
            {task.done ? "✓" : ""}
          </TaskButton>
          <Content $done={task.done}>{task.content}</Content>
          <TaskButton onClick={() => dispatch(removeTask(task.id))} $remove>
            🗑️
          </TaskButton>
        </ListItem>
      ))}
    </TaskList>
  );
};

export default TasksContainer;

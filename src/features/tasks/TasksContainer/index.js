import { TaskList, ListItem, TaskButton, Content } from "./styled";

const TasksContainer = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
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

export default TasksContainer;

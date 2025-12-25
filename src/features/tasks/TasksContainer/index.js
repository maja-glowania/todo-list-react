import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toTask } from "../../../routes";
import {
  selectHideDone,
  toggleTaskDone,
  removeTask,
  selectTasksByQuery,
} from "../tasksSlice";
import { TaskList, ListItem, TaskButton, Content } from "./styled";
import { useQueryParameter } from "../useQueryParameter";
import searchQueryParamName from "../searchQueryParamName";

const TasksContainer = () => {
  const query = useQueryParameter(searchQueryParamName);
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
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
          <Content $done={task.done}>
            <Link
              to={toTask({ id: task.id })}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {task.content}
            </Link>
          </Content>

          <TaskButton onClick={() => dispatch(removeTask(task.id))} $remove>
            🗑️
          </TaskButton>
        </ListItem>
      ))}
    </TaskList>
  );
};

export default TasksContainer;

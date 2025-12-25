import { Routes, Route, Navigate } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import Navigation from "./common/Navigation";
import { toAuthor, toTask, toTasks } from "./routes";

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path={toTask()} element={<TaskPage />} />
      <Route path={toTasks()} element={<Tasks />} />
      <Route path={toAuthor()} element={<AuthorPage />} />
      <Route path="/" element={<Navigate to={toTasks()} />} />
    </Routes>
  </>
);

export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import AuthorPage from "./features/author/AuthorPage";
import Navigation from "./Navigation";

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/zadania" element={<Tasks />} />
      <Route path="/autor" element={<AuthorPage />} />
      <Route path="/" element={<Navigate to="/zadania" />} />
    </Routes>
  </>
);

export default App;

import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectIsLoading } from "../tasksSlice";
import { StyledButton } from "./styled";

const FetchExampleTasksButton = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return (
    <StyledButton
      disabled={isLoading}
      onClick={() => dispatch(fetchExampleTasks())}
    >
      {isLoading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
    </StyledButton>
  );
};

export default FetchExampleTasksButton;

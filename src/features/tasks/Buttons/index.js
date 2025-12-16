import { useSelector, useDispatch } from "react-redux";
import { ButtonsContainer, Button } from "./styled";
import {
  toggleHideDone,
  setAllDone,
  selectHideDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
} from "../tasksSlice";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  if (areTasksEmpty) {
    return null;
  }

  return (
    <ButtonsContainer>
      <Button onClick={() => dispatch(toggleHideDone())}>
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </Button>
      <Button onClick={() => dispatch(setAllDone())} disabled={isEveryTaskDone}>
        Ukończ wszystkie
      </Button>
    </ButtonsContainer>
  );
};

export default Buttons;

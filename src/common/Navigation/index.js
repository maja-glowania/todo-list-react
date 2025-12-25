import { toAuthor, toTasks } from "../../routes";
import { NavigationContainer, List, Item, NavigationLink } from "./styled";

const Navigation = () => (
  <NavigationContainer>
    <List>
      <Item>
        <NavigationLink to={toTasks()}>Zadania</NavigationLink>
      </Item>
      <Item>
        <NavigationLink to={toAuthor()}>O autorze</NavigationLink>
      </Item>
    </List>
  </NavigationContainer>
);

export default Navigation;

import { NavigationContainer, List, Item, NavigationLink } from "./styled";

const Navigation = () => (
  <NavigationContainer>
    <List>
      <Item>
        <NavigationLink to="/zadania">Zadania</NavigationLink>
      </Item>
      <Item>
        <NavigationLink to="/autor">O autorze</NavigationLink>
      </Item>
    </List>
  </NavigationContainer>
);

export default Navigation;

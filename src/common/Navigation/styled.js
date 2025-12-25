import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationContainer = styled.nav`
  background-color: ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  margin: 0px;
`;

export const NavigationLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.componentBackground};
  text-decoration: none;
  display: block;
  padding: 15px 20px;
  transition: 0.3s;
  border-bottom: 1px solid transparent;

  &.active {
    font-weight: bold;
    border-bottom: 1px solid ${({ theme }) => theme.color.componentBackground};
  }

  &:hover {
    color: ${({ theme }) => theme.color.primaryLighterHover};
    border-bottom: 1px solid ${({ theme }) => theme.color.primaryLighterHover};
  }
`;

import styled, { css } from "styled-components";

export const TaskList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  width: 100%;
`;

export const Content = styled.span`
  word-wrap: break-word;
  word-break: break-word;

  ${({ $done }) =>
    $done &&
    css`
      text-decoration: line-through;
    `}
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  grid-gap: 10px;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  width: 100%;

  ${({ $hidden }) =>
    $hidden &&
    css`
      display: none;
    `}
`;

export const TaskButton = styled.button`
  color: white;
  border: none;
  padding: 6px 10px;
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 1s;
  cursor: pointer;

  ${({ $remove, theme }) =>
    $remove &&
    css`
      background-color: ${theme.color.danger};

      &:hover {
        background-color: ${theme.color.dangerHover};
      }
    `}

  ${({ $toggleDone, theme }) =>
    $toggleDone &&
    css`
      background-color: ${theme.color.success};

      &:hover {
        background-color: ${theme.color.successHover};
      }
    `}
`;

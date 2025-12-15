import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  margin-left: auto;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-basis: 100%;
    flex-direction: column;
    width: 100%;
    margin: 10px;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.primary};
  font-size: 14px;
  cursor: pointer;
  padding: 5px;
  transition: color 0.5s;
  user-select: none;

  &:hover {
    transition: 1s;
    color: ${({ theme }) => theme.color.primaryHover};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.disabled};
    cursor: default;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
  }
`;

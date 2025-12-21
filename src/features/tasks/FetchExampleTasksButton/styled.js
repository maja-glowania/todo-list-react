import styled from "styled-components";

export const StyledButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.color.primary};
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.primaryHover};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.disabled};
    cursor: not-allowed;
  }
`;

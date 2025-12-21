import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.inputFocus};
  }
`;

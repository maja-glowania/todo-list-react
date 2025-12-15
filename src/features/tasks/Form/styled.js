import styled from "styled-components";

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

export const Input = styled.input`
  height: 10px;
  width: 100%;
  max-width: 800px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.color.border};

  &:focus {
    border-color: ${({ theme }) => theme.color.primary};
    outline-color: ${({ theme }) => theme.color.inputFocus};
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  color: white;
  border: none;
  padding: 10px;
  transition: 1s;
  width: 150px;

  &:hover {
    background: ${({ theme }) => theme.color.primaryHover};
    transform: scale(1.1, 1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

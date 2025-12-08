import styled from "styled-components";

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

export const Input = styled.input`
  height: 10px;
  width: 100%;
  max-width: 800px;
  padding: 20px;
  border: 1px solid #ddd;

  &:focus {
    border-color: rgb(0, 128, 128);
    outline-color: black;
  }
`;

export const Button = styled.button`
  background-color: rgb(0, 128, 128);
  color: white;
  border: none;
  padding: 10px;
  transition: 1s;
  width: 150px;

  &:hover {
    background: rgb(1, 180, 180);
    transform: scale(1.1, 1.1);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

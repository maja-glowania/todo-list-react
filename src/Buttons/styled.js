import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  margin-left: auto;
  gap: 10px;

  @media (max-width: 767px) {
    flex-basis: 100%;
    flex-direction: column;
    width: 100%;
    margin: 10px;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: rgb(0, 128, 128);
  font-size: 14px;
  cursor: pointer;
  padding: 5px;
  transition: color 0.5s;
  user-select: none;

  &:hover {
    transition: 1s;
    color: rgb(1, 180, 180);
  }

  &:disabled {
    color: rgb(204, 204, 204);
    cursor: default;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

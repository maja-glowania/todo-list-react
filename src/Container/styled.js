import styled from "styled-components";

export const Container = styled.main`
  max-width: 1000px;
  padding: 20px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 20px 25px;
  }
`;

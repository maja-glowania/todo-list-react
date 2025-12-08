import styled from "styled-components";

export const SectionContainer = styled.section`
  margin: 10px 0;
  background-color: white;
  box-shadow: 0 0 5px #ddd;
`;

export const Header = styled.header`
  font-size: 20px;
  margin: 0px;
  padding: 20px;
  border-bottom: 1px solid #ddd;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 20px;
`;

export const Body = styled.div`
  padding: 20px;
`;

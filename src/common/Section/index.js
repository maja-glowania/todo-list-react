import { SectionContainer, Header, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <SectionContainer>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    <Body>{body}</Body>
  </SectionContainer>
);

export default Section;

import { SectionContainer, Header, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <SectionContainer>
    <Header>
      {/* Title teraz renderuje <h2> */}
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    <Body>{body}</Body>
  </SectionContainer>
);

export default Section;

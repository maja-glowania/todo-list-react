import { Container } from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";

const AuthorPage = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Kilka słów o mnie"
      body={
        <>
          <p>
            Mam na imię Maja i mam 23 lata. Mam duszę artysty, ale umysł
            ścisłowca. Kocham zwierzęta i rośliny.
          </p>
          <p>
            Interesuję się szeroko pojętą sztuką. Jestem typem osoby, która co
            chwilę uczy się czegoś nowego. Bardzo lubię tworzyć. Lubię
            szydełkować, potrafię też szyć na maszynie do szycia. Ostatnio
            również zaczynam wgłębiać się w temat renowacji mebli. To tylko
            kilka z moich zajawek 😅
          </p>
        </>
      }
    />
  </Container>
);

export default AuthorPage;

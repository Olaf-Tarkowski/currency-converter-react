import Form from "../Form";
import Header from "../Header";
import Container from "../Container";
import Clock from "../Clock";
import { Footer, FooterContainer } from "./styled";

function App() {
  return (
    <Container>
      <Header />
      <Form />
      <FooterContainer>
        <Clock />
        <Footer>YouCode</Footer>
      </FooterContainer>
    </Container>
  );
}

export default App;

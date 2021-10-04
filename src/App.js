import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import Clock from "./Clock";

function App() {
  return (
    <Container>
      <Header />
      <Form />
      <Clock />
      <Footer>
        YouCode
      </Footer>
    </Container>
  );
}

export default App;

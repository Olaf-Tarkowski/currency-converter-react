import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import Clock from "./Clock";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Form />
        <Clock />
        <Footer>
          YouCode
        </Footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;

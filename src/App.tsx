import "./App.css";
import { Header } from "./component/header";
import { Main } from "./component/main";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
    </>
  );
}

export default App;

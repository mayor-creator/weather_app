import "./App.css";
import { Header } from "./component/header";
import { Main } from "./component/main";
import { TempUnitContextProvider } from "./component/TempUnitContext";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <TempUnitContextProvider>
      <GlobalStyles />
      <Header />
      <Main />
    </TempUnitContextProvider>
  );
}

export default App;

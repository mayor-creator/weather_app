import "./App.css";
import { Header } from "./component/header";
import { SearchButton } from "./component/SearchButton";
import { TextInput } from "./component/TextInput";

import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <TextInput />
      <SearchButton />
    </>
  );
}

export default App;

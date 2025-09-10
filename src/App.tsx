import "./App.css";
import {GlobalStyles} from './styles/GlobalStyles';
import Heading from "./component/heading";

function App() {
	return(
		<>
			<GlobalStyles />
			<Heading>Weather App</Heading>
		</>
	);
}

export default App;

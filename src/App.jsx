import "./styles/main.scss";
import Calendar from "./components/Calendar";
import { OWNERS } from "./constants/data";

function App() {
  return <Calendar owner={OWNERS.FLOR} />;
}

export default App;

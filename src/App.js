import "./App.scss";
import Calendar from "./components/Calendar";
import { OWNERS } from "./data.js";

function App() {
  return <Calendar owner={OWNERS.FLOR} />;
}

export default App;

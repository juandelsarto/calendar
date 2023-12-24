import Customizer from "./modules/Customizer";
import "./styles/main.scss";
import {
  ChakraProvider,
} from "@chakra-ui/react";

function App() {

  return (
    <ChakraProvider>
      <Customizer />
    </ChakraProvider>
  );
  // return <Calendar owner={OWNERS.FLOR} />;
}

export default App;

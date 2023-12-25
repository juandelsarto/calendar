import { Box, Center, ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import Customizer from "./modules/Customizer";
import "./styles/main.scss";

function App() {
  return (
    <ChakraProvider>
      <Flex flexDir="column" borderWidth="1px" alignContent="center" w="100%" h="100vh" p={4}>
        <Center>
          <Heading as="h3" size="lg">
            Calendario
          </Heading>
        </Center>
        <Flex flex={1} gap={4} py={4} >
          <Box p={4} flex={1 / 2}>
            <Heading as="h5" size="sm" mb={4}>
              Personalizar:
            </Heading>
            <Customizer />
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
  // return <Calendar owner={OWNERS.FLOR} />;
}

export default App;

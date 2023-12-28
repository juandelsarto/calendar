import { Box, Center, ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import CalendarPreview from "./modules/CalendarPreview";
import Customizer from "./modules/Customizer";
import { CalendarProvider } from "./context/useCalendar";
import "./styles/main.scss";

function App() {
  return (
    <ChakraProvider>
      <CalendarProvider>
        <Flex flexDir="column" alignContent="center" w="100%" h="100vh" p={4}>
          <Center>
            <Heading as="h3" size="lg">
              Calendario
            </Heading>
          </Center>
          <Flex flex={1} gap={4} py={4}>
            <Box p={4} flex={1 / 3}>
              <Heading as="h5" size="sm" mb={4}>
                Personalizar:
              </Heading>
              <Customizer />
            </Box>
            <Box p={4} flex={1} bg="white">
              <Heading as="h5" size="sm" mb={4}>
                Vista previa:
              </Heading>
              <CalendarPreview />
            </Box>
          </Flex>
        </Flex>
      </CalendarProvider>
    </ChakraProvider>
  );
}

export default App;

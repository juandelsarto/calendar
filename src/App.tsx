import { ChakraProvider } from '@chakra-ui/react';
import CalendarPreview from './modules/CalendarPreview';
import Customizer from './modules/Customizer';
import Layout from './components/Layout';
import { CalendarProvider } from './context/useCalendar';
import './styles/main.scss';

function App() {
  return (
    <ChakraProvider>
      <CalendarProvider>
        <Layout>
          <CalendarPreview />
          <Customizer />
        </Layout>
      </CalendarProvider>
    </ChakraProvider>
  );
}

export default App;

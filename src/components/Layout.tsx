import { useContext } from 'react';
import { Flex } from '@chakra-ui/react';
import { CalendarContext } from '../context/useCalendar';
import Header from '../modules/Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const {
    state: { primaryColor },
  } = useContext(CalendarContext);

  return (
    <Flex
      flexDir="column"
      alignContent="center"
      w="100%"
      h="100vh"
      p={4}
      overflow="hidden"
      backgroundColor={primaryColor}
    >
      <Header />
      {children}
    </Flex>
  );
};

export default Layout;

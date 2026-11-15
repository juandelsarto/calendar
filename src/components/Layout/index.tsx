import { Flex } from '@chakra-ui/react';

import { useCalendar } from '@/context/useCalendar';
import Header from '@/modules/Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const {
    state: { primaryColor },
  } = useCalendar();

  return (
    <Flex
      flexDir="column"
      alignContent="center"
      w="100%"
      h="100vh"
      p={4}
      overflow="hidden"
      bgColor={primaryColor}
    >
      <Header />
      {children}
    </Flex>
  );
};

export default Layout;

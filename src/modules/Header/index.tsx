import { Button, Center, Flex, Heading } from '@chakra-ui/react';

import { useCalendar, useCalendarUI } from '@/context/useCalendar';

const Header = () => {
  const {
    state: { secondaryColor },
    contrastPrimary,
    contrastSecondary,
  } = useCalendar();
  const { printer, drawer } = useCalendarUI();

  return (
    <>
      <Center>
        <Heading as="h3" size="lg" mb={4} color={contrastPrimary}>
          Calendario
        </Heading>
      </Center>
      <Flex justifyContent="space-between" flexDir="row" w="100%" gap={4}>
        <Heading as="h5" size="sm" marginRight="auto" color={contrastPrimary}>
          Vista previa:
        </Heading>
        <Button onClick={printer.handlePrint}>Imprimir</Button>
        <Button
          ref={drawer.drawerBtnRef}
          color={contrastSecondary}
          backgroundColor={secondaryColor}
          onClick={drawer.onOpen}
        >
          Personalizar
        </Button>
      </Flex>
    </>
  );
};

export default Header;

import { Button, Center, Flex, Heading } from '@chakra-ui/react';
import { CalendarContext } from '../../context/useCalendar';
import React from 'react';
import { getContrastedFontColor } from '../CalendarPreview/CalendarPreview.hooks';

const Header = () => {
  const {
    printer,
    drawer,
    state: { primaryColor, secondaryColor },
  } = React.useContext(CalendarContext);

  return (
    <>
      <Center>
        <Heading
          as="h3"
          size="lg"
          mb={4}
          color={getContrastedFontColor(primaryColor)}
        >
          Calendario
        </Heading>
      </Center>
      <Flex justifyContent="space-between" flexDir="row" w="100%" gap={4}>
        <Heading
          as="h5"
          size="sm"
          marginRight="auto"
          color={getContrastedFontColor(primaryColor)}
        >
          Vista previa:
        </Heading>
        <Button onClick={printer.handlePrint} content={printer.componentRef}>
          Imprimir
        </Button>
        <Button
          ref={drawer.drawerBtnRef}
          color={getContrastedFontColor(secondaryColor)}
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

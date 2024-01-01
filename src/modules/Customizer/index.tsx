import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { CalendarContext } from "../../context/useCalendar";
import Content from "./Customizer.content";

const Customizer = () => {
  const { drawer } = React.useContext(CalendarContext);

  return (
    <Drawer
      size="md"
      placement="right"
      isOpen={drawer.isOpen}
      onClose={drawer.onClose}
      finalFocusRef={drawer.btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Personalizar</DrawerHeader>
        <DrawerBody>
          <Content />
        </DrawerBody>
        <DrawerFooter>
          <Button mr={3} onClick={drawer.onClose}>
            Cerrar
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Customizer;

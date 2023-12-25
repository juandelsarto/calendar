import { useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { HexColorPicker } from "react-colorful";
import Selector from "../Selector";
import {
  BACKGROUND_OPTIONS,
  DATES_OPTION_LIST,
  LANGUAGE_OPTIONS,
  SIZE_OPTIONS,
  STARTING_DAY_OPTIONS,
} from "./Options";

const Customizer = () => {
  const [primaryColor, setPrimaryColor] = useState("#000");
  const [secondaryColor, setSecondaryColor] = useState("#000");
  const [thirdColor, setThirdColor] = useState("#000");

  return (
    <Accordion allowToggle>
      <AccordionItem>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            Opciones generales
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Box my={4}>
            <FormControl>
              <FormLabel>Elegí el listado de fechas:</FormLabel>
              <Select placeholder="Seleccioná una opción">
                {DATES_OPTION_LIST.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <Box my={4}>
            <FormControl>
              <FormLabel>Elegí el idioma:</FormLabel>
              <Selector
                name="language"
                defaultValue={LANGUAGE_OPTIONS[0].value}
                options={LANGUAGE_OPTIONS}
              />
            </FormControl>
          </Box>
          <Box my={4}>
            <FormControl>
              <FormLabel>Elegí el día de inicio:</FormLabel>
              <Selector
                name="startingDay"
                defaultValue={STARTING_DAY_OPTIONS[0].value}
                options={STARTING_DAY_OPTIONS}
              />
            </FormControl>
          </Box>
          <Box my={4}>
            <FormControl>
              <FormLabel>Elegir el tamaño de hoja:</FormLabel>
              <Selector
                name="size"
                defaultValue={SIZE_OPTIONS[0].value}
                options={SIZE_OPTIONS}
              />
            </FormControl>
          </Box>
          <Box my={4}>
            <FormControl>
              <FormLabel>Elegir el fondo para los cumpleaños:</FormLabel>
              <Selector
                name="bg"
                defaultValue={BACKGROUND_OPTIONS[0].value}
                options={BACKGROUND_OPTIONS}
              />
            </FormControl>
          </Box>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            Ocultar o mostrar días
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Box my={4}>
            <Checkbox size="lg" defaultChecked>
              Feriados
            </Checkbox>
          </Box>
          <Box my={4}>
            <Checkbox size="lg" defaultChecked>
              Cumpleaños
            </Checkbox>
          </Box>
          <Box my={4}>
            <Checkbox size="lg" defaultChecked>
              Dias especiales
            </Checkbox>
          </Box>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            Colores
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Box my={4}>
            <FormLabel>Color primario:</FormLabel>
            <HexColorPicker color={primaryColor} onChange={setPrimaryColor} />
          </Box>
          <Box my={4}>
            <FormLabel>Color secundario:</FormLabel>
            <HexColorPicker
              color={secondaryColor}
              onChange={setSecondaryColor}
            />
          </Box>
          <Box my={4}>
            <FormLabel>Color terciario:</FormLabel>
            <HexColorPicker color={thirdColor} onChange={setThirdColor} />
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Customizer;

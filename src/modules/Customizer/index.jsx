import { useContext, useState } from "react";
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
import { OPTIONS } from "../../constants/Enums";
import {
  BACKGROUND_OPTIONS,
  LANGUAGE_OPTIONS,
  OWNER_OPTIONS,
  SIZE_OPTIONS,
  STARTING_DAY_OPTIONS,
} from "./Options";
import { CalendarContext } from "../../context/useCalendar";

const Customizer = () => {
  const {
    state: {
      startingDay,
      language,
      size,
      background,
      enabledEspecialDays,
      enabledFeriados,
      enabledBirthdays,
    },
    dispatch,
  } = useContext(CalendarContext);

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
                {OWNER_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box my={4}>
            <FormControl>
              <FormLabel>Elegí el idioma:</FormLabel>
              <Selector
                name={OPTIONS.LANGUAGE}
                defaultValue={language}
                options={LANGUAGE_OPTIONS}
                onChange={(value) => dispatch({ [OPTIONS.LANGUAGE]: value })}
              />
            </FormControl>
          </Box>
          <Box my={4}>
            <FormControl>
              <FormLabel>Elegí el día de inicio:</FormLabel>
              <Selector
                name={OPTIONS.STARTING_DAY}
                defaultValue={startingDay}
                options={STARTING_DAY_OPTIONS}
                onChange={(value) =>
                  dispatch({ [OPTIONS.STARTING_DAY]: value })
                }
              />
            </FormControl>
          </Box>
          <Box my={4}>
            <FormControl>
              <FormLabel>Elegir el tamaño de hoja:</FormLabel>
              <Selector
                name={OPTIONS.SIZE}
                defaultValue={size}
                options={SIZE_OPTIONS}
                onChange={(value) => dispatch({ [OPTIONS.SIZE]: value })}
              />
            </FormControl>
          </Box>
          <Box my={4}>
            <FormControl>
              <FormLabel>Elegir el fondo para los cumpleaños:</FormLabel>
              <Selector
                name={OPTIONS.BACKGROUND}
                defaultValue={background}
                options={BACKGROUND_OPTIONS}
                onChange={(value) => dispatch({ [OPTIONS.BACKGROUND]: value })}
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
            <Checkbox
              size="lg"
              defaultChecked={enabledFeriados}
              onChange={(event) =>
                dispatch({ enabledFeriados: event.target.checked })
              }
            >
              Feriados
            </Checkbox>
          </Box>
          <Box my={4}>
            <Checkbox
              size="lg"
              defaultChecked={enabledBirthdays}
              onChange={(event) =>
                dispatch({ enabledBirthdays: event.target.checked })
              }
            >
              Cumpleaños
            </Checkbox>
          </Box>
          <Box my={4}>
            <Checkbox
              size="lg"
              defaultChecked={enabledEspecialDays}
              onChange={(event) =>
                dispatch({ enabledEspecialDays: event.target.checked })
              }
            >
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

import { useContext } from 'react';
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
} from '@chakra-ui/react';
import { HexColorPicker } from 'react-colorful';
import { OPTIONS } from '../../constants/Enums';
import {
  BACKGROUND_OPTIONS,
  LANGUAGE_OPTIONS,
  OWNER_OPTIONS,
  SIZE_OPTIONS,
  STARTING_DAY_OPTIONS,
} from './Options';
import { CalendarContext } from '../../context/useCalendar';
import Selector from '../Selector';

const Content = () => {
  const {
    state: {
      startingDay,
      language,
      size,
      background,
      enabledEspecialDays,
      enabledFeriados,
      enabledBirthdays,
      primaryColor,
      secondaryColor,
      thirdColor,
    },
    owner,
    handleOwnerChange,
    dispatch,
  } = useContext(CalendarContext);

  return (
    <Accordion allowMultiple>
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
              <Select
                placeholder="Seleccioná una opción"
                value={owner}
                onChange={(event) => handleOwnerChange(event.target.value)}
              >
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
                onChange={(value: string) =>
                  dispatch({ [OPTIONS.LANGUAGE]: value })
                }
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
                onChange={(value: string) =>
                  dispatch({ [OPTIONS.STARTING_DAY]: value })
                }
              />
            </FormControl>
          </Box>
          {/* TODO */}
          <Box my={4}>
            <FormControl>
              <FormLabel>Elegir el tamaño de hoja:</FormLabel>
              <Selector
                name={OPTIONS.SIZE}
                defaultValue={size}
                options={SIZE_OPTIONS}
                onChange={(value: string) =>
                  dispatch({ [OPTIONS.SIZE]: value })
                }
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
                onChange={(value: string) =>
                  dispatch({ [OPTIONS.BACKGROUND]: value })
                }
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
                dispatch({
                  [OPTIONS.ENABLED_FERIADOS]: event.target.checked,
                })
              }
              colorScheme="orange"
            >
              Feriados
            </Checkbox>
          </Box>
          <Box my={4}>
            <Checkbox
              size="lg"
              defaultChecked={enabledBirthdays}
              onChange={(event) =>
                dispatch({
                  [OPTIONS.ENABLED_BIRTHDAYS]: event.target.checked,
                })
              }
              colorScheme="orange"
            >
              Cumpleaños
            </Checkbox>
          </Box>
          <Box my={4}>
            <Checkbox
              size="lg"
              defaultChecked={enabledEspecialDays}
              onChange={(event) =>
                dispatch({
                  [OPTIONS.ENABLED_ESPECIAL_DAYS]: event.target.checked,
                })
              }
              colorScheme="orange"
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
            <HexColorPicker
              color={primaryColor}
              onChange={(color) => dispatch({ [OPTIONS.PRIMARY_COLOR]: color })}
            />
          </Box>
          <Box my={4}>
            <FormLabel>Color secundario:</FormLabel>
            <HexColorPicker
              color={secondaryColor}
              onChange={(color) =>
                dispatch({ [OPTIONS.SECONDARY_COLOR]: color })
              }
            />
          </Box>
          <Box my={4}>
            <FormLabel>Color terciario:</FormLabel>
            <HexColorPicker
              color={thirdColor}
              onChange={(color) => dispatch({ [OPTIONS.THIRD_COLOR]: color })}
            />
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Content;

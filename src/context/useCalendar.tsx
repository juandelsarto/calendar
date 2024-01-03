import { createContext, useEffect, useMemo, useReducer, useRef } from "react";
import {
  BACKGROUND,
  DAYS,
  LANGUAGES,
  OPTIONS,
  OWNERS,
  SIZES,
} from "../constants/Enums";
import { useDisclosure } from "@chakra-ui/react";
import { useReactToPrint } from "react-to-print";

export const CalendarContext = createContext(null);

export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("calendarSettings")) || initialValue;

const initialState = {
  [OPTIONS.LANGUAGE]: LANGUAGES.SPANISH,
  [OPTIONS.STARTING_DAY]: DAYS.MONDAY,
  [OPTIONS.SIZE]: SIZES.A4,
  [OPTIONS.BACKGROUND]: BACKGROUND.BALLONS,
  [OPTIONS.ENABLED_FERIADOS]: true,
  [OPTIONS.ENABLED_BIRTHDAYS]: true,
  [OPTIONS.ENABLED_ESPECIAL_DAYS]: false,
  [OPTIONS.PRIMARY_COLOR]: "#6dd2b0",
  [OPTIONS.SECONDARY_COLOR]: "#e15f82",
  [OPTIONS.THIRD_COLOR]: "#88d7cd",
  [OPTIONS.OWNER]: OWNERS.FAMILIA,
};

function reducer(state: any, action: () => void) {
  return { ...state, ...action };
}

export const CalendarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem("calendarSettings", JSON.stringify(state));
  }, [state]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerBtnRef = useRef();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const memoizedValue = useMemo(
    () => ({
      state,
      dispatch,
      drawer: {
        isOpen,
        onOpen,
        onClose,
        drawerBtnRef,
      },
      printer: {
        componentRef,
        handlePrint,
      },
    }),
    [
      state,
      dispatch,
      isOpen,
      onOpen,
      onClose,
      drawerBtnRef,
      componentRef,
      handlePrint,
    ]
  );

  return (
    <CalendarContext.Provider value={memoizedValue}>
      {children}
    </CalendarContext.Provider>
  );
};

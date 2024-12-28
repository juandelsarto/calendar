import { createContext, useEffect, useMemo, useReducer, useRef } from 'react';
import {
  BACKGROUND,
  DAYS,
  LANGUAGES,
  OPTIONS,
  OWNERS,
  SIZES,
} from '../constants';
import { useDisclosure } from '@chakra-ui/react';
import { useReactToPrint } from 'react-to-print';
import Cumple from '../assets/bgCumple.jpg';

interface IState {
  [OPTIONS.LANGUAGE]: LANGUAGES;
  [OPTIONS.STARTING_DAY]: DAYS;
  [OPTIONS.SIZE]: SIZES;
  [OPTIONS.BACKGROUND]: BACKGROUND;
  [OPTIONS.ENABLED_FERIADOS]: boolean;
  [OPTIONS.ENABLED_BIRTHDAYS]: boolean;
  [OPTIONS.ENABLED_ESPECIAL_DAYS]: boolean;
  [OPTIONS.PRIMARY_COLOR]: string;
  [OPTIONS.SECONDARY_COLOR]: string;
  [OPTIONS.THIRD_COLOR]: string;
  [OPTIONS.OWNER]: OWNERS;
}

interface ICalendarContext {
  state: IState;
  dispatch: React.Dispatch<any>;
  drawer: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    drawerBtnRef: React.MutableRefObject<HTMLButtonElement | null> | null;
  };
  printer: {
    componentRef: React.MutableRefObject<HTMLDivElement | null> | null;
    handlePrint: () => void;
  };
}
const initialState: IState = {
  [OPTIONS.LANGUAGE]: LANGUAGES.SPANISH,
  [OPTIONS.STARTING_DAY]: DAYS.MONDAY,
  [OPTIONS.SIZE]: SIZES.A4,
  [OPTIONS.BACKGROUND]: Cumple,
  [OPTIONS.ENABLED_FERIADOS]: true,
  [OPTIONS.ENABLED_BIRTHDAYS]: true,
  [OPTIONS.ENABLED_ESPECIAL_DAYS]: false,
  [OPTIONS.PRIMARY_COLOR]: '#6dd2b0',
  [OPTIONS.SECONDARY_COLOR]: '#e15f82',
  [OPTIONS.THIRD_COLOR]: '#88d7cd',
  [OPTIONS.OWNER]: OWNERS.FAMILIA,
};

const initialCalendarContext: ICalendarContext = {
  state: initialState,
  dispatch: () => {},
  drawer: {
    isOpen: false,
    onOpen: () => null,
    onClose: () => null,
    drawerBtnRef: null,
  },
  printer: {
    componentRef: null,
    handlePrint: () => null,
  },
};

export const CalendarContext = createContext(initialCalendarContext);

export const initializer = (initialValue = initialState) => {
  const settingsFromStorage = localStorage.getItem('calendarSettings');
  if (!settingsFromStorage) return initialValue;

  return JSON.parse(settingsFromStorage) || initialValue;
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
    localStorage.setItem('calendarSettings', JSON.stringify(state));
  }, [state]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerBtnRef = useRef<HTMLButtonElement | null>(null);

  const componentRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current ?? null,
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
    ],
  );

  return (
    <CalendarContext.Provider value={memoizedValue}>
      {children}
    </CalendarContext.Provider>
  );
};

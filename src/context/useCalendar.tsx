import { useDisclosure } from '@chakra-ui/react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import { useReactToPrint } from 'react-to-print';

import Cumple from '@/assets/bgConfetti.png';
import {
  DAYS,
  LANGUAGES,
  OPTIONS,
  OWNERS,
  SIZES,
  getCurrentYear,
} from '@/constants';
import { getContrastedFontColor } from '@/utils/color';

interface IState {
  [OPTIONS.LANGUAGE]: LANGUAGES;
  [OPTIONS.STARTING_DAY]: DAYS;
  [OPTIONS.SIZE]: SIZES;
  [OPTIONS.BACKGROUND]: string;
  [OPTIONS.ENABLED_FERIADOS]: boolean;
  [OPTIONS.ENABLED_BIRTHDAYS]: boolean;
  [OPTIONS.ENABLED_ESPECIAL_DAYS]: boolean;
  [OPTIONS.PRIMARY_COLOR]: string;
  [OPTIONS.SECONDARY_COLOR]: string;
  [OPTIONS.THIRD_COLOR]: string;
  [OPTIONS.YEAR]: number;
}

interface ICalendarContext {
  owner: string;
  handleOwnerChange: (newOwner: string) => void;
  state: IState;
  dispatch: React.Dispatch<Partial<IState>>;
  contrastPrimary: string;
  contrastSecondary: string;
}

interface ICalendarUIContext {
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

const STORAGE_KEY = 'calendarSettings';

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
  [OPTIONS.YEAR]: getCurrentYear(),
};

const STATE_KEYS = Object.keys(initialState) as (keyof IState)[];

const normalizeYear = (state: IState): IState => {
  const current = getCurrentYear();
  const year = state[OPTIONS.YEAR];
  if (year !== current && year !== current + 1) {
    return { ...state, [OPTIONS.YEAR]: current };
  }
  return state;
};

const pickKnownKeys = (obj: Record<string, unknown>): Partial<IState> => {
  const result: Partial<IState> = {};
  for (const key of STATE_KEYS) {
    if (key in obj) {
      (result as Record<string, unknown>)[key] = obj[key];
    }
  }
  return result;
};

const loadStoredSettings = (ownerKey: string): Partial<IState> | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;

    const stored = (parsed as Record<string, unknown>)[ownerKey];
    if (!stored || typeof stored !== 'object') return null;

    return pickKnownKeys(stored as Record<string, unknown>);
  } catch {
    return null;
  }
};

const initialCalendarContext: ICalendarContext = {
  owner: OWNERS.FAMILIA,
  handleOwnerChange: () => {},
  state: initialState,
  dispatch: () => {},
  contrastPrimary: '#ffffff',
  contrastSecondary: '#ffffff',
};

const initialUIContext: ICalendarUIContext = {
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
export const CalendarUIContext = createContext(initialUIContext);

export const useCalendar = () => useContext(CalendarContext);
export const useCalendarUI = () => useContext(CalendarUIContext);

export const initializer = (initialValue = initialState): IState => {
  const stored = loadStoredSettings(OWNERS.FAMILIA);
  if (!stored) return initialValue;
  return normalizeYear({ ...initialValue, ...stored });
};

function reducer(state: IState, action: Partial<IState>): IState {
  return { ...state, ...action };
}

export const CalendarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState, initializer);
  const [owner, setOwner] = useState<string>(OWNERS.FAMILIA);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      const current = parsed && typeof parsed === 'object' ? parsed : {};

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ ...current, [owner]: state }),
      );
    } catch {
      // storage unavailable; skip persistence
    }
  }, [state, owner]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerBtnRef = useRef<HTMLButtonElement | null>(null);

  const componentRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current ?? null,
  });

  const handleOwnerChange = useCallback((newOwner: string) => {
    setOwner(newOwner);
    const stored = loadStoredSettings(newOwner);
    const settings = stored
      ? normalizeYear({ ...initialState, ...stored })
      : initialState;
    dispatch(settings);
  }, []);

  const contrastPrimary = useMemo(
    () => getContrastedFontColor(state[OPTIONS.PRIMARY_COLOR]),
    [state[OPTIONS.PRIMARY_COLOR]],
  );
  const contrastSecondary = useMemo(
    () => getContrastedFontColor(state[OPTIONS.SECONDARY_COLOR]),
    [state[OPTIONS.SECONDARY_COLOR]],
  );

  const dataValue = useMemo(
    () => ({
      owner,
      handleOwnerChange,
      state,
      dispatch,
      contrastPrimary,
      contrastSecondary,
    }),
    [owner, handleOwnerChange, state, contrastPrimary, contrastSecondary],
  );

  const uiValue = useMemo(
    () => ({
      drawer: { isOpen, onOpen, onClose, drawerBtnRef },
      printer: { componentRef, handlePrint },
    }),
    [isOpen, onOpen, onClose, handlePrint],
  );

  return (
    <CalendarContext.Provider value={dataValue}>
      <CalendarUIContext.Provider value={uiValue}>
        {children}
      </CalendarUIContext.Provider>
    </CalendarContext.Provider>
  );
};

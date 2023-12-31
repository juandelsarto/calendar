import { createContext, useReducer } from "react";
import {
  BACKGROUND,
  DAYS,
  LANGUAGES,
  OPTIONS,
  OWNERS,
  SIZES,
} from "../constants/Enums";

export const CalendarContext = createContext(null);

const initialState = {
  [OPTIONS.LANGUAGE]: LANGUAGES.SPANISH,
  [OPTIONS.STARTING_DAY]: DAYS.MONDAY,
  [OPTIONS.SIZE]: SIZES.A4,
  [OPTIONS.BACKGROUND]: BACKGROUND.BALLONS,
  [OPTIONS.ENABLED_FERIADOS]: true,
  [OPTIONS.ENABLED_BIRTHDAYS]: true,
  [OPTIONS.ENABLED_ESPECIAL_DAYS]: false,
  [OPTIONS.PRIMARY_COLOR]: "#3177e2",
  [OPTIONS.SECONDARY_COLOR]: "#31bfe2",
  [OPTIONS.THIRD_COLOR]: "#e2a131",
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
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CalendarContext.Provider value={{ state, dispatch }}>
      {children}
    </CalendarContext.Provider>
  );
};

import { createContext, useReducer } from "react";
import { BACKGROUND, DAYS, LANGUAGES, SIZES } from "../constants/Enums";

export const CalendarContext = createContext(null);

const initialState = {
  language: LANGUAGES.SPANISH,
  startingDay: DAYS.SUNDAY,
  size: SIZES.A4,
  bg: BACKGROUND.BALLONS,
  enabledEspecialDays: false,
  enabledFeriados: false,
  enabledBirthdays: false,
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

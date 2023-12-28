import cn from "classnames";
import { useContext } from "react";
import { CalendarContext } from "../../../context/useCalendar";

const Day = ({
  feriado,
  cumple,
  love,
  clase,
  number,
  index,
  defaultInit,
  overflow,
  disabled,
}) => {
  const {
    state: { enabledEspecialDays, enabledFeriados, enabledBirthdays },
  } = useContext(CalendarContext);

  const fixPosition = defaultInit ? 1 : 0;
  const overflowLimit = defaultInit ? 34 : 35;
  const positionInGrid = index - fixPosition;

  const classNames = cn("day", {
    feriado: enabledFeriados && feriado,
    cumple: enabledBirthdays && cumple,
    clase: enabledEspecialDays && clase,
    love: love,
    disabled: disabled,
    "overflow-day": overflow,
  });

  const calc = `calc(100% / 7 * ${positionInGrid - overflowLimit})`;
  const inlineStyle = overflow ? { style: { left: calc } } : {};

  return (
    <div className={classNames} {...inlineStyle}>
      {enabledBirthdays && cumple && (
        <span className="day__cumple">{cumple}</span>
      )}
      <span className="day__number">
        {enabledEspecialDays && clase && "* "}
        {number}
      </span>
    </div>
  );
};

export default Day;

import cn from "classnames";
import { useContext } from "react";
import { CalendarContext } from "../../../context/useCalendar";
import { getStyles } from "../CalendarPreview.styles";
import { getContrastedFontColor } from "../CalendarPreview.hooks";

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
    state: {
      enabledEspecialDays,
      enabledFeriados,
      enabledBirthdays,
      background,
      primaryColor,
      secondaryColor,
      thirdColor,
    },
  } = useContext(CalendarContext);

  const styles = getStyles({ primaryColor, secondaryColor, thirdColor });

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

  const dayStyles = {
    ...styles.day,
    ...(overflow
      ? { left: `calc(100% / 7 * ${positionInGrid - overflowLimit})` }
      : {}),
    ...(enabledFeriados && feriado
      ? { color: getContrastedFontColor(secondaryColor) }
      : {}),
    ...(enabledEspecialDays && clase
      ? { color: getContrastedFontColor(primaryColor) }
      : {}),
    ...(enabledBirthdays && cumple
      ? {
          color: primaryColor,
          backgroundImage: `url(./src/assets/${background})`,
        }
      : {}),
  };

  const bgDayStyles = {
    backgroundColor: clase
      ? primaryColor
      : feriado
      ? secondaryColor
      : thirdColor,
  };

  return (
    <div className={classNames} style={dayStyles}>
      {enabledBirthdays && cumple && (
        <span className="day__cumple">{cumple}</span>
      )}
      <span className="day__number" style={dayStyles}>
        {enabledEspecialDays && clase && "* "}
        {number}
      </span>
      {!love && (feriado || cumple || clase) && (
        <div className="day__bg" style={bgDayStyles}></div>
      )}
    </div>
  );
};

export default Day;

import cn from "classnames";
import { useContext } from "react";
import { CalendarContext } from "../../../context/useCalendar";
import { getStyles } from "../CalendarPreview.styles";

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

  const calc = `calc(100% / 7 * ${positionInGrid - overflowLimit})`;
  const inlineStyle = overflow ? { left: calc } : {};

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
    ...(enabledBirthdays && cumple
      ? {
          backgroundImage: `url(./src/assets/${background})`,
        }
      : {}),
    ...(enabledFeriados && feriado ? styles.feriado : {}),
    ...(enabledEspecialDays && clase ? styles.clase : {}),
  };

  return (
    <div className={classNames} style={{ ...inlineStyle, ...dayStyles }}>
      {enabledBirthdays && cumple && (
        <>
          <span className="day__cumple">{cumple}</span>
          {!love && !feriado && (
            <div className="day__cumple-bg" style={styles.cumple}></div>
          )}
        </>
      )}
      <span className="day__number" style={styles.day}>
        {enabledEspecialDays && clase && "* "}
        {number}
      </span>
    </div>
  );
};

export default Day;

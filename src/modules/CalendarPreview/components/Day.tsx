import cn from 'classnames';
import { useContext } from 'react';
import { CalendarContext } from '../../../context/useCalendar';
import { getStyles } from '../CalendarPreview.styles';
import { getContrastedFontColor } from '../CalendarPreview.hooks';

const Day = ({
  feriado = false,
  cumple = null,
  love = null,
  clase = false,
  number,
  index,
  defaultInit,
  overflow = false,
  disabled = false,
}: {
  feriado?: boolean;
  cumple?: string | null;
  love?: string | null;
  clase?: boolean;
  number: number;
  index: number;
  defaultInit: boolean;
  overflow?: boolean;
  disabled?: boolean;
  firstDay?: number;
  positionInGrid: number;
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

  const styles = getStyles({ primaryColor, secondaryColor });

  const fixPosition = defaultInit ? 1 : 0;
  const overflowLimit = defaultInit ? 34 : 35;
  const positionInGrid = index - fixPosition;

  const showFeriado = enabledFeriados && feriado;
  const showBirthdays = enabledBirthdays && cumple;
  const showEspecialDays = enabledEspecialDays && clase;

  const classNames = cn('day', {
    feriado: showFeriado,
    cumple: showBirthdays,
    clase: showEspecialDays,
    love: love,
    disabled: disabled,
    'overflow-day': overflow,
  });

  const dayStyles = {
    ...styles.day,
    ...(overflow
      ? { left: `calc(100% / 7 * ${positionInGrid - overflowLimit})` }
      : {}),
    ...(showFeriado ? { color: getContrastedFontColor(secondaryColor) } : {}),
    ...(showEspecialDays
      ? { color: getContrastedFontColor(primaryColor) }
      : {}),
    ...(showBirthdays
      ? !love
        ? {
            color: secondaryColor,
            backgroundImage: `url(./src/assets/${background})`,
          }
        : { color: getContrastedFontColor(secondaryColor) }
      : {}),
  };

  const bgDayStyles = {
    backgroundColor: showEspecialDays
      ? primaryColor
      : showFeriado
      ? secondaryColor
      : thirdColor,
  };

  return (
    <div className={classNames} style={dayStyles}>
      {showBirthdays && <span className="day__cumple">{cumple}</span>}
      <span className="day__number" style={dayStyles}>
        {showEspecialDays && '* '}
        {number}
      </span>
      {!love && (showFeriado || showBirthdays || showEspecialDays) && (
        <div className="day__bg" style={bgDayStyles}></div>
      )}
    </div>
  );
};

export default Day;

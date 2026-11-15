import cn from 'classnames';
import { useContext } from 'react';
import { CalendarContext } from '../../../context/useCalendar';
import { getContrastedFontColor } from '../CalendarPreview.hooks';
import { getStyles } from '../CalendarPreview.styles';

const Day = ({
  feriado = false,
  feriadoNombre = null,
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
  feriadoNombre?: string | null;
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
    ...(showBirthdays
      ? !love
        ? {
            color: secondaryColor,
            backgroundImage: `url(${background})`,
          }
        : { color: getContrastedFontColor(secondaryColor) }
      : {}),
    ...(showFeriado ? { color: getContrastedFontColor(secondaryColor) } : {}),
    ...(showEspecialDays
      ? { color: getContrastedFontColor(primaryColor) }
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
      <div className="day__note">
        {showBirthdays && <span className="day__cumple">{cumple}</span>}
        {showFeriado && feriadoNombre && (
          <span className="day__feriado">{feriadoNombre}</span>
        )}
      </div>
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

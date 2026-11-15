import cn from 'classnames';

import { useCalendar } from '@/context/useCalendar';
import { IFeriado } from '@/hooks/useFeriados';

const Day = ({
  feriado,
  cumple = null,
  love = null,
  clase = false,
  number,
  index,
  defaultInit,
  overflow = false,
  disabled = false,
}: {
  feriado?: IFeriado;
  cumple?: string | null;
  love?: string | null;
  clase?: boolean;
  number: number;
  index: number;
  defaultInit: boolean;
  overflow?: boolean;
  disabled?: boolean;
}) => {
  const {
    state: { enabledEspecialDays, enabledFeriados, enabledBirthdays },
  } = useCalendar();

  const fixPosition = defaultInit ? 1 : 0;
  const overflowLimit = defaultInit ? 34 : 35;
  const positionInGrid = index - fixPosition;

  const showFeriado = Boolean(enabledFeriados && feriado);
  const showBirthdays = enabledBirthdays && cumple;
  const showEspecialDays = enabledEspecialDays && clase;

  const classNames = cn('day', {
    feriado: showFeriado,
    [`feriado--${feriado?.tipo}`]: showFeriado && feriado?.tipo,
    cumple: showBirthdays,
    clase: showEspecialDays,
    love,
    disabled,
    'overflow-day': overflow,
  });

  const dayStyle = overflow
    ? { left: `calc(100% / 7 * ${positionInGrid - overflowLimit})` }
    : undefined;

  return (
    <div className={classNames} style={dayStyle}>
      <div className="day__note">
        {showBirthdays && <span className="day__cumple">{cumple}</span>}
        {showFeriado && feriado?.nombre && (
          <span className="day__feriado">{feriado.nombre}</span>
        )}
      </div>
      <span className="day__number">
        {showEspecialDays && '* '}
        {number}
      </span>
      {!love && (showFeriado || showBirthdays || showEspecialDays) && (
        <div className="day__bg" />
      )}
    </div>
  );
};

export default Day;

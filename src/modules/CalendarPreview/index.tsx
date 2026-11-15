import { Box } from '@chakra-ui/react';
import classNames from 'classnames';
import { useMemo } from 'react';

import { MONTHS_LIST, CALENDAR } from '@/constants';
import { DAYS, MONDAY_FIRST, SUNDAY_FIRST } from '@/constants/Enums';
import { TRANSLATIONS } from '@/constants/Translations';
import { useCalendar, useCalendarUI } from '@/context/useCalendar';
import { useFeriados } from '@/hooks/useFeriados';

import Month from './components/Month';

const renderLines = () => {
  const lines = [];
  for (let i = 0; i <= 19; i++) {
    lines.push(<span key={`notes-line-${i}`} className="notes__line" />);
  }
  return lines;
};

const CalendarPreview = () => {
  const {
    owner,
    state: {
      size,
      language,
      startingDay,
      enabledEspecialDays,
      primaryColor,
      secondaryColor,
      thirdColor,
      background,
      year,
    },
    contrastPrimary,
    contrastSecondary,
  } = useCalendar();
  const { printer } = useCalendarUI();

  const parsedDays = startingDay === DAYS.MONDAY ? MONDAY_FIRST : SUNDAY_FIRST;

  const { feriadosByMonth } = useFeriados(year);

  const parsedMonths = useMemo(
    () =>
      MONTHS_LIST.map((month, index) => {
        const especialDates = CALENDAR[owner]?.[month.key]?.dates || null;

        return {
          ...month,
          feriados: feriadosByMonth[month.key] ?? [],
          firstDay: new Date(year, index, 1).getDay(),
          days: new Date(year, index + 1, 0).getDate(),
          prevMonth: new Date(year, index, 0).getDate(),
          ...(especialDates ? { dates: especialDates } : {}),
        };
      }),
    [owner, feriadosByMonth, year],
  );

  const calendarStyle = {
    '--primary-color': primaryColor,
    '--secondary-color': secondaryColor,
    '--third-color': thirdColor,
    '--contrast-primary': contrastPrimary,
    '--contrast-secondary': contrastSecondary,
    '--cumple-bg': `url(${background})`,
  } as React.CSSProperties;

  return (
    <Box
      overflow="scroll"
      mt={4}
      p={4}
      backgroundColor="white"
      borderRadius={6}
    >
      <div
        ref={printer.componentRef}
        className={classNames('calendar', { [size]: size })}
        style={calendarStyle}
      >
        {parsedMonths.map((month) => {
          return (
            <div className="month" key={month.key}>
              <div className="month__top">
                <div className="month__name">
                  {month.name[language]} {year}
                </div>
                {enabledEspecialDays ? (
                  <div className="month__notes">
                    {month.dates?.map((date) => {
                      const dateKey =
                        typeof date.number === 'number'
                          ? `date_${date.number}`
                          : `date_${date.number[0]}_${date.number[1]}`;
                      return (
                        <div className="month__notes__day" key={dateKey}>
                          <span>
                            {typeof date.number === 'number'
                              ? date.number
                              : `${date.number[0]} al ${date.number[1]}`}
                            :{' '}
                          </span>
                          {date.name}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="month__notes">
                    <span className="label">
                      {TRANSLATIONS[language].notes}:
                    </span>
                    <span className="line line-1" />
                    <span className="line" />
                  </div>
                )}
              </div>
              <div className="month__week">
                {parsedDays.map((day) => (
                  <div className="month__week__day" key={day.id}>
                    {day[language]}
                  </div>
                ))}
              </div>
              <div className="month__grid">
                <Month
                  month={month}
                  optionsFromMonth={CALENDAR[owner]?.[month.key]}
                  startingDay={startingDay}
                />
              </div>
            </div>
          );
        })}
        {enabledEspecialDays && (
          <div className="notes">
            <span className="notes__line">
              <span style={{ color: secondaryColor }}>Notas:</span>
            </span>
            {renderLines()}
          </div>
        )}
      </div>
    </Box>
  );
};

export default CalendarPreview;

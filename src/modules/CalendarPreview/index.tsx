import { Button } from "@chakra-ui/react";
import { useContext, useMemo, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { DAYS, MONDAY_FIRST, SUNDAY_FIRST } from "../../constants/Enums";
import { TRANSLATIONS } from "../../constants/Translations";
import { MONTHS_LIST, OPTIONS, YEAR } from "../../constants/Data";
import { CalendarContext } from "../../context/useCalendar";
import Month from "./components/Month";
import { getStyles } from "./CalendarPreview.styles";

const CalendarPreview = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const {
    state: {
      owner,
      language,
      startingDay,
      enabledEspecialDays,
      primaryColor,
      secondaryColor,
      thirdColor,
    },
  } = useContext(CalendarContext);

  const parsedDays = startingDay === DAYS.MONDAY ? MONDAY_FIRST : SUNDAY_FIRST;

  const parsedMonths = useMemo(
    () =>
      MONTHS_LIST.map((month, index) => ({
        ...month,
        firstDay: new Date(YEAR, index, 1).getDay(),
        days: new Date(YEAR, index + 1, 0).getDate(),
        prevMonth: new Date(YEAR, index, 0).getDate(),
      })),
    [MONTHS_LIST]
  );

  const styles = getStyles({ primaryColor, secondaryColor, thirdColor });

  return (
    <>
      <div ref={componentRef} className="calendar">
        {parsedMonths.map((month) => {
          return (
            <div className="month" key={month.key}>
              <div className="month__top">
                <div className="month__name" style={styles.monthName}>
                  {month.name[language]} {YEAR}
                </div>
                {enabledEspecialDays ? (
                  <div className="month__notes">
                    {month.dates?.map((date, index) => (
                      <div className="month__notes__day" key={`date_${index}`}>
                        <span>
                          {typeof date.number === "number"
                            ? date.number
                            : `${date.number[0]} al ${date.number[1]}`}
                          :{" "}
                        </span>
                        {date.name}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="month__notes">
                    <span className="label" style={styles.monthNotes.label}>
                      {TRANSLATIONS[language].notes}
                    </span>
                    <span
                      className="line line-1"
                      style={styles.monthNotes.line}
                    ></span>
                    <span
                      className="line"
                      style={styles.monthNotes.line}
                    ></span>
                  </div>
                )}
              </div>
              <div className="month__week">
                {parsedDays.map((day, index) => (
                  <div
                    className="month__week__day"
                    key={index}
                    style={styles.monthWeek.day}
                  >
                    {day[language]}
                  </div>
                ))}
              </div>
              <div className="month__grid" style={styles.monthGrid}>
                <Month
                  month={month}
                  optionsFromMonth={OPTIONS[owner]?.[month.key]}
                  startingDay={startingDay}
                />
              </div>
            </div>
          );
        })}
      </div>
      <Button onClick={handlePrint} content={componentRef}>
        Imprimir
      </Button>
    </>
  );
};

export default CalendarPreview;

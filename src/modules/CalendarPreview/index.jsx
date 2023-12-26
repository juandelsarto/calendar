import { Button } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { LANGUAGES, YEAR } from "../../constants/Enums";
import { TRANSLATIONS } from "../../constants/Translations";
import { MONTHS_LIST } from "../../constants/Data";
import { CalendarContext } from "../../context/useCalendar";

const CalendarPreview = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const {
    state: {
      language,
      startingDay,
      enabledEspecialDays,
      enabledFeriados,
      enabledBirthdays,
    },
  } = useContext(CalendarContext);

  const date = new Date(YEAR, 0, 1);
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  console.log(firstDay, lastDay);

  return (
    <>
      <div ref={componentRef} className="calendar">
        {MONTHS_LIST.map((month) => (
          <div className="month" key={month.key}>
            <div className="month__top">
              <div className="month__name">
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
                  <span className="label">{TRANSLATIONS[language].notes}</span>
                  <span className="line line-1"></span>
                  <span className="line"></span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <Button onClick={handlePrint} content={componentRef}>
        Imprimir
      </Button>
    </>
  );
};

export default CalendarPreview;

import { getDayList } from "../CalendarPreview.hooks";
import Day from "./Day";
import { DAYS } from "../../../constants/Enums";

const DisabledDays = ({ first = 0, days = 0, defaultInit = false }) => {
  const disableDays = [];

  const postDisabledIndex = defaultInit ? 1 : 0;
  const preDisabledIndex = !defaultInit ? 1 : 0;

  if (days) {
    const length = first + days;
    if (length <= 35) {
      const stop = 35 - length;
      for (let x = postDisabledIndex; x < stop; x++) {
        disableDays.push(<div className="day disabled" key={x}></div>);
      }
    }
  } else {
    for (let x = preDisabledIndex; x < first; x++) {
      disableDays.push(<div className="day disabled" key={x}></div>);
    }
  }

  return <>{disableDays}</>;
};

const Month = ({
  month = {},
  optionsFromMonth = {},
  startingDay = DAYS.SUNDAY,
}) => {
  const defaultInit = startingDay === DAYS.SUNDAY;

  const dayList = getDayList({ ...month, ...optionsFromMonth, defaultInit });
  console.log(month);

  return (
    <div className="month__grid">
      {dayList.map((day, index) => (
        <Day
          {...day}
          key={index}
          index={index}
          firstDay={month.firstDay}
          defaultInit={defaultInit}
          positionInGrid={index + month.firstDay}
        />
      ))}
    </div>
  );
};

export default Month;

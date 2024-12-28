import { getDayList } from '../CalendarPreview.hooks';
import Day from './Day';
import { DAYS, IMonthData, IParsedMonth } from '../../../constants';

const Month: React.FC<{
  month: IParsedMonth;
  optionsFromMonth?: IMonthData;
  startingDay: DAYS;
}> = ({ month, optionsFromMonth = {}, startingDay = DAYS.SUNDAY }) => {
  const defaultInit = startingDay === DAYS.SUNDAY;

  const dayList = getDayList({ ...month, ...optionsFromMonth, defaultInit });

  return (
    <>
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
    </>
  );
};

export default Month;

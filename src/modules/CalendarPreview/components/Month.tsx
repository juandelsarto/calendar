import { DAYS, IMonthData, IParsedMonth } from '@/constants';

import { getDayList } from '../CalendarPreview.hooks';
import Day from './Day';

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
          key={`day_${index}_${day.number}${day.disabled ? '_d' : ''}`}
          index={index}
          defaultInit={defaultInit}
        />
      ))}
    </>
  );
};

export default Month;

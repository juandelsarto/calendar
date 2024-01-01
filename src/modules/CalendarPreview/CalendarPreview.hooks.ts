export const getParsedSpecialDates = (dates = []) => {
  const parsedDates = [];
  for (const date of dates) {
    if (typeof date.number === "number") {
      parsedDates[date.number] = true;
    } else {
      for (let day = date.number[0]; day <= date.number[1]; day++) {
        parsedDates[day] = true;
      }
    }
  }
  return parsedDates;
};

export const getDayList = ({
  dates,
  days,
  firstDay,
  feriados,
  cumples,
  defaultInit,
  prevMonth,
}) => {
  const defaultStart = defaultInit ? 0 : 1;
  const overflowLimit = defaultInit ? 34 : 35;
  const fixedFirstDay = !defaultInit && firstDay === 0 ? 7 : firstDay;
  const minPositions = days + fixedFirstDay - defaultStart;
  const positionsLength = minPositions < 35 ? 35 : minPositions;

  const dayList = [];
  const parsedDates = dates?.length > 0 ? getParsedSpecialDates(dates) : [];

  let day = 1;
  for (
    let index = defaultStart;
    index < positionsLength + defaultStart;
    index++
  ) {
    const newDay = {
      ...(index >= fixedFirstDay && index < minPositions + defaultStart
        ? {
            number: day,
            feriado: feriados.includes(day),
            cumple:
              cumples?.length > 0
                ? cumples.find((cumple) => cumple.number === day)?.name || null
                : "",
            love:
              cumples?.length > 0
                ? cumples.find((cumple) => cumple.number === day && cumple.love)
                    ?.name || null
                : "",
            clase: parsedDates.length > 0 ? parsedDates[day] : false,
            overflow: index > overflowLimit,
          }
        : {
            disabled: true,
            number:
              index < fixedFirstDay
                ? prevMonth - fixedFirstDay + index + 1
                : index - days - firstDay + 1,
          }),
    };

    if (index >= fixedFirstDay) day++;

    dayList.push(newDay);
  }

  return dayList;
};

export const getContrastedFontColor = (color) => {
  const arrColor = color.replace("#", "").match(/.{1,2}/g);

  const redCode = parseInt(arrColor[0], 16) * 0.299;
  const greenCode = parseInt(arrColor[1], 16) * 0.587;
  const blueCode = parseInt(arrColor[2], 16) * 0.114;

  if (redCode + greenCode + blueCode > 186) {
    return "#1b1b1b";
  } else {
    return "#ffffff";
  }
};

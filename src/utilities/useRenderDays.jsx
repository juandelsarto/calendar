import React from "react";
import cn from "classnames";
import { OWNERS } from "../constants/data";

const getParsedSpecialDates = (dates = []) => {
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

const getParsedDays = ({ days, feriados = [], cumples = [], dates = [] }) => {
  const parsedDays = [];
  const parsedDates = dates.length > 0 ? getParsedSpecialDates(dates) : [];
  for (let day = 1; day <= days; day++) {
    const newDay = {
      number: day,
      feriado: feriados.includes(day),
      cumple:
        cumples.length > 0
          ? cumples.find((cumple) => cumple.number === day)?.name
          : "",
      love:
        cumples.length > 0
          ? cumples.find((cumple) => cumple.number === day && cumple.love)?.name
          : "",
      clase: parsedDates.length > 0 ? parsedDates[day] : false,
    };
    parsedDays.push(newDay);
  }
  return parsedDays;
};

const renderDays = (owner, month, optionMonth) => {
  const disableDays = [];
  for (let x = 1; x < month.first; x++) {
    disableDays.push(<div className="day disabled"></div>);
  }

  console.log(month);

  const { days, feriados } = month;

  const parsedDays = getParsedDays({ days, feriados, ...optionMonth });
  const daysStructure = parsedDays.map((day, index) => {
    const overflowDay = index + month.first > 35;
    const classNames = cn("day", {
      feriado: day.feriado,
      cumple: day.cumple && owner !== OWNERS.GABY,
      love: day.love,
      "overflow-day": overflowDay,
      clase: day.clase,
    });
    return (
      <div className={classNames}>
        {day.cumple !== "" && owner !== OWNERS.GABY && (
          <span className="day__cumple">{day.cumple}</span>
        )}
        <span className="day__number">
          {day.clase && "* "}
          {day.number}
        </span>
      </div>
    );
  });

  const postDisabledDays = [];
  const l = month.days + month.first;
  if (l <= 35) {
    const postLength = 35 - l;
    for (let x = 0; x <= postLength; x++) {
      postDisabledDays.push(<div className="day disabled"></div>);
    }
  }

  return disableDays.concat(daysStructure, postDisabledDays);
};

export default renderDays;

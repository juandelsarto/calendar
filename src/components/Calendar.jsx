import React from "react";
import cn from "classnames";
import { YEAR, DAYS, MONTHS, OPTIONS, OWNERS } from "../data.js";
import renderDays from "../utilities/useRenderDays";

const Calendar = ({ owner = OWNERS.FAMILIA, custom = false }) => {
  const calendarClass = cn("calendar", owner, { custom });
  const option = OPTIONS[owner];
  const renderLines = () => {
    const lines = [];
    for (let i = 0; i <= 19; i++) {
      lines.push(<span className="notes__line"></span>);
    }
    return lines;
  };

  const notes = (english = false) => (
    <div className="month__notes">
      <span className="label">{english ? "Notes" : "Notas"}: </span>
      <span className="line line-1"></span>
      <span className="line"></span>
    </div>
  );

  const renderNotes = (month) => {
    if (!month) return;

    return (
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
    );
  };

  return (
    <div className={calendarClass}>
      {MONTHS.map((month) => (
        <div className="month" key={month.name}>
          <div className="month__top">
            <div className="month__name">
              {owner === OWNERS.FITA ? month.en_name : month.es_name} {YEAR}
            </div>
            {owner === OWNERS.GRISEL
              ? renderNotes(option[month.key])
              : notes(owner === OWNERS.FITA)}
          </div>
          <div className="month__week">
            {DAYS.map((day) => (
              <div className="month__week__day" key={day}>
                {owner === OWNERS.FITA ? day.en : day.es}
              </div>
            ))}
          </div>
          <div className="month__grid">
            {renderDays(owner, month, option?.[month.key])}
          </div>
        </div>
      ))}
      {owner === OWNERS.GRISEL && (
        <div className="notes">
          <span className="notes__line">
            <span>Notas:</span>
          </span>
          {renderLines()}
        </div>
      )}
    </div>
  );
};

export default Calendar;

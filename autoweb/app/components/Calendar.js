"use client";

import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function Calendar() {
  const months = [
    "Janvāris",
    "Februāris",
    "Marts",
    "Aprīlis",
    "Maijs",
    "Jūnijs",
    "Jūlijs",
    "Augusts",
    "Septembris",
    "Oktobris",
    "Novembris",
    "Decembris",
  ];

  const weekDays = ["P", "O", "T", "C", "P", "S", "Sv"];

  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    new Date().getMonth()
  );
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    let day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Adjust Sunday from 0 to 6 for Monday-based week
  };

  const handlePrevMonth = () => {
    setCurrentMonthIndex((prev) => {
      if (prev === 0) {
        setCurrentYear((year) => year - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex((prev) => {
      if (prev === 11) {
        setCurrentYear((year) => year + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const daysInMonth = getDaysInMonth(currentMonthIndex, currentYear);
  const firstDayOfMonth = getFirstDayOfMonth(currentMonthIndex, currentYear);
  const totalDays = firstDayOfMonth + daysInMonth;
  const totalCells = Math.ceil(totalDays / 7) * 7;

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="calendar-nav" onClick={handlePrevMonth}>
          <IoChevronBack />
        </button>
        <h3>
          {months[currentMonthIndex]} {currentYear}
        </h3>
        <button className="calendar-nav" onClick={handleNextMonth}>
          <IoChevronForward />
        </button>
      </div>
      <div className="calendar-weekdays">
        {weekDays.map((day, index) => (
          <div key={index} className="weekday">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-grid">
        {Array.from({ length: totalCells }, (_, i) => {
          const dayNumber = i - firstDayOfMonth + 1;
          const isValidDay = dayNumber > 0 && dayNumber <= daysInMonth;

          return (
            <button
              key={i}
              className={`calendar-day ${
                !isValidDay ? "calendar-day-disabled" : ""
              }`}
              disabled={!isValidDay}
            >
              {isValidDay ? dayNumber : ""}
            </button>
          );
        })}
      </div>
    </div>
  );
}

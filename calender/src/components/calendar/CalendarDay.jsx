import React from "react";
import { useRangeContext } from "../../context/RangeContext";
import { useTheme } from "../../context/ThemeContext";
import holidays from "../../utils/holidays";

export default function CalendarDay({ day }) {
  const { startDate, endDate, handleDayClick } = useRangeContext();
  const { isDark } = useTheme();

  if (!day) return <div className="h-10 w-10"></div>;

  const isStart =
    startDate &&
    startDate.date === day.date &&
    startDate.month === day.month &&
    startDate.year === day.year;

  const isEnd =
    endDate &&
    endDate.date === day.date &&
    endDate.month === day.month &&
    endDate.year === day.year;

  let isInBetween = false;
  if (startDate && endDate) {
    const thisDate = new Date(day.year, day.month, day.date);
    const start = new Date(startDate.year, startDate.month, startDate.date);
    const end = new Date(endDate.year, endDate.month, endDate.date);
    isInBetween = thisDate > start && thisDate < end;
  }

  const today = new Date();
  const isToday =
    day.date === today.getDate() &&
    day.month === today.getMonth() &&
    day.year === today.getFullYear();

  const holiday = holidays.find(
    (h) => h.date === day.date && h.month === day.month,
  );

  const hasNote = () => {
    const dateStr = `${day.year}-${day.month}-${day.date}`;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (
        key &&
        key.startsWith(`note-${dateStr}`) &&
        localStorage.getItem(key)?.trim()
      ) {
        return true;
      }
    }
    return false;
  };

  const dayHasNote = hasNote();

  let buttonClasses =
    "h-10 w-10 flex items-center justify-center text-sm font-medium transition-colors relative ";

  if (isStart || isEnd) {
    buttonClasses += "bg-purple-400 text-white rounded-full";
  } else if (isInBetween) {
    buttonClasses += isDark
      ? "bg-purple-900 text-purple-200"
      : "bg-pink-100 text-purple-900";
  } else if (isToday) {
    buttonClasses += "bg-gray-200 text-gray-900 rounded-full font-bold";
  } else if (holiday) {
    buttonClasses += isDark
      ? "text-orange-300 hover:bg-gray-700 rounded-full"
      : "text-orange-500 hover:bg-orange-50 rounded-full";
  } else {
    buttonClasses += isDark
      ? "text-gray-200 hover:bg-gray-700 rounded-full"
      : "text-gray-700 hover:bg-gray-100 rounded-full";
  }

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => handleDayClick(day)}
        className={buttonClasses}
        title={holiday ? holiday.name : ""}
      >
        {day.date}
        {holiday && <span className="absolute -top-1 -right-1 text-xs"></span>}
      </button>
      {dayHasNote && (
        <div className="w-2 h-2 rounded-full bg-pink-500 mt-0.5 shadow-sm" />
      )}
      {holiday && (
        <span
          className={`text-xs truncate w-10 text-center ${isDark ? "text-orange-300" : "text-orange-400"}`}
        >
          {holiday.name.split(" ")[0]}
        </span>
      )}
    </div>
  );
}

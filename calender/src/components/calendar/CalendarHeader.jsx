import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function CalendarHeader({
  month,
  year,
  goNextMonth,
  goPrevMonth,
}) {
  const { isDark } = useTheme();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div
      className={`flex items-center justify-between px-4 py-3 ${isDark ? "bg-gray-900" : "bg-white"}`}
    >
      <button
        onClick={goPrevMonth}
        className={`h-8 w-8 flex items-center justify-center rounded-full font-bold text-lg ${isDark ? "hover:bg-gray-700 text-gray-300" : "hover:bg-gray-100 text-gray-600"}`}
      >
        ‹
      </button>
      <div className="text-center">
        <p
          className={`text-xs font-semibold uppercase tracking-widest ${isDark ? "text-gray-400" : "text-gray-400"}`}
        >
          {year}
        </p>
        <p className="text-xl font-bold text-purple-700">{monthNames[month]}</p>
      </div>
      <button
        onClick={goNextMonth}
        className={`h-8 w-8 flex items-center justify-center rounded-full font-bold text-lg ${isDark ? "hover:bg-gray-700 text-gray-300" : "hover:bg-gray-100 text-gray-600"}`}
      >
        ›
      </button>
    </div>
  );
}

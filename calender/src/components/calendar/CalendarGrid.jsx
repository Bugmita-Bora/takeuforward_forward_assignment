import React from "react";
import CalendarDay from "./CalendarDay";
import { getMonthArray } from "../../utils/dateHelpers";
import { useTheme } from "../../context/ThemeContext";

export default function CalendarGrid({ month, year, direction, animKey }) {
  const days = getMonthArray(year, month);
  const { isDark } = useTheme();

  return (
    <div
      key={animKey}
      className={`grid grid-cols-7 gap-1 p-4 ${direction === "next" ? "flip-next" : "flip-prev"}`}
    >
      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
        <div
          key={d}
          className={`h-10 w-10 flex items-center justify-center text-xs font-bold ${isDark ? "text-gray-500" : "text-gray-400"}`}
        >
          {d}
        </div>
      ))}
      {days.map((day, index) => (
        <CalendarDay
          key={day ? `${day.year}-${day.month}-${day.date}` : `null-${index}`}
          day={day}
        />
      ))}
    </div>
  );
}

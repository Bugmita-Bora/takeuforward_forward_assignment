import React, { useEffect, useRef } from "react";
import CalendarDay from "./CalendarDay";
import { getMonthArray } from "../../utils/dateHelpers";
import { useTheme } from "../../context/ThemeContext";

export default function CalendarGrid({ month, year, direction, animKey }) {
  const days = getMonthArray(year, month);
  const { isDark } = useTheme();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.remove("animate-next", "animate-prev");
      void ref.current.offsetWidth;
      ref.current.classList.add(
        direction === "next" ? "animate-next" : "animate-prev",
      );
    }
  }, [animKey]);

  return (
    <div ref={ref} className="grid grid-cols-7 gap-1 p-4">
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

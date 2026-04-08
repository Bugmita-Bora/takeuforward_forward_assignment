import React, { useState, useEffect } from "react";
import { useCalendar } from "../hooks/useCalendar";
import { useTheme } from "../context/ThemeContext";
import CalendarHeader from "./calendar/CalendarHeader";
import CalendarGrid from "./calendar/CalendarGrid";
import HeroImage from "./HeroImage";
import NotesPanel from "./Notes/NotesPanel";

export default function WallCalendar() {
  const { month, year, goNextMonth, goPrevMonth } = useCalendar();
  const { isDark, toggleTheme } = useTheme();
  const [time, setTime] = useState(new Date());

  // Clock
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div
      className={`rounded-2xl shadow-2xl w-full max-w-4xl border overflow-hidden transition-colors duration-300 ${isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-100"}`}
    >
      {/* Binder holes + clock + theme toggle */}
      <div
        className={`flex items-center justify-between px-4 py-2 border-b ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-100"}`}
      >
        {/* Clock */}
        <div
          className={`text-sm font-mono font-bold ${isDark ? "text-purple-300" : "text-purple-600"}`}
        >
          🕐 {formatTime(time)}
        </div>

        {/* Binder holes */}
        <div className="flex gap-2 justify-center">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full border shadow-inner ${isDark ? "bg-gray-600 border-gray-500" : "bg-gray-300 border-gray-400"}`}
              />
            ))}
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className={`text-sm px-3 py-1 rounded-full font-medium transition-colors ${isDark ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300" : "bg-gray-800 text-white hover:bg-gray-700"}`}
        >
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-stretch">
        <HeroImage month={month} year={year} />
        <div
          className={`flex flex-col flex-1 min-w-0 ${isDark ? "bg-gray-900" : "bg-white"}`}
        >
          <CalendarHeader
            month={month}
            year={year}
            goNextMonth={goNextMonth}
            goPrevMonth={goPrevMonth}
          />
          <CalendarGrid month={month} year={year} />
        </div>
      </div>

      <NotesPanel />
    </div>
  );
}

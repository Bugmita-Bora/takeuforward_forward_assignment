import { useState } from "react";

export function useCalendar() {
  const [currDate, setCurrDate] = useState(new Date());
  const [direction, setDirection] = useState("next");
  const [animKey, setAnimKey] = useState(0);

  const month = currDate.getMonth();
  const year = currDate.getFullYear();

  const goNextMonth = () => {
    setDirection("next");
    setAnimKey((prev) => prev + 1);
    setCurrDate(new Date(year, month + 1, 1));
  };

  const goPrevMonth = () => {
    setDirection("prev");
    setAnimKey((prev) => prev + 1);
    setCurrDate(new Date(year, month - 1, 1));
  };

  return { month, year, goNextMonth, goPrevMonth, direction, animKey };
}

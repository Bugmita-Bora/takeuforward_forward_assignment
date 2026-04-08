import { useState } from "react";

export function useDateRange() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDayClick = (clickedDay) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(clickedDay);
      setEndDate(null);
      return;
    }

    if (startDate && !endDate) {
      const start = new Date(startDate.year, startDate.month, startDate.date);
      const clicked = new Date(
        clickedDay.year,
        clickedDay.month,
        clickedDay.date,
      );

      if (clicked < start) {
        setStartDate(clickedDay);
      } else if (clicked > start) {
        setEndDate(clickedDay);
      } else {
        setStartDate(null);
      }
    }
  };

  return { startDate, endDate, handleDayClick };
}

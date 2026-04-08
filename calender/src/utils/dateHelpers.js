export function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

export function getStartDayIndex(year, month) {
  const firstDay = new Date(year, month, 1).getDay();

  return (firstDay + 6) % 7; // Shifting Sunday from 0 to 6, and Monday to 0
}

export function getMonthArray(year, month) {
  const daysInMonth = getDaysInMonth(year, month);
  const startDayIndex = getStartDayIndex(year, month);
  const monthArray = [];

  for (let i = 0; i < startDayIndex; i++) {
    monthArray.push(null);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    monthArray.push({
      date: d,
      month: month,
      year: year,
    });
  }

  return monthArray;
}

// export function isSameDay(day1, day2) {
//   if (!day1 || !day2) return false;
//   return (
//     day1.date === day2.date &&
//     day1.month === day2.month &&
//     day1.year === day2.year
//   );
// }

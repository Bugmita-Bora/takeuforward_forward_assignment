import React, { useState, useEffect } from "react";
import { useRangeContext } from "../../context/RangeContext";
import { useTheme } from "../../context/ThemeContext";

export default function NotesPanel() {
  const { startDate, endDate } = useRangeContext();
  const { isDark } = useTheme();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getKey = () => {
    if (!startDate) return "general";
    if (!endDate)
      return `${startDate.year}-${startDate.month}-${startDate.date}`;
    return `${startDate.year}-${startDate.month}-${startDate.date}_${endDate.year}-${endDate.month}-${endDate.date}`;
  };

  const key = getKey();

  const [note, setNote] = useState(
    () => localStorage.getItem(`note-${key}`) || "",
  );
  const [allNotes, setAllNotes] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`note-${key}`) || "";
    setNote(saved);
  }, [key]);

  // Load all saved notes
  useEffect(() => {
    const notes = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith("note-") && localStorage.getItem(k)?.trim()) {
        notes.push({
          key: k.replace("note-", ""),
          text: localStorage.getItem(k),
        });
      }
    }
    setAllNotes(notes);
  }, [note]);

  const handleChange = (e) => {
    setNote(e.target.value);
    localStorage.setItem(`note-${key}`, e.target.value);
  };

  const getLabel = () => {
    if (!startDate) return "General Notes";
    if (!endDate)
      return `${startDate.date} ${monthNames[startDate.month]} ${startDate.year}`;
    return `${startDate.date} ${monthNames[startDate.month]} → ${endDate.date} ${monthNames[endDate.month]}`;
  };

  return (
    <div
      className={`p-4 border-t ${isDark ? "border-gray-700 bg-gray-900" : "border-gray-100 bg-white"}`}
    >
      <div className="flex items-center justify-between mb-2">
        <div
          className={`text-xs font-semibold uppercase tracking-widest ${isDark ? "text-gray-400" : "text-gray-400"}`}
        >
          Notes
          <span className="ml-2 text-purple-500">{getLabel()}</span>
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className={`text-xs px-2 py-1 rounded-full ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-500"}`}
        >
          {showAll ? "Hide All" : `All Notes (${allNotes.length})`}
        </button>
      </div>

      <textarea
        value={note}
        onChange={handleChange}
        placeholder="Jot down your notes here..."
        className={`w-full h-24 text-sm placeholder-gray-300 border rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-purple-300 ${isDark ? "bg-gray-800 border-gray-600 text-gray-200" : "bg-white border-gray-200 text-gray-600"}`}
      />

      {/* All notes list */}
      {showAll && allNotes.length > 0 && (
        <div
          className={`mt-3 rounded-lg p-3 max-h-40 overflow-y-auto ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
        >
          <p
            className={`text-xs font-bold mb-2 ${isDark ? "text-gray-300" : "text-gray-500"}`}
          >
            ALL SAVED NOTES
          </p>
          {allNotes.map((n, i) => (
            <div
              key={i}
              className={`mb-2 pb-2 border-b last:border-0 ${isDark ? "border-gray-700" : "border-gray-200"}`}
            >
              <p className="text-xs text-purple-500 font-medium">{n.key}</p>
              <p
                className={`text-xs mt-0.5 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                {n.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

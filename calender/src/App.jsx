import React from "react";
import WallCalendar from "./components/WallCalendar";
import { RangeProvider } from "./context/RangeContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/main.css";

function App() {
  return (
    <ThemeProvider>
      <RangeProvider>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
          <WallCalendar />
        </div>
      </RangeProvider>
    </ThemeProvider>
  );
}

export default App;

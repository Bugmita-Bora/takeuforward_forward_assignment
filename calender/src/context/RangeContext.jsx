import React, { createContext, useContext } from "react";
import { useDateRange } from "../hooks/useDateRange";

const RangeContext = createContext();

export function RangeProvider({ children }) {
  const rangeState = useDateRange();

  return (
    <RangeContext.Provider value={rangeState}>{children}</RangeContext.Provider>
  );
}

export function useRangeContext() {
  return useContext(RangeContext);
}

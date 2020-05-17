import React from "react";

const CalendarContext = React.createContext(null);

const CalendarProvider = CalendarContext.Provider;

export { CalendarProvider, CalendarContext };

import { createContext } from "react";
import { useState } from "react";

const ThemeProvider = createContext();

// eslint-disable-next-line react/prop-types
function ThemeContext({ children }) {
  const [light, setLight] = useState(true);
  return (
    <ThemeProvider.Provider value={{ light, setLight }}>
      {children}
    </ThemeProvider.Provider>
  );
}

export { ThemeContext, ThemeProvider };

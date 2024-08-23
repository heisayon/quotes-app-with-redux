import { createContext } from "react";
import useTheme from "../hooks/useTheme";

const ThemeProvider = createContext();

// eslint-disable-next-line react/prop-types
function ThemeContext({ children }) {
  const { toggleMode, darkMode } = useTheme();
  return (
    <ThemeProvider.Provider value={{ toggleMode, darkMode }}>
      {children}
    </ThemeProvider.Provider>
  );
}

export { ThemeContext, ThemeProvider };

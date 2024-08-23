import { useState, useEffect } from "react";
function useTheme() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return { toggleMode, darkMode };
}

export default useTheme;

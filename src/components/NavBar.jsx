import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IconContext } from "react-icons";
import useTheme from "../hooks/useTheme";
function NavBar() {
  const { darkMode, toggleMode } = useTheme();
  return (
    <IconContext.Provider
      value={{ size: "40px", color: !darkMode ? "black" : "white" }}
    >
      <nav className="flex justify-end p-4">
        {!darkMode ? (
          <MdDarkMode onClick={toggleMode} />
        ) : (
          <MdLightMode onClick={toggleMode} />
        )}
      </nav>
    </IconContext.Provider>
  );
}

export default NavBar;

import { useContext } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ThemeProvider } from "../context/ThemeContext";
import { IconContext } from "react-icons";
function NavBar() {
  const { setLight, light } = useContext(ThemeProvider);
  return (
    <IconContext.Provider value={{ size: "40px", color: !light && "white" }}>
      <nav className="flex justify-end p-4 cursor-pointer">
        {light ? (
          <MdDarkMode onClick={() => setLight(!light)} />
        ) : (
          <MdLightMode onClick={() => setLight(!light)} />
        )}
      </nav>
    </IconContext.Provider>
  );
}

export default NavBar;

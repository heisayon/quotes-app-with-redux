import { useGetRandomQuoteQuery } from "./redux/randomQuote";
import Loader from "./components/Loader";
import Quote from "./Quote";
import NavBar from "./components/NavBar";
import { useContext } from "react";
import { ThemeProvider } from "./context/ThemeContext";
function App() {
  const { light } = useContext(ThemeProvider);
  const { isLoading } = useGetRandomQuoteQuery();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={light ? "bg-white" : "bg-black"}>
      <NavBar />
      <Quote />;
    </div>
  );
}

export default App;

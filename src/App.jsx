import { useGetRandomQuoteQuery } from "./redux/randomQuote";
import Loader from "./components/Loader";
import Quote from "./pages/Quote";
import NavBar from "./components/NavBar";
import { useContext } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Error from "./pages/Error";
function App() {
  const { light } = useContext(ThemeProvider);
  const { isLoading, error } = useGetRandomQuoteQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className={` mode-transition ${light ? "bg-white" : "bg-black"}`}>
      <NavBar />
      <Quote />;
    </div>
  );
}

export default App;

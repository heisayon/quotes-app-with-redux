import { useGetRandomQuoteQuery } from "./redux/randomQuote";
import Loader from "./components/Loader";
import Quote from "./pages/Quote";
import NavBar from "./components/NavBar";
import Error from "./pages/Error";
function App() {
  const { isLoading, error } = useGetRandomQuoteQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="dark:bg-black">
        <NavBar />
        <Error />
      </div>
    );
  }

  return (
    <div className="mode-transition bg-white dark:bg-black">
      <NavBar />
      <Quote />;
    </div>
  );
}

export default App;

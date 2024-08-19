import { useGetRandomQuoteQuery } from "./redux/randomQuote";
import Loader from "./components/Loader";
import Quote from "./Quote";
function App() {
  const { isLoading } = useGetRandomQuoteQuery();

  if (isLoading) {
    return <Loader />;
  }

  return <Quote />;
}

export default App;

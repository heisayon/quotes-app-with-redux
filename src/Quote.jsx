import { useGetRandomQuoteQuery } from "./redux/randomQuote";
import Loader from "./components/Loader";
import { useContext } from "react";
import { ThemeProvider } from "./context/ThemeContext";

function Quote() {
  const { light } = useContext(ThemeProvider);
  const { data: randomQuote, refetch, isFetching } = useGetRandomQuoteQuery();

  return (
    <div>
      <div
        className={`flex justify-center items-center h-[100vh] ${
          !light ? "text-white" : "text-black"
        }`}
      >
        <div className="rounded-lg px-12 py-10 min-w-[300px] max-w-[700px] h-[50%] text-center flex items-center flex-col justify-center">
          {randomQuote?.map(({ quote, author }, index) => {
            if (isFetching) {
              return <Loader key={index} />;
            }
            return (
              <section key={index}>
                <h1 className="font-semibold text-3xl">{quote}</h1>
                <h1 className="text-lg font-medium mt-3">{author}</h1>
              </section>
            );
          })}
          <button
            onClick={() => refetch()}
            className={`px-5 py-2 border-black border mt-5 active:scale-90 transition-all rounded-sm ${
              light ? "custom-shadow-light" : "custom-shadow-dark"
            } bg-blue-500 text-white`}
          >
            Generate New
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quote;

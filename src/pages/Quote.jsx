import { useGetRandomQuoteQuery } from "../redux/randomQuote";
import Loader from "../components/Loader";

function Quote() {
  const { data: randomQuote, refetch, isFetching } = useGetRandomQuoteQuery();

  return (
    <div>
      <div className="flex justify-center items-center h-[100vh] text-black dark:text-white">
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
            className="px-5 py-2 bg-blue-500 border-black text-white  border mt-5 active:scale-90 transition-all rounded-sm custom-shadow-light dark:custom-shadow-dark"
          >
            Generate New
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quote;

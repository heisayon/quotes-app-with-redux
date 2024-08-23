import { useGetRandomQuoteQuery } from "../redux/randomQuote";
function Error() {
  const { refetch } = useGetRandomQuoteQuery();
  return (
    <div className="flex justify-center items-center h-[100vh] dark:bg-black">
      <div className="text-center">
        <h1 className=" text-3xl font-sans font-bold dark:text-white">
          Oops, Something went wrong.👀
        </h1>
        <button
          className=" bg-blue-500 py-2 px-8 mt-5 font-semibold active:scale-90 transition-transform rounded-md focus:border-2 text-white"
          onClick={() => refetch()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default Error;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const key = import.meta.env.VITE_API_KEY
export const randomQuote = createApi({
  reducerPath: "randomQuote",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.api-ninjas.com/v1/",
    prepareHeaders: (headers) => {
      headers.set("X-Api-key", key);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getRandomQuote: builder.query({
      query: () => "quotes",
    }),
  }),
});

export const { useGetRandomQuoteQuery } = randomQuote;

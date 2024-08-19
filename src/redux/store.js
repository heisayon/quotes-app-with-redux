import { configureStore } from "@reduxjs/toolkit";
import { randomQuote } from "./randomQuote";
export const store = configureStore({
  reducer: {
    [randomQuote.reducerPath]: randomQuote.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(randomQuote.middleware),
});

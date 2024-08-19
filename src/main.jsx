import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import "./index.css";
import { ThemeContext } from "./context/ThemeContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeContext>
        <App />
      </ThemeContext>
    </Provider>
  </StrictMode>
);

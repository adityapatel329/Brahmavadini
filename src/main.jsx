import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
// import './index.css' // Removed index.css import
import App from "./App.jsx";
import { store } from "./store/store"; // Import the store
import { Provider } from "react-redux"; // Import the Provider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {" "}
      {/* Wrap App with Provider */}
      <App />
    </Provider>
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextWrapp from "./components/context-wrapper/context-wrapp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextWrapp>
      <App />
    </ContextWrapp>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import for React 18+
import App from "./App";

console.log("index.js executing..."); // Debugging log

// ✅ Use createRoot() instead of render()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

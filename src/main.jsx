import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import EntryLoader from "@/components/EntryLoader/EntryLoader.jsx"
import "./index.css";

function Root() {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && <EntryLoader onFinished={() => setLoaded(true)} />}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <App />
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
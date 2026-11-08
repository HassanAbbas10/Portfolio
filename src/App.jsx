import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch {
      // The theme still works when browser storage is unavailable.
    }
  };

  return (
    <div className="portfolio" data-theme={theme}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="page-column">
        <Home />
      </div>
      <Footer />
      <Header theme={theme} onToggleTheme={toggleTheme} />
    </div>
  );
};

export default App;

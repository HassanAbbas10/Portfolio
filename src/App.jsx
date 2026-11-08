import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import EntryLoader from "./components/EntryLoader/EntryLoader";
import useSmoothScroll from "./lib/useSmoothScroll";
import "./App.css";

const App = () => {
  const [introFinished, setIntroFinished] = useState(false);
  const finishIntro = useCallback(() => setIntroFinished(true), []);
  const smoothScroll = useSmoothScroll(introFinished);
  const isThemeTransitioning = useRef(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = (event) => {
    if (isThemeTransitioning.current) return;

    const nextTheme = theme === "light" ? "dark" : "light";
    const applyTheme = () => {
      setTheme(nextTheme);
      try {
        localStorage.setItem("portfolio-theme", nextTheme);
      } catch {
        // The theme still works when browser storage is unavailable.
      }
    };

    if (!document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      applyTheme();
      return;
    }

    // Settle wheel inertia so both theme snapshots capture the same scroll position.
    smoothScroll.current?.scrollTo(window.scrollY, { immediate: true });
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = bounds.left + bounds.width / 2;
    const y = bounds.top + bounds.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y)) + 2;
    const root = document.documentElement;
    const finishTransition = () => {
      root.classList.remove("theme-changing");
      root.style.removeProperty("--theme-reveal-x");
      root.style.removeProperty("--theme-reveal-y");
      root.style.removeProperty("--theme-reveal-radius");
      isThemeTransitioning.current = false;
    };

    isThemeTransitioning.current = true;
    root.style.setProperty("--theme-reveal-x", `${x}px`);
    root.style.setProperty("--theme-reveal-y", `${y}px`);
    root.style.setProperty("--theme-reveal-radius", `${radius}px`);
    root.classList.add("theme-changing");

    try {
      const transition = document.startViewTransition(() => flushSync(applyTheme));
      // Browsers can skip a transition when the tab becomes hidden.
      transition.ready.catch(() => {});
      transition.finished.catch(applyTheme).finally(finishTransition);
    } catch {
      finishTransition();
      applyTheme();
    }
  };

  return (
    <div className="portfolio" data-theme={theme}>
      <div inert={introFinished ? undefined : ""} aria-hidden={introFinished ? undefined : true}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div className="page-column">
          <Home />
        </div>
        <Footer />
        <Header theme={theme} onToggleTheme={toggleTheme} />
      </div>
      {!introFinished && <EntryLoader onFinished={finishIntro} />}
    </div>
  );
};

export default App;

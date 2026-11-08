import { useEffect, useId, useRef, useState } from "react";
import PropTypes from "prop-types";
import { ArrowUpRight } from "lucide-react";
import { Ghost, Kid, PirateCat, Yeti } from "../Footer/DoodleCharacters";
import "./EntryLoader.css";

const welcome = [..."WELCOME"];

export default function EntryLoader({ onFinished }) {
  const [exiting, setExiting] = useState(false);
  const skipRef = useRef(null);
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cancelled = false;
    let minimumElapsed = false;
    let assetsReady = false;
    let leaving = false;
    let exitTimer;

    root.classList.add("intro-loading");
    skipRef.current?.focus({ preventScroll: true });

    const finishWhenReady = () => {
      if (cancelled || leaving || !minimumElapsed || !assetsReady) return;
      leaving = true;
      setExiting(true);
      exitTimer = window.setTimeout(onFinished, reducedMotion ? 0 : 760);
    };
    const minimumTimer = window.setTimeout(() => {
      minimumElapsed = true;
      finishWhenReady();
    }, reducedMotion ? 150 : 2500);
    const maximumTimer = window.setTimeout(() => {
      assetsReady = true;
      finishWhenReady();
    }, reducedMotion ? 1200 : 5000);

    // Warm the first-screen assets while the opening scene plays.
    const assets = Array.from(document.querySelectorAll(".hero-art img, .profile-photo"))
      .map((image) => image.decode());
    if (document.fonts) {
      assets.push(document.fonts.load('900 100px "Doodle Stamp"'));
      assets.push(document.fonts.load('400 16px "Instrument Serif"'));
    }
    Promise.allSettled(assets).then(() => {
      assetsReady = true;
      finishWhenReady();
    });

    return () => {
      cancelled = true;
      window.clearTimeout(minimumTimer);
      window.clearTimeout(maximumTimer);
      window.clearTimeout(exitTimer);
      root.classList.remove("intro-loading");
    };
  }, [onFinished]);

  return (
    <div className={`entry-loader${exiting ? " is-exiting" : ""}`} role="dialog" aria-modal="true" aria-labelledby={`${id}-title`} aria-describedby={`${id}-description`} onKeyDown={(event) => {
      if (event.key === "Escape") onFinished();
      if (event.key === "Tab") {
        event.preventDefault();
        skipRef.current?.focus();
      }
    }}>
      <div className="entry-curtain entry-curtain-left" aria-hidden="true" />
      <div className="entry-curtain entry-curtain-right" aria-hidden="true" />

      <div className="entry-film">
        <header className="entry-film-header">
          <span className="entry-credit">HASSAN ABBAS<span>A LITTLE INTRODUCTION</span></span>
          <button ref={skipRef} type="button" className="entry-skip" onClick={onFinished}>Skip intro<ArrowUpRight size={14} aria-hidden="true" /></button>
        </header>

        <div className="entry-film-center">
          <p className="entry-scene-label"><span />A LITTLE CURIOSITY GOES A LONG WAY</p>
          <h1 className="entry-accessible-title" id={`${id}-title`}>Welcome to Hassan’s portfolio</h1>

          <div className="entry-stage" aria-hidden="true">
            <svg className="entry-ink" viewBox="0 0 1200 390" fill="none">
              <defs>
                <mask id={`${id}-ink`} maskUnits="userSpaceOnUse" x="0" y="0" width="1200" height="390">
                  <rect width="1200" height="390" fill="white" />
                  {Array.from({ length: 66 }, (_, index) => <path key={index} d={`M${(index * 137 + 17) % 1160} ${133 + (index * 31) % 175}l${15 + (index * 37) % 110} ${index % 2 ? -1.7 : 1.4}`} stroke="black" strokeWidth={0.7 + (index % 4) * 0.5} />)}
                </mask>
              </defs>
              <g mask={`url(#${id}-ink)`} fill="currentColor">
                {welcome.map((letter, index) => <text className="entry-welcome-letter" key={`${letter}-${index}`} x={62 + index * 154} y="309" textLength="151" lengthAdjust="spacingAndGlyphs" style={{ "--letter": index }}>{letter}</text>)}
              </g>
              <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path className="entry-ground" pathLength="1" d="M24 326c174 4 263-4 414-1s245-3 388 0 237-3 350 0" />
                <g className="entry-spark entry-spark-one"><path d="m339 58 4-14 6 13 14 4-13 6-4 14-6-13-13-5Z" fill="#efc555" /></g>
                <g className="entry-spark entry-spark-two"><path d="M902 86c-18-8-22-19-15-24 6-3 10 2 10 6 4-6 11-7 14-1 3 6-3 13-9 19Z" fill="#ed8d93" /></g>
                <g className="entry-spark entry-spark-three"><path d="m758 47-8 14h9l-3 13 15-19h-10l5-12Z" fill="#efc555" /></g>
                <g className="entry-spark entry-spark-four"><path d="m1024 169 4-14 6 12 13 4-12 6-4 13-6-12-13-4Z" fill="#aacdd2" /></g>
                <g className="entry-motion-lines"><path d="m75 208-24-3m27 16-31 2m1090-16 25-6m-23 20 30 1M566 69l-3-14m16 16 5-12" /></g>
                <path d="M199 340c-8-5-16 0-9 4 7 4 16 0 9-4Zm804 2c-8-5-15 0-9 4 7 5 16 0 9-4Z" />
              </g>
            </svg>
            <span className="entry-actor entry-yeti"><span className="entry-actor-body"><Yeti /></span></span>
            <span className="entry-actor entry-kid"><span className="entry-actor-body"><Kid /></span></span>
            <span className="entry-actor entry-ghost"><span className="entry-actor-body"><Ghost /></span></span>
            <span className="entry-actor entry-cat"><span className="entry-actor-body"><PirateCat /></span></span>
            <span className="entry-hello">hey, you.<svg viewBox="0 0 66 38"><path d="M3 4c13 1 34 6 48 22m-2-12 8 19-21-4" /></svg></span>
          </div>

          <p className="entry-caption" id={`${id}-description`}>Good things start with a little curiosity.</p>
          <span className="entry-byline">A PORTFOLIO BY HASSAN ABBAS</span>
        </div>

        <footer className="entry-film-footer">
          <span>MADE WITH CARE. AND A LITTLE CHARACTER.</span>
          <span className="entry-scene-track" aria-hidden="true"><i /><i /><i /><span>LET’S BEGIN</span></span>
        </footer>
      </div>
    </div>
  );
}

EntryLoader.propTypes = { onFinished: PropTypes.func.isRequired };

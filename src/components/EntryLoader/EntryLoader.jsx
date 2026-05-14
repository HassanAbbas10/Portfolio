import { useState, useEffect, useRef } from "react";
const loadingStates =
[
  { text: "Waking the Node Modules" },
  { text: "Igniting the Tailwind Reactor" },
  { text: "Gathering the Style Threads" },
  { text: "Calibrating Your Experience Matrix" },
  { text: "Smoothing the Render Currents" },
  { text: "Stabilizing the Compile Gateway..." },
  { text: "The Nexus Breathes. Welcome." }
]
const STEP_DURATION = 1200; 

// ─── Icons (matching original component) ────────────────────
const CheckOutline = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    style={{ width: 22, height: 22, color: "white" }}
  >
    <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const CheckFilled = ({ active }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{
      width: 22,
      height: 22,
      color: active ? "#84cc16" : "rgba(255,255,255,0.65)",
      filter: active
        ? "drop-shadow(0 0 8px rgba(132, 204, 22, 0.5))"
        : "none",
      transition: "all 0.4s ease",
    }}
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
      clipRule="evenodd"
    />
  </svg>
);

const LoaderCore = ({ value = 0 }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      position: "relative",
      maxWidth: "32rem",
      margin: "0 auto",
      marginTop: "10rem",
    }}
  >
    {loadingStates.map((state, index) => {
      const distance = Math.abs(index - value);
      const opacity = Math.max(1 - distance * 0.2, 0);
      const isActive = value === index;
      const isDone = index < value;

      return (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1rem",
            textAlign: "left",
            opacity,
            transform: `translateY(${-(value * 44)}px)`,
            transition:
              "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease",
          }}
        >
          <div
            style={{
              flexShrink: 0,
              transition:
                "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              transform: isActive ? "scale(1.2)" : "scale(1)",
            }}
          >
            {index > value ? <CheckOutline /> : <CheckFilled active={isActive} />}
          </div>

          <span
            style={{
              fontSize: "0.95rem",
              fontWeight: isActive ? 500 : 400,
              color: isActive
                ? "#84cc16"
                : isDone
                ? "rgba(255,255,255,0.45)"
                : "white",
              transition: "color 0.4s ease",
              letterSpacing: "0.01em",
            }}
          >
            {state.text}
          </span>

          {isActive && (
            <span
              style={{
                display: "inline-block",
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#84cc16",
                marginLeft: 2,
                boxShadow: "0 0 6px rgba(132, 204, 22, 0.6)",
                animation: "entryloader-blink 1s ease-in-out infinite",
              }}
            />
          )}
        </div>
      );
    })}
  </div>
);

export default function EntryLoader({ onFinished, minimumDuration = 0 }) {
  const [currentState, setCurrentState] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const mountTime = useRef(Date.now());

  // Step progression
  useEffect(() => {
    if (exiting) return;
    const timeout = setTimeout(() => {
      setCurrentState((prev) =>
        prev >= loadingStates.length - 1 ? prev : prev + 1
      );
    }, STEP_DURATION);
    return () => clearTimeout(timeout);
  }, [currentState, exiting]);

  // Smooth progress
  useEffect(() => {
    const target = Math.min(
      ((currentState + 1) / loadingStates.length) * 100,
      100
    );
    let raf;
    const animate = () => {
      progressRef.current += (target - progressRef.current) * 0.07;
      if (Math.abs(progressRef.current - target) < 0.5) {
        progressRef.current = target;
        setProgress(target);
        return;
      }
      setProgress(progressRef.current);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [currentState]);

  // When all steps complete → exit → unmount
  useEffect(() => {
    if (currentState >= loadingStates.length - 1 && !exiting) {
      const elapsed = Date.now() - mountTime.current;
      const remainingWait = Math.max(0, minimumDuration - elapsed);

      const timer = setTimeout(() => {
        setExiting(true);
        // Wait for the CSS fade-out to finish, then tell parent we're done
        setTimeout(() => {
          onFinished?.();
        }, 850);
      }, STEP_DURATION + remainingWait);

      return () => clearTimeout(timer);
    }
  }, [currentState, exiting, onFinished, minimumDuration]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Sora', system-ui, sans-serif",
        color: "white",
        opacity: exiting ? 0 : 1,
        transform: exiting ? "scale(1.03)" : "scale(1)",
        transition:
          "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: exiting ? "none" : "auto",
      }}
    >
      {/* Keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap');
        @keyframes entryloader-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.15; }
        }
        @keyframes entryloader-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes entryloader-fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes entryloader-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Dark background */}
      <div style={{ position: "absolute", inset: 0, background: "#09090b" }} />

      {/* Subtle lime glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 50% 40% at 50% 45%, rgba(132,204,22,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Backdrop blur */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
        }}
      />

      {/* Grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          pointerEvents: "none",
        }}
      />



      {/* Radial mask fade (original style) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 20,
          background: "linear-gradient(to top, #09090b, transparent 60%)",
          maskImage:
            "radial-gradient(900px at center, transparent 30%, white)",
          WebkitMaskImage:
            "radial-gradient(900px at center, transparent 30%, white)",
          pointerEvents: "none",
        }}
      />

      {/* Step list */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "24rem",
          width: "min(88vw, 30rem)",
          overflow: "hidden",
        }}
      >
        <LoaderCore value={currentState} />
      </div>

      {/* Bottom progress */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 30,
          padding: "0 0 2.5rem 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.85rem",
          animation: "entryloader-fadeInUp 0.6s ease-out 0.3s both",
        }}
      >
        {/* Progress track */}
        <div
          style={{
            width: "min(75vw, 300px)",
            height: 2,
            background: "rgba(255,255,255,0.04)",
            borderRadius: 1,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: `${progress}%`,
              background:
                "linear-gradient(90deg, #4d7c0f, #84cc16, #a3e635)",
              backgroundSize: "200% 100%",
              animation: "entryloader-shimmer 2s linear infinite",
              borderRadius: 1,
              boxShadow: "0 0 10px rgba(132, 204, 22, 0.25)",
            }}
          />
        </div>

        {/* Spinner + percent */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 14 14"
            style={{
              animation: "entryloader-spin 1.8s linear infinite",
              opacity: 0.35,
            }}
          >
            <circle
              cx="7"
              cy="7"
              r="5.5"
              fill="none"
              stroke="rgba(132, 204, 22, 0.6)"
              strokeWidth="1.5"
              strokeDasharray="18 16"
              strokeLinecap="round"
            />
          </svg>
          <span
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.06em",
              color: "rgba(255,255,255,0.2)",
              fontWeight: 400,
            }}
          >
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
}

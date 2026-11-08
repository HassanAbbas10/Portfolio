import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function useSmoothScroll() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateScroll = () => {
      scrollRef.current?.destroy();
      scrollRef.current = reducedMotion.matches ? null : new Lenis({
        autoRaf: true,
        lerp: 0.12,
        smoothWheel: true,
        syncTouch: false,
        anchors: {
          duration: 1,
          easing: (progress) => 1 - Math.pow(1 - progress, 3),
        },
      });
    };

    updateScroll();
    reducedMotion.addEventListener("change", updateScroll);

    return () => {
      reducedMotion.removeEventListener("change", updateScroll);
      scrollRef.current?.destroy();
      scrollRef.current = null;
    };
  }, []);

  return scrollRef;
}

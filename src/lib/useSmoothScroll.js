import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function useSmoothScroll(enabled = true) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;
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

    // React mounts section targets after the browser's initial hash navigation.
    try {
      const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (target) {
        if (scrollRef.current) scrollRef.current.scrollTo(target, { immediate: true });
        else target.scrollIntoView({ behavior: "instant" });
      }
    } catch {
      // Ignore malformed hashes without preventing the page from scrolling.
    }

    reducedMotion.addEventListener("change", updateScroll);

    return () => {
      reducedMotion.removeEventListener("change", updateScroll);
      scrollRef.current?.destroy();
      scrollRef.current = null;
    };
  }, [enabled]);

  return scrollRef;
}

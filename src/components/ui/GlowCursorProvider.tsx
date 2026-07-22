"use client";
import { useEffect } from "react";

const THROTTLE_MS = 16;

export function GlowCursorProvider() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--x", String(window.innerWidth / 2));
    root.style.setProperty("--xp", "0.5");
    root.style.setProperty("--y", String(window.innerHeight / 2));
    root.style.setProperty("--yp", "0.5");

    let lastUpdate = 0;

    const syncPointer = (e: PointerEvent) => {
      const now = Date.now();
      if (now - lastUpdate < THROTTLE_MS) return;
      lastUpdate = now;

      root.style.setProperty("--x", e.clientX.toFixed(2));
      root.style.setProperty("--xp", (e.clientX / window.innerWidth).toFixed(4));
      root.style.setProperty("--y", e.clientY.toFixed(2));
      root.style.setProperty("--yp", (e.clientY / window.innerHeight).toFixed(4));
    };

    window.addEventListener("pointermove", syncPointer, { passive: true });
    return () => {
      window.removeEventListener("pointermove", syncPointer);
    };
  }, []);

  return null;
}

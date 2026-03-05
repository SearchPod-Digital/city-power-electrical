"use client";

import { useRef, useState, useEffect, CSSProperties } from "react";

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export function useCounter(end: number, duration = 2000, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, active]);
  return val;
}

/* M3 emphasized-decelerate */
export const fadeUpM3 = (vis: boolean, delay = 0): CSSProperties => ({
  opacity: vis ? 1 : 0,
  transform: vis ? "translateY(0)" : "translateY(32px)",
  transition: `opacity 700ms cubic-bezier(0.05,0.7,0.1,1) ${delay}ms, transform 700ms cubic-bezier(0.05,0.7,0.1,1) ${delay}ms`,
});

/* Coolors easing */
export const fadeUpCoolors = (vis: boolean, delay = 0): CSSProperties => ({
  opacity: vis ? 1 : 0,
  transform: vis ? "translateY(0)" : "translateY(28px)",
  transition: `opacity 650ms cubic-bezier(0,0,0.2,1) ${delay}ms, transform 650ms cubic-bezier(0,0,0.2,1) ${delay}ms`,
});

/* Nexus/Hybrid standard */
export const fadeUpNexus = (vis: boolean, delay = 0): CSSProperties => ({
  opacity: vis ? 1 : 0,
  transform: vis ? "translateY(0)" : "translateY(24px)",
  transition: `opacity 600ms cubic-bezier(0.2,0,0,1) ${delay}ms, transform 600ms cubic-bezier(0.2,0,0,1) ${delay}ms`,
});

/* Ant Design easing */
export const fadeUpAnt = (vis: boolean, delay = 0): CSSProperties => ({
  opacity: vis ? 1 : 0,
  transform: vis ? "translateY(0)" : "translateY(20px)",
  transition: `opacity 450ms cubic-bezier(0.645,0.045,0.355,1) ${delay}ms, transform 450ms cubic-bezier(0.645,0.045,0.355,1) ${delay}ms`,
});

/* Luna retail easing */
export const fadeUpLuna = (vis: boolean, delay = 0): CSSProperties => ({
  opacity: vis ? 1 : 0,
  transform: vis ? "translateY(0)" : "translateY(32px)",
  transition: `opacity 700ms cubic-bezier(0,0,0.2,1) ${delay}ms, transform 700ms cubic-bezier(0,0,0.2,1) ${delay}ms`,
});

/* Tailwind standard easing */
export const fadeUpTW = (vis: boolean, delay = 0): CSSProperties => ({
  opacity: vis ? 1 : 0,
  transform: vis ? "translateY(0)" : "translateY(20px)",
  transition: `opacity 450ms cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 450ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
});

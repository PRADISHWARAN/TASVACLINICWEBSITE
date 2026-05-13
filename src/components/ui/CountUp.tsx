import { useEffect, useRef, useState } from "react";

interface Props {
  end: number;
  suffix?: string;
  duration?: number;
}

export function CountUp({ end, suffix = "", duration = 1800 }: Props) {
  const [count, setCount] = useState(0);
  const [popped, setPopped] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTs = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - startTs) / duration, 1);
            const eased = 1 - (1 - p) ** 3;
            setCount(Math.round(eased * end));
            if (p < 1) {
              requestAnimationFrame(tick);
            } else {
              setPopped(true);
              setTimeout(() => setPopped(false), 400);
            }
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={popped ? "animate-number-pop inline-block" : "inline-block"}>
      {count}{suffix}
    </span>
  );
}

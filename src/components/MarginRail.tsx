import { useEffect, useRef, useState } from 'react';

export default function MarginRail() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? window.scrollY / scrollable : 0;
      setProgress(Math.min(1, Math.max(0, pct)));
      rafRef.current = 0;
    };

    const onScroll = () => {
      if (!rafRef.current) {
        rafRef.current = window.requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="fixed left-2 top-0 bottom-0 z-30 hidden md:flex flex-col items-center pointer-events-none"
      aria-hidden="true"
    >
      <div className="relative w-[2px] h-full bg-ink/10 my-16">
        <div
          className="absolute left-1/2 w-2 h-2 rounded-full bg-signal"
          style={{
            top: `${progress * 100}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'top 50ms linear',
          }}
        />
      </div>
    </div>
  );
}

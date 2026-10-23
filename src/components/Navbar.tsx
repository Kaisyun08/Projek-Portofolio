import { useEffect, useRef, useState } from 'react';
import { Home, User, Code2, Briefcase, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'work', label: 'Work', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
] as const;

const NAV_IDS = NAV_ITEMS.map((i) => i.id);

export default function Navbar() {
  const [activeId, setActiveId] = useState('home');
  const [hidden, setHidden] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    NAV_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;
      if (currentY < 100) setHidden(false);
      else if (Math.abs(diff) > 5) setHidden(diff > 0 && currentY > 200);
      lastScrollY.current = currentY;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const activeEl = nav.querySelector<HTMLElement>(`[data-id="${activeId}"]`);
    if (activeEl) {
      const rect = activeEl.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      setIndicatorStyle({
        left: rect.left - navRect.left,
        width: rect.width,
      });
    }
  }, [activeId]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Mobile: floating bottom pill */}
      <nav
        className="fixed left-4 right-4 bottom-4 z-50 transition-transform duration-300 ease-slide md:hidden"
        style={{ transform: hidden ? 'translateY(150%)' : undefined }}
        aria-label="Section navigation"
      >
        <div
          ref={navRef}
          className="relative flex items-center gap-1 bg-ink text-paper px-2 py-1.5 border-[1.5px] border-ink rounded-full"
        >
          <div
            className="absolute bg-signal rounded-full transition-all duration-300 ease-slide"
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
              height: 'calc(100% - 12px)',
              top: '6px',
            }}
            aria-hidden="true"
          />
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                data-id={item.id}
                onClick={(e) => handleClick(e, item.id)}
                className="relative z-10 flex items-center justify-center gap-1 px-2.5 py-2 min-w-[44px] min-h-[44px]
                  font-mono text-xs font-medium transition-colors duration-200"
                style={{ color: isActive ? 'var(--ink)' : 'var(--paper)' }}
                aria-current={isActive ? 'true' : undefined}
                aria-label={item.label}
              >
                <Icon size={15} />
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Desktop: sticky top bar */}
      <nav
        className="sticky top-0 z-50 hidden md:block bg-paper/95 backdrop-blur-sm border-b-[1.5px] border-ink"
        aria-label="Section navigation"
      >
        <div
          ref={navRef}
          className="relative mx-auto flex max-w-3xl items-center justify-between"
        >
          <div
            className="absolute bg-signal transition-all duration-300 ease-slide"
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
              height: 'calc(100% - 0px)',
              top: 0,
              opacity: 0.15,
            }}
            aria-hidden="true"
          />
          <div className="absolute left-0 top-0 bottom-0 flex items-center px-4 z-20">
            <span className="font-display font-bold text-ink">SN</span>
          </div>
          <div className="relative z-10 flex w-full justify-end">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  data-id={item.id}
                  onClick={(e) => handleClick(e, item.id)}
                  className="relative z-10 flex items-center gap-1.5 px-4 py-3 min-h-[44px]
                    font-mono text-xs font-medium transition-colors duration-200"
                  style={{
                    color: isActive ? 'var(--signal)' : 'var(--ink)',
                    fontWeight: isActive ? 500 : 400,
                  }}
                  aria-current={isActive ? 'true' : undefined}
                  aria-label={item.label}
                >
                  <Icon size={14} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}

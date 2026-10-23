import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, FileDown, FolderOpen } from 'lucide-react';
import { profile } from '@/data/content';
import Button from '@/components/Button';

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [stampIn, setStampIn] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 100);
    const t2 = setTimeout(() => setStampIn(true), 500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const lines = profile.name.split(' ');

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-center px-5 md:px-8"
      style={{ scrollMarginTop: '0px' }}
    >
      {/* OPEN TO WORK stamp */}
      {profile.available && (
        <div className="absolute top-6 right-5 md:top-8 md:right-12">
          <div className={`${stampIn ? 'stamp-in' : 'opacity-0'} inline-block`}>
            <div
              className="border-[2.5px] border-signal text-signal px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.12em]"
              style={{ borderRadius: 3 }}
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                Open to Work
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-3xl">
        {/* Name display */}
        <h1
          className="font-display font-extrabold tracking-tight mb-4"
          style={{ fontSize: 'clamp(2.6rem, 11vw, 4.5rem)', lineHeight: 0.95, letterSpacing: '-0.02em' }}
        >
          {lines.map((line, i) => (
            <span key={i} className={`hero-line ${visible ? 'is-visible' : ''}`}>
              <span>
                {line}
                {i < lines.length - 1 ? '' : '.'}
              </span>
            </span>
          ))}
        </h1>

        {/* Role */}
        <div className={`hero-line ${visible ? 'is-visible' : ''}`}>
          <span className="font-mono text-sm md:text-base text-ink-soft uppercase tracking-[0.08em]">
            {profile.role}
          </span>
        </div>

        {/* Tagline */}
        <p
          className={`mt-6 max-w-xl text-ink leading-relaxed transition-all duration-700 ease-logbook ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '350ms' }}
        >
          {profile.tagline}
        </p>

        {/* CTAs */}
        <div
          className={`mt-8 flex flex-wrap items-center gap-3 transition-all duration-700 ease-logbook ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <Button href="#work" variant="primary" ariaLabel="Lihat Proyek">
            <FolderOpen size={16} />
            Lihat Proyek
          </Button>
          <Button href={profile.cvUrl} download variant="secondary" ariaLabel="Unduh CV">
            <FileDown size={16} />
            Unduh CV
          </Button>
        </div>

        {/* Socials inline below CTAs */}
        <div
          className={`mt-6 flex flex-wrap gap-4 transition-all duration-700 ease-logbook ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '650ms' }}
        >
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-ink-soft hover:text-signal transition-colors duration-200 flex items-center gap-1"
            >
              <ArrowUpRight size={12} />
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 scroll-indicator flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <span className="font-mono text-xs text-ink-soft uppercase tracking-[0.1em]">Scroll</span>
        <ArrowDown size={18} className="text-ink-soft" />
      </div>
    </section>
  );
}

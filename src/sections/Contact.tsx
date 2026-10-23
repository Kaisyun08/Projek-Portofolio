import { useState } from 'react';
import { profile } from '@/data/content';
import SectionHeader from '@/components/SectionHeader';
import Reveal from '@/components/Reveal';
import { Copy, Check, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      const el = document.createElement('textarea');
      el.value = profile.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <footer id="contact" className="px-5 md:px-8 py-16 md:py-24 max-w-3xl mx-auto w-full">
      <SectionHeader num="07" title="Contact" />

      <Reveal>
        <h3 className="font-display font-bold text-3xl md:text-5xl text-ink leading-tight mb-8"
          style={{ letterSpacing: '-0.01em' }}
        >
          Mari bangun
          <br />
          sesuatu.
        </h3>

        {/* Copy email button */}
        <button
          onClick={copyEmail}
          className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] font-mono text-sm font-medium border-[1.5px] border-ink bg-paper text-ink hover:bg-paper-deep transition-all duration-150 active:scale-[0.97] mb-6"
          aria-label="Salin email"
        >
          {copied ? (
            <>
              <Check size={16} className="text-signal" />
              Tersalin ✓
            </>
          ) : (
            <>
              <Copy size={16} />
              Salin Email
            </>
          )}
        </button>

        <p className="text-ink mb-6">
          <a
            href={`mailto:${profile.email}`}
            className="text-ink underline decoration-signal decoration-2 underline-offset-4 hover:text-signal transition-colors duration-200"
          >
            {profile.email}
          </a>
        </p>

        {/* Socials */}
        <div className="flex flex-wrap gap-4 mb-12">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-sm text-ink hover:text-signal transition-colors duration-200"
            >
              {s.label}
              <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      </Reveal>

      {/* Footer */}
      <div className="border-t-[1.5px] dashed border-ink pt-6 flex flex-col md:flex-row gap-2 md:justify-between md:items-center">
        <p className="font-mono text-xs text-ink-soft">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-ink-soft">
          Dibangun dengan React + Vite
        </p>
      </div>
    </footer>
  );
}

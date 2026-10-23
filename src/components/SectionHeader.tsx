interface SectionHeaderProps {
  num: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ num, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="relative mb-10 md:mb-14">
      <span className="section-num" aria-hidden="true">
        §{num}
      </span>
      <div className="relative z-10">
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink-soft mb-2">
          §{num} — {title}
        </p>
        <h2 className="font-display font-semibold leading-tight tracking-tight"
          style={{ fontSize: 'clamp(1.9rem, 7vw, 3rem)' }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-ink-soft max-w-lg">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

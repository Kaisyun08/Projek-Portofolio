import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
  download?: boolean;
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  href,
  download,
  ariaLabel,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] font-mono text-sm font-medium border-[1.5px] border-ink transition-all duration-150 ease-out active:scale-[0.97]';
  const styles =
    variant === 'primary'
      ? 'bg-signal text-paper hover:bg-ink'
      : 'bg-paper text-ink hover:bg-paper-deep';

  if (href) {
    return (
      <a
        href={href}
        download={download}
        aria-label={ariaLabel}
        target={download ? undefined : '_blank'}
        rel={download ? undefined : 'noopener noreferrer'}
        className={`${base} ${styles}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} aria-label={ariaLabel} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}

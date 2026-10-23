import { type ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

interface RevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}

export default function Reveal({ children, className = '', stagger = false }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const baseClass = stagger ? 'reveal-stagger' : 'reveal';
  const visibleClass = inView ? 'is-visible' : '';

  return (
    <div ref={ref} className={`${baseClass} ${visibleClass} ${className}`}>
      {children}
    </div>
  );
}

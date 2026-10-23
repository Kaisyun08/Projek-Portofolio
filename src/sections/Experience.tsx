import { experience } from '@/data/content';
import SectionHeader from '@/components/SectionHeader';
import Tag from '@/components/Tag';
import Reveal from '@/components/Reveal';

export default function Experience() {
  return (
    <section id="work" className="px-5 md:px-8 py-16 md:py-24 max-w-3xl mx-auto w-full">
      <SectionHeader num="04" title="Experience" subtitle="Jejak karier dan pencapaian terukur." />

      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-ink/20"
          aria-hidden="true"
        />

        <div className="space-y-12">
          {experience.map((exp, i) => (
            <Reveal key={exp.company}>
              <div className="relative pl-10">
                {/* Dot */}
                <div
                  className="absolute left-0 top-2 w-4 h-4 rounded-full bg-signal border-[1.5px] border-ink z-10"
                  aria-hidden="true"
                />

                <p className="font-mono text-xs uppercase tracking-[0.06em] text-ink-soft mb-1">
                  {exp.period}
                </p>
                <h3 className="font-display font-semibold text-xl md:text-2xl text-ink leading-tight">
                  {exp.role}
                </h3>
                <p className="font-mono text-sm text-ink-soft mt-1 mb-4">
                  {exp.company}
                </p>

                <ul className="space-y-2 mb-4">
                  {exp.points.map((point, pi) => (
                    <li key={pi} className="flex gap-2 text-ink leading-relaxed">
                      <span className="font-mono text-signal shrink-0 mt-1 text-xs">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { education, achievements } from '@/data/content';
import SectionHeader from '@/components/SectionHeader';
import Reveal from '@/components/Reveal';

export default function Education() {
  return (
    <section className="px-5 md:px-8 py-16 md:py-24 max-w-3xl mx-auto w-full">
      <SectionHeader num="06" title="Education & Achievements" />

      <Reveal>
        <div className="mb-10">
          <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-soft mb-4 pb-2 border-b-[1.5px] border-ink">
            Pendidikan
          </h3>
          <div className="space-y-3">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="flex flex-col md:flex-row gap-2 md:gap-6 py-2"
              >
                <span className="font-mono text-sm text-ink-soft md:w-40 shrink-0">
                  {edu.period}
                </span>
                <div>
                  <p className="font-display font-semibold text-lg text-ink leading-tight">
                    {edu.school}
                  </p>
                  <p className="text-sm text-ink-soft">{edu.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal stagger>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-soft mb-4 pb-2 border-b-[1.5px] border-ink">
            Sertifikasi & Pencapaian
          </h3>
          <ul className="space-y-3">
            {achievements.map((a, i) => (
              <li key={i} className="flex gap-2 text-ink leading-relaxed py-1">
                <span className="font-mono text-signal shrink-0 text-sm">★</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

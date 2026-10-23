import { projects } from '@/data/content';
import SectionHeader from '@/components/SectionHeader';
import Tag from '@/components/Tag';
import Reveal from '@/components/Reveal';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section className="px-5 md:px-8 py-16 md:py-24 max-w-3xl mx-auto w-full">
      <SectionHeader num="05" title="Projects" subtitle="Mini case study dari proyek unggulan." />

      <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
        {projects.map((proj) => (
          <Reveal key={proj.index}>
            <article
              className="group border-[1.5px] border-ink bg-paper-deep p-5 md:p-6 offset-shadow-hover h-full flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="font-mono text-2xl md:text-3xl font-medium text-ink/30 leading-none">
                  {proj.index}
                </span>
                <h3 className="font-display font-semibold text-lg md:text-xl text-ink leading-tight text-right">
                  {proj.title}
                </h3>
              </div>

              <p className="text-sm text-ink-soft mb-4 leading-relaxed">
                {proj.summary}
              </p>

              <dl className="space-y-2 mb-4 flex-1">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.06em] text-signal">Problem</dt>
                  <dd className="text-sm text-ink leading-relaxed">{proj.problem}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.06em] text-signal">Solution</dt>
                  <dd className="text-sm text-ink leading-relaxed">{proj.solution}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.06em] text-signal">Result</dt>
                  <dd className="text-sm text-ink leading-relaxed font-medium">{proj.result}</dd>
                </div>
              </dl>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>

              <div className="flex gap-2">
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] font-mono text-xs font-medium border-[1.5px] border-ink bg-signal text-paper hover:bg-ink transition-colors duration-200"
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
                <a
                  href={proj.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] font-mono text-xs font-medium border-[1.5px] border-ink bg-paper text-ink hover:bg-paper-deep transition-colors duration-200"
                >
                  <Github size={14} />
                  Repo
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

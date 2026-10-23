import { skills } from '@/data/content';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import Tag from '@/components/Tag';

export default function Skills() {
  return (
    <section id="skills" className="px-5 md:px-8 py-16 md:py-24 max-w-3xl mx-auto w-full">
      <SectionHeader num="03" title="Skills" subtitle="Tech stack yang saya gunakan sehari-hari." />

      <div className="space-y-8">
        {skills.map((group, gi) => (
          <Reveal key={group.group} stagger>
            <div className="border-b-[1.5px] border-ink pb-2 mb-4">
              <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-soft">
                {group.group}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, ii) => (
                <Tag key={item}>
                  {item}
                </Tag>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

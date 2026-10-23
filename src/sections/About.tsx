import { profile } from '@/data/content';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="px-5 md:px-8 py-16 md:py-24 max-w-3xl mx-auto w-full">
      <SectionHeader num="02" title="About" />

      <Reveal>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Photo */}
          <div className="shrink-0 mx-auto md:mx-0">
            <div
              className="offset-shadow border-[1.5px] border-ink p-2 bg-paper"
              style={{ transform: 'rotate(-2deg)' }}
            >
              <img
                src={profile.photo}
                alt={profile.name}
                width={200}
                height={250}
                loading="lazy"
                className="w-40 h-50 md:w-48 md:h-60 object-cover"
                style={{ aspectRatio: '4/5' }}
              />
            </div>
          </div>

          {/* Bio + location */}
          <div className="flex-1">
            <div className="space-y-4">
              {profile.about.map((p, i) => (
                <p key={i} className="text-ink leading-relaxed">{p}</p>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 font-mono text-sm text-ink-soft">
              <MapPin size={14} />
              {profile.location}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Stats */}
      <Reveal stagger className="mt-12 grid grid-cols-3 gap-3 md:gap-6">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="border-[1.5px] border-ink bg-paper-deep p-4 text-center md:text-left">
            <p className="font-display font-extrabold text-3xl md:text-4xl text-ink leading-none mb-1">
              {stat.value}
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.06em] text-ink-soft leading-tight">
              {stat.label}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

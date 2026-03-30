import Image from 'next/image';
import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { IMAGES } from '../../../public/images/manifest';

export const metadata: Metadata = {
  title: 'Judo for Kids',
  description:
    'Youth judo classes at Seattle Dojo for ages 5–16. Monthly practice tournaments, colored belt progression, and games-based instruction in a safe, supportive environment.',
};

export default function ForKidsPage() {
  return (
    <>
      {/* Page hero — dark, with kids photo */}
      <section className="relative bg-primary min-h-[360px] flex items-end p-10 md:p-16">
        <Image
          src={IMAGES.kidsActivities.src}
          alt={IMAGES.kidsActivities.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/85" />
        <div className="relative z-10 max-w-2xl">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-accent mb-3">
            Ages 5 &ndash; 16
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-[#FAF6F1] leading-tight">
            Judo for Kids
          </h1>
          <p className="text-[#FAF6F1]/75 mt-4 text-base md:text-lg leading-relaxed max-w-xl">
            Building coordination, confidence, and community through the gentle way.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <Section background="default">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl mb-4">
              More Than a Martial Art
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Judo offers children numerous developmental benefits beyond physical
              fitness. The sport cultivates flexibility, agility, and coordination
              while building concentration, respect, self-confidence, and
              self-control.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Students gain exposure to Japanese language and culture while forming
              lasting friendships within a supportive community. At Seattle Dojo,
              kids learn alongside generations of judoka who have trained on these
              same mats.
            </p>
            <p className="text-muted leading-relaxed">
              Classes focus on safety fundamentals including throwing techniques,
              groundwork, and ukemi &mdash; the art of falling safely. Instruction
              incorporates game-based learning to develop contact awareness, spatial
              orientation, balance, and agility.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={IMAGES.studentsAction2.src}
              alt={IMAGES.studentsAction2.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Program features */}
      <Section background="surface" fullBleed>
        <h2 className="font-display text-3xl mb-10">Program Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Monthly Practice Tournaments',
              body: 'Low-pressure in-house shiai prepare students for competition and reward hard work in a familiar setting.',
            },
            {
              title: 'Colored Belt Progression',
              body: 'Structured ranking motivates students and gives visible recognition of their growing skill and dedication.',
            },
            {
              title: 'Safety-First Instruction',
              body: 'Every class begins with ukemi practice — learning to fall safely is the foundation of judo and a life skill.',
            },
            {
              title: 'Games-Based Learning',
              body: 'Drills designed to feel like play while developing balance, agility, spatial awareness, and judo fundamentals.',
            },
          ].map(({ title, body }) => (
            <div key={title} className="bg-background rounded-lg p-6 border border-border">
              <span className="text-accent text-xl font-medium mb-3 block">&#10033;</span>
              <h3 className="font-display text-lg mb-2">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Schedule info */}
      <Section background="default">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <h2 className="font-display text-3xl mb-4">Class Schedule</h2>
            <p className="text-muted leading-relaxed mb-6">
              Junior classes meet twice a week. Kids train separately from adults
              for a focused, age-appropriate environment.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left text-xs font-semibold tracking-wider uppercase text-muted py-2 px-3">
                      Day
                    </th>
                    <th className="text-left text-xs font-semibold tracking-wider uppercase text-muted py-2 px-3">
                      Class
                    </th>
                    <th className="text-left text-xs font-semibold tracking-wider uppercase text-muted py-2 px-3">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { day: 'Monday', cls: 'Juniors (ages 5–16)', time: '6:30 – 8:00 PM' },
                    { day: 'Thursday', cls: 'Juniors (ages 5–16)', time: '6:30 – 8:00 PM' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border hover:bg-surface transition-colors">
                      <td className="py-3 px-3 tabular-nums">{row.day}</td>
                      <td className="py-3 px-3">{row.cls}</td>
                      <td className="py-3 px-3 tabular-nums">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl mb-4">Getting Started</h2>
            <p className="text-muted leading-relaxed mb-6">
              All kids and parents are welcome to attend a practice session to
              observe or try a class. No appointment needed &mdash; just show up
              during class time and introduce yourself to an instructor.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Ages 5 through 16 welcome',
                'No prior experience necessary',
                'Bring comfortable workout clothes for first visit',
                'Gi (uniform) available for purchase after joining',
              ].map((item) => (
                <li key={item} className="text-sm text-muted flex items-start gap-2">
                  <span className="text-accent font-medium shrink-0 mt-0.5">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href="/schedule"
                className="inline-block bg-accent text-[#FAF6F1] text-sm font-medium px-6 py-3 rounded hover:bg-accent-light transition-colors"
              >
                View Full Schedule
              </a>
              <a
                href="/membership"
                className="inline-block border border-border text-foreground text-sm font-medium px-6 py-3 rounded hover:bg-surface transition-colors"
              >
                Membership & Fees
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA — primary */}
      <Section background="primary" fullBleed>
        <div className="text-center">
          <h2 className="font-display text-3xl mb-4">Questions?</h2>
          <p className="text-[#FAF6F1]/75 leading-relaxed max-w-xl mx-auto mb-8">
            Reach out to us directly &mdash; we&apos;re happy to answer questions about
            the program, what to expect, and how to get your child started.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent text-[#FAF6F1] text-sm font-medium px-6 py-3 rounded hover:bg-accent-light transition-colors"
          >
            Contact Seattle Dojo
          </a>
        </div>
      </Section>
    </>
  );
}

import Image from 'next/image';
import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { IMAGES } from '../../../public/images/manifest';

export const metadata: Metadata = {
  title: 'What is Judo',
  description:
    'Judo \u2014 the gentle way \u2014 is a Japanese martial art created by Jigoro Kano in 1882, practiced for fitness, self-defense, and competition worldwide.',
};

export default function WhatIsJudoPage() {
  return (
    <>
      {/* SECTION 1 — Page header */}
      <Section background="default">
        <p className="text-accent text-xs tracking-[0.15em] uppercase mb-3">
          The Gentle Way
        </p>
        <h1 className="font-display text-4xl md:text-5xl mb-6">What is Judo?</h1>
        <p className="text-lg text-muted max-w-2xl leading-relaxed">
          Judo, meaning &ldquo;the gentle way&rdquo; or &ldquo;the way of giving
          way&rdquo;, is a Japanese martial art and sport created by Dr. Jigoro
          Kano in 1882. Kano refined the ancient fighting system of Jujutsu into
          a modern discipline built on two core principles.
        </p>
      </Section>

      {/* SECTION 2 — Two principles */}
      <Section background="surface" fullBleed>
        <h2 className="font-display text-2xl mb-8">Two Core Principles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-background rounded-lg border border-border p-8">
            <p className="text-accent font-display text-5xl mb-2">01</p>
            <h3 className="font-display text-xl mb-3">
              Maximum Efficiency, Minimum Effort
            </h3>
            <p className="text-muted leading-relaxed">
              Use technique and timing to throw an opponent while expending minimal
              physical strength. Mastery of leverage and body mechanics replaces
              brute force.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-background rounded-lg border border-border p-8">
            <p className="text-accent font-display text-5xl mb-2">02</p>
            <h3 className="font-display text-xl mb-3">Mutual Welfare and Benefit</h3>
            <p className="text-muted leading-relaxed">
              Although judo is physically demanding, applying its principles to
              everyday life enables individuals to translate the concepts of maximum
              efficiency and &ldquo;giving way&rdquo; into mutual aid &mdash;
              resulting in greater harmony among people.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION 3 — Safety and practice */}
      <Section background="default">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left text */}
          <div>
            <h2 className="font-display text-2xl mb-4">
              Safe Enough to Practice at Full Speed
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              By eliminating dangerous Jujutsu techniques such as kicking,
              punching, and small joint locks, Kano created a system where
              techniques could be practiced at full speed with minimal injury risk.
              The preserved techniques include a large variety of throws and ground
              control methods &mdash; pins, chokes, and arm locks.
            </p>
            <p className="text-muted leading-relaxed">
              Students first master ukemi &mdash; the art of falling properly &mdash;
              enabling daily training without long recovery periods between sessions.
            </p>
          </div>
          {/* Right image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={IMAGES.interior1.src}
              alt={IMAGES.interior1.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* SECTION 4 — Olympic sport + CTA (primary, fullBleed) */}
      <Section background="primary" fullBleed>
        <h2 className="font-display text-3xl mb-4">An Olympic Sport Since 1964</h2>
        <p className="text-[#FAF6F1]/75 leading-relaxed max-w-2xl mb-4">
          Judo became a sanctioned Olympic sport beginning with the 1964 Tokyo
          Olympics. Points are awarded for throwing or pinning an opponent, or by
          forcing a submission via choke or arm lock. Countless levels of
          competition are available for players of all experience levels.
        </p>
        <p className="text-[#FAF6F1]/75 leading-relaxed max-w-2xl mb-6">
          Whether practiced for exercise, recreation, competition, self-defense,
          or as a life philosophy, judo is enjoyed year-round by women and men,
          boys and girls of all ages.
        </p>
        <a
          href="/getting-started"
          className="inline-block bg-accent text-white px-6 py-3 rounded hover:bg-accent-light transition-colors mt-4"
        >
          Try Judo at Seattle Dojo
        </a>
      </Section>
    </>
  );
}

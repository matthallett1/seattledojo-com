import Image from 'next/image';
import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { IMAGES } from '../../../public/images/manifest';

export const metadata: Metadata = {
  title: 'About & History',
  description:
    "Seattle Dojo is North America's oldest judo facility, established in the early 1900s in Seattle's International District.",
};

export default function AboutPage() {
  return (
    <>
      {/* SECTION 1 — Page hero (full-bleed dark) */}
      <section className="relative bg-primary min-h-[360px] flex items-end p-10 md:p-16">
        <Image
          src={IMAGES.studentsAction1.src}
          alt={IMAGES.studentsAction1.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/80" />
        <div className="relative z-10">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-accent mb-3">
            Est. Early 1900s
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-[#FAF6F1] leading-tight">
            About Seattle Dojo
          </h1>
        </div>
      </section>

      {/* SECTION 2 — Introduction + pull quote */}
      <Section background="default">
        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">
          {/* Left — 3 columns */}
          <div className="md:col-span-3">
            <h2 className="font-display text-3xl mb-4">
              North America&apos;s First Judo Dojo
            </h2>
            <p className="text-muted leading-relaxed">
              Seattle Dojo stands as the oldest judo facility in the United States,
              established in the early 1900s. The organization relocated multiple
              times before constructing its present building during the 1930s —
              built by first-generation Japanese Americans and designed by architect
              Kichio Allen Arai in 1934. The structure features frame construction
              mounted on truck springs, literally giving the floor spring action
              under foot.
            </p>
            <blockquote className="font-display italic text-xl border-l-[3px] border-accent pl-6 my-8 text-foreground/80">
              The founder of judo, Professor Jigoro Kano, visited this dojo in 1936
              and 1938.
            </blockquote>
            <p className="text-muted leading-relaxed">
              The club organized its inaugural tournament in 1903 and sponsored
              competitions from 1907 through 1941. Operations ceased during World
              War II following the internment of Seattle&apos;s Japanese American
              community. The dojo reopened January 1, 1947, and the annual
              tournament has continued without interruption since 1953.
            </p>
          </div>

          {/* Right — 2 columns */}
          <div className="md:col-span-2">
            <div className="flex justify-center">
              <Image
                src={IMAGES.plaque.src}
                alt={IMAGES.plaque.alt}
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 3 — Historical milestones (surface, fullBleed) */}
      <Section background="surface" fullBleed>
        <h2 className="font-display text-2xl mb-8">Historical Milestones</h2>
        <ul className="space-y-4">
          {[
            {
              year: '1903',
              description:
                'First regional judo tournament organized. Pioneer instructor Itaro Kono, a 2nd Dan black belt, arrived November 29, 1905.',
            },
            {
              year: '1907',
              description:
                'First Northwest regional tournament held March 1907. Tokugoro Ito, a professional wrestler, made the club his headquarters (1907\u20131911).',
            },
            {
              year: '1932',
              description: 'Kodokan leader Jigoro Kano visited the dojo in 1932.',
            },
            {
              year: '1934',
              description:
                'Present building constructed by first-generation Japanese Americans. Architect: Kichio Allen Arai. Frame construction mounted on truck springs for a sprung training floor.',
            },
            {
              year: '1936 & 1938',
              description:
                'Professor Jigoro Kano, founder of judo, visited the dojo. Washington teams competed against California in national tournaments.',
            },
            {
              year: '1942\u20131946',
              description:
                "Dojo closed due to WWII and the forced internment of Seattle\u2019s Japanese American community.",
            },
            {
              year: '1947',
              description:
                'Dojo reopened January 1, 1947. Key figures: Toru Araki, Akira \u201cPoison\u201d Kato, Hiromu \u201cKelly\u201d Nishitani, and Dick Yamasaki.',
            },
            {
              year: '1953',
              description:
                'First post-war tournament \u2014 the first Pacific Northwest tournament in which women competed. Annual tournament has continued uninterrupted ever since.',
            },
            {
              year: '1954',
              description:
                'A Seattle team won first place at the US National AAU judo championships.',
            },
          ].map(({ year, description }) => (
            <li key={year}>
              <div className="flex gap-6 items-start">
                <span className="text-accent font-semibold font-body text-sm tabular-nums shrink-0 pt-1 min-w-[80px]">
                  {year}
                </span>
                <p className="text-muted leading-relaxed">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* SECTION 4 — Notable instructors & associated clubs */}
      <Section background="default">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h3 className="font-display text-xl mb-4">
              Notable Instructors (Historical)
            </h3>
            <p className="text-muted leading-relaxed">
              Iitaro Kono, Tokugoro Ito, R. Fukuda, Daisuke Sakai, Eitaro Suzuki,
              Masataro Shibata, Hideo Hama, Hiroshi Kurosaka, Yasuyuki Kumagai,
              Isamu &ldquo;Sam&rdquo; Furuta, Shuzo &ldquo;Chris&rdquo; Kato, Fred
              Sato, and Kenji Yamada.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl mb-4">Associated Regional Dojos</h3>
            <ul className="text-muted space-y-1">
              <li>Tacoma (1917)</li>
              <li>Fife (1923)</li>
              <li>Eatonville (1938)</li>
              <li>South Park (1924)</li>
              <li>White River (1927)</li>
              <li>Green Lake (1932)</li>
              <li>Bainbridge Island (1932)</li>
              <li>Yakima Valley (1935)</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* SECTION 5 — Training today CTA (primary, fullBleed) */}
      <Section background="primary" fullBleed>
        <div className="text-center">
          <h2 className="font-display text-3xl mb-4">Train With Us Today</h2>
          <p className="text-[#FAF6F1]/75 leading-relaxed max-w-xl mx-auto mb-8">
            Seattle Dojo offers classes six days a week for juniors and adults of
            all experience levels. Visitors are always welcome.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/schedule"
              className="inline-block border border-[#FAF6F1]/50 text-[#FAF6F1] text-sm font-medium px-6 py-3 rounded hover:bg-[#FAF6F1]/10 transition-colors"
            >
              View Schedule
            </a>
            <a
              href="/getting-started"
              className="inline-block bg-accent text-white text-sm font-medium px-6 py-3 rounded hover:bg-accent-light transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

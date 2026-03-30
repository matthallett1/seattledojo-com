import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { IMAGES } from '../../../public/images/manifest';

export const metadata = {
  title: 'Annual Tournament',
  description:
    'Seattle Dojo Annual Judo Tournament and Kata Championships — held each year since 1953. Next event: May 3, 2025 at Boys & Girls Club of Bellevue.',
};

export default function TournamentPage() {
  return (
    <>
      {/* Page hero — dark */}
      <section className="relative bg-primary min-h-[300px] flex items-end p-10 md:p-16">
        <Image
          {...IMAGES.studentsAction2}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/90" />
        <div className="relative z-10 max-w-2xl">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
            Annual Event &middot; Since 1953
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight text-[#FAF6F1]">
            Seattle Dojo Annual Tournament
          </h1>
        </div>
      </section>

      {/* 2025 event details */}
      <Section background="default">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left — event card */}
          <div className="bg-surface border border-border rounded-xl p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
              Upcoming Event
            </p>
            <h2 className="font-display text-2xl mb-6">
              2025 Annual Judo Tournament &amp; Kata Championships
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                  Date
                </p>
                <p className="font-medium">Saturday, May 3, 2025</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                  Location
                </p>
                <p className="font-medium">
                  Boys &amp; Girls Club of Bellevue
                  <br />
                  Hidden Valley Sport Park
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                  Registration
                </p>
                <a
                  href="https://bit.ly/2025SDtournament"
                  className="text-accent hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  bit.ly/2025SDtournament
                </a>
              </div>
            </div>
          </div>

          {/* Right — thank-you message */}
          <div>
            <h3 className="font-display text-xl mb-4">
              Thank You to Our Community
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              The 2025 Seattle Dojo Annual Judo Tournament concluded
              successfully. Our deep gratitude to all participants, volunteers,
              and the Northwest Judo community for their support with setup,
              technical operations, medical services, officiating, coaching, and
              event execution.
            </p>
            <p className="text-muted leading-relaxed">
              Thank you to the Northwest Judo Family for attending, competing,
              officiating, managing technical tables, and providing lunch items.
            </p>
          </div>
        </div>
      </Section>

      {/* Tournament history */}
      <Section background="surface" fullBleed>
        <h2 className="font-display text-2xl mb-4">A Tournament Since 1953</h2>
        <p className="text-muted leading-relaxed mb-4">
          Seattle Dojo&apos;s annual tournament has run without interruption
          since 1953 — the first post-war tournament, and the first Pacific
          Northwest tournament in which women competed. Three women came from
          Portland, Oregon, and two from Vancouver, British Columbia.
        </p>
        <p className="text-muted leading-relaxed">
          The tournament tradition stretches back further still: Seattle Dojo
          organized its inaugural tournament in 1903 and sponsored competitions
          from 1907 through 1941 before the upheaval of World War II.
        </p>
      </Section>

      {/* Contact CTA */}
      <Section background="primary" fullBleed>
        <h2 className="font-display text-2xl mb-4">
          Questions About the Tournament?
        </h2>
        <p className="text-[#FAF6F1]/80 leading-relaxed mb-6">
          Contact us at SeattleDojoJudo@gmail.com or (206) 324-7080.
        </p>
        <a
          href="/contact"
          className="inline-block bg-accent text-[#FAF6F1] px-6 py-3 rounded-md text-sm font-medium hover:bg-accent-light transition-colors"
        >
          Contact Seattle Dojo
        </a>
      </Section>
    </>
  );
}

import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { IMAGES } from '@/public/images/manifest';

export default function Home() {
  return (
    <>
      {/* Section 1 — Hero (intentionally not using Section component — needs full-viewport fill Image) */}
      <section className="relative bg-primary min-h-[520px] flex items-end p-10 md:p-16">
        <Image
          src={IMAGES.hero.src}
          alt={IMAGES.hero.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/90" />
        <div className="relative z-10 max-w-2xl">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
            Est. Early 1900s &middot; Seattle, Washington
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.08] text-[#FAF6F1] mb-6">
            North America&apos;s First Judo Dojo
          </h1>
          <p className="text-base md:text-lg text-[#FAF6F1]/75 max-w-xl leading-relaxed mb-8">
            Training six days a week in Seattle&apos;s International District.
            From beginners to competitors, kids to adults. A living tradition
            since the earliest days of American judo.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/getting-started"
              className="inline-block bg-accent text-[#FAF6F1] text-sm font-medium px-6 py-3 rounded hover:bg-accent-light transition-colors"
            >
              Get Started
            </a>
            <a
              href="/schedule"
              className="inline-block border border-[#FAF6F1]/40 text-[#FAF6F1] text-sm font-medium px-6 py-3 rounded hover:bg-[#FAF6F1]/10 transition-colors"
            >
              View Schedule
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 — History */}
      <Section>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              {...IMAGES.historySection}
              fill
              className="object-cover"
              alt={IMAGES.historySection.alt}
            />
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
              A Place with Living History
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Seattle Dojo stands as the oldest judo facility in the United
              States, established in the early 1900s. Operating from the same
              International District location since the 1930s, the building was
              constructed by first-generation Japanese Americans and designed by
              architect Kichio Allen Arai in 1934.
            </p>
            <blockquote className="font-display italic text-lg md:text-xl border-l-[3px] border-accent pl-6 my-8 leading-relaxed">
              The founder of judo, Professor Jigoro Kano, visited this dojo in
              1936 and 1938.
            </blockquote>
            <p className="text-muted leading-relaxed mb-6">
              After the upheaval of World War II and the internment of the
              Japanese American community, the dojo reopened January 1, 1947,
              and has never stopped training. The annual tournament, held every
              year since 1953, continues to draw competitors from across the
              Pacific Northwest.
            </p>
            <a
              href="/about"
              className="text-accent underline-offset-4 hover:underline text-sm font-medium"
            >
              Read the Full History
            </a>
          </div>
        </div>
      </Section>

      {/* Section 3 — Kids Classes */}
      <Section background="surface" fullBleed>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
              Judo for Young Judoka
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Our youth program teaches throwing techniques, groundwork, and
              ukemi (safe falling) in a fun, structured environment. Students
              develop coordination, respect, self-confidence, and community
              through games-based teaching and monthly practice tournaments.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="text-sm text-muted flex items-center gap-2">
                <span className="text-accent font-medium">&#10003;</span>
                Monthly practice tournaments
              </li>
              <li className="text-sm text-muted flex items-center gap-2">
                <span className="text-accent font-medium">&#10003;</span>
                Colored belt recognition
              </li>
              <li className="text-sm text-muted flex items-center gap-2">
                <span className="text-accent font-medium">&#10003;</span>
                Ages 5&ndash;16 welcome
              </li>
            </ul>
            <a
              href="/for-kids"
              className="inline-block bg-primary text-[#FAF6F1] text-sm font-medium px-6 py-3 rounded hover:bg-primary-light transition-colors"
            >
              Learn About Kids Classes
            </a>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              {...IMAGES.kidsActivities}
              fill
              className="object-cover"
              alt={IMAGES.kidsActivities.alt}
            />
          </div>
        </div>
      </Section>

      {/* Section 4 — Schedule Preview */}
      <Section>
        <h2 className="font-display text-3xl md:text-4xl mb-8">
          Weekly Schedule
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left text-xs font-semibold tracking-wider uppercase text-muted py-2 px-4">
                  Day
                </th>
                <th className="text-left text-xs font-semibold tracking-wider uppercase text-muted py-2 px-4">
                  Class
                </th>
                <th className="text-left text-xs font-semibold tracking-wider uppercase text-muted py-2 px-4">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { day: 'Monday', cls: 'Juniors (ages 5\u201316)', time: '6:30 \u2013 8:00 PM' },
                { day: 'Monday', cls: 'Seniors, All Levels (16+)', time: '8:00 \u2013 9:30 PM' },
                { day: 'Tuesday', cls: 'Fundamentals (16+)', time: '8:00 \u2013 9:30 PM' },
                { day: 'Wednesday', cls: 'Seniors, Advanced (16+)', time: '8:00 \u2013 9:30 PM' },
                { day: 'Thursday', cls: 'Juniors (ages 5\u201316)', time: '6:30 \u2013 8:00 PM' },
                { day: 'Thursday', cls: 'Seniors, All Levels (16+)', time: '8:00 \u2013 9:30 PM' },
                { day: 'Saturday', cls: 'Seniors, Advanced (16+)', time: '10:00 AM \u2013 12:00 PM' },
                { day: 'Sunday', cls: 'Kata (4kyu+, All Ages)', time: '10:00 AM \u2013 12:00 PM' },
              ].map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-border hover:bg-surface transition-colors"
                >
                  <td className="py-3 px-4 tabular-nums">{row.day}</td>
                  <td className="py-3 px-4">{row.cls}</td>
                  <td className="py-3 px-4 tabular-nums">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted italic">
          Wednesday and Saturday are supplemental training only. Contact Sensei
          Brian Toth if interested.
        </p>
        <div className="mt-8">
          <a
            href="/schedule"
            className="inline-block border border-border text-foreground text-sm font-medium px-6 py-3 rounded hover:bg-surface transition-colors"
          >
            Full Schedule &amp; Details
          </a>
        </div>
      </Section>

      {/* Section 5 — Contact CTA */}
      <Section background="primary" fullBleed>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Visit Seattle Dojo
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-accent mb-1">
                  Address
                </p>
                <p className="text-[#FAF6F1]">
                  1510 S. Washington St., Seattle, WA 98144
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-accent mb-1">
                  Phone
                </p>
                <p className="text-[#FAF6F1]">
                  Dojo: (206) 324-7080 | Mobile: (206) 763-9802
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-accent mb-1">
                  Email
                </p>
                <p className="text-[#FAF6F1]">SeattleDojoJudo@gmail.com</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-accent mb-1">
                  Hours
                </p>
                <p className="text-[#FAF6F1]">
                  See schedule for best times to visit
                </p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block border border-[#FAF6F1]/40 text-[#FAF6F1] text-sm font-medium px-6 py-3 rounded hover:bg-[#FAF6F1]/10 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
          <div className="bg-[#FAF6F1]/10 rounded-lg aspect-[4/3] flex items-center justify-center text-[#FAF6F1]/40 text-sm">
            [ Google Maps embed ]
          </div>
        </div>
      </Section>
    </>
  );
}

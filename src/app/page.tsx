import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary min-h-[520px] flex items-end p-10 md:p-16">
        <Image
          src="/images/dojo-interior-3.jpg"
          alt="Interior of Seattle Dojo showing the tatami mat training area"
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
          <p className="text-base md:text-lg text-[#FAF6F1]/75 max-w-xl leading-relaxed">
            Training six days a week in Seattle&apos;s International District.
            From beginners to competitors, kids to adults. A living tradition
            since the earliest days of American judo.
          </p>
        </div>
      </section>

      {/* Editorial Section — History */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="bg-surface border border-border rounded-lg aspect-[4/3] flex items-center justify-center text-muted text-sm">
          [ Dojo interior photograph ]
        </div>
        <div>
          <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
            A Place with Living History
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Operating from the same International District building since the
            1930s, Seattle Dojo has trained generations of judoka in the art of
            the gentle way. The current building was designed by architect Kichio
            Allen Arai in 1934.
          </p>
          <blockquote className="font-display italic text-lg md:text-xl border-l-[3px] border-accent pl-6 my-8 leading-relaxed">
            Jigoro Kano, the founder of judo himself, visited this dojo in 1936
            and 1938.
          </blockquote>
          <p className="text-muted leading-relaxed">
            After surviving the upheaval of WWII and the internment of the
            Japanese American community, the dojo reopened in 1948 and has never
            stopped.
          </p>
        </div>
      </section>

      {/* Classes Section */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
              Judo for Young Judoka
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Our youth program teaches the fundamentals of throwing, groundwork,
              and ukemi in a fun, structured environment. Students develop
              coordination, discipline, and community through games-based
              teaching and monthly practice tournaments.
            </p>
            <a
              href="/for-kids"
              className="inline-block bg-primary text-[#FAF6F1] text-sm font-medium px-6 py-3 rounded hover:bg-primary-light transition-colors"
            >
              Learn About Kids Classes
            </a>
          </div>
          <div className="order-1 md:order-2 bg-background border border-border rounded-lg aspect-[4/3] flex items-center justify-center text-muted text-sm">
            [ Kids class in action ]
          </div>
        </div>
      </section>

      {/* Schedule Preview */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <h2 className="font-display text-3xl md:text-4xl mb-8">
          Weekly Schedule
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left text-xs font-semibold tracking-wider uppercase text-muted py-2 px-4">Day</th>
                <th className="text-left text-xs font-semibold tracking-wider uppercase text-muted py-2 px-4">Class</th>
                <th className="text-left text-xs font-semibold tracking-wider uppercase text-muted py-2 px-4">Time</th>
              </tr>
            </thead>
            <tbody>
              {[
                { day: "Monday", cls: "Juniors", time: "6:30 \u2013 8:00 PM" },
                { day: "Monday", cls: "Seniors (All Levels)", time: "8:00 \u2013 9:30 PM" },
                { day: "Tuesday", cls: "Fundamentals (16+)", time: "8:00 \u2013 9:30 PM" },
                { day: "Wednesday", cls: "Seniors Advanced (16+)", time: "8:00 \u2013 9:30 PM" },
                { day: "Thursday", cls: "Juniors", time: "6:30 \u2013 8:00 PM" },
                { day: "Thursday", cls: "Seniors (All Levels)", time: "8:00 \u2013 9:30 PM" },
                { day: "Saturday", cls: "Seniors Advanced (16+)", time: "10:00 AM \u2013 12:00 PM" },
                { day: "Sunday", cls: "Kata (4kyu+, All Ages)", time: "10:00 AM \u2013 12:00 PM" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-border hover:bg-surface transition-colors">
                  <td className="py-3 px-4 tabular-nums">{row.day}</td>
                  <td className="py-3 px-4">{row.cls}</td>
                  <td className="py-3 px-4 tabular-nums">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <a
            href="/schedule"
            className="inline-block border border-border text-foreground text-sm font-medium px-6 py-3 rounded hover:bg-surface transition-colors"
          >
            Full Schedule &amp; Calendar
          </a>
        </div>
      </section>

      {/* Contact / Visit CTA */}
      <section className="bg-primary text-[#FAF6F1] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Visit Seattle Dojo
            </h2>
            <div className="space-y-4 text-[#FAF6F1]/70">
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-accent mb-1">Address</p>
                <p className="text-[#FAF6F1]">1510 S. Washington St.<br />Seattle, WA 98144</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-accent mb-1">Phone</p>
                <p className="text-[#FAF6F1]">(206) 324-7080</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-accent mb-1">Email</p>
                <p className="text-[#FAF6F1]">info@SeattleDojo.com</p>
              </div>
            </div>
          </div>
          <div className="bg-[#FAF6F1]/10 rounded-lg aspect-[4/3] flex items-center justify-center text-[#FAF6F1]/40 text-sm">
            [ Google Maps embed ]
          </div>
        </div>
      </section>

    </>
  );
}

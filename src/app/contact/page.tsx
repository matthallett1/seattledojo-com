import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { IMAGES } from '../../../public/images/manifest';

export const metadata = {
  title: 'Contact',
  description:
    'Contact Seattle Dojo — 1510 S. Washington St., Seattle WA 98144. Phone: (206) 324-7080. Email: SeattleDojoJudo@gmail.com.',
};

export default function ContactPage() {
  return (
    <>
      {/* Page header — dark hero */}
      <section className="relative bg-primary min-h-[260px] flex items-end p-10 md:p-16">
        <Image
          {...IMAGES.exteriorEvening}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/90" />
        <div className="relative z-10 max-w-2xl">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight text-[#FAF6F1]">
            Contact Seattle Dojo
          </h1>
        </div>
      </section>

      {/* Contact info + map */}
      <Section background="default">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left — contact info */}
          <div>
            <div className="mb-6 last:mb-0">
              <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">
                Address
              </p>
              <p className="text-foreground">
                1510 S. Washington St.
                <br />
                Seattle, WA 98144
              </p>
            </div>

            <div className="mb-6 last:mb-0">
              <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">
                Phone
              </p>
              <p className="text-foreground">
                Dojo Office / Voicemail: (206) 324-7080
                <br />
                Mobile (Alan Yamada): (206) 763-9802
              </p>
            </div>

            <div className="mb-6 last:mb-0">
              <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">
                Email
              </p>
              <p>
                <a
                  href="mailto:SeattleDojoJudo@gmail.com"
                  className="text-accent hover:underline"
                >
                  SeattleDojoJudo@gmail.com
                </a>
              </p>
            </div>

            <div className="mb-6 last:mb-0">
              <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">
                Hours
              </p>
              <p className="text-foreground">
                Please see the schedule for best times to visit.
              </p>
              <a
                href="/schedule"
                className="text-accent text-sm hover:underline mt-1 inline-block"
              >
                View Schedule &rarr;
              </a>
            </div>
          </div>

          {/* Right — Google Maps embed */}
          <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://maps.google.com/maps?q=1510+S+Washington+St+Seattle+WA+98144&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Seattle Dojo location map"
            />
          </div>
        </div>
      </Section>

      {/* Contact form */}
      <Section background="surface" fullBleed>
        <h2 className="font-display text-2xl mb-6">Send a Message</h2>
        <p className="text-muted mb-8">
          Have a question about classes, membership, or the dojo? Send us a
          message and we&apos;ll get back to you.
        </p>

        <form
          action="mailto:SeattleDojoJudo@gmail.com"
          method="get"
          className="max-w-lg space-y-6"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border border-border rounded-md px-4 py-2.5 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border border-border rounded-md px-4 py-2.5 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
              placeholder="your@email.com"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="border border-border rounded-md px-4 py-2.5 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 resize-y"
              placeholder="Your question or message..."
            />
          </div>

          <button
            type="submit"
            className="bg-accent text-[#FAF6F1] px-6 py-3 rounded-md text-sm font-medium hover:bg-accent-light transition-colors"
          >
            Send Message
          </button>
        </form>

        <p className="text-xs text-muted mt-2">
          This will open your email client. You can also email us directly at
          SeattleDojoJudo@gmail.com.
        </p>
      </Section>

      {/* Directions */}
      <Section background="default">
        <h2 className="font-display text-2xl mb-6">Directions</h2>
        <p className="text-muted leading-relaxed">
          The dojo is located 1 block south of Yesler Way and 2 blocks north of
          S. Jackson St, between 14th Ave S and 16th Ave S.
        </p>

        <h3 className="font-semibold text-sm uppercase tracking-wider text-accent mb-2 mt-6">
          From the East
        </h3>
        <p className="text-muted leading-relaxed">
          Take the I-90 tunnel exit, follow Rainier Ave S, turn onto 14th Ave S,
          then right onto S. Washington St. Look for the off-white building on
          the left.
        </p>

        <h3 className="font-semibold text-sm uppercase tracking-wider text-accent mb-2 mt-6">
          From the South
        </h3>
        <p className="text-muted leading-relaxed">
          Via I-5 Dearborn Exit #164, through S. Dearborn St and Rainier Ave S,
          turning onto 14th Ave S, then S. Washington St.
        </p>

        <h3 className="font-semibold text-sm uppercase tracking-wider text-accent mb-2 mt-6">
          From the North
        </h3>
        <p className="text-muted leading-relaxed">
          Via James Street Exit on I-5, follow signs to Yesler Way, then turn
          onto 16th Ave S and S. Washington St to find the dojo.
        </p>
      </Section>
    </>
  );
}

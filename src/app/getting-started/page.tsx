import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Getting Started',
  description: 'New to judo? Here is how to join Seattle Dojo \u2014 six simple steps from your first visit to stepping onto the mat.',
};

const steps = [
  {
    number: 1,
    title: 'Drop by to observe a class',
    description:
      'Visit during regular practice sessions to see if judo interests you. Junior classes run 6:30\u20138:00 PM on Monday and Thursday. Adult classes run 8:00\u20139:30 PM. Instructors and members are happy to answer questions.',
  },
  {
    number: 2,
    title: 'Register for a dojo membership',
    description:
      'A one-time initiation fee of $40 is required. This fee never expires and extends to all family members who join later. A simple form takes a few minutes to complete at the dojo.',
  },
  {
    number: 3,
    title: 'Register for a USJF membership',
    description:
      'All members must have a current USJF (United States Judo Federation) membership to practice. The annual fee is $70. The dojo will help you complete the application on your first visit.',
  },
  {
    number: 4,
    title: 'Purchase a uniform (judogi)',
    description:
      'A judo uniform is required before your first practice session. The dojo sells uniforms in all sizes, or you may purchase one locally or online. It must be a judo-specific uniform \u2014 not a karate or taekwondo gi.',
  },
  {
    number: 5,
    title: 'Submit monthly dues',
    description:
      'Monthly dues are $40 for adults and $30 for juniors, due at the first practice session of each month. You may pay month-to-month or for multiple months in advance.',
  },
  {
    number: 6,
    title: 'Step onto the mat',
    description:
      'The entire registration process takes approximately 15 minutes including uniform fitting. Arrive 15 minutes early \u2014 6:15 PM for juniors, 7:45 PM for adults \u2014 to accommodate paperwork.',
  },
];

export default function GettingStartedPage() {
  return (
    <>
      {/* Section 1 — Page header */}
      <Section>
        <h1 className="font-display text-4xl mb-3">Getting Started</h1>
        <p className="text-lg text-muted max-w-2xl leading-relaxed">
          Considering giving judo a try? Here is what the process typically looks like \u2014 from your first visit to stepping onto the mat.
        </p>
      </Section>

      {/* Section 2 — Six steps */}
      <Section>
        {steps.map((step) => (
          <div key={step.number} className="flex gap-6 items-start mb-10 last:mb-0">
            <div className="shrink-0 w-10 h-10 rounded-full bg-accent text-[#FAF6F1] flex items-center justify-center font-bold text-sm">
              {step.number}
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2">{step.title}</h3>
              <p className="text-muted leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </Section>

      {/* Section 3 — Payment summary */}
      <Section background="surface" fullBleed>
        <h2 className="font-display text-2xl mb-6">Payment Summary</h2>
        <div className="overflow-x-auto max-w-lg">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-background border-b border-border">
                <th className="text-left text-xs font-semibold tracking-wider uppercase text-muted py-3 px-4">
                  Item
                </th>
                <th className="text-left text-xs font-semibold tracking-wider uppercase text-muted py-3 px-4">
                  Amount
                </th>
                <th className="text-left text-xs font-semibold tracking-wider uppercase text-muted py-3 px-4">
                  When
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border bg-background">
                <td className="py-3 px-4">Dojo Initiation Fee</td>
                <td className="py-3 px-4 tabular-nums font-medium">$40 (one-time)</td>
                <td className="py-3 px-4 text-muted">First visit</td>
              </tr>
              <tr className="border-b border-border bg-surface">
                <td className="py-3 px-4">USJF Annual Membership</td>
                <td className="py-3 px-4 tabular-nums font-medium">$70/year</td>
                <td className="py-3 px-4 text-muted">First visit</td>
              </tr>
              <tr className="border-b border-border bg-background">
                <td className="py-3 px-4">Judogi (uniform)</td>
                <td className="py-3 px-4 tabular-nums font-medium">Varies</td>
                <td className="py-3 px-4 text-muted">First visit</td>
              </tr>
              <tr className="border-b border-border bg-surface">
                <td className="py-3 px-4">Monthly Dues \u2014 Adults</td>
                <td className="py-3 px-4 tabular-nums font-medium">$40/month</td>
                <td className="py-3 px-4 text-muted">1st practice each month</td>
              </tr>
              <tr className="bg-background">
                <td className="py-3 px-4">Monthly Dues \u2014 Juniors</td>
                <td className="py-3 px-4 tabular-nums font-medium">$30/month</td>
                <td className="py-3 px-4 text-muted">1st practice each month</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted italic mt-4">
          All fees paid by cash or check at the dojo. Two separate checks helpful: one to Seattle Dojo, one to USJF.
        </p>
      </Section>

      {/* Section 4 — Questions CTA */}
      <Section background="primary" fullBleed>
        <div className="text-center">
          <h2 className="font-display text-3xl mb-4">Questions?</h2>
          <p className="text-[#FAF6F1]/75 max-w-xl mx-auto leading-relaxed mb-8">
            Reach us at the dojo, by email at SeattleDojoJudo@gmail.com, or by phone at (206) 324-7080.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-accent text-[#FAF6F1] text-sm font-medium px-6 py-3 rounded hover:bg-accent-light transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/schedule"
              className="inline-block border border-[#FAF6F1]/40 text-[#FAF6F1] text-sm font-medium px-6 py-3 rounded hover:border-[#FAF6F1]/70 transition-colors"
            >
              View Schedule
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

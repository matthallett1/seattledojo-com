import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Membership',
  description: 'Seattle Dojo membership \u2014 $40 initiation fee, $40/month for adults, $30/month for juniors. Cash or check. USJF membership required.',
};

export default function MembershipPage() {
  return (
    <>
      {/* Section 1 — Page header */}
      <Section>
        <h1 className="font-display text-4xl mb-3">Membership</h1>
        <p className="text-lg text-muted max-w-2xl leading-relaxed">
          Seattle Dojo welcomes new members year-round. Visitors are always welcome to observe a class before joining.
        </p>
      </Section>

      {/* Section 2 — Pricing table */}
      <Section background="surface" fullBleed>
        <h2 className="font-display text-2xl mb-6">Membership Costs</h2>
        <div className="overflow-x-auto max-w-lg">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-background border-b border-border">
                <th className="text-left text-xs font-semibold tracking-wider uppercase text-muted py-3 px-4">
                  Fee
                </th>
                <th className="text-left text-xs font-semibold tracking-wider uppercase text-muted py-3 px-4">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border bg-background">
                <td className="py-3 px-4">Initiation Fee</td>
                <td className="py-3 px-4 tabular-nums font-medium">$40</td>
              </tr>
              <tr className="border-b border-border bg-surface">
                <td className="py-3 px-4">Monthly Dues \u2014 Adults</td>
                <td className="py-3 px-4 tabular-nums font-medium">$40 / month</td>
              </tr>
              <tr className="border-b border-border bg-background">
                <td className="py-3 px-4">Monthly Dues \u2014 Juniors</td>
                <td className="py-3 px-4 tabular-nums font-medium">$30 / month</td>
              </tr>
              <tr className="bg-surface">
                <td className="py-3 px-4">USJF Annual Membership</td>
                <td className="py-3 px-4 tabular-nums font-medium">$70 / year</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted italic mt-4">
          Cash or check only. The dojo can assist with USJF membership applications.
        </p>
      </Section>

      {/* Section 3 — Requirements */}
      <Section>
        <h2 className="font-display text-2xl mb-6">What You Need</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-surface border border-border rounded-lg p-6">
            <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">
              Requirement
            </p>
            <h3 className="font-semibold text-base mb-3">USJF Membership</h3>
            <p className="text-muted text-sm leading-relaxed">
              A current United States Judo Federation membership is required to practice. Annual fee: $70. The dojo will help you apply on your first visit.
            </p>
          </div>
          <div className="bg-surface border border-border rounded-lg p-6">
            <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">
              Equipment
            </p>
            <h3 className="font-semibold text-base mb-3">Uniform (Judogi)</h3>
            <p className="text-muted text-sm leading-relaxed">
              A judo uniform is required before your first practice session. The dojo sells uniforms in all sizes, or you may purchase online. Must be a judo-specific uniform.
            </p>
          </div>
          <div className="bg-surface border border-border rounded-lg p-6">
            <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">
              Payment
            </p>
            <h3 className="font-semibold text-base mb-3">Payment Method</h3>
            <p className="text-muted text-sm leading-relaxed">
              All fees are paid by cash or check at the dojo. Two separate checks are helpful \u2014 one to Seattle Dojo, one to USJF.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 4 — Visitors note + CTA */}
      <Section background="primary" fullBleed>
        <div className="text-center">
          <h2 className="font-display text-3xl mb-4">Ready to Start?</h2>
          <p className="text-[#FAF6F1]/75 max-w-xl mx-auto leading-relaxed mb-8">
            Visitors are always welcome. Drop by during any practice session to observe and meet the instructors. No appointment needed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/schedule"
              className="inline-block bg-accent text-[#FAF6F1] text-sm font-medium px-6 py-3 rounded hover:bg-accent-light transition-colors"
            >
              View Schedule
            </a>
            <a
              href="/getting-started"
              className="inline-block border border-[#FAF6F1]/40 text-[#FAF6F1] text-sm font-medium px-6 py-3 rounded hover:border-[#FAF6F1]/70 transition-colors"
            >
              Getting Started Guide
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Schedule',
  description: 'Seattle Dojo class schedule — judo classes Monday through Sunday for juniors (ages 5\u201316) and adults (16+).',
};

type ClassRow = {
  className: string;
  time: string;
};

type DaySchedule = {
  day: string;
  classes: ClassRow[];
  note?: string;
};

const schedule: DaySchedule[] = [
  {
    day: 'Monday',
    classes: [
      { className: 'Juniors (ages 5\u201316)', time: '6:30 pm \u2013 8:00 pm' },
      { className: 'Seniors, all levels (16+)', time: '8:00 pm \u2013 9:30 pm' },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      { className: 'Fundamentals (16+)', time: '8:00 pm \u2013 9:30 pm' },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      { className: 'Seniors, advanced (16+)', time: '8:00 pm \u2013 9:30 pm' },
    ],
    note: 'Supplemental training only. Please contact Sensei Brian Toth if interested.',
  },
  {
    day: 'Thursday',
    classes: [
      { className: 'Juniors (ages 5\u201316)', time: '6:30 pm \u2013 8:00 pm' },
      { className: 'Seniors, all levels (16+)', time: '8:00 pm \u2013 9:30 pm' },
    ],
  },
  {
    day: 'Saturday',
    classes: [
      { className: 'Seniors, advanced (16+)', time: '10:00 am \u2013 12:00 pm' },
    ],
    note: 'Supplemental training only. Please contact Sensei Brian Toth if interested.',
  },
  {
    day: 'Sunday',
    classes: [
      { className: 'Kata, 4kyu and above (all ages)', time: '10:00 am \u2013 12:00 pm' },
    ],
  },
];

export default function SchedulePage() {
  return (
    <>
      {/* Section 1 — Page header */}
      <Section>
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
          Weekly Classes
        </p>
        <h1 className="font-display text-4xl mb-3">Class Schedule</h1>
        <p className="text-lg text-muted max-w-2xl leading-relaxed">
          Classes are held six days a week \u2014 Monday through Thursday, Saturday, and Sunday. All experience levels welcome.
        </p>
      </Section>

      {/* Section 2 — Full schedule by day */}
      <Section background="surface" fullBleed>
        {schedule.map((day) => (
          <div key={day.day} className="mb-8 last:mb-0">
            <h2 className="font-display text-xl mb-3 text-foreground">{day.day}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-background border-b border-border">
                    <th className="text-left text-xs font-semibold tracking-wider uppercase text-muted py-3 px-4">
                      Class
                    </th>
                    <th className="text-left text-xs font-semibold tracking-wider uppercase text-muted py-3 px-4">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {day.classes.map((row, i) => (
                    <tr key={i} className="border-b border-border last:border-0 hover:bg-background transition-colors">
                      <td className="py-3 px-4">{row.className}</td>
                      <td className="py-3 px-4 tabular-nums">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {day.note && (
              <p className="text-sm text-muted italic mt-2">{day.note}</p>
            )}
          </div>
        ))}

        <div className="bg-background border border-border rounded-lg p-6 mt-8">
          <p className="text-muted leading-relaxed">
            Seniors who have time are encouraged to attend the junior session to help with the kids. Juniors are also welcome to stay and work out during the senior session.
          </p>
        </div>
      </Section>

      {/* Section 3 — Visit CTA */}
      <Section background="primary" fullBleed>
        <div className="text-center">
          <h2 className="font-display text-3xl mb-4">Come Visit</h2>
          <p className="text-[#FAF6F1]/75 max-w-xl mx-auto leading-relaxed mb-8">
            Visitors are welcome to observe any practice session. Arrive 15 minutes early to meet the instructors and ask questions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/getting-started"
              className="inline-block bg-accent text-[#FAF6F1] text-sm font-medium px-6 py-3 rounded hover:bg-accent-light transition-colors"
            >
              Getting Started
            </a>
            <a
              href="/contact"
              className="inline-block border border-[#FAF6F1]/40 text-[#FAF6F1] text-sm font-medium px-6 py-3 rounded hover:border-[#FAF6F1]/70 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

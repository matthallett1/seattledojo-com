import Image from 'next/image';
import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { IMAGES } from '../../../public/images/manifest';

export const metadata: Metadata = {
  title: 'Instructors',
  description: 'Meet the 22 instructors at Seattle Dojo, teaching judo for all ages and experience levels in Seattle.',
};

const instructors = [
  'Alan Yamada',
  'Karen Nagai',
  'David Fukuhara',
  'Pepper Uno',
  'Warren Higa',
  'Rob Takamiya',
  'Brian Toth',
  'Beau Calman',
  'Karol Palacios',
  'Danielle Dang',
  'Bruce Kang',
  'Sophal Keo',
  'Nate Swanson',
  'Arnold Toriumi',
  'Chanae Evans',
  'Leslie Mizuki',
  'Isao Tarumi',
  'Patrick Lo',
  'Alan Lo',
  'Paola Genao',
  'Johnny Valdez',
  'Nathan Belo',
];

export default function InstructorsPage() {
  return (
    <>
      {/* Section 1 — Page hero */}
      <section className="relative bg-primary min-h-[280px] flex items-end p-10 md:p-16">
        <Image
          src={IMAGES.studentsAction1.src}
          alt={IMAGES.studentsAction1.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/90" />
        <div className="relative z-10 max-w-2xl">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
            Our Teaching Staff
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.08] text-[#FAF6F1]">
            Instructors
          </h1>
        </div>
      </section>

      {/* Section 2 — Featured instructor */}
      <Section>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[3/2] rounded-lg overflow-hidden">
            <Image
              src={IMAGES.alanYamada.src}
              alt={IMAGES.alanYamada.alt}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-2">
              Head Instructor
            </p>
            <h2 className="font-display text-3xl mb-3">Alan Yamada</h2>
            <p className="text-muted leading-relaxed">
              Alan Yamada leads Seattle Dojo as head instructor and handles operations and administration. He can be reached directly at (206) 763-9802.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 3 — Full instructor roster */}
      <Section background="surface" fullBleed>
        <h2 className="font-display text-2xl mb-2">Teaching Staff</h2>
        <p className="text-muted text-sm mb-8">Seattle Dojo is taught by 22 dedicated instructors.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {instructors.map((name) => (
            <div
              key={name}
              className="bg-background border border-border rounded-md px-4 py-3 text-sm font-medium"
            >
              {name}
            </div>
          ))}
        </div>
      </Section>

      {/* Section 4 — Visit CTA */}
      <Section background="primary" fullBleed>
        <div className="text-center">
          <h2 className="font-display text-3xl mb-4">Train With Our Instructors</h2>
          <p className="text-[#FAF6F1]/75 max-w-xl mx-auto leading-relaxed mb-8">
            Visitors are always welcome at Seattle Dojo. Drop by during practice to meet the instructors and see if judo is right for you.
          </p>
          <a
            href="/schedule"
            className="inline-block bg-accent text-[#FAF6F1] text-sm font-medium px-6 py-3 rounded hover:bg-accent-light transition-colors"
          >
            View Schedule
          </a>
        </div>
      </Section>
    </>
  );
}

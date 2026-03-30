import { Section } from '@/components/ui/Section';

export const metadata = {
  title: 'News',
  description:
    'Latest news and announcements from Seattle Dojo — tournaments, reopenings, clinics, and community events.',
};

const posts = [
  {
    date: 'April 13, 2024',
    title: '365 Days of Judo',
    content: [
      'Seattle Dojo celebrated one year of continuous daily online training sessions during the pandemic. Members joined a commemorative gathering via Zoom.',
      'Daily 20–30 minute sessions were maintained throughout the pandemic, with formal sessions held Mondays and Thursdays. Recognition went to instructors Sensei Karen, Sensei Pepper, Sensei Sophal, Sensei Sam, Sensei Chanae, and Paul, as well as student leaders Diego, Jayden, Natalie, Owen, Mae, Erkhes, and Grayson.',
      'Additional programs launched during this period included weekly Japanese language classes, a Japanese Science Club, multilingual counting lessons, and the outdoor Crack-of-Dawn Judo Training series.',
    ],
  },
  {
    date: 'February 22, 2022',
    title: 'Seattle Dojo Reopening: Phase II',
    content: [
      'Junior classes resumed Thursday, March 3, 2022 at 6:30 PM. Adult classes followed at 8:10 PM.',
      'Safety protocols included COVID-19 vaccination requirements, mask requirements, updated membership forms, temperature checks, enhanced mat cleaning, and ventilation.',
      'Facility improvements completed: floor sanding, wood paneling repair, and interior repainting. Recognition to Sensei Pepper and Sensei David for renovation leadership.',
    ],
  },
  {
    date: 'April 5, 2018',
    title: 'Shintaro Nakano Clinic',
    content: [
      'Seattle Dojo hosted Shintaro Nakano Sensei for a two-day clinic on April 21 and 22 — an outstanding opportunity to learn from a former member of the Japanese national team.',
      'Junior session: Saturday, 10:00 am – 12:00 pm. Senior session: Sunday, 9:00 am – 1:00 pm. Entry fee: $30.',
    ],
  },
  {
    date: 'September 19, 2017',
    title: 'New Class Times',
    content: [
      'Effective Monday, October 2, 2017, class times shifted 30 minutes earlier. Juniors: 6:30–8:00 pm. Seniors: 8:00–9:30 pm.',
    ],
  },
  {
    date: 'February 6, 2017',
    title: '2017 Tournament Entry Packet',
    content: [
      'The 2017 Seattle Judo and Kata Tournament entry packet was available online for download, completion, and submission with payment.',
    ],
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Page header */}
      <Section background="default">
        <h1 className="font-display text-4xl mb-3">News &amp; Announcements</h1>
        <p className="text-muted">
          Updates from Seattle Dojo — tournaments, events, and dojo news.
        </p>
      </Section>

      {/* News posts */}
      <Section background="default">
        {posts.map((post) => (
          <article
            key={post.date}
            className="border-b border-border pb-10 mb-10 last:border-0 last:mb-0 last:pb-0"
          >
            <time className="text-xs font-medium tracking-[0.12em] uppercase text-muted mb-2 block">
              {post.date}
            </time>
            <h2 className="font-display text-2xl mb-3">{post.title}</h2>
            <div className="text-muted leading-relaxed space-y-3">
              {post.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </article>
        ))}
      </Section>
    </>
  );
}

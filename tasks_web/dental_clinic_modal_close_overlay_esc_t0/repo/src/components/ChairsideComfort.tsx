import { ShieldIcon, SparkIcon, ToothMark } from './Icons'

const BLOCKS = [
  {
    eyebrow: 'The room',
    title: 'Built for people who hate the dentist',
    body: 'Every operatory has a weighted blanket, noise-cancelling headphones and a window onto the ship canal rather than a poster about flossing. The ultrasonic scaler is the quiet model. We schedule anxious patients first thing in the morning, when the building is still empty and nobody is waiting behind you, and we agreed years ago that a raised hand stops everything, no explanation needed.',
    art: (
      <svg viewBox="0 0 320 240" className="h-auto w-full" role="img" aria-label="Illustration of an operatory with a window and a reclining chair">
        <rect width="320" height="240" rx="20" fill="#EFE6DA" />
        <rect x="28" y="28" width="150" height="112" rx="12" fill="#0B2540" opacity=".12" />
        <rect x="40" y="40" width="126" height="88" rx="8" fill="#4E7C6A" opacity=".45" />
        <path d="M40 104c22-12 40 6 60-2s44-14 66 4v16a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-18Z" fill="#0B2540" opacity=".5" />
        <rect x="196" y="46" width="96" height="150" rx="24" fill="#C2703D" opacity=".28" />
        <rect x="212" y="70" width="64" height="100" rx="18" fill="#0B2540" opacity=".35" />
        <rect x="28" y="164" width="150" height="14" rx="7" fill="#0B2540" opacity=".3" />
        <rect x="28" y="188" width="104" height="10" rx="5" fill="#C2703D" opacity=".5" />
      </svg>
    ),
    icon: <ShieldIcon className="h-6 w-6" />,
  },
  {
    eyebrow: 'The mill',
    title: 'Your crown is made in the back room',
    body: 'A digital scan replaces the impression tray, the design goes to the Primemill behind the front desk, and the block of lithium disilicate is cut, glazed and fired while you have a coffee at the bakery two doors down. One appointment, one anaesthetic, no temporary crown to lose on a weekend away. Dr. Okonkwo has milled more than four thousand units on this machine since 2016.',
    art: (
      <svg viewBox="0 0 320 240" className="h-auto w-full" role="img" aria-label="Illustration of a milling unit cutting a ceramic crown">
        <rect width="320" height="240" rx="20" fill="#0B2540" />
        <circle cx="160" cy="120" r="76" fill="#4E7C6A" opacity=".2" />
        <rect x="104" y="64" width="112" height="112" rx="18" fill="#FAF6F1" opacity=".12" />
        <path d="M160 88c14 0 22 10 22 24s-6 22-10 34-6 18-12 18-8-6-12-18-10-20-10-34 8-24 22-24Z" fill="#EFE6DA" opacity=".9" />
        <path d="M132 74v-18M188 74v-18" stroke="#C2703D" strokeWidth="6" strokeLinecap="round" />
        <rect x="88" y="188" width="144" height="12" rx="6" fill="#C2703D" opacity=".8" />
        <circle cx="248" cy="72" r="14" fill="#C2703D" opacity=".55" />
      </svg>
    ),
    icon: <ToothMark className="h-6 w-6" />,
  },
  {
    eyebrow: 'The team',
    title: 'The same two hygienists, year after year',
    body: 'Corporate practices rotate hygienists the way airlines rotate crew. Priya has been in the second chair since 2017 and Danielle since 2019, so the person cleaning your teeth remembers the crown that gave you trouble and the fact that you cannot lie flat past twenty minutes. Continuity is not a perk here; it is most of why the periodontal numbers in this practice look the way they do.',
    art: (
      <svg viewBox="0 0 320 240" className="h-auto w-full" role="img" aria-label="Illustration of two clinicians standing together">
        <rect width="320" height="240" rx="20" fill="#F4EDE3" />
        <circle cx="118" cy="88" r="30" fill="#4E7C6A" opacity=".45" />
        <circle cx="206" cy="96" r="26" fill="#C2703D" opacity=".45" />
        <path d="M62 208c6-40 26-56 56-56s50 16 56 56H62Z" fill="#0B2540" opacity=".35" />
        <path d="M158 208c6-34 22-48 48-48s42 14 48 48h-96Z" fill="#0B2540" opacity=".22" />
        <rect x="40" y="216" width="240" height="10" rx="5" fill="#0B2540" opacity=".15" />
      </svg>
    ),
    icon: <SparkIcon className="h-6 w-6" />,
  },
]

export function ChairsideComfort() {
  return (
    <section id="comfort" aria-labelledby="comfort-heading" className="bg-[#FAF6F1]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C2703D]">Inside the studio</p>
          <h2 id="comfort-heading" className="mt-3 text-3xl font-semibold tracking-tight text-[#0B2540] sm:text-4xl">
            Three things that make this practice different
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#42566A]">
            None of these are marketing lines. They are the three decisions that cost us money and that
            we make anyway, because they are the reason people who have avoided a dentist for a decade
            end up keeping their six-month recalls here.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {BLOCKS.map((block, index) => (
            <article
              key={block.title}
              className={`grid gap-10 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? 'lg:[&>figure]:order-first' : ''}`}
            >
              <div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B2540]/5 text-[#0B2540]">
                  {block.icon}
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#9A8973]">
                  {block.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#0B2540]">{block.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[#42566A]">{block.body}</p>
              </div>
              <figure className="overflow-hidden rounded-3xl border border-[#E4D8C8] bg-white p-4 shadow-sm">
                {block.art}
                <figcaption className="px-2 pb-1 pt-4 text-xs text-[#9A8973]">{block.eyebrow} — Alder &amp; Bay, Ballard Avenue</figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

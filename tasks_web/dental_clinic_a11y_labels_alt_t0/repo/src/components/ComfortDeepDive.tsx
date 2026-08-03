type Block = {
  eyebrow: string
  title: string
  body: string[]
  points: string[]
  art: JSX.Element
}

function QuietRoomArt() {
  return (
    <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ddQuiet" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eaf4f5" />
          <stop offset="100%" stopColor="#cfe6e2" />
        </linearGradient>
      </defs>
      <rect width="420" height="320" rx="28" fill="url(#ddQuiet)" />
      <g stroke="#0b2d45" strokeWidth="3" fill="none" opacity="0.35">
        <path d="M60 250c26-40 46-60 74-60s40 24 66 24 42-22 70-22" />
        <path d="M60 274c26-40 46-60 74-60s40 24 66 24 42-22 70-22" opacity="0.6" />
      </g>
      <g transform="translate(210 140)">
        <circle r="70" fill="#ffffff" opacity="0.85" />
        <path
          d="M-46 6a46 46 0 0192 0v34a12 12 0 01-12 12h-8V16a26 26 0 00-52 0v36h-8a12 12 0 01-12-12z"
          fill="#0b2d45"
        />
        <rect x="-58" y="6" width="22" height="46" rx="11" fill="#2fb99b" />
        <rect x="36" y="6" width="22" height="46" rx="11" fill="#2fb99b" />
      </g>
      <g fill="#0b2d45" opacity="0.25">
        <circle cx="86" cy="76" r="16" />
        <circle cx="126" cy="56" r="9" />
        <circle cx="342" cy="86" r="13" />
      </g>
    </svg>
  )
}

function ScannerArt() {
  return (
    <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true" focusable="false">
      <rect width="420" height="320" rx="28" fill="#0b2d45" />
      <rect x="46" y="50" width="240" height="170" rx="16" fill="#17466a" />
      <rect x="62" y="66" width="208" height="138" rx="10" fill="#0b2d45" />
      <path
        d="M166 92c14 0 21 6 29 6 11 0 18 8 18 21 0 17-8 29-11 42-4 11-6 17-12 17-6 0-8-10-11-19-2-7-4-11-7-11s-5 4-7 11c-3 9-5 19-11 19-6 0-8-6-12-17-4-13-11-25-11-42 0-13 7-21 18-21 8 0 15-6 29-6z"
        fill="#8fd3c4"
      />
      <g stroke="#2fb99b" strokeWidth="4" strokeLinecap="round">
        <path d="M62 140h208" opacity="0.7" />
      </g>
      <rect x="150" y="220" width="32" height="40" fill="#17466a" />
      <rect x="112" y="258" width="108" height="14" rx="7" fill="#17466a" />
      <g transform="translate(300 170)">
        <rect x="-16" y="-70" width="32" height="112" rx="16" fill="#f6fafb" />
        <path d="M-10-70l10-26 10 26z" fill="#2fb99b" />
        <rect x="-16" y="42" width="32" height="52" rx="10" fill="#8fd3c4" />
      </g>
    </svg>
  )
}

function ChildrensFloorArt() {
  return (
    <svg viewBox="0 0 420 320" className="h-full w-full" aria-hidden="true" focusable="false">
      <rect width="420" height="320" rx="28" fill="#fff6e6" />
      <circle cx="330" cy="80" r="54" fill="#ffd98a" />
      <g fill="#2fb99b">
        <path d="M60 250c0-56 34-92 82-92s82 36 82 92z" opacity="0.85" />
        <circle cx="142" cy="132" r="34" fill="#0b2d45" />
      </g>
      <g fill="#0b2d45">
        <rect x="248" y="182" width="112" height="68" rx="14" />
        <rect x="264" y="196" width="80" height="40" rx="8" fill="#8fd3c4" />
      </g>
      <g stroke="#0b2d45" strokeWidth="6" strokeLinecap="round" fill="none">
        <path d="M40 262h340" />
      </g>
      <g fill="#ff9c7a">
        <circle cx="96" cy="86" r="18" />
        <circle cx="140" cy="62" r="11" />
        <circle cx="182" cy="86" r="8" />
      </g>
    </svg>
  )
}

const BLOCKS: Block[] = [
  {
    eyebrow: 'For people who dread this',
    title: 'A soundproofed room, and a hand signal that actually stops us',
    body: [
      'One room at the back of the ground floor has no drill noise coming through the wall, no bright overhead light and no clock ticking on the wall. It has a weighted blanket, over-ear headphones and a chair that reclines slowly enough that you can change your mind.',
      'We agree a signal before we start — a raised left hand — and it stops everything, mid-procedure, every time. Patients test it in the first five minutes so they know it works.',
    ],
    points: [
      'Numbing gel goes on four minutes before the needle, not four seconds',
      'Appointments in the quiet room are booked at 45 minutes, never 20',
      'Nitrous oxide from $60, oral sedation from $190 with a driver home',
    ],
    art: <QuietRoomArt />,
  },
  {
    eyebrow: 'The impression trays are gone',
    title: 'A scan instead of a mouthful of putty',
    body: [
      'Crowns, aligners, night guards and retainers all start with a handheld scanner that builds the shape of your teeth on a screen beside the chair in about ninety seconds. Nothing sets in your mouth, nothing makes you gag, and nothing has to be posted anywhere.',
      'The same scan is the picture we use to explain what we found. It is easier to agree to a repair when you can see the crack from three angles at your own eye level.',
    ],
    points: [
      'Ninety seconds a jaw, no trays and no gagging',
      'The scan is emailed to you after the visit, yours to keep',
      'Fewer remakes: three in the last two years, against nineteen the two before',
    ],
    art: <ScannerArt />,
  },
  {
    eyebrow: 'Bring the kids with you',
    title: 'A separate floor so a five-year-old never sits in an adult waiting room',
    body: [
      'The first floor is the children’s floor: its own waiting area with low chairs and a book wall, a treatment room with a ceiling drawing to count, and a rule that nothing goes in a child’s mouth on the first visit unless they ask to try it.',
      'Parents can book two children back to back with one adult check-up in the same hour, which is the single most requested thing we have ever added.',
    ],
    points: [
      'First visit under six is free, and takes half an hour',
      'Two children plus one adult can be booked inside one hour',
      'Dr. Theo Marchetti has a paediatric dentistry residency and four kids of his own',
    ],
    art: <ChildrensFloorArt />,
  },
]

export function ComfortDeepDive() {
  return (
    <section id="studio" data-testid="deep-dives" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2fb99b]">
            Inside the studio
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Three things we changed because patients told us to
          </h2>
        </div>

        <div className="mt-14 space-y-20">
          {BLOCKS.map((block, index) => (
            <article
              key={block.title}
              data-testid="deep-dive"
              className={
                index % 2 === 1
                  ? 'grid items-center gap-10 lg:grid-cols-2 lg:[&>div:first-child]:order-2'
                  : 'grid items-center gap-10 lg:grid-cols-2'
              }
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2fb99b]">
                  {block.eyebrow}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold sm:text-3xl">
                  {block.title}
                </h3>
                {block.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="mt-4 leading-relaxed text-[#0b2d45]/75">
                    {paragraph}
                  </p>
                ))}
                <ul className="mt-6 space-y-3">
                  {block.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-[#0b2d45]/80">
                      <svg
                        viewBox="0 0 20 20"
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#2fb99b]"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.18" />
                        <path
                          d="M6 10.2l2.8 2.8L14 7.6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-[21/16] w-full overflow-hidden rounded-3xl border border-[#0b2d45]/10 shadow-sm">
                {block.art}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

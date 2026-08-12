function QuietRoomArt() {
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label="Illustration of the quiet room with a blanket, headphones and a dimmed lamp"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="quiet-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EDE9F8" />
          <stop offset="100%" stopColor="#F6EFEA" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" rx="24" fill="url(#quiet-bg)" />
      <rect x="44" y="150" width="230" height="94" rx="20" fill="#5B4BA8" />
      <rect x="60" y="128" width="130" height="34" rx="14" fill="#7E71C4" />
      <path d="M44 244h230" stroke="#332A56" strokeWidth="4" strokeLinecap="round" />
      <circle cx="316" cy="96" r="34" fill="#F7B23B" opacity="0.35" />
      <path
        d="M300 96a16 16 0 0 1 32 0v26a10 10 0 0 1-10 10h-2"
        fill="none"
        stroke="#332A56"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect x="290" y="112" width="14" height="24" rx="6" fill="#332A56" />
      <rect x="328" y="112" width="14" height="24" rx="6" fill="#332A56" />
      <path
        d="M74 178c22-12 44-12 66 0s44 12 66 0"
        fill="none"
        stroke="#E9E2F6"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="120" cy="96" r="24" fill="#F3B7A5" />
      <path d="M100 97a20 20 0 0 1 40 0" fill="#332A56" />
      <path
        d="M300 210h64M300 226h44"
        stroke="#332A56"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  )
}

function MillingLabArt() {
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label="Illustration of the on-site milling machine cutting a crown from a ceramic block"
      className="h-auto w-full"
    >
      <rect width="400" height="300" rx="24" fill="#F1ECE3" />
      <rect x="52" y="60" width="296" height="180" rx="20" fill="#FFFFFF" stroke="#E3DCD0" />
      <rect x="76" y="88" width="248" height="124" rx="14" fill="#EDE9F8" />
      <rect x="150" y="130" width="100" height="60" rx="10" fill="#5B4BA8" />
      <path d="M200 96v34" stroke="#332A56" strokeWidth="6" strokeLinecap="round" />
      <circle cx="200" cy="92" r="12" fill="#E4735B" />
      <path
        d="M168 190c8-14 56-14 64 0"
        fill="none"
        stroke="#FBF9F5"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {[0, 1, 2, 3].map((index) => (
        <rect
          key={index}
          x={92 + index * 16}
          y={150 + index * 8}
          width="10"
          height={40 - index * 8}
          rx="4"
          fill="#C7BEEE"
        />
      ))}
      <text x="76" y="236" fill="#6A6255" fontSize="13">
        Scan 9.10am · mill 9.40am · fitted 10.55am
      </text>
    </svg>
  )
}

function SaturdayArt() {
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label="Illustration of a parent and two children in the Saturday morning waiting area"
      className="h-auto w-full"
    >
      <rect width="400" height="300" rx="24" fill="#FDF3EE" />
      <circle cx="330" cy="70" r="42" fill="#F7B23B" opacity="0.4" />
      <rect x="40" y="196" width="320" height="64" rx="18" fill="#E4735B" opacity="0.25" />
      <g>
        <circle cx="128" cy="118" r="30" fill="#F3B7A5" />
        <path d="M102 120a26 26 0 0 1 52 0" fill="#332A56" />
        <path d="M96 196c0-30 14-46 32-46s32 16 32 46" fill="#5B4BA8" />
      </g>
      <g>
        <circle cx="206" cy="150" r="20" fill="#F3B7A5" />
        <path d="M189 151a17 17 0 0 1 34 0" fill="#8B5E3C" />
        <path d="M182 196c0-20 10-30 24-30s24 10 24 30" fill="#E4735B" />
      </g>
      <g>
        <circle cx="266" cy="158" r="17" fill="#F3B7A5" />
        <path d="M251 159a15 15 0 0 1 30 0" fill="#332A56" />
        <path d="M244 196c0-17 9-26 22-26s22 9 22 26" fill="#7E71C4" />
      </g>
      <path
        d="M40 260h320"
        stroke="#332A56"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.3"
      />
      <text x="40" y="286" fill="#6A6255" fontSize="13">
        Saturdays, 8am to 1pm · two children, one appointment slot
      </text>
    </svg>
  )
}

const BLOCKS = [
  {
    eyebrow: 'For nervous patients',
    title: 'A room with no dental noise in it',
    body: [
      'Four of our eleven chairs sit in rooms we soundproofed in 2021, because for most anxious patients it is the sound that does the damage, not the treatment. There is no drill audible from the corridor, the lamp dims to whatever you ask for, and there are over-ear headphones on the arm of the chair.',
      'You can book a talk-only appointment first: fifteen minutes, no instruments on the tray, no charge. Dr. Okonkwo will walk you through exactly what would happen and what it would cost, and you can leave without booking anything at all.',
    ],
    art: <QuietRoomArt />,
    points: ['Soundproofed since 2021', 'Free 15-minute talk-only visit', 'Stop signal agreed first'],
  },
  {
    eyebrow: 'The lab off the back corridor',
    title: 'Your crown is made while you wait',
    body: [
      'We put a milling machine in the old sterilisation room in 2019, so a crown that used to take three weeks and two appointments now takes one morning. Your tooth is scanned rather than squashed into a tray of impression putty, the ceramic block is cut in the room next door, and it goes in before you leave.',
      'It matters more than convenience: a same-day crown means no temporary cap to fall off over a weekend, and one dose of anaesthetic instead of two. Ninety-one of the hundred and four crowns we fitted last year were finished in a single visit.',
    ],
    art: <MillingLabArt />,
    points: ['One visit, not three weeks', 'No impression trays', '91 of 104 finished same day'],
  },
  {
    eyebrow: 'Saturday family mornings',
    title: 'Both children, one trip across town',
    body: [
      'Saturday mornings from eight until one are kept for families. We book siblings into back-to-back slots in the same room so a parent sits down once, and the check-up for anyone under eighteen registered with us is free.',
      'The waiting area has a low table, a box of books that get replaced when they fall apart, and a fish tank that Rufus in reception is unreasonably proud of. Nobody has ever been told off here for a child making noise.',
    ],
    art: <SaturdayArt />,
    points: ['Siblings booked back to back', 'Under-18 check-ups free', 'Open 8am to 1pm'],
  },
]

export function PracticeDeepDive() {
  return (
    <section id="practice" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8B8375]">
            Inside the practice
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#332A56]">
            Three decisions that changed how this place feels
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5A5347]">
            None of these were cheap and all three came out of the same complaint book. They are the
            reason people drive past two closer practices to get here.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {BLOCKS.map((block, index) => (
            <article
              key={block.title}
              data-testid="deep-dive-block"
              className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
                index % 2 === 1 ? 'lg:[&>figure]:order-first' : ''
              }`}
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E4735B]">
                  {block.eyebrow}
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#1C1A17]">
                  {block.title}
                </h3>
                {block.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="mt-5 text-base leading-relaxed text-[#6A6255]">
                    {paragraph}
                  </p>
                ))}
                <ul className="mt-7 flex flex-wrap gap-3">
                  {block.points.map((point) => (
                    <li
                      key={point}
                      data-testid="deep-dive-point"
                      className="rounded-full border border-[#E3DCD0] bg-[#FBF9F5] px-4 py-2 text-sm font-medium text-[#4A4438]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <figure className="rounded-3xl border border-[#EFE9E0] bg-[#FBF9F5] p-5 shadow-sm">
                {block.art}
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

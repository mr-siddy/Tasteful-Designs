function MillIllustration() {
  return (
    <svg viewBox="0 0 360 260" className="h-full w-full" role="img" aria-label="Illustration of the in-house ceramic milling workshop">
      <defs>
        <linearGradient id="mill-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F6F1E6" />
          <stop offset="100%" stopColor="#E4EDE6" />
        </linearGradient>
      </defs>
      <rect width="360" height="260" rx="24" fill="url(#mill-bg)" />
      <rect x="46" y="70" width="180" height="130" rx="14" fill="#123B36" />
      <rect x="62" y="88" width="148" height="76" rx="8" fill="#EFF4EE" />
      <path d="M96 150c8-30 20-46 40-46s32 16 40 46Z" fill="#E8A020" opacity="0.85" />
      <circle cx="136" cy="112" r="12" fill="#FBF7F0" />
      <rect x="76" y="176" width="120" height="10" rx="5" fill="#1B5049" />
      <rect x="248" y="104" width="70" height="96" rx="12" fill="#FBF7F0" stroke="#123B36" strokeWidth="2" />
      <path d="M262 128h42M262 146h42M262 164h28" stroke="#C4D6C9" strokeWidth="6" strokeLinecap="round" />
      <circle cx="283" cy="86" r="16" fill="#E8A020" />
      <path d="M276 86h14M283 79v14" stroke="#FBF7F0" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function CalmIllustration() {
  return (
    <svg viewBox="0 0 360 260" className="h-full w-full" role="img" aria-label="Illustration of the quiet chair-side comfort setup">
      <rect width="360" height="260" rx="24" fill="#123B36" />
      <circle cx="272" cy="70" r="52" fill="#1B5049" />
      <path d="M40 200c0-40 30-66 74-66h96c34 0 58 24 58 58v14H40v-6Z" fill="#EFF4EE" />
      <path d="M74 134c-16-4-26-18-26-36 0-20 14-34 34-34h22c16 0 26 12 26 28v42H74Z" fill="#F5C458" />
      <path d="M120 92c6 6 16 6 22 0" stroke="#123B36" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="118" cy="76" r="3" fill="#123B36" />
      <circle cx="146" cy="76" r="3" fill="#123B36" />
      <path d="M232 206v-58a14 14 0 0 1 14-14h30" stroke="#8A7A5C" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M60 232h240" stroke="#3C6B60" strokeWidth="8" strokeLinecap="round" />
    </svg>
  )
}

function ScanIllustration() {
  return (
    <svg viewBox="0 0 360 260" className="h-full w-full" role="img" aria-label="Illustration of a low-dose digital scan on screen">
      <rect width="360" height="260" rx="24" fill="#EFF4EE" />
      <rect x="52" y="48" width="256" height="150" rx="14" fill="#123B36" />
      <rect x="68" y="64" width="224" height="118" rx="8" fill="#0C2B27" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path
          key={i}
          transform={`translate(${88 + i * 30} 92)`}
          d="M8 0c3-2 7-2 10 0 3 2 3 6 2 10l-3 22c-1 4-2 6-4 6s-2-3-3-7c-1-3-2-5-4-5s-3 2-4 5c-1 4-1 7-3 7s-3-2-4-6L-4 10c-1-4-1-8 2-10 3-2 7-2 10 0Z"
          fill="#F5C458"
          opacity={i === 3 ? '1' : '0.45'}
        />
      ))}
      <rect x="120" y="210" width="120" height="12" rx="6" fill="#123B36" opacity="0.25" />
      <circle cx="300" cy="220" r="18" fill="#E8A020" />
      <path d="M292 220l6 6 10-12" stroke="#FBF7F0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

const BLOCKS = [
  {
    kicker: 'The comfort protocol',
    title: 'We assume you are nervous, and we plan for it',
    body:
      'Nobody has to explain their history to us twice. Your notes carry a comfort card with the things that matter to you — a stop signal you raise with your left hand, headphones and your own music, topical gel four full minutes before any injection, and the option of a longer appointment so nothing has to be rushed. Around a third of our adult patients booked their first visit here after years away, and the protocol exists because of them.',
    bullets: [
      'A raised hand stops everything, every time, no explanation needed',
      'Numbing gel sits for four minutes, not the usual thirty seconds',
      'Morning slots held for anyone who would rather not spend a day dreading it',
    ],
    art: <CalmIllustration />,
    flip: false,
  },
  {
    kicker: 'The workshop',
    title: 'The ceramic mill is twenty feet from the chair',
    body:
      'Most practices post your scan to a laboratory and see you again in three weeks. We design the crown on screen while you have a coffee, mill it from a single ceramic block in the room behind reception, then stain and glaze it to match the tooth next door. You go home with the finished restoration in your mouth, and there is no temporary crown to fall off in a bread roll on day four.',
    bullets: [
      'Scanned, milled, glazed and fitted inside a single visit',
      'No impression putty, no gagging, no posting anything to a lab',
      'Broken edges re-milled at cost if the bite needs adjusting later',
    ],
    art: <MillIllustration />,
    flip: true,
  },
  {
    kicker: 'What we can see',
    title: 'Low-dose scans, and you look at them with us',
    body:
      'Our sensors need about a fifth of the radiation of the film we used a decade ago, and the images land on the screen beside your chair rather than in a drawer. We turn the monitor towards you and talk through what is actually there, because a patient who can see the shadow under a filling makes a much better decision about it than one being told to trust us.',
    bullets: [
      'Roughly 80% less radiation than the film we used in 2012',
      'Every image explained on screen, in words, before any plan is offered',
      'Copies emailed to you the same afternoon if you want a second opinion',
    ],
    art: <ScanIllustration />,
    flip: false,
  },
]

export function ComfortDeepDive() {
  return (
    <section id="comfort" className="bg-[#FBF7F0] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B98B22]">How we work</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#123B36] sm:text-4xl">
            Three things that make an appointment here different
          </h2>
        </div>

        <div className="mt-14 space-y-16 lg:space-y-24">
          {BLOCKS.map((block) => (
            <article
              key={block.title}
              data-testid="deep-dive-block"
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={block.flip ? 'lg:order-2' : ''}>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B98B22]">{block.kicker}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-snug text-[#123B36] sm:text-3xl">{block.title}</h3>
                <p className="mt-4 leading-relaxed text-[#4A5A53]">{block.body}</p>
                <ul className="mt-6 space-y-3">
                  {block.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-[#123B36]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8A020]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={block.flip ? 'lg:order-1' : ''}>
                <div className="overflow-hidden rounded-3xl border border-[#123B36]/10 shadow-lg shadow-[#123B36]/5">
                  {block.art}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

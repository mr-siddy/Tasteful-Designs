import { SectionHeading } from './PageKit'

type Block = {
  eyebrow: string
  title: string
  body: string[]
  points: string[]
  art: 'assessment' | 'wave' | 'injury'
}

const BLOCKS: Block[] = [
  {
    eyebrow: 'Step one',
    title: 'We measure before we prescribe',
    body: [
      'The free intro is not a sales tour with a squat at the end. It is forty-five minutes of assessment: how far your hips travel before your back rounds, what your shoulders do overhead, how you breathe under a loaded bar, and what happened to the knee you mentioned on the phone.',
      'You leave with a written sheet — the four lifts, where each one starts for you, and the two things you personally need to work on before load goes up. If you decide not to join, the sheet is still yours.',
    ],
    points: [
      'Twelve movement screens, all of them written down',
      'A starting load for each lift, not a generic beginner template',
      'A plain-language note on anything we want a clinician to look at',
    ],
    art: 'assessment',
  },
  {
    eyebrow: 'Step two',
    title: 'Everything runs on a five week wave',
    body: [
      'Coalhouse programming moves in five week blocks: four weeks where the work climbs, then a lighter fifth week where it deliberately does not. That last week is the part most gyms skip and the part that decides whether you are still lifting in year three.',
      'Loads are set as a percentage of a number you actually tested here, so a week never depends on how you feel at 6am. Your card is on the rack, the coach has the same card, and the two of you adjust it together when life gets in the way.',
    ],
    points: [
      'Four weeks up, one week down, then a retest',
      'Percentages off tested numbers, not off how the day feels',
      'A programme card per member, reviewed at the end of every block',
    ],
    art: 'wave',
  },
  {
    eyebrow: 'Step three',
    title: 'An injury changes the plan, not the membership',
    body: [
      'About a third of the people who walk in here arrive with something already sore, and roughly forty a year come to us directly from a physical therapist. Nothing about that is unusual and none of it means sitting out.',
      'When something flares, Priya rewrites your block the same week: the painful pattern comes out, the loadable ones stay in, and we build the sore thing back up on purpose rather than waiting for it to feel better on its own. Members do not pay more and do not pause their membership to do this.',
    ],
    points: [
      'A same-week rewrite, not a "come back when it settles"',
      'Notes sent to your therapist or physician on request',
      'No surcharge — Rebuild sessions are the only paid add-on',
    ],
    art: 'injury',
  },
]

function BlockArt({ variant }: { variant: Block['art'] }) {
  if (variant === 'assessment') {
    return (
      <svg viewBox="0 0 400 300" className="w-full" aria-hidden focusable="false">
        <rect width="400" height="300" rx="24" fill="#12141A" />
        <rect x="40" y="40" width="150" height="220" rx="12" fill="#1D222B" stroke="#2F6C7A" strokeWidth="3" />
        <g fill="#2F6C7A" opacity=".7">
          <rect x="60" y="66" width="90" height="8" rx="4" />
          <rect x="60" y="88" width="110" height="8" rx="4" />
          <rect x="60" y="110" width="70" height="8" rx="4" />
          <rect x="60" y="132" width="104" height="8" rx="4" />
          <rect x="60" y="154" width="86" height="8" rx="4" />
          <rect x="60" y="176" width="118" height="8" rx="4" />
        </g>
        <g fill="#E1552B">
          <circle cx="52" cy="70" r="5" />
          <circle cx="52" cy="92" r="5" />
          <circle cx="52" cy="114" r="5" />
        </g>
        <circle cx="290" cy="110" r="34" fill="#2A303A" />
        <path d="M256 158h68c16 0 28 14 28 30v72h-124v-72c0-16 12-30 28-30z" fill="#2A303A" />
        <path d="M232 214c0-10 8-18 18-18h80c10 0 18 8 18 18" fill="none" stroke="#E1552B" strokeWidth="6" />
      </svg>
    )
  }
  if (variant === 'wave') {
    return (
      <svg viewBox="0 0 400 300" className="w-full" aria-hidden focusable="false">
        <rect width="400" height="300" rx="24" fill="#12141A" />
        <g stroke="#F7F3EC" strokeOpacity=".12" strokeWidth="2">
          <path d="M40 240h320M40 190h320M40 140h320M40 90h320" />
        </g>
        <g fill="#E1552B">
          <rect x="56" y="190" width="42" height="50" rx="6" />
          <rect x="118" y="160" width="42" height="80" rx="6" />
          <rect x="180" y="126" width="42" height="114" rx="6" />
          <rect x="242" y="96" width="42" height="144" rx="6" />
        </g>
        <rect x="304" y="200" width="42" height="40" rx="6" fill="#2F6C7A" />
        <path d="M40 250h320" stroke="#F7F3EC" strokeOpacity=".4" strokeWidth="3" />
        <g fill="#F7F3EC" fillOpacity=".55" fontSize="15" fontFamily="system-ui" textAnchor="middle">
          <text x="77" y="272">W1</text>
          <text x="139" y="272">W2</text>
          <text x="201" y="272">W3</text>
          <text x="263" y="272">W4</text>
          <text x="325" y="272">W5</text>
        </g>
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 400 300" className="w-full" aria-hidden focusable="false">
      <rect width="400" height="300" rx="24" fill="#12141A" />
      <circle cx="200" cy="150" r="94" fill="none" stroke="#2F6C7A" strokeWidth="14" strokeOpacity=".45" />
      <circle
        cx="200"
        cy="150"
        r="94"
        fill="none"
        stroke="#E1552B"
        strokeWidth="14"
        strokeDasharray="360 590"
        strokeLinecap="round"
        transform="rotate(-90 200 150)"
      />
      <g fill="#F7F3EC">
        <rect x="188" y="112" width="24" height="76" rx="8" />
        <rect x="162" y="138" width="76" height="24" rx="8" />
      </g>
    </svg>
  )
}

export default function MethodBlocks() {
  return (
    <section id="method" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="How we train"
          title="Three things that make this different from the gym you quit"
          blurb="None of it is exotic. It is the ordinary practice of a coached strength room, done consistently, written down, and repeated for eleven years."
        />

        <div className="mt-14 flex flex-col gap-16">
          {BLOCKS.map((block, position) => (
            <article
              key={block.title}
              data-testid="method-block"
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                position % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2F6C7A]">
                  {block.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight text-[#12141A] sm:text-3xl">
                  {block.title}
                </h3>
                {block.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="mt-4 text-base leading-relaxed text-[#12141A]/75">
                    {paragraph}
                  </p>
                ))}
                <ul className="mt-6 flex flex-col gap-2">
                  {block.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-[#12141A]/80">
                      <span aria-hidden className="mt-1.5 h-2 w-2 flex-none rounded-full bg-[#E1552B]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <BlockArt variant={block.art} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

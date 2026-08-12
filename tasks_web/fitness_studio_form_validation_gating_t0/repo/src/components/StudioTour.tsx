type Block = {
  eyebrow: string
  title: string
  body: string[]
  facts: { label: string; value: string }[]
  art: JSX.Element
}

const ReformerRoomArt = (
  <svg viewBox="0 0 360 260" className="h-auto w-full" role="img" aria-label="Studio one, twelve reformers under warehouse windows">
    <defs>
      <linearGradient id="tourA" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#E9F0EB" />
        <stop offset="100%" stopColor="#D8E5DC" />
      </linearGradient>
    </defs>
    <rect width="360" height="260" rx="20" fill="url(#tourA)" />
    {[0, 1, 2, 3].map((row) => (
      <g key={row} transform={`translate(${20 + (row % 2) * 12} ${52 + row * 48})`}>
        <rect x="0" y="0" width="150" height="11" rx="5.5" fill="#1F4A3C" />
        <rect x="16" y="-10" width="66" height="14" rx="7" fill="#C4623A" />
        <rect x="170" y="0" width="150" height="11" rx="5.5" fill="#1F4A3C" opacity="0.75" />
        <rect x="186" y="-10" width="66" height="14" rx="7" fill="#C4623A" opacity="0.75" />
      </g>
    ))}
    <path d="M0 22h360" stroke="#BFD2C6" strokeWidth="4" />
    <circle cx="330" cy="232" r="14" fill="none" stroke="#1F4A3C" strokeWidth="4" />
  </svg>
)

const HeatedRoomArt = (
  <svg viewBox="0 0 360 260" className="h-auto w-full" role="img" aria-label="Studio two, the heated room with cedar walls and infrared panels">
    <defs>
      <linearGradient id="tourB" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F7E3CE" />
        <stop offset="100%" stopColor="#EFCDAF" />
      </linearGradient>
    </defs>
    <rect width="360" height="260" rx="20" fill="url(#tourB)" />
    {[36, 92, 148, 204, 260, 316].map((x) => (
      <rect key={x} x={x - 12} y="26" width="24" height="150" rx="8" fill="#DFA778" opacity="0.55" />
    ))}
    <g>
      {[70, 180, 290].map((x) => (
        <path
          key={x}
          d={`M${x} 168c-8 12-8 20 0 30s8 18 0 26`}
          fill="none"
          stroke="#C4623A"
          strokeWidth="5"
          strokeLinecap="round"
        />
      ))}
    </g>
    <rect x="24" y="212" width="312" height="14" rx="7" fill="#8A5230" opacity="0.35" />
    <text x="180" y="248" textAnchor="middle" fontSize="17" fontWeight="800" fill="#8A5230" fontFamily="ui-sans-serif, system-ui, sans-serif">
      96°F · infrared, not forced air
    </text>
  </svg>
)

const RecoveryLoftArt = (
  <svg viewBox="0 0 360 260" className="h-auto w-full" role="img" aria-label="The recovery loft with a sauna, a plunge tub and the barbell platforms">
    <defs>
      <linearGradient id="tourC" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#E4EEF3" />
        <stop offset="100%" stopColor="#E9F0EB" />
      </linearGradient>
    </defs>
    <rect width="360" height="260" rx="20" fill="url(#tourC)" />
    <rect x="26" y="52" width="130" height="120" rx="14" fill="#1F4A3C" opacity="0.14" />
    <path d="M52 92h78M52 116h78M52 140h58" stroke="#1F4A3C" strokeWidth="6" strokeLinecap="round" />
    <rect x="190" y="70" width="144" height="86" rx="16" fill="#8FB8CE" opacity="0.5" />
    <path d="M204 118c12-10 24 10 36 0s24 10 36 0 24 10 36 0" fill="none" stroke="#33697F" strokeWidth="5" strokeLinecap="round" />
    <g>
      <rect x="60" y="196" width="240" height="12" rx="6" fill="#16211C" />
      <circle cx="72" cy="202" r="20" fill="#1F4A3C" />
      <circle cx="288" cy="202" r="20" fill="#1F4A3C" />
    </g>
  </svg>
)

const BLOCKS: Block[] = [
  {
    eyebrow: 'Studio one',
    title: 'Twelve reformers, no thirteenth, ever',
    body: [
      'The room came with the building — eleven-foot windows, a maple floor the rope works laid in 1948, and enough light that we have never turned the overheads on before four in the afternoon. We fit sixteen reformers in it and then took four out, because a teacher who has to shout cannot correct a shoulder.',
      'Every reformer is a Balanced Body Studio with a jumpboard and a sitting box, serviced on the first Monday of the month by the same technician since 2018. Springs get replaced on a schedule, not when they snap.',
    ],
    facts: [
      { label: 'Cap', value: '12 people' },
      { label: 'Floor', value: 'Original 1948 maple' },
      { label: 'Service', value: 'Monthly, logged' },
    ],
    art: ReformerRoomArt,
  },
  {
    eyebrow: 'Studio two',
    title: 'Heated to ninety-six, which is warm, not punishing',
    body: [
      'Hot yoga rooms usually sit at 105°F because it makes a sixty-minute class feel like an achievement. We hold ninety-six with infrared panels in the cedar wall instead of blowing hot air across the floor, so the heat comes up through you and the air stays breathable enough that Priya can teach to the breath.',
      'There are no mirrors in this room. That was Tova\'s first decision after signing the lease, and after nine years it is still the thing people mention in reviews more than anything else we have bought.',
    ],
    facts: [
      { label: 'Temperature', value: '96°F infrared' },
      { label: 'Mirrors', value: 'None, deliberately' },
      { label: 'Mats', value: 'Loaned, washed daily' },
    ],
    art: HeatedRoomArt,
  },
  {
    eyebrow: 'The loft',
    title: 'A barbell floor and somewhere to sit down afterwards',
    body: [
      'Up the back stairs: four platforms, two racks, calibrated plates, and a set of bells that goes up in four-kilo jumps so nobody has to make a twelve-kilo leap. Desmond coaches every hour it is open — the loft is never unstaffed, which is why beginners actually use it.',
      'Behind the platforms there is a four-person cedar sauna, a cold plunge held at 52°F, and three armchairs that see more use than either. Members book the sauna in twenty-minute blocks from the same screen they book classes.',
    ],
    facts: [
      { label: 'Platforms', value: '4, always coached' },
      { label: 'Plunge', value: '52°F, filtered nightly' },
      { label: 'Sauna', value: '20-minute blocks' },
    ],
    art: RecoveryLoftArt,
  },
]

export default function StudioTour() {
  return (
    <section id="studio" data-testid="studio" aria-labelledby="studio-heading" className="bg-[#FAF6F0]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C4623A]">The building</p>
          <h2 id="studio-heading" className="mt-3 text-3xl font-black tracking-tight text-[#16211C] sm:text-4xl">
            Four thousand square feet on the top floor of a rope works
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B5A52]">
            Three rooms, one changing area with actual doors on the showers, and
            a front desk with a person behind it from six in the morning until
            eight at night. Here is what you are walking into.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {BLOCKS.map((block, index) => (
            <article
              key={block.title}
              data-testid="tour-block"
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7A8A80]">
                  {block.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-[#16211C] sm:text-3xl">
                  {block.title}
                </h3>
                {block.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="mt-4 text-base leading-relaxed text-[#4B5A52]">
                    {paragraph}
                  </p>
                ))}
                <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-[#E4DCD0] pt-6">
                  {block.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A8A80]">
                        {fact.label}
                      </dt>
                      <dd className="mt-1 text-sm font-bold text-[#1F4A3C]">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div
                className={`rounded-[1.75rem] border border-[#E4DCD0] bg-[#FFFCF8] p-4 shadow-[0_26px_56px_-40px_rgba(22,33,28,0.7)] ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                {block.art}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

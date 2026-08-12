function MillDiagram() {
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" role="img" aria-label="Diagram of the in-house milling unit turning a scan into a finished crown">
      <defs>
        <linearGradient id="mill-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#DCEDE7" />
          <stop offset="100%" stopColor="#B9D8CF" />
        </linearGradient>
      </defs>
      <rect x="12" y="24" width="296" height="192" rx="20" fill="url(#mill-body)" />
      <rect x="34" y="48" width="112" height="88" rx="12" fill="#FBF8F3" />
      <path d="M52 120l22-30 16 20 12-16 20 26z" fill="#1B6B60" opacity="0.7" />
      <circle cx="70" cy="70" r="8" fill="#C2557E" />
      <g stroke="#0F3B36" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M158 92h44" />
        <path d="M192 82l12 10-12 10" />
      </g>
      <rect x="212" y="48" width="72" height="88" rx="12" fill="#FBF8F3" />
      <path
        d="M248 66c-9 0-14 4.6-14 12.4 0 6.2 2 11 3.6 15.8 1.4 4.4 2.2 9 4.8 9 2.2 0 2.4-3.6 5.6-3.6s3.4 3.6 5.6 3.6c2.6 0 3.4-4.6 4.8-9 1.6-4.8 3.6-9.6 3.6-15.8C262 70.6 257 66 248 66z"
        fill="#0F3B36"
      />
      <rect x="34" y="156" width="250" height="40" rx="12" fill="#FBF8F3" />
      <g fill="#0F3B36">
        <circle cx="60" cy="176" r="6" />
        <circle cx="110" cy="176" r="6" opacity="0.7" />
        <circle cx="160" cy="176" r="6" opacity="0.45" />
        <circle cx="210" cy="176" r="6" opacity="0.25" />
      </g>
      <rect x="236" y="168" width="40" height="16" rx="8" fill="#C2557E" />
    </svg>
  )
}

function ComfortScale() {
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" role="img" aria-label="Comfort scale showing the options offered to anxious patients">
      <rect x="12" y="24" width="296" height="192" rx="20" fill="#F6DDE6" />
      <rect x="40" y="164" width="240" height="12" rx="6" fill="#FBF8F3" />
      <g>
        <circle cx="70" cy="170" r="16" fill="#1B6B60" />
        <circle cx="140" cy="170" r="16" fill="#1B6B60" opacity="0.75" />
        <circle cx="210" cy="170" r="16" fill="#C2557E" />
        <circle cx="266" cy="170" r="16" fill="#0F3B36" opacity="0.45" />
      </g>
      <g fill="#0F3B36" opacity="0.85">
        <rect x="44" y="56" width="52" height="72" rx="10" />
        <rect x="114" y="72" width="52" height="56" rx="10" opacity="0.75" />
        <rect x="184" y="48" width="52" height="80" rx="10" opacity="0.6" />
        <rect x="248" y="88" width="36" height="40" rx="10" opacity="0.4" />
      </g>
      <path d="M40 140h240" stroke="#0F3B36" strokeOpacity="0.2" strokeWidth="2" />
    </svg>
  )
}

function ScanMesh() {
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" role="img" aria-label="Wireframe mesh of a digital intraoral scan replacing an impression tray">
      <rect x="12" y="24" width="296" height="192" rx="20" fill="#0F3B36" />
      <g stroke="#7FC2B2" strokeWidth="1.4" fill="none" opacity="0.75">
        <path d="M60 176c0-58 30-96 100-96s100 38 100 96" />
        <path d="M78 176c0-46 24-78 82-78s82 32 82 78" />
        <path d="M96 176c0-34 18-60 64-60s64 26 64 60" />
        <path d="M60 176h200M78 152h164M96 128h128M118 104h84" />
      </g>
      <g fill="#E8A6BF">
        <circle cx="60" cy="176" r="4" />
        <circle cx="118" cy="104" r="4" />
        <circle cx="202" cy="104" r="4" />
        <circle cx="260" cy="176" r="4" />
        <circle cx="160" cy="80" r="5" />
      </g>
      <rect x="132" y="188" width="56" height="10" rx="5" fill="#C2557E" />
    </svg>
  )
}

const BLOCKS = [
  {
    eyebrow: 'Same-day crowns',
    title: 'The lab is the room next to reception',
    body: [
      'A crown used to mean two appointments, three weeks apart, with a temporary held on by cement that fails on the first bagel. We bought the scanner and the mill in 2019 and moved that whole process into one visit.',
      'We scan the prepared tooth, design the crown on screen while you watch, and the mill cuts it from a single ceramic block in about eleven minutes. It is glazed, fitted and adjusted before you leave, and the bite is checked with you sitting upright rather than reclined.',
    ],
    points: [
      'No impression putty and no temporary crown',
      'About two and a half hours from numbing to done',
      'Ceramic shade matched against the tooth beside it',
    ],
    art: <MillDiagram />,
  },
  {
    eyebrow: 'Sedation and anxiety care',
    title: 'A third of our patients arrived afraid of this',
    body: [
      'People tell us about the appointment in childhood that went badly, and then apologise for it, which is the part that always gets us. Nobody needs to explain themselves here. We build the visit around whatever it takes to get you through the door.',
      'Numbing gel goes on before every injection and sits long enough to actually work. Nitrous is available at no extra charge on any appointment. There is a weighted blanket, headphones, and a raised-hand signal that stops everything immediately — and it does stop, every time, which is the only reason it works.',
    ],
    points: [
      'Nitrous included, never billed as an upgrade',
      'Oral sedation available with a written pre-visit plan',
      'First appointment can be a conversation with nothing in your mouth',
    ],
    art: <ComfortScale />,
  },
  {
    eyebrow: 'Digital scanning',
    title: 'We threw the impression trays away in 2018',
    body: [
      'Alginate impressions were the single most complained-about thing in this practice: a tray of cold paste held against the palate for four minutes while you try not to gag. The scanner replaced them completely.',
      'A wand about the size of an electric toothbrush passes over the teeth and builds a model in ninety seconds. It is more accurate than putty, it can be re-taken in seconds if you move, and it means aligner plans, night guards and crowns all start from the same file instead of three separate appointments.',
    ],
    points: [
      'Ninety-second scan instead of a four-minute tray',
      'Your model is stored, so remakes need no new appointment',
      'You see the same 3D model we are working from',
    ],
    art: <ScanMesh />,
  },
]

export function DeepDive() {
  return (
    <section id="how-we-work" className="bg-[#FBF8F3]" aria-labelledby="deep-dive-heading">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C2557E]">
            How we work
          </p>
          <h2
            id="deep-dive-heading"
            className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#0F3B36] sm:text-4xl"
          >
            Three decisions that changed what a visit here feels like
          </h2>
        </div>

        <div className="mt-14 space-y-16">
          {BLOCKS.map((block, index) => (
            <article
              key={block.title}
              data-testid="deep-dive-block"
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1B6B60]">
                  {block.eyebrow}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-[#0F3B36] sm:text-3xl">
                  {block.title}
                </h3>
                {block.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="mt-4 leading-relaxed text-[#14201E]/75">
                    {paragraph}
                  </p>
                ))}
                <ul className="mt-6 space-y-2.5">
                  {block.points.map((point) => (
                    <li
                      key={point}
                      data-testid="deep-dive-point"
                      className="flex gap-2.5 text-sm font-medium text-[#14201E]/80"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C2557E]" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="overflow-hidden rounded-3xl border border-[#0F3B36]/10 bg-white p-4 shadow-lg shadow-[#0F3B36]/5">
                {block.art}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

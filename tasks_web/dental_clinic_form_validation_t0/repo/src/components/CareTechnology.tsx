function ScannerArt() {
  return (
    <svg
      viewBox="0 0 360 260"
      className="h-auto w-full"
      role="img"
      aria-label="Illustration of a handheld intraoral scanner building a 3D model of an arch of teeth"
    >
      <defs>
        <linearGradient id="tech-scan" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ccfbf1" />
          <stop offset="100%" stopColor="#a5f3fc" />
        </linearGradient>
      </defs>
      <rect width="360" height="260" rx="26" fill="url(#tech-scan)" />
      <rect x="42" y="52" width="120" height="34" rx="17" fill="#0f766e" />
      <circle cx="158" cy="69" r="13" fill="#fbbf24" />
      <path d="M170 69c26-10 52 6 60 30" stroke="#0d9488" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path
        d="M96 196c0-38 30-62 84-62s84 24 84 62"
        stroke="#0f766e"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <circle key={i} cx={110 + i * 27} cy={196 - Math.sin((i / 6) * Math.PI) * 46} r="11" fill="#ffffff" />
      ))}
      <path d="M60 214h240" stroke="#14b8a6" strokeWidth="4" strokeDasharray="10 8" strokeLinecap="round" />
    </svg>
  )
}

function MillArt() {
  return (
    <svg
      viewBox="0 0 360 260"
      className="h-auto w-full"
      role="img"
      aria-label="Illustration of the in-house milling machine cutting a ceramic crown from a block"
    >
      <rect width="360" height="260" rx="26" fill="#fef3c7" />
      <rect x="66" y="70" width="228" height="130" rx="20" fill="#0f766e" />
      <rect x="90" y="94" width="180" height="82" rx="12" fill="#ecfeff" />
      <path d="M180 94v40" stroke="#0f766e" strokeWidth="8" strokeLinecap="round" />
      <path d="M168 134h24l-6 18h-12z" fill="#f59e0b" />
      <path d="M150 176h60l-8-24h-44z" fill="#99f6e4" />
      <circle cx="112" cy="118" r="7" fill="#fbbf24" />
      <circle cx="112" cy="140" r="7" fill="#14b8a6" />
      <path d="M66 210h228" stroke="#b45309" strokeWidth="6" strokeLinecap="round" />
      <path d="M120 44c14-14 40-14 54 0" stroke="#b45309" strokeWidth="5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function ComfortArt() {
  return (
    <svg
      viewBox="0 0 360 260"
      className="h-auto w-full"
      role="img"
      aria-label="Illustration of a low-dose imaging arm above a calm patient with headphones and a blanket"
    >
      <rect width="360" height="260" rx="26" fill="#ecfeff" />
      <path d="M40 210c0-46 40-78 92-78s92 32 92 78z" fill="#14b8a6" opacity="0.35" />
      <circle cx="132" cy="106" r="34" fill="#0f766e" />
      <path d="M96 106a36 36 0 0 1 72 0" stroke="#0f172a" strokeWidth="7" fill="none" opacity="0.3" />
      <rect x="88" y="100" width="16" height="26" rx="8" fill="#fbbf24" />
      <rect x="160" y="100" width="16" height="26" rx="8" fill="#fbbf24" />
      <path
        d="M232 46c46 0 74 30 74 74 0 34-20 58-48 68"
        stroke="#0d9488"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
      <rect x="256" y="150" width="64" height="44" rx="12" fill="#0f766e" />
      <path d="m272 172 10 10 18-22" stroke="#ecfeff" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 226h280" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}

const BLOCKS = [
  {
    eyebrow: 'No impression trays',
    title: 'We scan your teeth instead of filling your mouth with putty',
    body: 'The old alginate trays made half our patients gag, and the model that came out was only as good as the minute it set. A handheld scanner walks around the arch in about ninety seconds and builds a model accurate to a fraction of a millimetre. You watch it appear on the screen beside the chair, which turns out to be the easiest way anyone has found to explain a cracked filling.',
    points: ['About 90 seconds per arch', 'Nothing to swallow or gag on', 'You see the model as it builds'],
    art: <ScannerArt />,
  },
  {
    eyebrow: 'Crowns in one sitting',
    title: 'The ceramic mill in the back room saves you a fortnight',
    body: 'A crown normally means two appointments, two rounds of anaesthetic and two weeks in a temporary that pops off while you eat toast. We cut ours here, from a solid ceramic block, while you sit with a coffee and a magazine. It is glazed, colour-matched against the tooth beside it and bonded the same morning.',
    points: ['One visit, one injection', 'Colour matched in daylight', 'No temporary crown to lose'],
    art: <MillArt />,
  },
  {
    eyebrow: 'Comfort is a clinical decision',
    title: 'Low-dose imaging, warm blankets, and a hand signal that stops everything',
    body: 'Our 3D scanner runs at roughly a fifth of the radiation dose of the machine we replaced in 2019, so planning an implant no longer means a trade-off. Just as importantly, every chair has headphones, a blanket and an agreed hand signal: raise your left hand and we stop, no explanation needed. For patients who need more, we offer inhalation sedation with no extra charge on the day.',
    points: ['About 80% less radiation', 'Raise a hand and we stop', 'Inhalation sedation available'],
    art: <ComfortArt />,
  },
]

export function CareTechnology() {
  return (
    <section id="technology" className="bg-stone-100">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            Inside the practice
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Equipment we bought because it makes your appointment shorter
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-teal-900/70">
            Dentistry collects gadgets. We only keep the ones that take a visit off your calendar,
            a needle out of your arm, or a guess out of a treatment plan. Here are the three that
            earned their space.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {BLOCKS.map((block, index) => (
            <article
              key={block.title}
              data-testid="tech-block"
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                index % 2 === 1 ? 'lg:[&>figure]:order-first' : ''
              }`}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                  {block.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {block.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-teal-900/70">{block.body}</p>
                <ul className="mt-6 space-y-3">
                  {block.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm font-medium text-teal-900">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-700 text-stone-50">
                        <svg
                          viewBox="0 0 20 20"
                          className="h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="m4 10.5 4 4 8-9" />
                        </svg>
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <figure className="rounded-[2rem] bg-white p-4 shadow-sm ring-1 ring-inset ring-teal-900/10">
                {block.art}
                <figcaption className="px-3 pb-2 pt-4 text-sm text-teal-900/60">
                  {block.eyebrow} — photographed in room two at Alder Court.
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

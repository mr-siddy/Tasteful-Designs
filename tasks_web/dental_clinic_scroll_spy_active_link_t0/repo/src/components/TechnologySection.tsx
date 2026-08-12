function ScannerArt() {
  return (
    <svg viewBox="0 0 320 220" className="h-auto w-full" role="img" aria-labelledby="tech-scanner-title">
      <title id="tech-scanner-title">A handheld intraoral scanner building a 3D model of a jaw on screen</title>
      <defs>
        <linearGradient id="tech-scanner-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0fdfa" />
          <stop offset="100%" stopColor="#ccfbf1" />
        </linearGradient>
      </defs>
      <rect width="320" height="220" rx="24" fill="url(#tech-scanner-bg)" />
      <rect x="150" y="34" width="140" height="100" rx="12" fill="#0f766e" />
      <rect x="158" y="42" width="124" height="84" rx="7" fill="#ecfeff" />
      <path
        d="M175 106c0-22 13-38 45-38s45 16 45 38"
        stroke="#0f766e"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={i} x={176 + i * 11} y={82 - Math.abs(3.5 - i) * 3} width="8" height="14" rx="3" fill="#14b8a6" />
      ))}
      <rect x="150" y="134" width="140" height="8" rx="4" fill="#134e4a" />
      <rect x="196" y="142" width="48" height="20" rx="4" fill="#134e4a" />
      <rect x="176" y="162" width="88" height="8" rx="4" fill="#0f766e" />
      <rect x="28" y="112" width="94" height="26" rx="13" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="2" />
      <path d="M122 118h22l16 8-16 8h-22z" fill="#a8a29e" />
      <circle cx="46" cy="125" r="6" fill="#f59e0b" />
      <path d="M60 125h44" stroke="#a8a29e" strokeWidth="3" strokeLinecap="round" />
      <path d="M162 96c14 10 28 14 44 14" stroke="#5eead4" strokeWidth="3" strokeDasharray="5 5" fill="none" />
    </svg>
  )
}

function MillArt() {
  return (
    <svg viewBox="0 0 320 220" className="h-auto w-full" role="img" aria-labelledby="tech-mill-title">
      <title id="tech-mill-title">The in-house milling unit cutting a porcelain crown from a ceramic block</title>
      <defs>
        <linearGradient id="tech-mill-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fffbeb" />
          <stop offset="100%" stopColor="#fef3c7" />
        </linearGradient>
      </defs>
      <rect width="320" height="220" rx="24" fill="url(#tech-mill-bg)" />
      <rect x="46" y="40" width="228" height="140" rx="18" fill="#fafaf9" stroke="#e7e5e4" strokeWidth="3" />
      <rect x="66" y="60" width="188" height="86" rx="10" fill="#1c1917" opacity="0.06" />
      <rect x="146" y="52" width="28" height="46" rx="6" fill="#78716c" />
      <path d="M160 98v14" stroke="#44403c" strokeWidth="6" strokeLinecap="round" />
      <path
        d="M160 112c9 3.4 13.5 9.6 13.5 19.2 0 8.6-4.3 14.6-8.2 14.6-2.5 0-3.8-2.3-5.3-2.3s-2.8 2.3-5.3 2.3c-3.9 0-8.2-6-8.2-14.6 0-9.6 4.5-15.8 13.5-19.2Z"
        fill="#f5f5f4"
        stroke="#d6d3d1"
        strokeWidth="2"
      />
      <path d="M96 160h128" stroke="#e7e5e4" strokeWidth="6" strokeLinecap="round" />
      <circle cx="90" cy="76" r="7" fill="#f59e0b" />
      <circle cx="90" cy="98" r="7" fill="#d6d3d1" />
      <circle cx="90" cy="120" r="7" fill="#d6d3d1" />
      <path d="M198 76h44M198 92h30" stroke="#a8a29e" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

function DoseArt() {
  return (
    <svg viewBox="0 0 320 220" className="h-auto w-full" role="img" aria-labelledby="tech-dose-title">
      <title id="tech-dose-title">A bar chart comparing film X-ray dose with our digital sensor dose</title>
      <defs>
        <linearGradient id="tech-dose-bg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f5f5f4" />
          <stop offset="100%" stopColor="#e7e5e4" />
        </linearGradient>
      </defs>
      <rect width="320" height="220" rx="24" fill="url(#tech-dose-bg)" />
      <path d="M56 176h216" stroke="#a8a29e" strokeWidth="3" strokeLinecap="round" />
      <rect x="84" y="52" width="46" height="124" rx="8" fill="#a8a29e" />
      <rect x="150" y="126" width="46" height="50" rx="8" fill="#0d9488" />
      <rect x="216" y="156" width="46" height="20" rx="8" fill="#14b8a6" />
      <text x="107" y="44" textAnchor="middle" fontSize="13" fill="#57534e">
        Film
      </text>
      <text x="173" y="118" textAnchor="middle" fontSize="13" fill="#0f766e">
        Panoramic
      </text>
      <text x="239" y="148" textAnchor="middle" fontSize="13" fill="#0f766e">
        Bitewing
      </text>
      <text x="56" y="200" fontSize="12" fill="#78716c">
        Relative radiation dose per image
      </text>
    </svg>
  )
}

const BLOCKS = [
  {
    eyebrow: 'Scanning',
    heading: 'A camera instead of a tray of putty',
    body: 'The gag-inducing impression tray retired here in 2019. A wand the size of an electric toothbrush takes about ninety seconds per arch and builds the model on the screen beside you, which means you get to see the crack you have been feeling with your tongue for a month. Scans go straight to the mill or the aligner software with nothing to distort, warp or post.',
    facts: ['90 seconds per arch', 'Re-scan is free and instant'],
    art: <ScannerArt />,
  },
  {
    eyebrow: 'In-house lab',
    heading: 'Crowns milled in the back room, not mailed away',
    body: 'A ceramic block goes into the mill in the front corner of the practice and comes out a crown in roughly fifty minutes, which is why a crown here is one appointment rather than two visits three weeks apart with a temporary in between. You keep your own tooth shape, you skip the plastic stand-in, and nothing pops off over a weekend.',
    facts: ['One visit, no temporary crown', 'Shade fired on site the same day'],
    art: <MillArt />,
  },
  {
    eyebrow: 'Imaging',
    heading: 'Digital sensors at a fraction of the old dose',
    body: 'Every X-ray in the building is digital, which lands somewhere near a sixth of the radiation dose of the film we used through the nineties — a full set of bitewings is comparable to a couple of hours in a passenger plane. Images appear on the monitor in under two seconds, so we can point at what we are talking about instead of describing it.',
    facts: ['About one sixth of film dose', 'Images on screen in two seconds'],
    art: <DoseArt />,
  },
]

export function TechnologySection() {
  return (
    <section id="technology" className="scroll-mt-28 border-y border-stone-200 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">How the room works</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-teal-950 sm:text-4xl">
            Equipment we bought to make visits shorter, not to put on a poster
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Three purchases over the last decade changed what an appointment here actually feels like. Each of them
            removed a step you used to have to sit through, and none of them costs you extra.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {BLOCKS.map((block, index) => (
            <article
              key={block.heading}
              data-testid="technology-block"
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : undefined}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">{block.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-teal-950">{block.heading}</h3>
                <p className="mt-4 leading-relaxed text-stone-600">{block.body}</p>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {block.facts.map((fact) => (
                    <li
                      key={fact}
                      className="rounded-full bg-stone-100 px-4 py-1.5 text-xs font-semibold text-stone-600"
                    >
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : undefined}>
                <div className="overflow-hidden rounded-3xl border border-stone-200 shadow-sm">{block.art}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

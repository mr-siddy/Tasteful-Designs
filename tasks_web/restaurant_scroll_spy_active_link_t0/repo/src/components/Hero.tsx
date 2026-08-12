const FACTS = [
  { label: 'Seats downstairs', value: '38' },
  { label: 'Service', value: 'Wed – Sun' },
  { label: 'One seating from', value: '6:00pm' },
  { label: 'Open since', value: '2016' },
]

export function Hero() {
  return (
    <section
      id="top"
      data-section="top"
      className="relative overflow-hidden bg-[#14100D] text-[#FBF6EC]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_60%_at_18%_10%,rgba(183,65,31,0.55),transparent_60%),radial-gradient(60%_50%_at_88%_85%,rgba(216,162,68,0.35),transparent_65%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-32">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D8A244]">
            Ironbridge Quarter · 62 Dorwich Street
          </p>
          <h1 className="mt-6 font-serif text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
            Lantern <span className="text-[#D8A244]">&amp;</span> Rye
          </h1>
          <p className="mt-6 max-w-xl font-serif text-2xl leading-snug text-[#F0E4D2] sm:text-3xl">
            One oak fire, lit at six in the morning. A stone mill in the back room.
            Thirty-eight seats, and a menu short enough to fit on the hearth.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#F0E4D2]/75">
            Chef-owner Nadia Fenwick cooks everything on live coals in a converted rope
            factory on the canal — no induction, no sous-vide, no eighteen-course theatre.
            The bread is milled the morning you eat it, the beef hangs for twenty-eight
            days upstairs, and the fire is never rebuilt once service begins. Dinner runs
            Wednesday to Sunday, one seating a night, and we keep six seats at the bar for
            people who did not plan ahead.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#reserve"
              className="rounded-full bg-[#B7411F] px-8 py-4 text-sm font-semibold tracking-wide text-[#FBF6EC] shadow-lg shadow-black/30 transition-colors hover:bg-[#d24d26]"
            >
              Request a table
            </a>
            <a
              href="#menu"
              className="rounded-full border border-[#F0E4D2]/35 px-8 py-4 text-sm font-semibold tracking-wide text-[#F0E4D2] transition-colors hover:border-[#D8A244] hover:text-[#D8A244]"
            >
              Read tonight's menu
            </a>
          </div>
          <dl className="mt-14 grid max-w-xl grid-cols-2 gap-6 border-t border-[#F0E4D2]/15 pt-8 sm:grid-cols-4">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-[#F0E4D2]/55">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-serif text-2xl font-semibold text-[#D8A244]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <svg
            viewBox="0 0 420 400"
            role="img"
            aria-label="Illustration of the open oak hearth with hanging lanterns and a rack of rye"
            className="w-full drop-shadow-2xl"
          >
            <defs>
              <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2A211B" />
                <stop offset="100%" stopColor="#14100D" />
              </linearGradient>
              <radialGradient id="heroFire" cx="50%" cy="70%" r="60%">
                <stop offset="0%" stopColor="#FBE1A0" />
                <stop offset="45%" stopColor="#D8A244" />
                <stop offset="100%" stopColor="#B7411F" />
              </radialGradient>
              <linearGradient id="heroBrick" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4A382D" />
                <stop offset="100%" stopColor="#2A211B" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="420" height="400" rx="28" fill="url(#heroSky)" />
            <rect x="46" y="70" width="328" height="290" rx="16" fill="url(#heroBrick)" />
            <path
              d="M96 330 V208 a114 114 0 0 1 228 0 V330 Z"
              fill="#14100D"
              stroke="#D8A244"
              strokeWidth="3"
            />
            <path d="M96 208 a114 114 0 0 1 228 0" fill="none" stroke="#B7411F" strokeWidth="6" opacity="0.5" />
            <ellipse cx="210" cy="322" rx="86" ry="20" fill="url(#heroFire)" opacity="0.45" />
            <path
              d="M170 322 q10 -46 40 -70 q-8 30 12 44 q14 -12 12 -34 q26 26 22 60 Z"
              fill="url(#heroFire)"
            />
            <path
              d="M188 322 q6 -26 22 -40 q-4 18 8 26 q8 -8 6 -20 q16 16 12 34 Z"
              fill="#FBE1A0"
              opacity="0.85"
            />
            <g stroke="#6B5140" strokeWidth="9" strokeLinecap="round">
              <path d="M150 330 L262 330" />
              <path d="M164 340 L252 340" />
            </g>

            <g stroke="#D8A244" strokeWidth="2.5" fill="none">
              <path d="M120 70 V104" />
              <path d="M300 70 V126" />
            </g>
            <g>
              <path d="M108 104 h24 l6 34 a18 18 0 0 1 -36 0 Z" fill="#D8A244" opacity="0.9" />
              <path d="M288 126 h24 l6 34 a18 18 0 0 1 -36 0 Z" fill="#F0C46B" opacity="0.9" />
            </g>

            <g transform="translate(52 236)">
              <rect x="0" y="0" width="56" height="96" rx="8" fill="#2A211B" stroke="#6B5140" strokeWidth="2" />
              {[0, 1, 2].map((row) => (
                <g key={row} transform={`translate(8 ${10 + row * 30})`}>
                  <ellipse cx="20" cy="10" rx="18" ry="9" fill="#C68A4E" />
                  <path d="M6 10 q14 -10 28 0" stroke="#8A5A32" strokeWidth="1.6" fill="none" />
                </g>
              ))}
            </g>

            <g transform="translate(330 214)" stroke="#8F9E6B" strokeWidth="2.2" fill="none">
              {[0, 1, 2, 3].map((i) => (
                <g key={i} transform={`translate(${i * 12} ${i % 2 === 0 ? 0 : 8})`}>
                  <path d="M6 118 V44" />
                  <path d="M6 44 q9 -12 0 -26 q-9 14 0 26" fill="#C7B27A" stroke="none" />
                  <path d="M6 66 q10 -6 12 -16" />
                  <path d="M6 86 q-10 -6 -12 -16" />
                </g>
              ))}
            </g>
          </svg>
          <p className="mt-6 text-center text-xs uppercase tracking-[0.22em] text-[#F0E4D2]/50">
            The hearth, drawn by Ines Karlsdóttir · 2023
          </p>
        </div>
      </div>
    </section>
  )
}

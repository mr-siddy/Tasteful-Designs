const FACTS = [
  { value: '38', label: 'seats, one room' },
  { value: '1', label: 'hearth, no gas' },
  { value: '5:30', label: 'first service, Wed–Sat' },
  { value: '12', label: 'boats we buy from' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#123C43] via-[#0F3239] to-[#0B262C]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#E08A3C]/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-[#C4472A]/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-32">
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#E9C79A]">
            Wood fire · Cold water · 14 Harker Quay
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-[#FAF6EF] sm:text-6xl">
            Cinder &amp; Salt
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#D9CFC0]">
            Everything on this menu is cooked over embers in one open hearth at the end of Harker
            Quay — whole fish landed that morning by the day boats, roots buried in salt and ash,
            flatbread pulled off the coals while you are still reading the wine list. Thirty-eight
            seats, no gas, no second sitting rushed out the door.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              data-testid="hero-book"
              className="rounded-full bg-[#E08A3C] px-7 py-3.5 text-sm font-semibold text-[#1A1006] shadow-lg shadow-black/20 transition-colors hover:bg-[#EDA054]"
            >
              Book a table
            </a>
            <a
              href="#menu"
              data-testid="hero-menu"
              className="rounded-full border border-[#FAF6EF]/40 px-7 py-3.5 text-sm font-semibold text-[#FAF6EF] transition-colors hover:border-[#FAF6EF] hover:bg-[#FAF6EF]/10"
            >
              Read tonight's menu
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {FACTS.map((fact) => (
              <div key={fact.label} data-testid="hero-fact">
                <dt className="text-2xl font-semibold text-[#E9C79A]">{fact.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-[#A9B7B6]">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <svg
            viewBox="0 0 420 380"
            role="img"
            aria-label="Illustration of the open hearth at Cinder and Salt, with a whole fish over embers and the harbour beyond"
            className="h-auto w-full drop-shadow-2xl"
          >
            <defs>
              <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1B5560" />
                <stop offset="100%" stopColor="#3E2B24" />
              </linearGradient>
              <radialGradient id="hero-glow" cx="0.5" cy="0.78" r="0.55">
                <stop offset="0%" stopColor="#F2B25C" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#F2B25C" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="420" height="380" rx="26" fill="url(#hero-sky)" />
            <circle cx="330" cy="78" r="30" fill="#E9C79A" opacity="0.5" />
            <path
              d="M0 232c46-14 74 10 118 4 40-6 58-26 100-22 46 4 66 26 108 22 38-4 60-18 94-10v154H0Z"
              fill="#0B262C"
              opacity="0.75"
            />
            <ellipse cx="210" cy="272" rx="180" ry="86" fill="url(#hero-glow)" />
            <rect x="52" y="196" width="316" height="118" rx="16" fill="#2B1C16" />
            <rect x="70" y="214" width="280" height="82" rx="10" fill="#150D0A" />
            <g>
              <circle cx="120" cy="272" r="11" fill="#C4472A" />
              <circle cx="152" cy="280" r="9" fill="#E08A3C" />
              <circle cx="186" cy="272" r="12" fill="#F2B25C" />
              <circle cx="222" cy="281" r="9" fill="#C4472A" />
              <circle cx="256" cy="272" r="11" fill="#E08A3C" />
              <circle cx="292" cy="280" r="8" fill="#F2B25C" />
            </g>
            <path
              d="M112 244c10-14 4-22 10-30 4 8 10 8 12 16 6-10 2-18 10-26 6 14 16 16 16 30 0 12-11 20-24 20s-24-8-24-10Z"
              fill="#F2B25C"
              opacity="0.85"
            />
            <path
              d="M244 240c8-12 3-19 8-26 4 7 9 7 10 14 5-9 2-15 9-22 5 12 14 14 14 26 0 10-9 17-20 17s-21-7-21-9Z"
              fill="#E08A3C"
              opacity="0.75"
            />
            <g transform="translate(96 178)">
              <path
                d="M0 22C26-6 96-14 150 4c14 5 26 12 34 18-8 6-20 13-34 18-54 18-124 10-150-18Z"
                fill="#B8C6C2"
              />
              <path d="M184 22 216 2v40Z" fill="#9AAAA6" />
              <circle cx="34" cy="16" r="5" fill="#2B1C16" />
              <path d="M56 8c18 8 44 10 64 4M56 36c18-8 44-10 64-4" stroke="#8CA09B" strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>
            <rect x="52" y="314" width="316" height="14" rx="7" fill="#3E2B24" />
            <g stroke="#E9C79A" strokeWidth="2.5" strokeLinecap="round" opacity="0.55">
              <path d="M132 168c8-16-8-24 0-40" fill="none" />
              <path d="M212 160c9-18-9-26 0-44" fill="none" />
              <path d="M292 168c8-16-8-24 0-40" fill="none" />
            </g>
          </svg>

          <div className="mt-6 rounded-2xl border border-[#FAF6EF]/15 bg-[#FAF6EF]/5 p-5">
            <p className="text-sm leading-relaxed text-[#D9CFC0]">
              <span className="font-semibold text-[#E9C79A]">Tonight at the pass:</span> turbot from
              Delia Okoro's boat, celeriac from Callowfield buried in the ash since two o'clock, and
              the last of the Wend Valley greengages for Ezra's ice cream.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

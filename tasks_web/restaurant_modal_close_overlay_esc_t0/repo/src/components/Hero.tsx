const FACTS = [
  { value: '1946', label: 'the year Stanley and Vera opened the doors' },
  { value: '74', label: 'seats in the main dining room' },
  { value: '4:30', label: 'first supper, Wednesday through Sunday' },
  { value: '1/3', label: 'of the room held back for walk-ins' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#0C1F17] via-[#123024] to-[#1C4535]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#8FA9DA]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 right-10 h-96 w-96 rounded-full bg-[#D2A24C]/25 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-32">
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#E8C87E]">
            Harlow Bend · Cedar Bluff Road · East shore of Lake Wanetka
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-[#F6F1E4] sm:text-6xl">
            The Blue Iris Supper Club
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#D9D2C0]">
            Come early, take a pressed old fashioned at the brandy bar while the parking lot fills
            with headlights off the county road, and let the relish tray land before you have
            decided anything. Supper follows when it follows — walleye off the broiler, prime rib
            cut to the thickness you point at, perch on Friday. Eighty winters on this shore and
            the order of the evening has not moved once.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#reserve"
              data-testid="hero-reserve"
              className="rounded-full bg-[#D2A24C] px-7 py-3.5 text-sm font-semibold text-[#17130F] shadow-lg shadow-black/25 transition-colors hover:bg-[#E8C87E]"
            >
              Reserve a table
            </a>
            <a
              href="#supper"
              data-testid="hero-menu"
              className="rounded-full border border-[#F6F1E4]/40 px-7 py-3.5 text-sm font-semibold text-[#F6F1E4] transition-colors hover:border-[#F6F1E4] hover:bg-[#F6F1E4]/10"
            >
              Read the supper menu
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {FACTS.map((fact) => (
              <div key={fact.value} data-testid="hero-fact">
                <dt className="text-2xl font-semibold text-[#E8C87E]">{fact.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-[#A9B49F]">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <svg
            viewBox="0 0 420 380"
            role="img"
            aria-label="Illustration of the Blue Iris Supper Club at dusk: a low pine building with a neon iris sign above the lake"
            className="h-auto w-full drop-shadow-2xl"
          >
            <defs>
              <linearGradient id="hero-dusk" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1E3E5C" />
                <stop offset="55%" stopColor="#3B3A4E" />
                <stop offset="100%" stopColor="#12281E" />
              </linearGradient>
              <radialGradient id="hero-neon" cx="0.5" cy="0.36" r="0.5">
                <stop offset="0%" stopColor="#8FA9DA" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8FA9DA" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="hero-water" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#20415A" />
                <stop offset="100%" stopColor="#0E2431" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="420" height="380" rx="26" fill="url(#hero-dusk)" />
            <circle cx="332" cy="70" r="26" fill="#E8C87E" opacity="0.55" />
            <g fill="#0E2019" opacity="0.85">
              <path d="M0 176c30-6 44-30 70-30 24 0 34 20 62 18 30-2 40-26 70-24 28 2 38 24 66 24 30 0 44-24 74-18 28 6 44 22 78 18v54H0Z" />
            </g>
            <ellipse cx="210" cy="140" rx="150" ry="80" fill="url(#hero-neon)" />

            <rect x="0" y="258" width="420" height="122" fill="url(#hero-water)" />
            <g stroke="#8FA9DA" strokeWidth="2" opacity="0.35" strokeLinecap="round">
              <path d="M40 292h64M126 306h58M212 288h72M64 328h96M226 336h84M300 300h74" fill="none" />
            </g>

            <rect x="58" y="186" width="304" height="76" rx="8" fill="#173124" />
            <rect x="58" y="186" width="304" height="12" rx="6" fill="#0E2019" />
            <g fill="#E8C87E" opacity="0.9">
              <rect x="78" y="210" width="34" height="30" rx="4" />
              <rect x="126" y="210" width="34" height="30" rx="4" />
              <rect x="174" y="210" width="34" height="30" rx="4" />
              <rect x="260" y="210" width="34" height="30" rx="4" />
              <rect x="308" y="210" width="34" height="30" rx="4" />
            </g>
            <rect x="212" y="206" width="40" height="56" rx="4" fill="#7C2D2D" />
            <path d="M212 206h40v8h-40Z" fill="#D2A24C" />

            <g transform="translate(146 108)">
              <rect x="0" y="0" width="128" height="62" rx="10" fill="#0E2019" stroke="#D2A24C" strokeWidth="2" />
              <path d="M64 12c4 7 4 13 0 19-4-6-4-12 0-19Z" fill="#8FA9DA" />
              <path d="M64 31c-6-5-13-5-18 1 6 6 13 6 18-1Z" fill="#6C86BD" />
              <path d="M64 31c6-5 13-5 18 1-6 6-13 6-18-1Z" fill="#6C86BD" />
              <path d="M64 31c-2 6-2 11 0 17 2-6 2-11 0-17Z" fill="#D2A24C" />
              <text x="64" y="56" textAnchor="middle" fontSize="9" fill="#E8C87E" letterSpacing="2">
                SUPPER CLUB
              </text>
            </g>
            <rect x="204" y="170" width="12" height="18" fill="#0E2019" />

            <g stroke="#0E2019" strokeWidth="6" strokeLinecap="round">
              <path d="M22 262v-42M398 262v-52" fill="none" />
            </g>
            <g fill="#12281E">
              <path d="M22 220c-14-16-4-34 0-44 4 10 14 28 0 44Z" />
              <path d="M398 210c-16-18-5-38 0-49 5 11 16 31 0 49Z" />
            </g>
            <rect x="0" y="252" width="420" height="10" fill="#0E2019" />
          </svg>

          <div className="mt-6 rounded-2xl border border-[#F6F1E4]/15 bg-[#F6F1E4]/5 p-5">
            <p className="text-sm leading-relaxed text-[#D9D2C0]">
              <span className="font-semibold text-[#E8C87E]">Tonight on the board:</span> walleye
              landed Tuesday out of the Wanetka narrows, the Saturday roast started at six this
              morning, and Rosa has three grasshopper pies left in the cooler.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

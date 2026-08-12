const FACTS = [
  { value: '44', label: 'seats at three long tables' },
  { value: '4:20am', label: 'the tone oven is lit' },
  { value: '19', label: 'pleats in every khinkali' },
]

export function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero"
      className="relative overflow-hidden bg-rose-950 text-amber-50"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(65%_55%_at_12%_0%,rgba(251,191,36,0.26),transparent_62%),radial-gradient(55%_55%_at_88%_100%,rgba(190,18,60,0.45),transparent_65%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-400">
            Georgian supper house · Alberta Street, Portland
          </p>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Sit down hungry. Leave having been toasted.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-rose-100/90">
            Tamada is forty-four seats around three long tables, where Nino Abashidze cooks the
            supra she grew up eating in Kutaisi — khachapuri slapped against the wall of a clay
            oven, khinkali pleated by hand before the sun is up, and amber wine poured from qvevri
            that were buried in the ground before the grapes were picked. Nobody eats alone here;
            the table fills in around you.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#reserve"
              data-testid="hero-cta"
              className="rounded-full bg-amber-500 px-8 py-4 text-base font-semibold text-rose-950 shadow-xl shadow-amber-900/30 transition hover:bg-amber-400"
            >
              Request a table
            </a>
            <a
              href="#table"
              data-testid="hero-secondary-cta"
              className="rounded-full border border-rose-700 px-8 py-4 text-base font-semibold text-amber-50 transition hover:border-amber-400 hover:text-amber-400"
            >
              Read tonight&rsquo;s table
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-rose-800/70 pt-8">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="font-serif text-3xl font-semibold text-amber-400">{fact.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-rose-200/80">
                  {fact.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <svg
            viewBox="0 0 420 470"
            role="img"
            aria-label="Illustration of the clay tone oven at Tamada with khachapuri baking against its wall"
            className="w-full drop-shadow-2xl"
          >
            <defs>
              <linearGradient id="hero-room" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4c0519" />
                <stop offset="100%" stopColor="#1c0207" />
              </linearGradient>
              <radialGradient id="hero-coals" cx="50%" cy="80%" r="55%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="45%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="hero-bread" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fde68a" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <linearGradient id="hero-clay" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#78350f" />
                <stop offset="55%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#5b2408" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="420" height="470" rx="28" fill="url(#hero-room)" />

            <g opacity="0.35" stroke="#fbbf24" strokeWidth="1.5" fill="none">
              <path d="M28 44c10-8 20-8 30 0s20 8 30 0" strokeLinecap="round" />
              <path d="M28 60c10-8 20-8 30 0s20 8 30 0" strokeLinecap="round" />
              <path d="M362 44c-10-8-20-8-30 0s-20 8-30 0" strokeLinecap="round" />
              <path d="M362 60c-10-8-20-8-30 0s-20 8-30 0" strokeLinecap="round" />
            </g>

            <path d="M78 440V214a132 132 0 0 1 264 0v226z" fill="url(#hero-clay)" />
            <path d="M104 440V218a106 106 0 0 1 212 0v222z" fill="#1c0207" />
            <ellipse cx="210" cy="404" rx="104" ry="58" fill="url(#hero-coals)" opacity="0.92" />

            {[0, 1, 2, 3, 4, 5].map((i) => (
              <rect
                key={i}
                x={124 + i * 28}
                y={404 + (i % 2) * 7}
                width="22"
                height="12"
                rx="5"
                fill={i % 2 ? '#f59e0b' : '#dc2626'}
                opacity="0.9"
              />
            ))}

            <path
              d="M210 300c20 20 30 35 30 50 0 17-14 30-30 30s-30-13-30-30c0-10 4-18 11-26 2 9 6 15 14 16-3-14 1-27 5-40z"
              fill="#fbbf24"
              opacity="0.95"
            />
            <path
              d="M162 330c10 10 15 18 15 26 0 9-7 15-15 15s-15-6-15-15c0-5 2-10 5-14 1 5 3 8 7 9-2-8 0-14 3-21z"
              fill="#f97316"
              opacity="0.8"
            />

            {/* khachapuri stuck to the oven wall */}
            <g transform="translate(0,-16)">
              <path
                d="M126 268c-8-30 10-56 40-58 26-2 40 14 44 30 3 14-4 30-20 36-22 8-56 8-64-8z"
                fill="url(#hero-bread)"
                stroke="#92400e"
                strokeWidth="2.5"
              />
              <ellipse cx="168" cy="252" rx="24" ry="18" fill="#fef9c3" />
              <circle cx="168" cy="252" r="8" fill="#fbbf24" />
              <path
                d="M254 262c-6-28 12-52 40-52 24 0 38 16 40 32 2 15-8 30-24 34-20 5-50 2-56-14z"
                fill="url(#hero-bread)"
                stroke="#92400e"
                strokeWidth="2.5"
              />
              <ellipse cx="294" cy="248" rx="22" ry="16" fill="#fef9c3" />
              <circle cx="294" cy="248" r="7" fill="#fbbf24" />
            </g>

            <path
              d="M104 440h212"
              stroke="#b45309"
              strokeWidth="7"
              strokeLinecap="round"
              opacity="0.75"
            />
            <text
              x="210"
              y="470"
              textAnchor="middle"
              fill="#fbbf24"
              fontSize="0"
              aria-hidden="true"
            >
              tone
            </text>
          </svg>
        </div>
      </div>
    </section>
  )
}

const FACTS = [
  { value: '48', label: 'seats around one fire' },
  { value: '5:40am', label: 'the oak is lit' },
  { value: '2019', label: 'open on Rope Walk' },
]

export function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero"
      className="relative overflow-hidden bg-stone-950 text-stone-100"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(70%_60%_at_15%_0%,rgba(245,158,11,0.28),transparent_60%),radial-gradient(50%_50%_at_90%_100%,rgba(20,184,166,0.18),transparent_65%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-400">
            Catalan live-fire kitchen · Providence, Rhode Island
          </p>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Everything on this menu has met the fire.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-stone-300">
            Casa Marisol is forty-eight seats around an open oak hearth, where Núria Vidal-Reyes
            cooks the Costa Brava the way her grandmother did — whole fish laid straight on the
            coals, bomba rice in a flat pan until the base catches, and country bread pulled out of
            the ash at half past four every afternoon.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#visit"
              data-testid="hero-cta"
              className="rounded-full bg-amber-500 px-8 py-4 text-base font-semibold text-stone-950 shadow-xl shadow-amber-900/30 transition hover:bg-amber-400"
            >
              Reserve a table
            </a>
            <a
              href="#menus"
              data-testid="hero-secondary-cta"
              className="rounded-full border border-stone-600 px-8 py-4 text-base font-semibold text-stone-100 transition hover:border-amber-400 hover:text-amber-400"
            >
              Read tonight&rsquo;s menu
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-stone-800 pt-8">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="font-serif text-3xl font-semibold text-amber-400">{fact.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-stone-400">
                  {fact.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <svg
            viewBox="0 0 420 460"
            role="img"
            aria-label="Illustration of the arched hearth at Casa Marisol with a whole fish over embers"
            className="w-full drop-shadow-2xl"
          >
            <defs>
              <linearGradient id="hero-wall" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#292524" />
                <stop offset="100%" stopColor="#0c0a09" />
              </linearGradient>
              <radialGradient id="hero-glow" cx="50%" cy="78%" r="52%">
                <stop offset="0%" stopColor="#fde68a" />
                <stop offset="45%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#7c2d12" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="hero-fish" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#e7e5e4" />
                <stop offset="100%" stopColor="#a8a29e" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="420" height="460" rx="28" fill="url(#hero-wall)" />
            <path
              d="M60 430V190a150 150 0 0 1 300 0v240z"
              fill="#1c1917"
              stroke="#57534e"
              strokeWidth="3"
            />
            <path d="M92 430V196a118 118 0 0 1 236 0v234z" fill="#0c0a09" />
            <ellipse cx="210" cy="392" rx="118" ry="72" fill="url(#hero-glow)" opacity="0.9" />

            {[0, 1, 2, 3, 4, 5].map((i) => (
              <rect
                key={i}
                x={126 + i * 27}
                y={396 + (i % 2) * 6}
                width="22"
                height="13"
                rx="5"
                fill={i % 2 ? '#f59e0b' : '#dc2626'}
                opacity="0.92"
              />
            ))}

            <path
              d="M210 300c22 20 33 36 33 52 0 18-15 32-33 32s-33-14-33-32c0-10 4-18 12-27 2 10 7 16 15 17-3-15 1-29 6-42z"
              fill="#fbbf24"
              opacity="0.95"
            />
            <path
              d="M170 322c11 11 17 20 17 29 0 10-8 17-17 17s-17-7-17-17c0-6 2-11 6-16 1 6 4 9 8 10-2-8 0-16 3-23z"
              fill="#f97316"
              opacity="0.8"
            />
            <path
              d="M252 328c9 9 14 16 14 24 0 8-6 14-14 14s-14-6-14-14c0-5 2-9 5-13 1 5 3 8 7 8-2-7 0-13 2-19z"
              fill="#f97316"
              opacity="0.75"
            />

            <g transform="translate(0,-24)">
              <path
                d="M132 300c26-30 88-44 132-22 12 6 22 14 30 22-8 8-18 16-30 22-44 22-106 8-132-22z"
                fill="url(#hero-fish)"
                stroke="#78716c"
                strokeWidth="2"
              />
              <path d="M294 300l34-22v44z" fill="#d6d3d1" stroke="#78716c" strokeWidth="2" />
              <circle cx="166" cy="292" r="6" fill="#1c1917" />
              <path
                d="M186 282c18 8 40 10 62 4M186 318c18-8 40-10 62-4"
                stroke="#78716c"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M120 300h188"
                stroke="#44403c"
                strokeWidth="3"
                strokeDasharray="4 10"
                strokeLinecap="round"
              />
            </g>

            <path
              d="M92 430h236"
              stroke="#78716c"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.7"
            />
            <g stroke="#14b8a6" strokeWidth="2.5" fill="none" opacity="0.6">
              <path d="M40 66c14-10 24-10 38 0s24 10 38 0" strokeLinecap="round" />
              <path d="M40 84c14-10 24-10 38 0s24 10 38 0" strokeLinecap="round" />
            </g>
            <text
              x="304"
              y="80"
              textAnchor="middle"
              className="font-serif"
              fill="#f59e0b"
              fontSize="20"
              letterSpacing="4"
            >
              EST 2019
            </text>
          </svg>
        </div>
      </div>
    </section>
  )
}

const FACTS = [
  { value: 'Nine', label: 'lifters per class, never ten' },
  { value: '5:45am', label: 'first bar loaded, weekdays' },
  { value: '12 weeks', label: 'of programming written ahead' },
]

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 text-stone-100"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(60% 55% at 78% 18%, rgba(251,191,36,0.18), transparent 70%), radial-gradient(45% 40% at 8% 88%, rgba(120,113,108,0.35), transparent 70%)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-400">
            Brunswick East · Coaching since 2019
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            <span className="block">Northline Strength Co.</span>
            <span className="mt-2 block text-stone-400">
              Strong enough for the rest of your life.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-300">
            We are a nine-person barbell room on Cavendish Lane, not a gym floor with a class
            attached. Three coaches, one written programme, and a bar that gets a little heavier
            every fortnight — whether you are thirty-two and have never squatted, or sixty-one and
            have been told to stop.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#trial"
              data-testid="hero-cta"
              className="rounded-full bg-amber-400 px-7 py-3.5 text-sm font-bold text-stone-950 transition-colors hover:bg-amber-300"
            >
              Claim your free trial week
            </a>
            <a
              href="#timetable"
              data-testid="hero-secondary-cta"
              className="rounded-full border border-stone-600 px-7 py-3.5 text-sm font-semibold text-stone-200 transition-colors hover:border-amber-400 hover:text-amber-400"
            >
              See this week&rsquo;s timetable
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-stone-800 pt-8 sm:grid-cols-3">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="text-2xl font-black tracking-tight text-amber-400">{fact.value}</dt>
                <dd className="mt-1 text-sm leading-snug text-stone-400">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex items-center justify-center">
          <svg
            viewBox="0 0 420 380"
            role="img"
            aria-label="Illustration of a loaded barbell resting on a rack in the Northline studio"
            className="w-full max-w-md drop-shadow-2xl"
          >
            <defs>
              <linearGradient id="hero-plate" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fcd34d" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <linearGradient id="hero-floor" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1c1917" />
                <stop offset="100%" stopColor="#292524" />
              </linearGradient>
            </defs>

            <rect x="10" y="290" width="400" height="70" rx="12" fill="url(#hero-floor)" />
            <path d="M40 290 L60 210 h300 l20 80z" fill="#1c1917" opacity="0.85" />

            <rect x="86" y="120" width="16" height="180" rx="4" fill="#57534e" />
            <rect x="318" y="120" width="16" height="180" rx="4" fill="#57534e" />
            <rect x="78" y="150" width="32" height="8" rx="4" fill="#78716c" />
            <rect x="310" y="150" width="32" height="8" rx="4" fill="#78716c" />

            <rect x="70" y="170" width="280" height="12" rx="6" fill="#e7e5e4" />
            <rect x="70" y="170" width="280" height="5" rx="2.5" fill="#fafaf9" opacity="0.7" />

            <g>
              <rect x="96" y="128" width="18" height="96" rx="6" fill="url(#hero-plate)" />
              <rect x="118" y="140" width="14" height="72" rx="5" fill="#a8a29e" />
              <rect x="292" y="140" width="14" height="72" rx="5" fill="#a8a29e" />
              <rect x="310" y="128" width="18" height="96" rx="6" fill="url(#hero-plate)" />
            </g>

            <circle cx="210" cy="176" r="7" fill="#0c0a09" />
            <path
              d="M150 250 q60 26 120 0"
              stroke="#fbbf24"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
            <text x="210" y="278" textAnchor="middle" fill="#a8a29e" fontSize="15">
              102.5 kg · set four of five
            </text>
          </svg>
        </div>
      </div>
    </section>
  )
}

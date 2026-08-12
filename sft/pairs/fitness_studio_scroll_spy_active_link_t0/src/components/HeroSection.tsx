function BarbellIllustration() {
  return (
    <svg
      viewBox="0 0 480 360"
      className="h-full w-full"
      role="img"
      aria-label="Loaded barbell resting across a lifting platform"
    >
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1c1917" />
          <stop offset="55%" stopColor="#0c0a09" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="hero-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e7e5e4" />
          <stop offset="50%" stopColor="#a8a29e" />
          <stop offset="100%" stopColor="#57534e" />
        </linearGradient>
        <linearGradient id="hero-plate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#0b0f19" />
        </linearGradient>
        <radialGradient id="hero-glow" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#bef264" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#bef264" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="480" height="360" rx="24" fill="url(#hero-sky)" />
      <rect width="480" height="360" rx="24" fill="url(#hero-glow)" />

      {/* rack uprights in the background */}
      <rect x="42" y="46" width="12" height="220" rx="4" fill="#292524" />
      <rect x="426" y="46" width="12" height="220" rx="4" fill="#292524" />
      {[74, 110, 146, 182, 218].map((y) => (
        <g key={y}>
          <circle cx="48" cy={y} r="3" fill="#57534e" />
          <circle cx="432" cy={y} r="3" fill="#57534e" />
        </g>
      ))}

      {/* the bar */}
      <rect x="86" y="170" width="308" height="10" rx="5" fill="url(#hero-bar)" />
      <rect x="150" y="167" width="180" height="16" rx="6" fill="#78716c" opacity="0.55" />

      {/* left plates */}
      <ellipse cx="128" cy="175" rx="15" ry="66" fill="url(#hero-plate)" stroke="#bef264" strokeWidth="2.5" />
      <ellipse cx="108" cy="175" rx="12" ry="52" fill="url(#hero-plate)" stroke="#57534e" strokeWidth="2" />
      <ellipse cx="94" cy="175" rx="8" ry="34" fill="#1c1917" stroke="#fbbf24" strokeWidth="2" />

      {/* right plates */}
      <ellipse cx="352" cy="175" rx="15" ry="66" fill="url(#hero-plate)" stroke="#bef264" strokeWidth="2.5" />
      <ellipse cx="372" cy="175" rx="12" ry="52" fill="url(#hero-plate)" stroke="#57534e" strokeWidth="2" />
      <ellipse cx="386" cy="175" rx="8" ry="34" fill="#1c1917" stroke="#fbbf24" strokeWidth="2" />

      {/* platform */}
      <rect x="60" y="258" width="360" height="46" rx="8" fill="#1c1917" stroke="#3f3f46" strokeWidth="2" />
      <path d="M60 281h360" stroke="#292524" strokeWidth="2" />
      {[92, 140, 188, 236, 284, 332, 380].map((x) => (
        <path key={x} d={`M${x} 258v46`} stroke="#292524" strokeWidth="2" />
      ))}

      {/* chalk marks */}
      <path d="M132 318c14-6 30-6 44 0" stroke="#e7e5e4" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
      <path d="M306 322c10-4 22-4 32 0" stroke="#e7e5e4" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
    </svg>
  )
}

const HERO_STATS: ReadonlyArray<readonly [string, string]> = [
  ['8', 'lifting platforms'],
  ['12', 'members per class, hard cap'],
  ['4', 'full-time coaches on staff'],
  ['0', 'contracts or joining fees'],
]

export function HeroSection() {
  return (
    <section
      id="top"
      data-testid="hero"
      className="relative overflow-hidden border-b border-white/10 bg-stone-950"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-lime-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-amber-500/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-lime-300">
            Bellwater · Strength &amp; conditioning
          </p>
          <h1 className="mt-5 text-5xl font-black uppercase leading-[0.95] tracking-tight text-stone-50 sm:text-6xl">
            <span className="block">Get strong on a{' '}</span>
            <span className="block text-lime-300">written plan</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-300">
            Northline is a coached barbell gym, not a drop-in fitness floor. Every member trains off
            a twelve-week block written for them by a coach who watches them lift it, and every
            block ends with a re-test so you can see in numbers what the last three months bought
            you. Bring whatever training age you have — we start where you actually are.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#join"
              data-testid="hero-primary-cta"
              className="rounded-full bg-lime-300 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-stone-950 transition-colors hover:bg-lime-200"
            >
              Book a free intro session
            </a>
            <a
              href="#classes"
              data-testid="hero-secondary-cta"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-stone-100 transition-colors hover:border-lime-300 hover:text-lime-300"
            >
              See the class list
            </a>
          </div>

          <p className="mt-6 text-sm text-stone-400">
            First session is 60 minutes, costs nothing, and ends with a written recommendation
            whether or not you join.
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {HERO_STATS.map(([value, label]) => (
              <div key={label} data-testid="hero-stat">
                <dt className="text-3xl font-black text-lime-300">{value}</dt>
                <dd className="mt-1 text-xs leading-snug text-stone-400">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
            <BarbellIllustration />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-stone-900 p-5 ring-1 ring-white/10 sm:left-10 sm:right-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              This week on the floor
            </p>
            <p className="mt-2 text-sm text-stone-300">
              Block 3 of the winter cycle — squat waves at 78%, snatch-grip pulls, and the Thursday
              engine test. Nineteen members re-test their five-rep max on Saturday morning.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

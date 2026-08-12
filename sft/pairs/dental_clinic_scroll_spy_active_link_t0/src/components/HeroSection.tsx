const REASSURANCES = [
  'Saturday mornings, no surcharge',
  'Most major insurers billed directly',
  'Same-day emergency chair held daily',
]

function ArchWindowScene() {
  return (
    <svg viewBox="0 0 420 460" className="h-auto w-full" role="img" aria-labelledby="hero-scene-title">
      <title id="hero-scene-title">
        The treatment room at Copper Birch Dental — an arched window, a birch branch and morning light
      </title>
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ccfbf1" />
          <stop offset="55%" stopColor="#f0fdfa" />
          <stop offset="100%" stopColor="#fef3c7" />
        </linearGradient>
        <linearGradient id="hero-frame" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#115e59" />
          <stop offset="100%" stopColor="#134e4a" />
        </linearGradient>
        <linearGradient id="hero-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e7e5e4" />
          <stop offset="100%" stopColor="#d6d3d1" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="420" height="460" rx="28" fill="url(#hero-floor)" />
      <path d="M40 210a170 170 0 0 1 340 0v212H40Z" fill="url(#hero-frame)" />
      <path d="M54 210a156 156 0 0 1 312 0v198H54Z" fill="url(#hero-sky)" />

      <path d="M210 54v354" stroke="#115e59" strokeWidth="5" />
      <path d="M60 210h300" stroke="#115e59" strokeWidth="5" />
      <path d="M78 300h264" stroke="#115e59" strokeWidth="4" />

      <circle cx="300" cy="128" r="34" fill="#fcd34d" opacity="0.75" />
      <circle cx="300" cy="128" r="52" fill="#fde68a" opacity="0.35" />

      <path
        d="M112 408V236c0-16 10-26 24-34"
        stroke="#a8a29e"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M112 262h-9m9 26h11m-11 28h-9m9 26h12" stroke="#78716c" strokeWidth="3" strokeLinecap="round" />
      <path d="M136 202c18-6 32 2 38 18-18 6-32-2-38-18Z" fill="#5eead4" />
      <path d="M136 202c-16-10-18-26-8-40 16 10 18 26 8 40Z" fill="#2dd4bf" />
      <path d="M164 168c14-10 30-7 40 7-14 10-30 7-40-7Z" fill="#14b8a6" />

      <rect x="238" y="316" width="120" height="70" rx="16" fill="#f5f5f4" />
      <rect x="238" y="316" width="120" height="70" rx="16" fill="none" stroke="#d6d3d1" strokeWidth="2" />
      <path
        d="M298 330c3.6 1.4 5.4 4 5.4 7.8 0 3.4-1.7 5.9-3.3 5.9-1 0-1.5-.9-2.1-.9s-1.1.9-2.1.9c-1.6 0-3.3-2.5-3.3-5.9 0-3.8 1.8-6.4 5.4-7.8Z"
        fill="#0f766e"
      />
      <rect x="256" y="356" width="84" height="6" rx="3" fill="#e7e5e4" />
      <rect x="256" y="368" width="56" height="6" rx="3" fill="#e7e5e4" />

      <rect x="52" y="422" width="316" height="14" rx="7" fill="#f59e0b" opacity="0.9" />
      <rect x="40" y="408" width="340" height="14" rx="7" fill="#0f766e" />
    </svg>
  )
}

function ArrowGlyph() {
  return (
    <svg viewBox="0 0 20 20" className="ml-2 h-4 w-4" aria-hidden="true" fill="none">
      <path d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function CheckGlyph() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" fill="none">
      <circle cx="10" cy="10" r="8.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="m6.4 10.3 2.5 2.5 4.7-5.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-b from-white via-stone-50 to-teal-50/60"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-amber-100/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h1>
            <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">
              Copper Birch Dental · Rivermill
            </span>
            <span className="mt-4 block text-4xl font-semibold leading-[1.08] tracking-tight text-teal-950 sm:text-5xl lg:text-6xl">
              The dentist you stop dreading
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
            About a third of the people who sit in our chairs have not seen a dentist in five years or more, and
            nobody here is going to make you feel bad about it. Appointments run forty minutes instead of fifteen,
            every price is quoted in writing before we pick up an instrument, and you can stop us at any point by
            simply raising a hand.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book"
              data-testid="hero-primary-cta"
              className="inline-flex items-center justify-center rounded-full bg-teal-800 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-900/15 transition-colors hover:bg-teal-900"
            >
              Book your first visit
              <ArrowGlyph />
            </a>
            <a
              href="#treatments"
              data-testid="hero-secondary-cta"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-7 py-3.5 text-base font-semibold text-teal-900 transition-colors hover:border-teal-300 hover:bg-teal-50"
            >
              See treatments &amp; prices
            </a>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {REASSURANCES.map((line) => (
              <li key={line} className="flex items-start gap-2.5 text-sm font-medium text-stone-600">
                <CheckGlyph />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-4 shadow-xl shadow-stone-900/5">
            <ArchWindowScene />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl border border-stone-200 bg-white px-5 py-4 shadow-lg">
            <p className="text-2xl font-semibold tracking-tight text-teal-900">27 years</p>
            <p className="text-xs text-stone-500">on the same corner of Halloway Street</p>
          </div>
        </div>
      </div>
    </section>
  )
}

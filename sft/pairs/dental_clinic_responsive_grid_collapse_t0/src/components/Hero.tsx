const CHIPS = [
  'Same-day crowns, milled downstairs',
  'Evening hours Tuesday & Thursday',
  'Prices posted before you sit down',
]

/** Opening band: the practice name, the promise, two actions, an illustration. */
export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero"
      className="relative overflow-hidden bg-gradient-to-br from-[#0f4c4f] via-[#134e4a] to-[#0d2b2e] text-[#faf5ec]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#c68a3e]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-[#1c6f6b]/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#faf5ec]/25 bg-[#faf5ec]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c68a3e]" aria-hidden="true" />
            Accepting new families
          </p>

          <h1 className="font-serif text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            Quarry Hill Dental
            <span className="mt-3 block text-2xl font-normal text-[#f2e9da]/90 sm:text-3xl">
              One street, one visit, no runaround.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#f2e9da]/85">
            We are a two-dentist general and restorative practice in the old marble
            block below Quarry Hill. We scan, mill and fit crowns in the same
            building on the same afternoon, we tell you what a visit costs before
            you sit down, and we have never once lectured anybody about flossing.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#book"
              data-testid="hero-primary-cta"
              className="rounded-full bg-[#c68a3e] px-7 py-3.5 text-base font-semibold text-[#0d2b2e] shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
            >
              Book a first visit — $149
            </a>
            <a
              href="#treatments"
              data-testid="hero-secondary-cta"
              className="rounded-full border border-[#faf5ec]/40 px-7 py-3.5 text-base font-semibold text-[#faf5ec] transition-colors hover:bg-[#faf5ec]/10"
            >
              See what we treat
            </a>
          </div>

          <ul className="mt-10 flex flex-col gap-3 text-sm text-[#f2e9da]/80 sm:flex-row sm:flex-wrap sm:gap-6">
            {CHIPS.map((chip) => (
              <li key={chip} className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0" aria-hidden="true">
                  <circle cx="10" cy="10" r="9" fill="#c68a3e" opacity="0.25" />
                  <path
                    d="M6 10.4l2.6 2.6L14 7.6"
                    fill="none"
                    stroke="#f2e9da"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <svg
            viewBox="0 0 420 360"
            className="w-full drop-shadow-2xl"
            role="img"
            aria-label="Illustration of the Water Street practice below Quarry Hill"
          >
            <defs>
              <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f2e9da" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#f2e9da" stopOpacity="0.04" />
              </linearGradient>
              <linearGradient id="hero-hill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1c6f6b" />
                <stop offset="100%" stopColor="#0f4c4f" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="400" height="340" rx="28" fill="url(#hero-sky)" />
            <path d="M30 250l90-120 62 84 48-58 130 154H30z" fill="url(#hero-hill)" />
            <path d="M120 130l38 52-76 0z" fill="#f2e9da" opacity="0.35" />
            <rect x="132" y="214" width="150" height="106" rx="10" fill="#faf5ec" />
            <rect x="150" y="238" width="38" height="34" rx="4" fill="#1c6f6b" opacity="0.8" />
            <rect x="200" y="238" width="38" height="34" rx="4" fill="#1c6f6b" opacity="0.8" />
            <rect x="182" y="286" width="40" height="34" rx="4" fill="#c68a3e" />
            <path
              d="M330 96c9 0 13 5.6 13 12.6 0 5.6-2.4 9.2-2.4 16.8 0 6.5 1.9 9.7 1.9 14 0 3.8-1.9 6.2-4.6 6.2-4 0-4.8-7-8.4-7s-4.4 7-8.4 7c-2.7 0-4.6-2.4-4.6-6.2 0-4.3 1.9-7.5 1.9-14 0-7.6-2.4-11.2-2.4-16.8C316.5 101.6 320.6 96 330 96z"
              fill="#faf5ec"
            />
            <circle cx="330" cy="122" r="7" fill="#c68a3e" opacity="0.65" />
            <g stroke="#f2e9da" strokeWidth="2" opacity="0.5">
              <path d="M40 300h340" />
              <path d="M60 318h300" />
            </g>
          </svg>

          <div className="absolute -bottom-6 left-4 rounded-2xl bg-[#faf5ec] px-5 py-4 text-[#0d2b2e] shadow-xl">
            <p className="font-serif text-2xl font-semibold">218 Water St</p>
            <p className="text-sm text-[#0d2b2e]/70">Free lot behind the building</p>
          </div>
        </div>
      </div>
    </section>
  )
}

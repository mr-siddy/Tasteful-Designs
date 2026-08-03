const PROMISES = [
  'Sixty-minute first visits',
  'Same-day emergency chairs',
  'Written quotes before we start',
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-teal-900 via-teal-800 to-teal-700 text-stone-50"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-amber-300/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 h-[22rem] w-[22rem] rounded-full bg-teal-300/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-stone-50/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200 ring-1 ring-inset ring-stone-50/20">
            Accepting new patients this month
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            The dental studio that actually runs on time.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-teal-50/90">
            Alder Court Dental has looked after Kestrel Park families since 2014. We book one
            patient per chair, start when we said we would, and hand you a printed plan with real
            prices before anyone picks up a drill. No upsell, no lecture about the flossing you
            skipped in March.
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {PROMISES.map((promise) => (
              <li
                key={promise}
                data-testid="hero-promise"
                className="flex items-center gap-2 rounded-full bg-teal-950/30 px-4 py-2 text-sm font-medium text-teal-50 ring-1 ring-inset ring-stone-50/15"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4 text-amber-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m4 10.5 4 4 8-9" />
                </svg>
                {promise}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              data-testid="hero-cta"
              className="rounded-full bg-amber-300 px-7 py-3.5 text-sm font-semibold text-teal-950 shadow-lg shadow-teal-950/20 transition hover:bg-amber-200"
            >
              Request an appointment
            </a>
            <a
              href="#services"
              className="rounded-full px-7 py-3.5 text-sm font-semibold text-stone-50 ring-1 ring-inset ring-stone-50/40 transition hover:bg-stone-50/10"
            >
              See what a visit costs
            </a>
          </div>

          <p className="mt-6 text-sm text-teal-100/80">
            In pain today? Call <span className="font-semibold text-stone-50">(206) 555-0142</span>{' '}
            before 11am and we will find you a chair the same afternoon.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-[2.5rem] bg-stone-50/10 p-4 ring-1 ring-inset ring-stone-50/20">
            <svg
              viewBox="0 0 420 360"
              className="h-auto w-full rounded-[2rem]"
              role="img"
              aria-label="Illustration of the Alder Court treatment room with a dental chair, window and plant"
            >
              <defs>
                <linearGradient id="hero-room" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ecfeff" />
                  <stop offset="100%" stopColor="#ccfbf1" />
                </linearGradient>
                <linearGradient id="hero-chair" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0f766e" />
                  <stop offset="100%" stopColor="#134e4a" />
                </linearGradient>
              </defs>
              <rect width="420" height="360" rx="28" fill="url(#hero-room)" />
              <rect x="34" y="34" width="128" height="112" rx="14" fill="#fef3c7" />
              <path d="M34 118h128v28H34z" fill="#fcd34d" opacity="0.7" />
              <circle cx="126" cy="70" r="18" fill="#fbbf24" />
              <rect x="196" y="46" width="188" height="14" rx="7" fill="#99f6e4" />
              <rect x="196" y="74" width="140" height="14" rx="7" fill="#99f6e4" />
              <rect x="196" y="102" width="164" height="14" rx="7" fill="#99f6e4" />
              <path
                d="M78 296c0-52 30-84 72-84h94c40 0 66 28 66 70v14H78z"
                fill="url(#hero-chair)"
              />
              <path d="M150 212c-6-46 10-72 44-72s52 26 46 72z" fill="#14b8a6" />
              <rect x="106" y="296" width="212" height="18" rx="9" fill="#0f172a" opacity="0.25" />
              <path
                d="M320 150c22 0 34 14 34 34s-16 34-34 34"
                stroke="#0f766e"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="330" cy="120" r="22" fill="#fbbf24" />
              <path
                d="M56 300c4-34 12-52 26-56 6 22 6 40 0 56z"
                fill="#0d9488"
                opacity="0.8"
              />
              <rect x="44" y="300" width="52" height="26" rx="8" fill="#f59e0b" />
            </svg>
          </div>

          <div className="mt-5 flex items-center gap-4 rounded-3xl bg-stone-50 p-5 text-teal-950 shadow-xl shadow-teal-950/20">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-800 text-lg font-semibold text-amber-200">
              NR
            </span>
            <p className="text-sm leading-relaxed">
              <span className="block font-semibold">Dr. Nadia Rehman, principal dentist</span>
              “We built this practice around the appointment I always wanted as a patient: on time,
              explained in plain words, and priced up front.”
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

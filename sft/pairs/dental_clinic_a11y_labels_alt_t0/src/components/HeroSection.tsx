const CHIPS = [
  'First appointment of the day at 7:00am',
  'Last chair goes down at 8:00pm',
  'Saturday hygiene appointments',
  'Quiet room for nervous patients',
]

function ClockToothIllustration() {
  return (
    <svg
      viewBox="0 0 520 440"
      className="h-full w-full"
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      <defs>
        <linearGradient id="heroSky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0b2d45" />
          <stop offset="100%" stopColor="#17466a" />
        </linearGradient>
        <linearGradient id="heroMint" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#2fb99b" />
          <stop offset="100%" stopColor="#8fd3c4" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="480" height="400" rx="42" fill="url(#heroSky)" />
      <circle cx="430" cy="90" r="70" fill="url(#heroMint)" opacity="0.35" />
      <circle cx="96" cy="360" r="54" fill="#ffd98a" opacity="0.35" />
      <path
        d="M260 96c22 0 33 10 45 10 17 0 28 13 28 34 0 27-12 47-18 67-5 17-9 27-18 27-10 0-13-16-17-31-3-11-6-18-10-18s-7 7-10 18c-3 15-7 31-17 31-9 0-13-10-18-27-6-20-18-40-18-67 0-21 11-34 28-34 12 0 23-10 45-10z"
        fill="#f6fafb"
      />
      <g stroke="#2fb99b" strokeWidth="5" strokeLinecap="round" fill="none">
        <path d="M260 128v34" />
      </g>
      <g transform="translate(330 250)">
        <circle r="78" fill="#f6fafb" />
        <circle r="78" fill="none" stroke="#2fb99b" strokeWidth="8" />
        <g stroke="#0b2d45" strokeWidth="6" strokeLinecap="round">
          <path d="M0 0v-44" />
          <path d="M0 0l32 20" />
        </g>
        <g fill="#0b2d45">
          <circle cx="0" cy="-62" r="4" />
          <circle cx="62" cy="0" r="4" />
          <circle cx="0" cy="62" r="4" />
          <circle cx="-62" cy="0" r="4" />
        </g>
      </g>
      <g transform="translate(70 210)" fill="#f6fafb" opacity="0.92">
        <rect width="150" height="170" rx="18" />
        <rect x="18" y="26" width="114" height="12" rx="6" fill="#0b2d45" opacity="0.75" />
        <rect x="18" y="54" width="86" height="12" rx="6" fill="#0b2d45" opacity="0.35" />
        <rect x="18" y="86" width="114" height="12" rx="6" fill="#2fb99b" />
        <rect x="18" y="114" width="60" height="12" rx="6" fill="#0b2d45" opacity="0.35" />
        <circle cx="120" cy="140" r="16" fill="#2fb99b" />
      </g>
    </svg>
  )
}

export function HeroSection() {
  return (
    <section
      id="top"
      data-testid="hero"
      className="relative overflow-hidden border-b border-[#0b2d45]/10 bg-gradient-to-b from-[#eaf4f5] via-[#f6fafb] to-[#f6fafb]"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#2fb99b]/40 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#128a72]">
            14 Sorrel Street · Ashbourne Green
          </p>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Dentistry that fits the week you actually have.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#0b2d45]/75">
            Cedar &amp; Vale keeps chairs open from seven in the morning until eight at night, six
            days a week, so a check-up, a filling or your child&rsquo;s first visit never has to cost
            you a day of work or a morning of school. Dr. Priya Nandakumar has run the studio on
            Sorrel Street for eleven years, and every registered patient is promised a chair inside
            the same week if something goes wrong.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              data-testid="hero-cta"
              className="rounded-full bg-[#0b2d45] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0b2d45]/20 transition hover:bg-[#17466a]"
            >
              Request an appointment
            </a>
            <a
              href="#services"
              className="rounded-full border border-[#0b2d45]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#0b2d45] transition hover:border-[#0b2d45]/40"
            >
              See treatments and prices
            </a>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {CHIPS.map((chip) => (
              <li key={chip} className="flex items-start gap-2.5 text-sm text-[#0b2d45]/80">
                <svg
                  viewBox="0 0 20 20"
                  className="mt-0.5 h-4 w-4 shrink-0"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle cx="10" cy="10" r="10" fill="#2fb99b" />
                  <path
                    d="M5.5 10.4l3 3 6-6.4"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-[#2fb99b]/25 to-transparent blur-2xl" />
          <div className="relative aspect-[13/11] w-full">
            <ClockToothIllustration />
          </div>
          <div className="relative -mt-10 ml-6 w-fit rounded-2xl border border-[#0b2d45]/10 bg-white p-5 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2fb99b]">
              Next free chair
            </p>
            <p className="mt-1 font-serif text-2xl font-semibold">Thursday, 7:20am</p>
            <p className="mt-1 text-sm text-[#0b2d45]/70">
              Hygiene with Renée · 45 minutes · $95
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

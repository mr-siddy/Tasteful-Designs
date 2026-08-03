const HEADLINE_NUMBERS = [
  { value: '12', label: 'people per class, capped' },
  { value: '14', label: 'lifting platforms on the floor' },
  { value: '9 yrs', label: 'coaching on Ropewalk Street' },
]

function PlatformRoomIllustration() {
  return (
    <svg
      viewBox="0 0 520 400"
      className="h-auto w-full"
      role="img"
      aria-label="Illustration of the Tidewater platform room at dawn"
      focusable="false"
    >
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0B2A33" />
          <stop offset="100%" stopColor="#164C55" />
        </linearGradient>
        <linearGradient id="hero-floor" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E4682A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1D7A6B" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="520" height="400" rx="26" fill="url(#hero-sky)" />

      {/* window wall */}
      <g opacity="0.5">
        {[40, 130, 220, 310, 400].map((x) => (
          <rect key={x} x={x} y="42" width="72" height="150" rx="6" fill="#F7F2EA" opacity="0.09" />
        ))}
        <path
          d="M30 196h460"
          stroke="#F7F2EA"
          strokeOpacity="0.25"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* harbour skyline seen through the glass */}
      <path
        d="M40 150h26v-28h18v28h22v-46h20v46h30v-20h24v20h26v-34h18v34h22v-24h22v24h30v-40h18v40h34"
        fill="none"
        stroke="#1D7A6B"
        strokeWidth="2.5"
        strokeOpacity="0.7"
      />

      {/* lifter */}
      <g transform="translate(196 168)">
        <rect x="-92" y="86" width="242" height="10" rx="5" fill="#0B2A33" />
        <rect x="-96" y="60" width="14" height="30" rx="4" fill="#E4682A" />
        <rect x="132" y="60" width="14" height="30" rx="4" fill="#E4682A" />
        <rect x="-84" y="70" width="220" height="7" rx="3.5" fill="#F7F2EA" />
        <circle cx="26" cy="6" r="15" fill="#F7F2EA" />
        <path
          d="M26 22v34M26 34l-24 12M26 34l26 12M12 56l-6 30M40 56l8 30"
          stroke="#F7F2EA"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </g>

      {/* turf lane */}
      <rect x="30" y="300" width="460" height="62" rx="14" fill="url(#hero-floor)" opacity="0.28" />
      <g stroke="#F7F2EA" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="10 12">
        <path d="M46 331h428" />
      </g>
      <text x="46" y="384" fill="#F7F2EA" fillOpacity="0.55" fontSize="15" fontWeight="600">
        40m turf lane · 6 rowers · 4 bikes
      </text>
    </svg>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[#0B2A33]/10 bg-gradient-to-b from-[#FBF8F2] via-[#F7F2EA] to-[#EFE6D8]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#1D7A6B]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[#E4682A]/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#1D7A6B]/30 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#1D7A6B]">
            Fell&apos;s Landing · Baltimore
          </p>

          <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            <span className="block">Tidewater Strength &amp; Movement</span>
            <span className="mt-3 block text-[#E4682A]">
              Coached lifting that survives a busy week
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#3C4E54]">
            We are a coaching room, not a gym floor you are left alone on. Twelve people to a class,
            a written plan you keep on paper, and four coaches who know what you lifted last Tuesday
            — built for nurses coming off nights, cooks who finish at midnight, and parents with a
            ninety-minute window.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#book-intro"
              data-testid="hero-cta"
              className="rounded-full bg-[#0B2A33] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0B2A33]/15 hover:bg-[#123c48]"
            >
              Book a free intro
            </a>
            <a
              href="#schedule"
              className="rounded-full border-2 border-[#0B2A33]/20 px-7 py-3.5 text-sm font-bold text-[#0B2A33] hover:border-[#0B2A33]/50"
            >
              See this week&apos;s classes
            </a>
          </div>

          <p className="mt-5 text-sm text-[#5B6B70]">
            No joining fee, no twelve-month contract, and the intro is a real conversation with a
            coach rather than a sales desk.
          </p>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            {HEADLINE_NUMBERS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#0B2A33]/10 bg-white/70 px-4 py-4"
              >
                <dt className="text-2xl font-black text-[#0B2A33]">{stat.value}</dt>
                <dd className="mt-1 text-xs font-semibold leading-snug text-[#5B6B70]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-[28px] border border-[#0B2A33]/10 bg-white/50 p-4 shadow-xl shadow-[#0B2A33]/10">
          <PlatformRoomIllustration />
          <p className="px-2 pb-1 pt-4 text-sm text-[#5B6B70]">
            The platform room at 6am, looking east over the water towards Fell&apos;s Point.
          </p>
        </div>
      </div>
    </section>
  )
}

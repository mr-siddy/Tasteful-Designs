const HEADLINE_NUMBERS = [
  { value: '8', label: 'people per class, never nine' },
  { value: '10', label: 'reformers and two towers' },
  { value: '2016', label: 'on Almond Court since' },
]

function ReformerIllustration() {
  return (
    <svg
      viewBox="0 0 420 300"
      className="h-full w-full"
      role="img"
      aria-label="Line drawing of a Pilates reformer in the studio window light"
    >
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FBF6EC" />
          <stop offset="100%" stopColor="#E9DFC9" />
        </linearGradient>
        <linearGradient id="hero-floor" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E3D6BE" />
          <stop offset="100%" stopColor="#D8C7A8" />
        </linearGradient>
      </defs>
      <rect width="420" height="300" rx="24" fill="url(#hero-sky)" />
      <rect x="36" y="26" width="150" height="150" rx="10" fill="#DCEAF0" stroke="#8FB8C9" strokeWidth="2" />
      <path d="M111 26 L111 176 M36 101 L186 101" stroke="#8FB8C9" strokeWidth="2" />
      <circle cx="330" cy="72" r="34" fill="#F2D9A8" opacity="0.75" />
      <rect y="212" width="420" height="88" fill="url(#hero-floor)" />
      <g stroke="#24493B" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M96 214 L96 246" />
        <path d="M336 214 L336 246" />
        <path d="M88 214 L344 214" />
      </g>
      <rect x="104" y="188" width="228" height="26" rx="10" fill="#24493B" />
      <rect x="118" y="176" width="92" height="16" rx="7" fill="#C2571F" />
      <g stroke="#1E1B16" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.75">
        <path d="M236 188 L268 168 L300 188" />
        <path d="M268 168 L268 150" />
      </g>
      <circle cx="268" cy="142" r="9" fill="#1E1B16" opacity="0.75" />
      <g stroke="#8FB8C9" strokeWidth="2.5" strokeLinecap="round">
        <path d="M104 200 L60 200" />
        <path d="M332 200 L376 200" />
      </g>
      <circle cx="56" cy="200" r="6" fill="#C2571F" />
      <circle cx="380" cy="200" r="6" fill="#C2571F" />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-[#FBF6EC] to-[#F7F1E6]">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F2D9A8]/50 blur-2xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C2571F]">
            Reformer · Barre-strength · Mobility
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl">
            Sundial Movement Studio
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4A4436]">
            Ten reformers, eight people to a class, and an instructor who remembers what your left
            hip did last Tuesday. We coach bodies that already have a history — a rebuilt shoulder,
            a lumbar fusion, twenty years behind a desk, a second baby, sixty-one years of standing
            on a ferry deck — and we write the plan down so you can keep it.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#visit"
              data-testid="hero-cta"
              className="rounded-full bg-[#C2571F] px-7 py-3.5 text-sm font-semibold text-[#FFF8EC] shadow-md shadow-[#C2571F]/20"
            >
              Book your $25 intro session
            </a>
            <a
              href="#timetable"
              data-testid="hero-secondary-cta"
              className="rounded-full border border-[#24493B] px-7 py-3.5 text-sm font-semibold text-[#24493B]"
            >
              See this week&apos;s timetable
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-[#E3D6BE] pt-8">
            {HEADLINE_NUMBERS.map((item) => (
              <div key={item.value}>
                <dt className="text-3xl font-semibold tracking-tight text-[#24493B]">{item.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-[#7A7263]">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="rounded-3xl border border-[#E3D6BE] bg-white/50 p-4 shadow-sm">
          <ReformerIllustration />
          <p className="px-2 pb-1 pt-4 text-sm text-[#7A7263]">
            The front room at 17 Almond Court, 7:04am on a Tuesday, before the first spring is
            loaded.
          </p>
        </div>
      </div>
    </section>
  )
}

import { SmokeDivider } from './Icons'

function HearthIllustration() {
  return (
    <svg
      viewBox="0 0 420 320"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of the open oak hearth behind the pass at Ember and Oak"
    >
      <defs>
        <linearGradient id="heroRoom" x1="0" y1="0" x2="0" y2="320" gradientUnits="userSpaceOnUse">
          <stop stopColor="#292524" />
          <stop offset="1" stopColor="#0c0a09" />
        </linearGradient>
        <radialGradient id="heroGlow" cx="0.5" cy="0.62" r="0.55">
          <stop stopColor="#fbbf24" stopOpacity="0.95" />
          <stop offset="0.55" stopColor="#ea580c" stopOpacity="0.55" />
          <stop offset="1" stopColor="#7c2d12" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="420" height="320" rx="20" fill="url(#heroRoom)" />
      <rect x="28" y="26" width="364" height="212" rx="12" fill="#1c1917" stroke="#57534e" />
      <rect x="52" y="46" width="316" height="172" rx="8" fill="#0c0a09" />
      <ellipse cx="210" cy="176" rx="150" ry="96" fill="url(#heroGlow)" />

      {/* burning logs */}
      <g fill="#78350f" stroke="#292524" strokeWidth="2">
        <rect x="128" y="182" width="164" height="16" rx="8" />
        <rect x="150" y="164" width="120" height="14" rx="7" transform="rotate(-4 210 171)" />
        <rect x="166" y="150" width="88" height="12" rx="6" transform="rotate(5 210 156)" />
      </g>
      {/* flames */}
      <path d="M186 152c8-20 2-30-6-40 18 6 30 20 30 34s-9 22-20 22-14-8-4-16Z" fill="#f97316" />
      <path d="M214 148c10-16 6-28-2-38 22 8 34 24 34 38s-10 22-22 22-20-10-10-22Z" fill="#fb923c" />
      <path d="M204 168c5-10 3-16-1-22 12 5 18 13 18 22s-5 12-10 12-12-4-7-12Z" fill="#fde68a" />

      {/* grill bars and hanging cuts */}
      <g stroke="#a8a29e" strokeWidth="3" strokeLinecap="round">
        <path d="M112 132h196M112 120h196" />
        <path d="M132 108v-30M186 108v-42M240 108v-30M292 108v-38" />
      </g>
      <g fill="#7f1d1d" stroke="#450a0a" strokeWidth="2">
        <ellipse cx="132" cy="72" rx="15" ry="10" />
        <ellipse cx="186" cy="60" rx="18" ry="12" />
        <ellipse cx="240" cy="72" rx="14" ry="9" />
        <ellipse cx="292" cy="64" rx="17" ry="11" />
      </g>

      {/* pass counter and plates */}
      <rect x="28" y="238" width="364" height="20" rx="6" fill="#44403c" />
      <rect x="28" y="258" width="364" height="42" rx="10" fill="#1c1917" />
      <g fill="#e7e5e4">
        <circle cx="96" cy="248" r="9" />
        <circle cx="160" cy="248" r="9" />
        <circle cx="224" cy="248" r="9" />
        <circle cx="288" cy="248" r="9" />
      </g>
      <g fill="#a8a29e" opacity="0.7">
        <rect x="60" y="272" width="60" height="6" rx="3" />
        <rect x="140" y="272" width="96" height="6" rx="3" />
        <rect x="256" y="272" width="72" height="6" rx="3" />
      </g>
    </svg>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-stone-950 text-stone-100"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-orange-700/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-32">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-amber-300">
            Live fire · no gas on the line
          </p>
          <h1
            id="hero-heading"
            className="mt-7 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
          >
            Ember &amp; Oak
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-300">
            Thirty-eight seats around a nine-foot oak-and-almond-wood hearth in a converted brass
            foundry on Foundry Lane. Everything you eat here crosses the fire — the bread, the
            leeks, the sixty-day ribeye, and, on a good night, the dessert. Chef Nadia Okonkwo
            cooks what the market gave her that morning, and the menu is rewritten by hand before
            every service.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#reserve"
              data-testid="hero-primary-cta"
              className="rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-stone-950 shadow-xl shadow-amber-900/40 transition-colors hover:bg-amber-400"
            >
              Reserve a table
            </a>
            <a
              href="#menu"
              data-testid="hero-secondary-cta"
              className="rounded-full border border-stone-600 px-7 py-3.5 text-sm font-semibold text-stone-100 transition-colors hover:border-amber-400 hover:text-amber-300"
            >
              Read tonight&rsquo;s menu
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-stone-800 pt-8 text-sm">
            <div>
              <dt className="text-stone-400">Dinner</dt>
              <dd className="mt-1 font-semibold text-stone-100">Tue&ndash;Sun, 5:30pm</dd>
            </div>
            <div>
              <dt className="text-stone-400">Hearth lunch</dt>
              <dd className="mt-1 font-semibold text-stone-100">Sundays, noon</dd>
            </div>
            <div>
              <dt className="text-stone-400">Room</dt>
              <dd className="mt-1 font-semibold text-stone-100">38 seats + 9 at the fire</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-amber-500/25 via-orange-700/15 to-transparent blur-xl" />
          <div className="relative overflow-hidden rounded-[24px] border border-stone-800 bg-stone-900 p-3 shadow-2xl shadow-black/60">
            <HearthIllustration />
          </div>
          <p className="mt-4 text-center text-xs uppercase tracking-[0.24em] text-stone-500">
            The pass, 6:40pm, second seating
          </p>
        </div>
      </div>

      <SmokeDivider className="block h-14 w-full text-stone-100" />
    </section>
  )
}

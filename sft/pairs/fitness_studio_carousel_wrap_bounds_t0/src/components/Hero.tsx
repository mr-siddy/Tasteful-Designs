import { CalendarIcon, ShieldIcon, StopwatchIcon } from './Icons'

const HERO_POINTS = [
  { icon: <ShieldIcon className="h-5 w-5" />, text: 'Coached every session — no drop-in guesswork' },
  { icon: <CalendarIcon className="h-5 w-5" />, text: '34 sessions a week, 5am through 8pm' },
  { icon: <StopwatchIcon className="h-5 w-5" />, text: 'Sessions run 60 minutes, start to shower' },
]

export default function Hero() {
  return (
    <section id="top" data-testid="hero" className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_20%_0%,rgba(163,230,53,0.20),transparent_70%),radial-gradient(45%_45%_at_90%_20%,rgba(56,189,248,0.14),transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-lime-300">
            Hollins Market · Baltimore
          </p>
          <h1 className="mt-5 text-5xl font-black leading-[1.03] tracking-tight text-white sm:text-6xl">
            Strength you can still use at sixty.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Foundry Hill is a coached barbell gym on Ellicott Street. You get a written program,
            a coach who watches every set, and a room of 240 people who know your name — not a
            wall of screens, a sign-up sheet, and the hope that you figure it out alone.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#join"
              className="rounded-full bg-lime-300 px-7 py-3.5 text-base font-bold text-slate-950 shadow-xl shadow-lime-300/25 transition hover:bg-lime-200"
            >
              Book a free first session
            </a>
            <a
              href="#programs"
              className="rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-slate-100 transition hover:border-lime-300 hover:text-lime-300"
            >
              See the five programs
            </a>
          </div>

          <ul className="mt-10 grid gap-3 text-sm text-slate-300 sm:grid-cols-1">
            {HERO_POINTS.map((point) => (
              <li key={point.text} className="flex items-center gap-3">
                <span className="text-lime-300">{point.icon}</span>
                {point.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 shadow-2xl">
            <svg viewBox="0 0 420 320" className="w-full" role="img" aria-label="Illustration of a loaded barbell resting on a lifting platform under gym lights">
              <defs>
                <linearGradient id="hero-floor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <linearGradient id="hero-plate" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#d9f99d" />
                  <stop offset="100%" stopColor="#4d7c0f" />
                </linearGradient>
                <radialGradient id="hero-glow" cx="50%" cy="18%" r="60%">
                  <stop offset="0%" stopColor="#a3e635" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#a3e635" stopOpacity="0" />
                </radialGradient>
              </defs>

              <rect width="420" height="320" rx="20" fill="url(#hero-floor)" />
              <rect width="420" height="320" rx="20" fill="url(#hero-glow)" />

              <path d="M60 250h300l24 44H36l24-44Z" fill="#111c30" />
              <path d="M60 250h300l6 11H54l6-11Z" fill="#a3e635" opacity="0.35" />

              <rect x="52" y="176" width="316" height="8" rx="4" fill="#cbd5e1" />
              <rect x="96" y="150" width="20" height="60" rx="6" fill="url(#hero-plate)" />
              <rect x="120" y="158" width="14" height="44" rx="5" fill="#94a3b8" />
              <rect x="304" y="150" width="20" height="60" rx="6" fill="url(#hero-plate)" />
              <rect x="286" y="158" width="14" height="44" rx="5" fill="#94a3b8" />
              <rect x="150" y="174" width="120" height="12" rx="6" fill="#e2e8f0" opacity="0.35" />

              <g stroke="#a3e635" strokeWidth="2" opacity="0.55">
                <path d="M40 60h60M40 78h34" strokeLinecap="round" />
                <path d="M380 60h-60M380 78h-34" strokeLinecap="round" />
              </g>
              <circle cx="210" cy="72" r="26" fill="none" stroke="#a3e635" strokeWidth="2" opacity="0.5" />
              <circle cx="210" cy="72" r="9" fill="#a3e635" opacity="0.7" />
            </svg>

            <dl className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <dt className="text-[11px] uppercase tracking-widest text-slate-400">Members</dt>
                <dd className="text-2xl font-black text-lime-300">240</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-widest text-slate-400">Platforms</dt>
                <dd className="text-2xl font-black text-lime-300">8</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-widest text-slate-400">Coaches</dt>
                <dd className="text-2xl font-black text-lime-300">6</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

import { ArrowRightIcon, CheckIcon, StarIcon } from './Icons'

const PROMISES = [
  'Every price published, down to the filling',
  'Crowns designed, milled and fitted in one visit',
  'Two emergency slots held open every weekday',
]

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-[#12263F] via-[#173654] to-[#0d1b2e] text-[#F1F5F7]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#2AA79B]/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#F26D5B]/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#2AA79B]/40 bg-[#2AA79B]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#7fd8ce]">
            Open since 2013 · 40 Cobb Street
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.22em] text-[#F26D5B]">
              Tidewater Dental Studio
            </span>
            Know the price before you open wide.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#C6D3DF]">
            Twelve treatments, every one of them listed on this page with what it costs and how long
            you will be in the chair. Nothing is quoted for the first time while you are lying down,
            and nothing gets added to the bill that you did not agree to standing up.
          </p>

          <ul className="mt-8 space-y-3">
            {PROMISES.map((promise) => (
              <li key={promise} className="flex items-start gap-3 text-[#DCE6EE]">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#2AA79B]" />
                <span>{promise}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-[#F26D5B] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#F26D5B]/25 transition hover:bg-[#e05a48]"
            >
              Book a first visit
              <ArrowRightIcon />
            </a>
            <a
              href="#treatments"
              className="inline-flex items-center gap-2 rounded-full border border-[#F1F5F7]/30 px-7 py-3.5 text-sm font-semibold text-[#F1F5F7] transition hover:border-[#F1F5F7]/70"
            >
              See the price list
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3 text-sm text-[#9FB3C6]">
            <span className="flex text-[#F2B45B]" aria-hidden="true">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </span>
            <span>4.9 from 612 reviews across the Marlowe Quarter</span>
          </div>
        </div>

        <div className="relative">
          <svg viewBox="0 0 480 420" className="w-full drop-shadow-2xl" role="img" aria-label="Illustration of the Tidewater treatment room looking onto the harbour">
            <defs>
              <linearGradient id="hero-sky" x1="0" y1="0" x2="0.4" y2="1">
                <stop offset="0%" stopColor="#F1F5F7" />
                <stop offset="100%" stopColor="#C9DCE4" />
              </linearGradient>
              <linearGradient id="hero-water" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2AA79B" />
                <stop offset="100%" stopColor="#12263F" />
              </linearGradient>
              <linearGradient id="hero-chair" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F26D5B" />
                <stop offset="100%" stopColor="#c9452f" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="480" height="420" rx="28" fill="url(#hero-sky)" />
            <circle cx="366" cy="96" r="42" fill="#F2B45B" opacity="0.85" />
            <path d="M0 250h480v142a28 28 0 0 1-28 28H28a28 28 0 0 1-28-28z" fill="url(#hero-water)" />
            <path
              d="M0 262c40-16 80-16 120 0s80 16 120 0 80-16 120 0 80 16 120 0"
              stroke="#F1F5F7"
              strokeWidth="3"
              opacity="0.45"
              fill="none"
            />
            <path
              d="M0 292c40-16 80-16 120 0s80 16 120 0 80-16 120 0 80 16 120 0"
              stroke="#F1F5F7"
              strokeWidth="3"
              opacity="0.3"
              fill="none"
            />

            <g opacity="0.35" fill="#12263F">
              <rect x="24" y="176" width="34" height="76" rx="4" />
              <rect x="68" y="150" width="26" height="102" rx="4" />
              <rect x="104" y="192" width="40" height="60" rx="4" />
              <rect x="392" y="168" width="30" height="84" rx="4" />
              <rect x="432" y="196" width="26" height="56" rx="4" />
            </g>

            <g>
              <rect x="164" y="292" width="188" height="20" rx="10" fill="#12263F" opacity="0.35" />
              <path
                d="M172 288c0-14 10-24 24-24h108c14 0 24 10 24 24v6H172z"
                fill="url(#hero-chair)"
              />
              <rect x="196" y="196" width="120" height="76" rx="24" fill="url(#hero-chair)" />
              <rect x="300" y="176" width="58" height="26" rx="13" fill="#12263F" opacity="0.7" />
              <circle cx="152" cy="212" r="30" fill="#F1F5F7" />
              <circle cx="152" cy="212" r="18" fill="#2AA79B" opacity="0.55" />
              <path d="M152 182v-42h84" stroke="#12263F" strokeWidth="7" fill="none" strokeLinecap="round" />
            </g>

            <g transform="translate(232 60)">
              <path
                d="M-30 6c8-6 16-6 24 0 8-6 16-6 24 0 6 4.4 7.4 12.4 5.2 22.8-2.4 12.4-5.8 23.4-10.4 33.2-2.4 5.2-8.8 5.2-11 0L0 44l-7.8 18c-2.2 5.2-8.6 5.2-11 0-4.6-9.8-8-20.8-10.4-33.2C-31.4 18.4-30 10.4-30 6z"
                fill="#F1F5F7"
              />
              <path d="M0 20v26" stroke="#2AA79B" strokeWidth="5" strokeLinecap="round" />
            </g>

            <g transform="translate(60 330)" fill="#F1F5F7">
              <rect x="0" y="-14" width="132" height="52" rx="14" opacity="0.94" />
              <text x="16" y="8" fontSize="15" fontWeight="700" fill="#12263F">
                Crown fitted
              </text>
              <text x="16" y="27" fontSize="13" fill="#5B7089">
                in one visit · $980
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}

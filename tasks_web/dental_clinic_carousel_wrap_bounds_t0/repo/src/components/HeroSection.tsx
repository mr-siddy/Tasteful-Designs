import { AnchorIcon, ClockIcon, PoundIcon, StarRow } from './Icons'

const PROMISES = [
  { icon: <PoundIcon className="h-5 w-5" />, label: 'Every price printed on this page' },
  { icon: <ClockIcon className="h-5 w-5" />, label: '8am emergency window, every weekday' },
  { icon: <AnchorIcon className="h-5 w-5" />, label: 'Implants done here, not referred out' },
]

function QuaysideIllustration() {
  return (
    <svg
      viewBox="0 0 440 360"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of the Harbourline Dental surgery looking out over Saltmere harbour"
    >
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#E7F1F0" />
          <stop offset="100%" stopColor="#CFE4E1" />
        </linearGradient>
        <linearGradient id="hero-sun" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FBA06F" />
          <stop offset="100%" stopColor="#F2683C" />
        </linearGradient>
        <linearGradient id="hero-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3FA394" />
          <stop offset="100%" stopColor="#0F2E4A" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="440" height="360" rx="30" fill="url(#hero-sky)" />
      <circle cx="342" cy="86" r="48" fill="url(#hero-sun)" opacity="0.85" />

      <path d="M0 224h440v106a30 30 0 0 1-30 30H30a30 30 0 0 1-30-30V224Z" fill="url(#hero-water)" opacity="0.92" />
      <path d="M22 258c22-14 44-14 66 0s44 14 66 0 44-14 66 0 44 14 66 0 44-14 66 0" stroke="#FAF6F1" strokeWidth="3" fill="none" opacity="0.35" />
      <path d="M22 292c22-14 44-14 66 0s44 14 66 0 44-14 66 0 44 14 66 0 44-14 66 0" stroke="#FAF6F1" strokeWidth="3" fill="none" opacity="0.22" />

      <rect x="46" y="96" width="150" height="128" rx="12" fill="#FAF6F1" stroke="#0F2E4A" strokeWidth="3" />
      <path d="M46 128h150" stroke="#0F2E4A" strokeWidth="3" />
      <rect x="66" y="146" width="46" height="34" rx="5" fill="#CFE4E1" />
      <rect x="126" y="146" width="46" height="34" rx="5" fill="#CFE4E1" />
      <rect x="96" y="192" width="48" height="32" rx="4" fill="#F2683C" />
      <text x="121" y="120" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0F2E4A" fontFamily="ui-sans-serif, system-ui">
        HARBOURLINE
      </text>

      <path d="M232 224c0-32 24-54 58-54h96c28 0 48 19 48 45v9H232Z" fill="#0F2E4A" />
      <path d="M250 170c-14-4-22-16-22-31 0-17 12-29 29-29h20c13 0 23 10 23 23v37h-50Z" fill="#1B4A6B" />
      <rect x="316" y="196" width="106" height="16" rx="8" fill="#0A2237" />
      <path d="M356 170v-50a15 15 0 0 1 15-15h32" stroke="#8FA6B4" strokeWidth="7" strokeLinecap="round" fill="none" />
      <circle cx="408" cy="106" r="19" fill="#F7C74E" />
      <circle cx="408" cy="106" r="7" fill="#FAF6F1" />

      <path d="M96 224V150l40 22v52Z" fill="#FAF6F1" opacity="0.001" />
      <path d="M156 224l16-58 16 58Z" fill="#F2683C" opacity="0.9" />
      <path d="M172 166v58" stroke="#0F2E4A" strokeWidth="2.6" />
      <circle cx="26" cy="60" r="7" fill="#3FA394" opacity="0.6" />
      <circle cx="52" cy="42" r="4" fill="#F2683C" opacity="0.6" />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-[#FAF6F1] via-[#F6EFE6] to-[#EDF3F2]">
      <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#F2683C]/15 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#3FA394]/20 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-[#0F2E4A]/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0F2E4A]">
            <span className="h-2 w-2 rounded-full bg-[#F2683C]" aria-hidden="true" />
            4 Quay Parade, Saltmere
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.06] tracking-tight text-[#0F2E4A] sm:text-5xl lg:text-6xl">
            Harbourline Dental
            <span className="mt-3 block text-2xl font-medium leading-snug text-[#3B5A6E] sm:text-3xl">
              The dentist at the end of the quay, since 1974
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#3B4A54]">
            We bought this practice back off a chain in 2016 and rebuilt it around two rules: you will never be sold
            a treatment you did not ask about, and you will never see a number on an invoice that was not on the
            wall before you sat down. Nine of us work here, we make our own crowns in the room behind reception,
            and we keep the first two hours of every weekday clear for people in pain.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#visit"
              data-testid="hero-primary-cta"
              className="rounded-full bg-[#F2683C] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#F2683C]/30 transition hover:bg-[#DD5629]"
            >
              Register with the practice
            </a>
            <a
              href="#treatments"
              data-testid="hero-secondary-cta"
              className="rounded-full border border-[#0F2E4A]/25 px-7 py-3.5 text-base font-semibold text-[#0F2E4A] transition hover:border-[#0F2E4A]/70"
            >
              See the full price list
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {PROMISES.map((item) => (
              <li key={item.label} className="flex items-center gap-2.5 text-sm font-medium text-[#0F2E4A]">
                <span className="text-[#F2683C]">{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex items-center gap-4 border-t border-[#0F2E4A]/10 pt-6">
            <span className="text-[#F7A93C]">
              <StarRow />
            </span>
            <p className="text-sm text-[#3B4A54]">
              <span className="font-semibold text-[#0F2E4A]">4.9 from 847 reviews</span> · 2,310 households registered
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[30px] border border-[#0F2E4A]/10 bg-white/70 p-3 shadow-xl shadow-[#0F2E4A]/10">
            <QuaysideIllustration />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl border border-[#0F2E4A]/10 bg-[#FAF6F1] px-5 py-4 shadow-lg">
            <p className="text-xs uppercase tracking-widest text-[#8A7A66]">Next free examination</p>
            <p className="text-lg font-semibold text-[#0F2E4A]">Tuesday, 9:40am</p>
          </div>
        </div>
      </div>
    </section>
  )
}

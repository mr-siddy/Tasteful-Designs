import { ClockLeaf, LeafIcon, ShieldCheck, StarRow } from './Icons'

const HIGHLIGHTS = [
  { icon: <ClockLeaf className="h-5 w-5" />, label: '40-minute appointments' },
  { icon: <ShieldCheck className="h-5 w-5" />, label: 'Prices published, no upsell' },
  { icon: <LeafIcon className="h-5 w-5" />, label: 'Same-day emergency slots' },
]

function ChairIllustration() {
  return (
    <svg viewBox="0 0 420 340" className="h-full w-full" role="img" aria-label="Illustration of the treatment room at Marigold Dental Co.">
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#EAF2EC" />
          <stop offset="100%" stopColor="#D6E6DB" />
        </linearGradient>
        <linearGradient id="hero-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F7CE6E" />
          <stop offset="100%" stopColor="#E8A020" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="420" height="340" rx="28" fill="url(#hero-sky)" />
      <circle cx="330" cy="78" r="46" fill="url(#hero-gold)" opacity="0.75" />
      <rect x="40" y="52" width="120" height="96" rx="10" fill="#FBF7F0" />
      <path d="M52 140h96M52 122h72M52 104h84M52 86h60" stroke="#C4D6C9" strokeWidth="6" strokeLinecap="round" />
      <path d="M78 262c0-34 26-58 62-58h108c30 0 52 20 52 48v14H78v-4Z" fill="#123B36" />
      <path d="M96 204c-14-4-22-16-22-32 0-18 12-30 30-30h20c14 0 24 10 24 24v38H96Z" fill="#1B5049" />
      <rect x="248" y="248" width="112" height="16" rx="8" fill="#0C2B27" />
      <path d="M300 204v-52a16 16 0 0 1 16-16h34" stroke="#8A7A5C" strokeWidth="7" strokeLinecap="round" fill="none" />
      <circle cx="356" cy="136" r="20" fill="url(#hero-gold)" />
      <circle cx="356" cy="136" r="8" fill="#FBF7F0" />
      <path d="M110 300h230" stroke="#B9CDBE" strokeWidth="8" strokeLinecap="round" />
      <path d="M64 300h22M356 300h20" stroke="#E8A020" strokeWidth="8" strokeLinecap="round" />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-[#FBF7F0] via-[#F6F1E6] to-[#EFF4EE]">
      <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#E8A020]/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-[#123B36]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-[#123B36]/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#123B36]">
            <span className="h-2 w-2 rounded-full bg-[#E8A020]" />
            12 Pennant Street, Fernbank
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-[#123B36] sm:text-5xl lg:text-6xl">
            Marigold Dental Co.
            <span className="mt-2 block text-2xl font-medium text-[#3C6B60] sm:text-3xl">
              Unhurried dentistry for people who stopped going
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4A5A53]">
            Every appointment here runs forty minutes instead of twenty, and the dentist who examines you is the
            same one who fits your crown three weeks later. We publish what everything costs before you sit down,
            we keep four emergency slots open every single morning, and nobody on this team will ever sell you a
            treatment you did not ask about.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              data-testid="hero-primary-cta"
              className="rounded-full bg-[#E8A020] px-7 py-3.5 text-base font-semibold text-[#123B36] shadow-lg shadow-[#E8A020]/25 transition hover:bg-[#D69218]"
            >
              Book your first visit
            </a>
            <a
              href="#treatments"
              data-testid="hero-secondary-cta"
              className="rounded-full border border-[#123B36]/25 px-7 py-3.5 text-base font-semibold text-[#123B36] transition hover:border-[#123B36]/60"
            >
              See what things cost
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {HIGHLIGHTS.map((item) => (
              <li key={item.label} className="flex items-center gap-2.5 text-sm font-medium text-[#123B36]">
                <span className="text-[#E8A020]">{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex items-center gap-4 border-t border-[#123B36]/10 pt-6">
            <StarRow />
            <p className="text-sm text-[#4A5A53]">
              <span className="font-semibold text-[#123B36]">4.9 from 612 reviews</span> · 1,840 households registered
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[28px] border border-[#123B36]/10 bg-white/70 p-3 shadow-xl shadow-[#123B36]/10">
            <ChairIllustration />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl border border-[#123B36]/10 bg-[#FBF7F0] px-5 py-4 shadow-lg">
            <p className="text-xs uppercase tracking-widest text-[#8A7A5C]">Next free checkup</p>
            <p className="text-lg font-semibold text-[#123B36]">Thursday, 8:20am</p>
          </div>
        </div>
      </div>
    </section>
  )
}

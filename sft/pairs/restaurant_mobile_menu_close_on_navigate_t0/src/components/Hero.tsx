import { ArrowIcon, ClockIcon, PinIcon, StarIcon } from './Icons'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#12261F] text-[#F7F1E8]">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(60% 55% at 78% 18%, rgba(224,139,79,0.45) 0%, rgba(18,38,31,0) 70%), radial-gradient(45% 40% at 12% 85%, rgba(76,107,84,0.55) 0%, rgba(18,38,31,0) 72%)',
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-32">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#E08B4F]/40 bg-[#E08B4F]/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-[#E08B4F]">
            <StarIcon className="h-3.5 w-3.5" />
            Seattle Met, Restaurant of the Year 2025
          </p>
          <h1 className="mt-7 font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Copperfern
            <span className="mt-3 block text-2xl font-normal text-[#E08B4F] sm:text-3xl">
              Everything meets the fire first
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#F7F1E8]/85">
            One seven-foot hearth burns Washington apple and alder from three in the afternoon,
            and every plate that leaves our kitchen has spent time over it — the oysters, the
            bread, the greens, even the tart. Dinner is served Wednesday through Sunday, two
            blocks from where the Ballard fleet ties up.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#reserve"
              className="inline-flex items-center gap-2 rounded-full bg-[#C4653A] px-7 py-3.5 text-sm font-semibold text-[#F7F1E8] shadow-lg shadow-black/20 transition-colors hover:bg-[#E08B4F]"
            >
              Reserve a table
              <ArrowIcon />
            </a>
            <a
              href="#menus"
              className="inline-flex items-center gap-2 rounded-full border border-[#F7F1E8]/30 px-7 py-3.5 text-sm font-semibold text-[#F7F1E8] transition-colors hover:border-[#E08B4F] hover:text-[#E08B4F]"
            >
              Read tonight's menu
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-6 border-t border-[#F7F1E8]/15 pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-[#F7F1E8]/60">Open since</dt>
              <dd className="mt-1 font-serif text-2xl">2019</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-[#F7F1E8]/60">Seats</dt>
              <dd className="mt-1 font-serif text-2xl">62</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-[#F7F1E8]/60">Fire lit at</dt>
              <dd className="mt-1 font-serif text-2xl">3:00pm</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-[#F7F1E8]/15 bg-[#0C1D17]/70 p-6 shadow-2xl shadow-black/40">
            <svg viewBox="0 0 400 320" className="h-auto w-full" role="img" aria-label="Illustration of the Copperfern hearth with a fire, a grill grate and hanging copper pans">
              <defs>
                <linearGradient id="ember-glow" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#C4653A" />
                  <stop offset="55%" stopColor="#E08B4F" />
                  <stop offset="100%" stopColor="#F3C98B" />
                </linearGradient>
                <linearGradient id="brick" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#22463A" />
                  <stop offset="100%" stopColor="#0F2019" />
                </linearGradient>
              </defs>
              <rect x="18" y="24" width="364" height="272" rx="22" fill="url(#brick)" />
              <path d="M56 250h288" stroke="#4C6B54" strokeWidth="3" strokeLinecap="round" />
              <g opacity=".55">
                <path d="M56 96h288M56 132h288M56 168h288" stroke="#4C6B54" strokeWidth="1.5" />
              </g>
              <path
                d="M200 232c-34 0-58-20-58-47 0-24 17-40 30-58 5 14 12 22 22 28 9-11 12-22 10-34 22 17 34 40 34 64 0 27-24 47-38 47Z"
                fill="url(#ember-glow)"
              />
              <path
                d="M200 232c-16 0-27-10-27-23 0-12 9-19 15-28 3 7 6 11 11 14 4-6 6-11 5-17 10 8 16 19 16 31 0 13-11 23-20 23Z"
                fill="#FBEAD0"
                opacity=".85"
              />
              <g stroke="#E7C8A0" strokeWidth="3" strokeLinecap="round">
                <path d="M150 252h100" />
                <path d="M150 262h100" />
              </g>
              <g fill="none" stroke="#C48A5A" strokeWidth="3">
                <path d="M96 40v34a18 18 0 0 0 18 18h6a18 18 0 0 0 18-18V40" />
                <path d="M262 40v26a22 22 0 0 0 22 22h4a22 22 0 0 0 22-22V40" />
              </g>
              <g fill="#0F2019" opacity=".5">
                <ellipse cx="150" cy="272" rx="46" ry="7" />
                <ellipse cx="252" cy="272" rx="40" ry="6" />
              </g>
            </svg>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#F7F1E8]/75">
              <span className="inline-flex items-center gap-2">
                <PinIcon className="h-4 w-4 text-[#E08B4F]" />
                2140 NW Market St, Ballard
              </span>
              <span className="inline-flex items-center gap-2">
                <ClockIcon className="h-4 w-4 text-[#E08B4F]" />
                Wed–Sun, 5–10pm
              </span>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#F7F1E8]/60">
            Tonight the hearth is running apple wood from an orchard outside Wenatchee. The
            counter seats twelve and faces straight into the coals.
          </p>
        </div>
      </div>
    </section>
  )
}

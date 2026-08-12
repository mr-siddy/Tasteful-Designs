import { ArrowIcon, ClockIcon, PinIcon, RibbonDivider } from './Icons'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#faf6f0] via-[#f6eee4] to-[#f1e6d8]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,#f2704a33,transparent_65%)]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#2b3a7a]/20 bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2b3a7a]">
            <PinIcon className="h-3.5 w-3.5" />
            Kelso Park · open since 1998
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-[#152046] sm:text-5xl lg:text-6xl">
            Careful dentistry on Lantern Lane
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#1f2a4d]/80">
            We book every appointment at forty minutes instead of the usual twenty, which is
            the only reason we can explain what we are doing while we do it. You will get a
            written quote before anything is drilled, a straight answer about whether a tooth
            can wait, and nobody at this practice earns a commission for talking you into
            veneers you never asked about.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-[#152046] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#152046]/20 transition hover:bg-[#0e1638]"
            >
              Ask us for a time
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href="#treatments"
              className="inline-flex items-center gap-2 rounded-full border border-[#152046]/20 bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#152046] transition hover:border-[#152046]/40"
            >
              See treatments and prices
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-[#152046]/10 pt-7">
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2b3a7a]/70">
                Appointment
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-[#152046]">40 min</dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2b3a7a]/70">
                New patients
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-[#152046]">$155</dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2b3a7a]/70">
                Waiting list
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-[#152046]">9 days</dd>
            </div>
          </dl>

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-[#1f2a4d]/70">
            <ClockIcon className="h-4 w-4" />
            Late chairs until 7pm on Thursdays, and two Saturdays a month.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/70 bg-white/60 p-4 shadow-[0_30px_70px_-40px_rgba(21,32,70,0.55)] backdrop-blur">
            <svg
              viewBox="0 0 480 420"
              className="h-auto w-full rounded-[1.5rem]"
              role="img"
              aria-label="Illustration of the Lantern Lane practice: a saw-tooth roof lamp-works with a hanging lantern above the treatment room"
            >
              <defs>
                <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#233464" />
                  <stop offset="100%" stopColor="#3d5192" />
                </linearGradient>
                <linearGradient id="hero-floor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f7ece0" />
                  <stop offset="100%" stopColor="#e6d4bf" />
                </linearGradient>
                <radialGradient id="hero-lamp" cx="50%" cy="30%" r="60%">
                  <stop offset="0%" stopColor="#ffd9a8" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#ffd9a8" stopOpacity="0" />
                </radialGradient>
              </defs>

              <rect width="480" height="420" rx="24" fill="url(#hero-sky)" />
              <path d="M0 120l80-70 80 70 80-70 80 70 80-70 80 70v40H0z" fill="#1a2750" opacity="0.85" />
              <path d="M20 118l60-52 60 52M160 118l60-52 60 52M300 118l60-52 60 52" stroke="#8fa4dd" strokeWidth="3" fill="none" opacity="0.5" />
              <rect x="0" y="280" width="480" height="140" fill="url(#hero-floor)" />

              <circle cx="240" cy="150" r="120" fill="url(#hero-lamp)" />
              <path d="M240 40v34" stroke="#e8d3b4" strokeWidth="4" strokeLinecap="round" />
              <path d="M214 74h52l-7 14h-38z" fill="#e8d3b4" />
              <path d="M219 88h42v34a21 21 0 0 1-42 0z" fill="#ffc97f" />
              <path d="M240 96c6 5 8.5 10 8.5 15a8.5 8.5 0 0 1-17 0c0-5 2.5-10 8.5-15z" fill="#fff6e6" />

              <rect x="96" y="236" width="288" height="26" rx="13" fill="#2b3a7a" />
              <rect x="120" y="196" width="150" height="46" rx="20" fill="#f4f7ff" />
              <rect x="252" y="176" width="118" height="66" rx="26" fill="#f4f7ff" />
              <circle cx="392" cy="196" r="17" fill="#f2704a" />
              <path d="M392 179v34M375 196h34" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
              <rect x="150" y="262" width="24" height="52" rx="10" fill="#2b3a7a" />
              <rect x="300" y="262" width="24" height="52" rx="10" fill="#2b3a7a" />

              <g stroke="#152046" strokeWidth="2.4" fill="none" opacity="0.55">
                <path d="M52 330c0-14 10-22 22-22s22 8 22 22-6 34-14 34-8-14-8-20-10-6-10 0 0 20-8 20-4-20-4-34z" />
              </g>
              <circle cx="420" cy="336" r="26" fill="#fff" opacity="0.7" />
              <path d="M410 336l7 7 14-16" stroke="#2b3a7a" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <figure className="mt-5 rounded-3xl border border-[#152046]/10 bg-white p-5 shadow-sm">
            <blockquote className="text-sm leading-relaxed text-[#1f2a4d]/85">
              “I put off the dentist for eleven years. Ines drew the whole plan on a napkin
              before she touched anything, and it cost less than the number I had invented in
              my head.”
            </blockquote>
            <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#2b3a7a]/70">
              Devon Achebe · patient since 2021
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="text-[#faf6f0]">
        <RibbonDivider className="block h-14 w-full" />
      </div>
    </section>
  )
}

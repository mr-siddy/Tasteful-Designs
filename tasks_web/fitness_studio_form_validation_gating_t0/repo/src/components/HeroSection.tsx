import { CheckIcon } from './Icons'

const STATS = [
  { value: '12', label: 'people, hard cap, every single class' },
  { value: '31', label: 'classes a week across three rooms' },
  { value: '9 yrs', label: 'Tova taught rehab before she taught fitness' },
]

const PROMISES = [
  'Your teacher learns your name in week one and your history by week three.',
  'Every class has a scaled version written on the board before you walk in.',
  'No mirrors in studio two. No leaderboard anywhere in the building.',
]

export default function HeroSection() {
  return (
    <section
      id="top"
      data-testid="hero"
      className="relative overflow-hidden bg-[linear-gradient(168deg,#FAF6F0_0%,#F1EAE0_58%,#E7EFE9_100%)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(196,98,58,0.20),transparent_68%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(31,74,60,0.16),transparent_70%)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 py-20 sm:py-28 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#CFDCD4] bg-[#FAF6F0] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#1F4A3C]">
            Reformer · Heated yoga · Strength
          </p>

          <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-[#16211C] sm:text-5xl lg:text-[3.4rem]">
            Coached by name, on the top floor of the old rope works
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4B5A52]">
            Sablewood is a twelve-person studio on Delaney Wharf where the teacher
            watches your hips instead of the clock. Reformer, heated flow and
            barbell strength under one roof, scaled honestly for whatever body
            walked in the door today — first week back or fifteenth year in.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#intro"
              className="rounded-full bg-[#C4623A] px-7 py-3.5 text-center text-base font-bold text-[#FFF8F2] shadow-[0_16px_32px_-16px_rgba(196,98,58,0.95)] transition hover:bg-[#AC5330]"
            >
              Book a free intro session
            </a>
            <a
              href="#classes"
              className="rounded-full border-2 border-[#1F4A3C] px-7 py-3.5 text-center text-base font-bold text-[#1F4A3C] transition hover:bg-[#1F4A3C] hover:text-[#FAF6F0]"
            >
              See the class list
            </a>
          </div>

          <ul className="mt-9 space-y-3">
            {PROMISES.map((line) => (
              <li key={line} className="flex items-start gap-3 text-sm leading-relaxed text-[#3C4A42]">
                <CheckIcon title="Included" className="mt-0.5 h-5 w-5 shrink-0" />
                {line}
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-[#DCD2C4] pt-8 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="text-3xl font-black tracking-tight text-[#1F4A3C]">{stat.value}</dt>
                <dd className="mt-1 text-sm leading-snug text-[#5C6B63]">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-[#DCD2C4] bg-[#FFFCF8] p-5 shadow-[0_36px_70px_-44px_rgba(22,33,28,0.65)]">
            <svg
              viewBox="0 0 420 380"
              className="h-auto w-full"
              role="img"
              aria-label="Line drawing of the Sablewood reformer room with tall warehouse windows"
            >
              <defs>
                <linearGradient id="heroWall" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E9F0EB" />
                  <stop offset="100%" stopColor="#F6EFE5" />
                </linearGradient>
                <linearGradient id="heroLight" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F7D9B8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#F7D9B8" stopOpacity="0" />
                </linearGradient>
              </defs>

              <rect width="420" height="380" rx="22" fill="url(#heroWall)" />
              <path d="M0 300h420v80H0z" fill="#EFE4D5" />

              {[30, 150, 270].map((x) => (
                <g key={x}>
                  <rect x={x} y="40" width="90" height="180" rx="10" fill="#FFFDF9" stroke="#CBD8CF" strokeWidth="3" />
                  <path d={`M${x} 130h90M${x + 45} 40v180`} stroke="#CBD8CF" strokeWidth="3" />
                </g>
              ))}
              <path d="M120 40l150 180-60 60L60 100z" fill="url(#heroLight)" />

              <g>
                <rect x="58" y="268" width="230" height="16" rx="8" fill="#1F4A3C" />
                <rect x="86" y="248" width="104" height="22" rx="11" fill="#C4623A" />
                <path d="M74 284v26M272 284v26" stroke="#1F4A3C" strokeWidth="7" strokeLinecap="round" />
                <path d="M196 276h88" stroke="#F3E7D8" strokeWidth="4" strokeLinecap="round" />
                <circle cx="300" cy="276" r="13" fill="none" stroke="#1F4A3C" strokeWidth="5" />
              </g>

              <g>
                <circle cx="336" cy="196" r="26" fill="#1F4A3C" opacity="0.12" />
                <path
                  d="M336 172c-10 10-10 17 0 27s10 17 0 27"
                  fill="none"
                  stroke="#1F4A3C"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </g>

              <text
                x="210"
                y="344"
                textAnchor="middle"
                fontSize="19"
                fontWeight="800"
                fill="#1F4A3C"
                fontFamily="ui-sans-serif, system-ui, sans-serif"
              >
                Studio one · twelve reformers
              </text>
            </svg>
          </div>

          <div className="mt-5 rounded-2xl border border-[#DCD2C4] bg-[#1F4A3C] p-5 text-[#EDF3EF] shadow-[0_20px_44px_-30px_rgba(22,33,28,0.9)]">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#A9C6B7]">
              Next beginner on-ramp
            </p>
            <p className="mt-2 text-lg font-bold leading-snug">
              Monday 6 April, 6:15pm — eight spots, four already taken
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#C7D8CF]">
              Four weeks, same twelve people, same teacher. It is how everybody
              here started, including the ones who now deadlift twice a week.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight, HeroIllustration, StarRow } from './Icons'
import { Eyebrow, Shell, StatBlock } from './PageKit'

const HERO_STATS = [
  { value: '340', label: 'members training on a written program' },
  { value: '19 mo', label: 'average membership tenure' },
  { value: '8', label: 'people maximum in any coached session' },
  { value: '12', label: 'lifting platforms on the strength floor' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#14181D] text-[#FBF7F1]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-32 h-[26rem] w-[26rem] rounded-full bg-[#D9481F]/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 h-[24rem] w-[24rem] rounded-full bg-[#12554D]/40 blur-3xl"
      />
      <Shell className="relative grid gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <Eyebrow tone="sand">Ironside · 129 Foundry Row</Eyebrow>
          <h1 className="mt-6 text-4xl font-black leading-[1.03] tracking-tight sm:text-6xl">
            Get strong on a program someone actually wrote for you.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#E2D6C6]">
            Foundry Row is a coached barbell and conditioning club in the old canal district. No classes of
            forty, no random workout of the day, no screaming. You get an assessment, a written program that
            changes as you do, a coach on the floor every session, and a retest every eight weeks that tells
            you in numbers whether it worked.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#intro"
              data-testid="hero-primary-cta"
              className="inline-flex items-center gap-2 rounded-full bg-[#D9481F] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#D9481F]/25 transition-transform hover:-translate-y-0.5"
            >
              Book your free intro session
              <ArrowRight />
            </a>
            <a
              href="#membership"
              data-testid="hero-secondary-cta"
              className="inline-flex items-center gap-2 rounded-full border border-[#E2D6C6]/40 px-7 py-3.5 text-sm font-bold text-[#FBF7F1] transition-colors hover:border-[#D9481F] hover:text-[#F0803F]"
            >
              See membership options
            </a>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#E2D6C6]">
            <span className="flex items-center gap-1 text-[#F0A33F]" aria-label="Rated 4.9 out of 5">
              <StarRow />
              <StarRow />
              <StarRow />
              <StarRow />
              <StarRow />
            </span>
            <span className="font-semibold">4.9 from 214 member reviews</span>
            <span className="hidden h-4 w-px bg-[#E2D6C6]/30 sm:block" aria-hidden="true" />
            <span>Staffed 5:30am – 8:30pm on weekdays</span>
          </div>
        </div>

        <div className="relative">
          <HeroIllustration className="w-full rounded-[28px] shadow-2xl shadow-black/40" />
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
            {HERO_STATS.map((stat) => (
              <StatBlock key={stat.value} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </Shell>
    </section>
  )
}

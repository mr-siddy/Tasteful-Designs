import { ArrowIcon, ClockIcon, PinIcon, SparkIcon, StarIcon, StudioIllustration } from './Icons'

const HERO_STATS = [
  { value: '11 yrs', label: 'On Ballard Avenue' },
  { value: '40 min', label: 'Standard hygiene visit' },
  { value: '4.9', label: 'Average of 612 reviews' },
]

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-[#FAF6F1] via-[#F4EDE3] to-[#EFE6DA]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#4E7C6A]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-[-6rem] h-80 w-80 rounded-full bg-[#C2703D]/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#C2703D]/30 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#A85B2D]">
            <SparkIcon className="h-4 w-4" />
            Accepting new patients this month
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-tight text-[#0B2540] sm:text-5xl lg:text-6xl">
            Alder &amp; Bay Dental Studio
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#42566A]">
            A small Ballard practice in a converted ship-chandlery storefront, where the hygiene
            appointments run forty minutes instead of twenty, the crowns are milled in the back room
            while you wait, and every price on this page is the price you actually pay. We have looked
            after boat builders, night-shift nurses and three generations of the same Sunset Hill
            family since 2014.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full bg-[#0B2540] px-7 py-3.5 text-base font-semibold text-[#FAF6F1] shadow-lg shadow-[#0B2540]/15 transition hover:bg-[#123457]"
            >
              Reserve a first visit — $149
              <ArrowIcon />
            </a>
            <a
              href="#treatments"
              className="inline-flex items-center gap-2 rounded-full border border-[#0B2540]/20 bg-white/70 px-7 py-3.5 text-base font-semibold text-[#0B2540] transition hover:border-[#0B2540]/40"
            >
              See posted prices
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-[#D9CBB8] pt-8">
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-2xl font-semibold tracking-tight text-[#0B2540]">{stat.value}</span>
                  <span className="mt-1 block text-xs leading-snug text-[#7A6A58]">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/70 bg-white/60 p-4 shadow-xl shadow-[#0B2540]/10">
            <StudioIllustration className="h-auto w-full rounded-[1.5rem]" />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <p className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 text-sm font-medium text-[#0B2540] shadow-sm">
              <PinIcon className="h-5 w-5 shrink-0 text-[#C2703D]" />
              5412 Ballard Ave NW, Seattle
            </p>
            <p className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 text-sm font-medium text-[#0B2540] shadow-sm">
              <ClockIcon className="h-5 w-5 shrink-0 text-[#4E7C6A]" />
              Open at 7:00am, Monday to Thursday
            </p>
          </div>

          <p className="mt-4 flex items-center gap-2 text-sm text-[#7A6A58]">
            <span className="flex text-[#C2703D]">
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
            </span>
            “The first dentist I have not dreaded in twenty years.” — review left in March
          </p>
        </div>
      </div>
    </section>
  )
}

import { ArrowIcon, BoltIcon, ClockIcon, PinIcon, WattageCurve } from './Icons'

const BOARD = [
  { time: '6:15 am', name: 'The Ride', coach: 'Nadia Okonjo', left: '5 bikes left' },
  { time: '7:10 am', name: 'Ride + Lift', coach: 'Tomás Rivera', left: '2 bikes left' },
  { time: '12:30 pm', name: 'Sprint Deck', coach: 'Nadia Okonjo', left: '11 bikes left' },
  { time: '6:45 pm', name: 'Long Haul', coach: 'Priya Raman', left: 'Full — waitlist open' },
]

const FIGURES = [
  { value: '24', label: 'Keiser bikes, every one with a power meter' },
  { value: '45', label: 'Minutes, warm-up and cool-down included' },
  { value: '1 in 9', label: 'Members who came for the intro and stayed' },
]

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#101826] text-[#faf5ee]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,74,43,0.45),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-24 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(239,166,60,0.28),transparent_70%)]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.32em] text-[#efa63c]">
            <PinIcon className="h-4 w-4" />
            Marlowe Quarter · coached rides since 2019
          </p>

          <h1 className="mt-5 text-5xl font-black uppercase leading-[0.92] tracking-tight text-[#faf5ee] sm:text-6xl">
            Pressroom Athletic
          </h1>

          <p className="mt-5 max-w-xl text-2xl font-semibold leading-snug text-[#faf5ee] sm:text-[27px]">
            Forty-five hard minutes on the bike, in a room where the coach already knows
            your name and your numbers.
          </p>

          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[#faf5ee]/75">
            We built this studio inside the old Marlowe Gazette printworks, on the floor where
            the presses used to run all night. Twenty-four bikes face a raised platform, every
            class is capped so nobody rides anonymously, and your watts go up on the board next
            to your first name — not your body weight, not your age, not a leaderboard rank you
            never asked for.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#intro"
              className="inline-flex items-center gap-2 rounded-full bg-[#d94a2b] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#faf5ee] shadow-[0_16px_36px_-16px_rgba(217,74,43,0.95)] transition hover:bg-[#c03f22]"
            >
              Take the £9 intro ride
              <ArrowIcon />
            </a>
            <a
              href="#classes"
              className="inline-flex items-center gap-2 rounded-full border border-[#faf5ee]/30 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#faf5ee] transition hover:border-[#efa63c] hover:text-[#efa63c]"
            >
              See the six formats
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-[#faf5ee]/15 pt-8">
            {FIGURES.map((figure) => (
              <div key={figure.value}>
                <dt className="text-3xl font-black text-[#efa63c]">{figure.value}</dt>
                <dd className="mt-1 text-[13px] leading-snug text-[#faf5ee]/65">{figure.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-3xl border border-[#faf5ee]/12 bg-[#1b2436]/80 p-6 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-[#faf5ee]">
              On the board today
            </h2>
            <span className="flex items-center gap-1.5 rounded-full bg-[#d94a2b]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#efa63c]">
              <BoltIcon className="h-3.5 w-3.5" />
              Live board
            </span>
          </div>

          <ul className="mt-5 divide-y divide-[#faf5ee]/10">
            {BOARD.map((slot) => (
              <li key={slot.time} className="flex items-center gap-4 py-3.5">
                <span className="w-20 shrink-0 font-mono text-[13px] font-bold text-[#efa63c]">
                  {slot.time}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-[#faf5ee]">{slot.name}</span>
                  <span className="block text-xs text-[#faf5ee]/55">with {slot.coach}</span>
                </span>
                <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wide text-[#faf5ee]/60">
                  {slot.left}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl bg-[#101826] p-4">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#faf5ee]/60">
              <ClockIcon className="h-4 w-4 text-[#d94a2b]" />
              A 45-minute profile, Tuesday 6:15
            </p>
            <WattageCurve className="mt-3 h-36 w-full" />
            <p className="mt-2 text-xs leading-relaxed text-[#faf5ee]/55">
              Four climbs, three sprints, and a cool-down we actually ride out. The coach calls
              the target in watts, so a first-timer and a category-two racer can work the same
              interval in the same room.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

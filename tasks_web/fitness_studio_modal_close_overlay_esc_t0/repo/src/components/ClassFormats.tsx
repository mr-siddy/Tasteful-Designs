import {
  BikeIcon,
  BarbellIcon,
  BoltIcon,
  StopwatchIcon,
  MobilityIcon,
  SoundIcon,
} from './Icons'

type Format = {
  name: string
  minutes: string
  price: string
  capacity: string
  blurb: string
  detail: string
  Icon: (props: { className?: string }) => JSX.Element
}

const FORMATS: Format[] = [
  {
    name: 'The Ride',
    minutes: '45 minutes',
    price: '£16',
    capacity: '24 bikes',
    blurb: 'Our signature class, and the one the intro ride puts you in.',
    detail:
      'Ten minutes building, four climbs, three sprints and a cool-down that is long enough to be worth doing. The coach calls targets in watts and cadence, never in vague encouragement.',
    Icon: BikeIcon,
  },
  {
    name: 'Ride + Lift',
    minutes: '60 minutes',
    price: '£19',
    capacity: '16 riders',
    blurb: 'Half on the bike, half on the strength floor, one coach across both.',
    detail:
      'Twenty-eight minutes of intervals, then a barbell block of squats, rows and carries at a load you actually own. Popular at 7:10 because it replaces two trips to the gym.',
    Icon: BarbellIcon,
  },
  {
    name: 'Press Strength',
    minutes: '50 minutes',
    price: '£18',
    capacity: '8 stations',
    blurb: 'No bike at all — just eight lifting stations and a written plan.',
    detail:
      'A four-week block you repeat, so you can see the weight move. Squat or hinge, push, pull, carry. Your numbers are written on your own card and kept behind the desk.',
    Icon: BarbellIcon,
  },
  {
    name: 'Sprint Deck',
    minutes: '30 minutes',
    price: '£13',
    capacity: '24 bikes',
    blurb: 'The lunchtime class, in and showered inside an hour.',
    detail:
      'Eight thirty-second efforts drawn from a deck of cards, so nobody paces themselves through the middle. Hard, short, and finished before your calls start again at one.',
    Icon: BoltIcon,
  },
  {
    name: 'Long Haul',
    minutes: '75 minutes',
    price: '£22',
    capacity: '24 bikes',
    blurb: 'Sunday endurance for people training for something outdoors.',
    detail:
      'Steady tempo with two twenty-minute blocks at threshold, ridden to one long mix rather than a track-by-track playlist. Bring two bottles; we will fill them at the desk.',
    Icon: StopwatchIcon,
  },
  {
    name: 'Reset',
    minutes: '40 minutes',
    price: '£14',
    capacity: '14 mats',
    blurb: 'The class that keeps the other five sustainable.',
    detail:
      'Loaded stretching, hip and ankle work, breathing drills, then ten minutes in the sauna if you want them. Booked solid on Thursdays by people who ride five times a week.',
    Icon: MobilityIcon,
  },
]

export function ClassFormats() {
  return (
    <section id="classes" className="bg-[#faf5ee]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-3xl">
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#d94a2b]">
            <SoundIcon className="h-4 w-4" />
            Six formats, one timetable
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#101826] sm:text-5xl">
            Every class on the board, with the price on it
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-[#40485a]">
            No packages you have to phone about and no introductory rate that quietly triples in
            week five. These are the six things we run, from Monday at half five in the morning
            to Sunday at four in the afternoon, and this is what each one costs as a drop-in.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FORMATS.map((format) => (
            <article
              key={format.name}
              data-testid="class-card"
              className="flex flex-col rounded-3xl border border-[#101826]/10 bg-white p-7 shadow-[0_24px_60px_-45px_rgba(16,24,38,0.7)] transition hover:-translate-y-0.5 hover:border-[#d94a2b]/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#101826] text-[#efa63c]">
                <format.Icon className="h-6 w-6" />
              </span>

              <h3 className="mt-5 text-2xl font-black tracking-tight text-[#101826]">
                {format.name}
              </h3>

              <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] font-bold uppercase tracking-wider text-[#40485a]/70">
                <span>{format.minutes}</span>
                <span aria-hidden="true">·</span>
                <span>{format.capacity}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#d94a2b]">{format.price} drop-in</span>
              </p>

              <p className="mt-4 text-[15px] font-semibold leading-snug text-[#101826]">
                {format.blurb}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#40485a]">{format.detail}</p>

              <a
                href="#intro"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#d94a2b] transition hover:gap-2.5"
              >
                Start with the intro ride
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 rounded-2xl bg-[#f2e9db] px-6 py-5 text-sm leading-relaxed text-[#40485a]">
          <strong className="font-bold text-[#101826]">Shoes:</strong> bikes take SPD cleats or
          trainers with a stiff sole, and we lend both in sizes 3 to 13 at no charge. Towels are
          on the shelf by the recovery room, the showers have soap in them, and there is no
          charge for anything in that sentence.
        </p>
      </div>
    </section>
  )
}

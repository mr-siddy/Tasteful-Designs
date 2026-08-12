import { BarbellIcon, CalendarIcon, ChartIcon, HeartIcon, StopwatchIcon } from './Icons'

type Program = {
  name: string
  icon: JSX.Element
  price: string
  schedule: string
  cap: string
  blurb: string
  detail: string[]
}

const PROGRAMS: Program[] = [
  {
    name: 'Barbell Club',
    icon: <BarbellIcon className="h-6 w-6" />,
    price: '$189 / mo',
    schedule: 'Mon · Wed · Fri, six start times',
    cap: '14 lifters per session',
    blurb:
      'The main room. Squat, press, pull, carry — written for you in twelve-week blocks and adjusted every Friday.',
    detail: ['Individual written program', 'Every set coached on the floor', 'Retest week every twelve weeks'],
  },
  {
    name: 'Conditioning',
    icon: <StopwatchIcon className="h-6 w-6" />,
    price: '$149 / mo',
    schedule: 'Tue · Thu · Sat, four start times',
    cap: '18 per session',
    blurb:
      'Rowers, bikes, sleds and a stopwatch. Built around your heart rate, not around who can suffer loudest.',
    detail: ['Zone-2 base plus one hard day', 'Heart-rate belt loaned free', 'Pairs with Barbell Club'],
  },
  {
    name: 'Foundations',
    icon: <HeartIcon className="h-6 w-6" />,
    price: '$240 one-time',
    schedule: 'Six sessions, booked around you',
    cap: '2 lifters per coach',
    blurb:
      'For the never-lifted and the long-lapsed. Six sessions to learn the five lifts properly before you join a class.',
    detail: ['Movement screen on day one', 'Video of every lift, sent home', 'Rolls into any membership'],
  },
  {
    name: 'Masters 50+',
    icon: <ChartIcon className="h-6 w-6" />,
    price: '$169 / mo',
    schedule: 'Mon · Wed · Fri, 9:30am and 1pm',
    cap: '12 lifters per session',
    blurb:
      'Same lifts, longer warm-ups, more attention to hips and shoulders. The fastest-growing room in the gym.',
    detail: ['Bone-density-minded loading', 'Balance and carry work weekly', 'Coach-led warm-up, always'],
  },
  {
    name: 'Open Training',
    icon: <CalendarIcon className="h-6 w-6" />,
    price: '$99 / mo',
    schedule: 'Any staffed hour, 5am–8pm',
    cap: 'Platform booked in the app',
    blurb:
      'You already know what you are doing. Book a platform, train your own program, ask a coach when you want one.',
    detail: ['Full access to bars and plates', 'Monthly check-in included', 'No class commitment'],
  },
]

export default function ProgramGrid() {
  return (
    <section id="programs" data-testid="programs" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-lime-700">What we run</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Five programs, one training floor
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Everything at Foundry Hill is coached and written down. Pick the room that matches where
            you are today — you can move between them any month without paying a switching fee, and
            most members end up in two.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program) => (
            <li
              key={program.name}
              data-testid="program-card"
              className="flex flex-col rounded-3xl border border-slate-200 bg-stone-50 p-7 shadow-sm transition hover:border-lime-400 hover:shadow-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-lime-300">
                {program.icon}
              </span>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">{program.name}</h3>
              <p className="mt-1 text-sm font-semibold text-lime-700">{program.price}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{program.blurb}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                {program.detail.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-lime-500" />
                    {line}
                  </li>
                ))}
              </ul>
              <dl className="mt-6 border-t border-slate-200 pt-4 text-xs text-slate-500">
                <div className="flex justify-between gap-4 py-1">
                  <dt className="font-semibold uppercase tracking-wider">Schedule</dt>
                  <dd className="text-right">{program.schedule}</dd>
                </div>
                <div className="flex justify-between gap-4 py-1">
                  <dt className="font-semibold uppercase tracking-wider">Cap</dt>
                  <dd className="text-right">{program.cap}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

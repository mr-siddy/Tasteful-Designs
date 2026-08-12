import { TideDivider } from './icons'

const DAYS = [
  {
    day: 'Monday',
    slots: [
      { time: '6:15am', name: 'Tidewater 45', track: 'Row' },
      { time: '12:30pm', name: 'Power Half', track: 'Strength' },
      { time: '6:00pm', name: 'Barbell Base', track: 'Strength' },
      { time: '7:15pm', name: 'Slack Water', track: 'Restore' },
    ],
  },
  {
    day: 'Tuesday',
    slots: [
      { time: '6:15am', name: 'Split Ladder', track: 'Row' },
      { time: '9:30am', name: 'Tidewater 45', track: 'Row' },
      { time: '5:45pm', name: 'Deck & Rack', track: 'Strength' },
      { time: '7:00pm', name: 'Breath & Ballast', track: 'Restore' },
    ],
  },
  {
    day: 'Wednesday',
    slots: [
      { time: '6:15am', name: 'Sunrise 2k', track: 'Row' },
      { time: '12:30pm', name: 'Power Half', track: 'Strength' },
      { time: '6:00pm', name: 'Tidewater 45', track: 'Row' },
      { time: '7:30pm', name: 'Cedar & Plunge', track: 'Restore' },
    ],
  },
  {
    day: 'Thursday',
    slots: [
      { time: '6:15am', name: 'Barbell Base', track: 'Strength' },
      { time: '9:30am', name: 'Hinge Clinic', track: 'Strength' },
      { time: '5:45pm', name: 'Split Ladder', track: 'Row' },
      { time: '7:00pm', name: 'Slack Water', track: 'Restore' },
    ],
  },
  {
    day: 'Friday',
    slots: [
      { time: '6:15am', name: 'Tidewater 45', track: 'Row' },
      { time: '12:30pm', name: 'Hands On', track: 'Restore' },
      { time: '5:30pm', name: 'Deck & Rack', track: 'Strength' },
    ],
  },
  {
    day: 'Saturday',
    slots: [
      { time: '7:30am', name: 'Long Pull', track: 'Row' },
      { time: '9:30am', name: 'Barbell Base', track: 'Strength' },
      { time: '11:00am', name: 'Cedar & Plunge', track: 'Restore' },
    ],
  },
]

const TRACK_TONE: Record<string, string> = {
  Row: 'bg-[#12626c]/12 text-[#0b3a41]',
  Strength: 'bg-[#e0813d]/16 text-[#8a4715]',
  Restore: 'bg-[#5b7c81]/14 text-[#2c565c]',
}

export function Timetable() {
  return (
    <section id="timetable" className="bg-[#f1e7d7]">
      <TideDivider className="h-10 w-full text-[#0b3a41]" />
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#12626c]">Six days a week</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#0b3a41] md:text-5xl">
              The week at Cordage Lane
            </h2>
            <p className="mt-5 leading-relaxed text-[#2c565c]">
              Twenty-seven coached sessions a week, and Sunday the room is yours for open ergs from
              nine until one. Booking opens seven days ahead; members average four sessions a week
              and nobody has ever been charged for the one they missed because a child was sick.
            </p>
          </div>
          <a
            href="#book"
            className="rounded-full border border-[#0b3a41]/25 px-6 py-3 text-sm font-semibold text-[#0b3a41] transition hover:border-[#e0813d] hover:text-[#8a4715]"
          >
            Reserve a seat
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DAYS.map((entry) => (
            <div
              key={entry.day}
              className="rounded-2xl border border-[#0b3a41]/10 bg-[#faf6ef] p-6 shadow-[0_1px_2px_rgba(11,58,65,0.06)]"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[#0b3a41]">{entry.day}</h3>
              <ul className="mt-4 space-y-3">
                {entry.slots.map((slot) => (
                  <li key={`${entry.day}-${slot.time}`} className="flex items-center gap-3 text-sm">
                    <span className="w-20 shrink-0 font-semibold text-[#0b3a41]">{slot.time}</span>
                    <span className="flex-1 text-[#2c565c]">{slot.name}</span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${TRACK_TONE[slot.track]}`}
                    >
                      {slot.track}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-[#5b7c81]">
          Sunday · 9:00am–1:00pm open ergs, no booking needed. The sauna runs from 8:00am every day
          the club is open.
        </p>
      </div>
    </section>
  )
}

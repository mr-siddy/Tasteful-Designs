type Slot = { time: string; session: string; coach: string; spots: string }

const SCHEDULE: ReadonlyArray<{ day: string; slots: Slot[] }> = [
  {
    day: 'Monday',
    slots: [
      { time: '06:00', session: 'Strength Block', coach: 'Dana', spots: '3 spots left' },
      { time: '12:15', session: 'Engine Room', coach: 'Marcus', spots: '7 spots left' },
      { time: '18:00', session: 'Barbell Foundations', coach: 'Priya', spots: 'Waitlist' },
    ],
  },
  {
    day: 'Wednesday',
    slots: [
      { time: '06:00', session: 'Strength Block', coach: 'Ruben', spots: '5 spots left' },
      { time: '10:00', session: 'Masters Strength', coach: 'Dana', spots: '6 spots left' },
      { time: '18:30', session: 'Olympic Technique', coach: 'Ruben', spots: '2 spots left' },
    ],
  },
  {
    day: 'Friday',
    slots: [
      { time: '06:00', session: 'Engine Room', coach: 'Marcus', spots: '4 spots left' },
      { time: '16:30', session: 'Strength Block', coach: 'Priya', spots: '8 spots left' },
      { time: '19:00', session: 'Open Platform', coach: 'Duty coach', spots: 'Drop in' },
    ],
  },
  {
    day: 'Saturday',
    slots: [
      { time: '07:30', session: 'Strength Block', coach: 'Dana', spots: '2 spots left' },
      { time: '09:00', session: 'Barbell Foundations', coach: 'Priya', spots: '5 spots left' },
      { time: '10:30', session: 'Open Platform', coach: 'Duty coach', spots: 'Drop in' },
    ],
  },
]

export function ScheduleSection() {
  return (
    <section data-testid="schedule-section" className="border-b border-white/10 bg-stone-950">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-lime-300">This week</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-stone-50">
              The actual timetable
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone-300">
              Twenty-six coached sessions a week, every one of them capped at twelve. Tuesday and
              Thursday run the same shape as Monday and Wednesday — this is the short version.
            </p>
          </div>
          <a
            href="#join"
            data-testid="schedule-cta"
            className="shrink-0 rounded-full border border-lime-300 px-6 py-3 text-sm font-bold uppercase tracking-wide text-lime-300 transition-colors hover:bg-lime-300 hover:text-stone-950"
          >
            Ask about a spot
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SCHEDULE.map((column) => (
            <div key={column.day} className="rounded-2xl bg-stone-900 p-6 ring-1 ring-white/10">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
                {column.day}
              </h3>
              <ul className="mt-5 space-y-5">
                {column.slots.map((slot) => (
                  <li key={`${column.day}-${slot.time}`} data-testid="schedule-slot">
                    <p className="text-lg font-bold text-stone-50">{slot.time}</p>
                    <p className="text-sm text-stone-300">{slot.session}</p>
                    <p className="mt-1 text-xs text-stone-500">
                      with {slot.coach} · {slot.spots}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-stone-400">
          Booking opens seven days ahead in the member app. Cancel more than four hours out and the
          credit goes straight back on your account.
        </p>
      </div>
    </section>
  )
}

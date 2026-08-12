const DAYS = [
  {
    day: 'Monday',
    slots: [
      { time: '5:45am', name: 'Reformer Foundations', teacher: 'Tova' },
      { time: '12:10pm', name: 'Slow Flow & Mobility', teacher: 'Camille' },
      { time: '6:15pm', name: 'Barbell Strength', teacher: 'Desmond' },
    ],
  },
  {
    day: 'Tuesday',
    slots: [
      { time: '6:30am', name: 'Heated Vinyasa', teacher: 'Priya' },
      { time: '9:15am', name: 'Postnatal Return', teacher: 'Camille' },
      { time: '5:30pm', name: 'Reformer Power', teacher: 'Tova' },
    ],
  },
  {
    day: 'Wednesday',
    slots: [
      { time: '5:45am', name: 'Barbell Strength', teacher: 'Desmond' },
      { time: '12:10pm', name: 'Reformer Foundations', teacher: 'Camille' },
      { time: '7:00pm', name: 'Heated Vinyasa', teacher: 'Priya' },
    ],
  },
  {
    day: 'Thursday',
    slots: [
      { time: '7:00am', name: 'Rowing Conditioning', teacher: 'Desmond' },
      { time: '9:15am', name: 'Slow Flow & Mobility', teacher: 'Priya' },
      { time: '6:15pm', name: 'Reformer Power', teacher: 'Tova' },
    ],
  },
  {
    day: 'Friday',
    slots: [
      { time: '6:30am', name: 'Reformer Foundations', teacher: 'Tova' },
      { time: '12:10pm', name: 'Heated Vinyasa', teacher: 'Priya' },
      { time: '5:30pm', name: 'Barbell Strength', teacher: 'Desmond' },
    ],
  },
  {
    day: 'Saturday',
    slots: [
      { time: '8:00am', name: 'Reformer Power', teacher: 'Tova' },
      { time: '9:30am', name: 'Teen Strength Hour', teacher: 'Desmond' },
      { time: '11:00am', name: 'Slow Flow & Mobility', teacher: 'Camille' },
    ],
  },
  {
    day: 'Sunday',
    slots: [
      { time: '9:00am', name: 'Heated Vinyasa', teacher: 'Priya' },
      { time: '10:30am', name: 'Reformer Foundations', teacher: 'Camille' },
      { time: '4:00pm', name: 'Slow Flow & Mobility', teacher: 'Priya' },
    ],
  },
]

export default function ScheduleStrip() {
  return (
    <section id="schedule" data-testid="schedule" aria-labelledby="schedule-heading" className="bg-[#FAF6F0]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C4623A]">This week</p>
            <h2 id="schedule-heading" className="mt-3 text-3xl font-black tracking-tight text-[#16211C] sm:text-4xl">
              Thirty-one classes, and the same faces teaching them
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4B5A52]">
              The timetable barely moves — it has changed twice since 2021. Book
              from your account up to fourteen days ahead; cancel free up to four
              hours before and the spot goes to the waitlist automatically.
            </p>
          </div>
          <a
            href="#intro"
            className="shrink-0 rounded-full border-2 border-[#1F4A3C] px-6 py-3 text-sm font-bold text-[#1F4A3C] transition hover:bg-[#1F4A3C] hover:text-[#FAF6F0]"
          >
            Get on the schedule
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DAYS.map((entry) => (
            <div
              key={entry.day}
              data-testid="schedule-day"
              className="rounded-2xl border border-[#E4DCD0] bg-[#FFFCF8] p-5"
            >
              <h3 className="text-sm font-black uppercase tracking-[0.14em] text-[#1F4A3C]">
                {entry.day}
              </h3>
              <ul className="mt-4 space-y-4">
                {entry.slots.map((slot) => (
                  <li key={`${entry.day}-${slot.time}`} className="border-l-2 border-[#E0D3C2] pl-3">
                    <p className="text-sm font-bold text-[#16211C]">{slot.time}</p>
                    <p className="text-sm leading-snug text-[#4B5A52]">{slot.name}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#8A9A90]">
                      {slot.teacher}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="rounded-2xl border border-dashed border-[#C9B9A2] bg-[#F3E7D8] p-5">
            <h3 className="text-sm font-black uppercase tracking-[0.14em] text-[#8A5230]">
              Open loft
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#6E4426]">
              The barbell loft is open and coached weekdays 6am–8pm and weekends
              8am–1pm outside class times. Sauna and plunge book in twenty-minute
              blocks from the same screen.
            </p>
            <p className="mt-4 text-sm font-bold text-[#8A5230]">Members only · no booking fee</p>
          </div>
        </div>
      </div>
    </section>
  )
}

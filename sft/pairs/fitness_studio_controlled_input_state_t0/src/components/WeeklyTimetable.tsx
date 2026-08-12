const SLOTS = [
  { day: 'Monday', times: ['5:45am Early Shift', '6:15am Strength Hall', '12:10pm Engine Room', '6:00pm Strength Hall'] },
  { day: 'Tuesday', times: ['6:15am Strength Hall', '9:30am Sixty Plus', '12:10pm Barbell Foundations', '5:30pm Back to Barbell'] },
  { day: 'Wednesday', times: ['5:45am Early Shift', '6:15am Strength Hall', '12:10pm Engine Room', '6:00pm Barbell Foundations'] },
  { day: 'Thursday', times: ['5:45am Strength Hall', '9:30am Sixty Plus', '12:10pm Strength Hall', '6:00pm Engine Room'] },
  { day: 'Friday', times: ['5:45am Early Shift', '6:15am Strength Hall', '12:10pm Back to Barbell'] },
  { day: 'Saturday', times: ['7:00am Strength Hall', '8:00am Barbell Foundations', '9:15am Open platforms'] },
]

export function WeeklyTimetable() {
  return (
    <section id="timetable" className="border-y border-[#10161C]/10 bg-[#EAE5DA]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#D9622B]">
            Twenty-two sessions a week
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            The timetable, and what it means when the room is full
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4C5B54]">
            Eight lifters per session, twelve platforms, one coach on the floor and one on the desk.
            When a session fills, it fills — we would rather turn you away for an hour than coach you
            badly for one. Sunday the doors stay shut and the sled gets a service.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SLOTS.map((slot) => (
            <div
              key={slot.day}
              data-testid="timetable-day"
              className="rounded-2xl border border-[#10161C]/10 bg-[#F4F1EA] p-6"
            >
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#10161C]">
                {slot.day}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {slot.times.map((time) => (
                  <li key={time} className="flex items-center gap-2.5 text-sm text-[#4C5B54]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9622B]" />
                    {time}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-[#6E7A72]">
          Public holidays run a single 8:00am Strength Hall. Christmas week we close entirely and
          everybody goes to the river.
        </p>
      </div>
    </section>
  )
}

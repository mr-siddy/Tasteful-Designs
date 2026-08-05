const SESSIONS = [
  { day: 'Monday', time: '6:00 am', name: 'The Strong Hour', coach: 'Dev Raman', spots: '3 spots' },
  { day: 'Monday', time: '7:00 pm', name: 'Mobility & Breath', coach: 'Anneke Voss', spots: '9 spots' },
  { day: 'Tuesday', time: '6:30 am', name: 'Conditioning Club', coach: 'Marisol Vega', spots: 'Full' },
  { day: 'Tuesday', time: '5:30 pm', name: 'Barbell Foundations', coach: 'Dev Raman', spots: '2 spots' },
  { day: 'Wednesday', time: '9:30 am', name: 'Masters 55+', coach: 'Anneke Voss', spots: '4 spots' },
  { day: 'Wednesday', time: '6:00 pm', name: 'The Strong Hour', coach: 'Tomas Ilves', spots: '1 spot' },
  { day: 'Thursday', time: '6:30 am', name: 'Conditioning Club', coach: 'Marisol Vega', spots: '6 spots' },
  { day: 'Thursday', time: '7:00 pm', name: 'Return to Lifting', coach: 'Tomas Ilves', spots: '2 spots' },
  { day: 'Friday', time: '6:00 am', name: 'The Strong Hour', coach: 'Dev Raman', spots: '5 spots' },
  { day: 'Saturday', time: '8:00 am', name: 'Conditioning Club', coach: 'Marisol Vega', spots: '8 spots' },
  { day: 'Saturday', time: '10:00 am', name: 'Barbell Foundations', coach: 'Anneke Voss', spots: '4 spots' },
  { day: 'Sunday', time: '9:00 am', name: 'Open Platform', coach: 'Floor coach on duty', spots: 'Drop-in' },
]

export function WeeklyTimetable() {
  return (
    <section id="timetable" className="bg-[#123B31] text-[#FBF7F1]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#E8A33D]">
              Week of 12 January
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">A week at Redpine</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#BFD2C9]">
            Twelve coached sessions, every one of them capped. Spots shown are what was left when
            the desk locked up last night; the Sunday platform is always open to members.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-[#2F6B57]">
          <div className="hidden bg-[#0B241E] px-6 py-4 text-[11px] uppercase tracking-[0.2em] text-[#8FB3A4] sm:grid sm:grid-cols-[1fr_0.7fr_1.3fr_1fr_0.7fr]">
            <span>Day</span>
            <span>Time</span>
            <span>Session</span>
            <span>Coach</span>
            <span>Left</span>
          </div>
          {SESSIONS.map((s, i) => (
            <div
              key={`${s.day}-${s.time}`}
              data-testid="timetable-row"
              className={`grid gap-1 px-6 py-4 text-sm sm:grid-cols-[1fr_0.7fr_1.3fr_1fr_0.7fr] sm:items-center ${
                i % 2 === 0 ? 'bg-[#123B31]' : 'bg-[#15453A]'
              }`}
            >
              <span className="font-medium text-[#FBF7F1]">{s.day}</span>
              <span className="text-[#BFD2C9]">{s.time}</span>
              <span className="font-semibold text-[#E8A33D]">{s.name}</span>
              <span className="text-[#BFD2C9]">{s.coach}</span>
              <span
                className={
                  s.spots === 'Full'
                    ? 'text-[#D2683F]'
                    : 'text-[#8FB3A4]'
                }
              >
                {s.spots}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-[#8FB3A4]">
          <span>Doors open thirty minutes before the first session.</span>
          <span>Members book through the desk or the studio app.</span>
          <a href="#start" className="font-semibold text-[#E8A33D] underline underline-offset-4">
            Ask us to hold a spot
          </a>
        </div>
      </div>
    </section>
  )
}

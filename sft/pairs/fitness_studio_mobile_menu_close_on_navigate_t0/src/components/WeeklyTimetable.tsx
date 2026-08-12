const SESSIONS = [
  { day: 'Monday', time: '6:15am', name: 'Reformer Foundations', who: 'Imogen Castellanos', spots: '2 spots' },
  { day: 'Monday', time: '5:45pm', name: 'Slow Strength', who: 'Kwame Adjei', spots: 'Waitlist' },
  { day: 'Tuesday', time: '7:00am', name: 'Reformer Flow 2', who: 'Dara Whitlock', spots: '1 spot' },
  { day: 'Tuesday', time: '12:15pm', name: 'Mobility Loft', who: 'Yuki Sorensen', spots: '6 spots' },
  { day: 'Wednesday', time: '6:15am', name: 'Tower & Barre', who: 'Kwame Adjei', spots: '4 spots' },
  { day: 'Wednesday', time: '6:30pm', name: 'Reformer Foundations', who: 'Dara Whitlock', spots: '3 spots' },
  { day: 'Thursday', time: '9:30am', name: 'Post-Op Reformer', who: 'Dara Whitlock', spots: 'By referral' },
  { day: 'Thursday', time: '5:45pm', name: 'Reformer Flow 2', who: 'Imogen Castellanos', spots: 'Waitlist' },
  { day: 'Friday', time: '6:15am', name: 'Slow Strength', who: 'Kwame Adjei', spots: '5 spots' },
  { day: 'Saturday', time: '8:00am', name: 'Reformer Flow 2', who: 'Imogen Castellanos', spots: '2 spots' },
  { day: 'Saturday', time: '9:15am', name: 'Tower & Barre', who: 'Yuki Sorensen', spots: '7 spots' },
  { day: 'Sunday', time: '9:00am', name: 'Mobility Loft', who: 'Yuki Sorensen', spots: '9 spots' },
]

export function WeeklyTimetable() {
  return (
    <section id="timetable" className="bg-[#152A22] text-[#F4EFE2]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E8A33F]">
              Week of 12 January
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              This week on the floor
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#C9C2B1]">
              Twelve classes, four instructors, and the honest count of what is left in each one.
              Spots free up constantly — cancellations inside twelve hours release automatically, so
              a waitlisted class on Monday is often open by Sunday night.
            </p>
          </div>
          <a
            href="#visit"
            className="rounded-full border border-[#E8A33F] px-6 py-3 text-sm font-semibold text-[#E8A33F]"
          >
            Ask us to hold a spot
          </a>
        </div>

        <ul data-testid="timetable" className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {SESSIONS.map((session) => (
            <li
              key={`${session.day}-${session.time}-${session.name}`}
              className="grid gap-1 py-4 sm:grid-cols-[7rem_5rem_1fr_11rem_7rem] sm:items-baseline sm:gap-4"
            >
              <span className="text-sm font-semibold text-[#E8A33F]">{session.day}</span>
              <span className="text-sm text-[#C9C2B1]">{session.time}</span>
              <span className="text-base font-medium tracking-tight">{session.name}</span>
              <span className="text-sm text-[#C9C2B1]">with {session.who}</span>
              <span className="text-sm text-[#F4EFE2] sm:text-right">{session.spots}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-[#C9C2B1]">
          The loft also opens for unbooked practice on weekday afternoons between 1:30pm and 4:00pm;
          members let themselves in with the door code on their plan card.
        </p>
      </div>
    </section>
  )
}

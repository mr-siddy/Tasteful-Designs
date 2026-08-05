import { useState } from 'react'

type TrackId = 'strength' | 'conditioning' | 'mobility' | 'semiprivate'
type FilterId = TrackId | 'all'

type Session = {
  title: string
  track: TrackId
  badge: string
  day: string
  time: string
  length: string
  coach: string
  room: string
  level: string
  spots: string
  blurb: string
}

const TRACKS: { id: FilterId; label: string }[] = [
  { id: 'all', label: 'All classes' },
  { id: 'strength', label: 'Strength' },
  { id: 'conditioning', label: 'Conditioning' },
  { id: 'mobility', label: 'Mobility' },
  { id: 'semiprivate', label: 'Semi-private' },
]

const SESSIONS: Session[] = [
  {
    title: 'Barbell Foundations',
    track: 'strength',
    badge: 'Strength',
    day: 'Monday',
    time: '6:00 AM',
    length: '60 min',
    coach: 'Marisol Reyes',
    room: 'Platform Room',
    level: 'All levels',
    spots: '3 spots left',
    blurb:
      'The squat, hinge, press and pull taught rep by rep with an empty bar first. Nobody is asked to load a plate before the shape is right.',
  },
  {
    title: 'Heavy Day: Squat and Pull',
    track: 'strength',
    badge: 'Strength',
    day: 'Tuesday',
    time: '6:30 PM',
    length: '75 min',
    coach: 'Dez Okafor',
    room: 'Platform Room',
    level: 'Intermediate',
    spots: '5 spots left',
    blurb:
      'The heaviest session of the week. Two main lifts off a percentage of your last tested single, then accessory work chosen by your coach.',
  },
  {
    title: 'Press Club',
    track: 'strength',
    badge: 'Strength',
    day: 'Thursday',
    time: '12:15 PM',
    length: '45 min',
    coach: 'Marisol Reyes',
    room: 'Platform Room',
    level: 'All levels',
    spots: '7 spots left',
    blurb:
      'A lunch-hour overhead session for people whose shoulders spend the day at a desk. In and showered inside an hour.',
  },
  {
    title: 'Sunday Long Lift',
    track: 'strength',
    badge: 'Strength',
    day: 'Sunday',
    time: '9:00 AM',
    length: '90 min',
    coach: 'Priya Raghavan',
    room: 'Platform Room',
    level: 'Intermediate',
    spots: '4 spots left',
    blurb:
      'The unhurried one. Full warm-up, three lifts, and enough rest between sets to actually talk to the person on the next platform.',
  },
  {
    title: 'Engine Room',
    track: 'conditioning',
    badge: 'Conditioning',
    day: 'Monday',
    time: '5:45 PM',
    length: '45 min',
    coach: 'Dez Okafor',
    room: 'Turf Lane',
    level: 'All levels',
    spots: '2 spots left',
    blurb:
      'Mixed intervals on the rower, bike and turf, paced off numbers we test in week one so the effort is yours and not the room average.',
  },
  {
    title: 'Rowing Intervals',
    track: 'conditioning',
    badge: 'Conditioning',
    day: 'Wednesday',
    time: '6:00 AM',
    length: '40 min',
    coach: 'Priya Raghavan',
    room: 'Erg Bay',
    level: 'All levels',
    spots: '6 spots left',
    blurb:
      'Six rowers, one screen, and split times called out loud. Priya coached at the Baltimore Rowing Club for four seasons and it shows.',
  },
  {
    title: 'Sled and Carry',
    track: 'conditioning',
    badge: 'Conditioning',
    day: 'Saturday',
    time: '8:00 AM',
    length: '50 min',
    coach: 'Theo Lindqvist',
    room: 'Turf Lane',
    level: 'All levels',
    spots: '8 spots left',
    blurb:
      'Push, drag and carry down forty metres of turf. Brutally simple, easy on the joints, and the most popular class we run.',
  },
  {
    title: 'Hips and Hinge',
    track: 'mobility',
    badge: 'Mobility',
    day: 'Tuesday',
    time: '7:00 AM',
    length: '40 min',
    coach: 'Theo Lindqvist',
    room: 'Mezzanine',
    level: 'All levels',
    spots: '9 spots left',
    blurb:
      'Loaded stretching for hips that sit down for nine hours a day, ending with the deadlift positions you will use on Tuesday night.',
  },
  {
    title: 'Shoulder Reset',
    track: 'mobility',
    badge: 'Mobility',
    day: 'Thursday',
    time: '6:00 PM',
    length: '40 min',
    coach: 'Priya Raghavan',
    room: 'Mezzanine',
    level: 'All levels',
    spots: '6 spots left',
    blurb:
      'Overhead range, rotator cuff work and a genuinely useful amount of time hanging from a bar. Built with Harbor East Physical Therapy.',
  },
  {
    title: 'Slow Flow',
    track: 'mobility',
    badge: 'Mobility',
    day: 'Sunday',
    time: '11:00 AM',
    length: '55 min',
    coach: 'Theo Lindqvist',
    room: 'Mezzanine',
    level: 'All levels',
    spots: '10 spots left',
    blurb:
      'A quiet hour of breathing and long positions with the harbour doors open. The one class where nothing is counted or scored.',
  },
  {
    title: 'Semi-Private Strength',
    track: 'semiprivate',
    badge: 'Semi-private',
    day: 'Wednesday',
    time: '7:30 PM',
    length: '60 min',
    coach: 'Marisol Reyes',
    room: 'Platform Room',
    level: 'Four lifters, one coach',
    spots: '1 spot left',
    blurb:
      'Your own written plan, run alongside three other lifters with the same coach every week. Booked as a standing slot, not class by class.',
  },
  {
    title: 'Return to Lifting',
    track: 'semiprivate',
    badge: 'Semi-private',
    day: 'Friday',
    time: '9:30 AM',
    length: '60 min',
    coach: 'Dez Okafor',
    room: 'Mezzanine',
    level: 'Four lifters, one coach',
    spots: '2 spots left',
    blurb:
      'For shoulders, knees, backs and long absences. We work from what you can do today and add load in the smallest increments the room owns.',
  },
]

function SessionCard({ session }: { session: Session }) {
  return (
    <article
      data-testid="class-card"
      className="flex flex-col rounded-2xl border border-[#0B2A33]/10 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center justify-between gap-3">
        <span
          data-testid="class-track"
          className="rounded-full bg-[#1D7A6B]/12 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1D7A6B]"
        >
          {session.badge}
        </span>
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#E4682A]">
          {session.spots}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-black leading-snug tracking-tight">{session.title}</h3>

      <p className="mt-2 text-sm font-bold text-[#0B2A33]">
        {session.day} · {session.time} · {session.length}
      </p>

      <p className="mt-1 text-sm text-[#5B6B70]">
        {session.coach} · {session.room} · {session.level}
      </p>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-[#3C4E54]">{session.blurb}</p>

      <a
        href="#book-intro"
        className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#0B2A33]/15 px-4 py-2 text-xs font-bold text-[#0B2A33] hover:border-[#E4682A] hover:text-[#E4682A]"
      >
        Reserve a place
        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" aria-hidden="true" focusable="false">
          <path
            d="M4 10h12M11 5l5 5-5 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </article>
  )
}

export function ClassSchedule() {
  const [track, setTrack] = useState<FilterId>('all')

  const shown = track === 'all' ? SESSIONS : SESSIONS.filter((session) => session.track === track)

  return (
    <section id="schedule" className="border-b border-[#0B2A33]/10 bg-[#EFE6D8]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1D7A6B]">
            This week on the floor
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Twelve coached classes, and none of them are a mystery until you arrive
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3C4E54]">
            Every session below is written before the week starts and taught by a named coach. Pick a
            track to narrow the list down to the classes you actually train, or leave it on all
            classes to see the whole week at once.
          </p>
        </div>

        <div
          data-testid="class-filters"
          role="group"
          aria-label="Filter classes by track"
          className="mt-10 flex flex-wrap gap-3"
        >
          {TRACKS.map((option) => {
            const isActive = option.id === track
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setTrack(option.id)}
                className={
                  isActive
                    ? 'rounded-full bg-[#0B2A33] px-5 py-2.5 text-sm font-bold text-[#F7F2EA] shadow-sm'
                    : 'rounded-full border border-[#0B2A33]/20 bg-white/70 px-5 py-2.5 text-sm font-bold text-[#0B2A33] hover:border-[#0B2A33]/50'
                }
              >
                {option.label}
              </button>
            )
          })}
        </div>

        <p data-testid="class-count" className="mt-6 text-sm font-bold text-[#5B6B70]">
          Showing {shown.length} of {SESSIONS.length} sessions this week
        </p>

        <div data-testid="class-list" className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((session) => (
            <SessionCard key={session.title} session={session} />
          ))}
        </div>

        <p className="mt-10 text-sm text-[#3C4E54]">
          Places open eight days ahead and are held until fifteen minutes before the session starts.
          If you are running late off a shift, call the desk on (410) 555 0176 and we will keep your
          platform.
        </p>
      </div>
    </section>
  )
}

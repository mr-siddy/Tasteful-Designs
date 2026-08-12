import { CoachPortrait } from './Icons'

const COACHES = [
  {
    name: 'Nadia Okonjo',
    initials: 'NO',
    tone: 'vermilion' as const,
    role: 'Head coach · The Ride, Sprint Deck',
    credential: 'Level 3 instructor · Schwinn and Keiser certified · 11 years coaching',
    bio: 'Rode two seasons for a regional team, then spent six years teaching cycling classes she thought were badly taught. Writes every Ride profile in the studio and will tell you your cadence is drifting before you notice it yourself.',
  },
  {
    name: 'Tomás Rivera',
    initials: 'TR',
    tone: 'ink' as const,
    role: 'Strength lead · Ride + Lift, Press Strength',
    credential: 'MSc Strength & Conditioning · UKSCA accredited · 9 years on the floor',
    bio: 'Came from a rugby academy and has no interest in making a barbell complicated. Writes the four-week Press Strength blocks and keeps everyone honest about resting long enough between sets to make the set count.',
  },
  {
    name: 'Priya Raman',
    initials: 'PR',
    tone: 'ember' as const,
    role: 'Endurance coach · Long Haul, The Ride',
    credential: 'British Cycling Level 2 · two-time national masters qualifier',
    bio: 'Coaches the Sunday Long Haul for people training for something outdoors — a sportive, a first century, a hilly week in the Peaks — and mixes the seventy-five minutes as one long set rather than a playlist.',
  },
  {
    name: 'Dermot Slane',
    initials: 'DS',
    tone: 'ink' as const,
    role: 'Recovery & mobility · Reset',
    credential: 'Sports rehabilitation BSc · registered exercise professional',
    bio: 'Spent eight years in a physiotherapy clinic watching people get injured doing too much too soon. Runs Reset, handles every returning-from-injury intro ride, and is the reason the sauna sits at 78 rather than 95 degrees.',
  },
]

export function CoachRoster() {
  return (
    <section id="coaches" className="bg-[#f2e9db]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d94a2b]">
            Six coaches, four of them here from the first week
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#101826] sm:text-5xl">
            The people on the platform
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-[#40485a]">
            Everyone who coaches here is employed here, paid for the hour before class as well as
            the hour of it, and expected to know the names of the people on the bikes. That is the
            whole staffing philosophy.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {COACHES.map((coach) => (
            <article
              key={coach.name}
              data-testid="coach-card"
              className="flex gap-5 rounded-3xl border border-[#101826]/10 bg-[#faf5ee] p-6"
            >
              <CoachPortrait initials={coach.initials} tone={coach.tone} />
              <div className="min-w-0">
                <h3 className="text-xl font-black tracking-tight text-[#101826]">{coach.name}</h3>
                <p className="mt-1 text-[13px] font-bold uppercase tracking-wide text-[#d94a2b]">
                  {coach.role}
                </p>
                <p className="mt-2 text-xs font-semibold text-[#40485a]/80">{coach.credential}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#40485a]">{coach.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

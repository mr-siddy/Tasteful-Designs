import { useState } from 'react'
import { BarbellIcon, CheckIcon, LeafIcon, OarIcon } from './icons'

type Session = {
  name: string
  length: string
  target: string
  detail: string
}

type Track = {
  id: string
  label: string
  title: string
  blurb: string
  weekly: string
  forWho: string
  coach: string
  icon: (props: { className?: string }) => JSX.Element
  sessions: Session[]
}

// One membership, three tracks. Row is what people arrive for, Strength is what
// keeps them here, Restore is what stops the fourth week of a block breaking them.
const TRACKS: Track[] = [
  {
    id: 'row',
    label: 'Row',
    title: 'Row — the engine room',
    blurb:
      'Eighteen water-resistance ergs on a sprung floor, arranged in three ranks so a coach can walk every seat inside a piece. Every row session is written against your last 2k test, so the numbers on the monitor mean something specific to you rather than to the room.',
    weekly: '11 sessions a week',
    forWho: 'New rowers, masters crews wintering indoors, and anyone whose cardio quietly disappeared.',
    coach: 'Led by Ines Okonkwo',
    icon: OarIcon,
    sessions: [
      {
        name: 'Tidewater 45',
        length: '45 min',
        target: 'Steady state · 18–22 spm',
        detail:
          'Long, quiet and conversational. The session that builds the engine everything else spends, and the one most people underrate for their first month.',
      },
      {
        name: 'Split Ladder',
        length: '50 min',
        target: 'Threshold · 4 × 8 min',
        detail:
          'Descending splits with ninety seconds between pieces. You will know your honest threshold number by the third rep, and so will your coach.',
      },
      {
        name: 'Sunrise 2k',
        length: '40 min',
        target: 'Race pace · tested',
        detail:
          'Wednesdays at 6:15am. A full 2k on the board, coached start to finish, splits called down the room and written on your card afterwards.',
      },
      {
        name: 'Long Pull',
        length: '70 min',
        target: 'Distance · 14–16k',
        detail:
          'Saturday mornings. Sixteen kilometres, one long playlist, and coffee from Marlow’s across the lane once the boards are wiped down.',
      },
    ],
  },
  {
    id: 'strength',
    label: 'Strength',
    title: 'Strength — the annexe',
    blurb:
      'Six platforms, calibrated plates and a rack of dumbbells that goes high enough to matter. Strength here is not a bolt-on circuit class: it is a written progression loaded off your last testing week, run by coaches who spent years putting rowers back together.',
    weekly: '9 sessions a week',
    forWho: 'Members who need to be robust rather than merely fit, and desk workers with cranky lower backs.',
    coach: 'Led by Callum Reyes-Barrett',
    icon: BarbellIcon,
    sessions: [
      {
        name: 'Barbell Base',
        length: '60 min',
        target: 'Squat · press · pull',
        detail:
          'The main lift of your block, loaded from your last test, with a coach on the platform for every working set rather than a screen on the wall.',
      },
      {
        name: 'Deck & Rack',
        length: '55 min',
        target: 'Accessory · carries',
        detail:
          'Single-leg work, rows and farmer’s carries down the length of the annexe. The unglamorous half of the programme, and the half that holds up.',
      },
      {
        name: 'Power Half',
        length: '30 min',
        target: 'Express · one lift',
        detail:
          'Twelve-thirty sharp. One lift done properly, warm-up included, built for people who have a lunch hour rather than an afternoon.',
      },
      {
        name: 'Hinge Clinic',
        length: '45 min',
        target: 'Technique · deadlift',
        detail:
          'Six people, video review on the tablet, and an hour of hinging until your lower back stops arguing with your hamstrings.',
      },
    ],
  },
  {
    id: 'restore',
    label: 'Restore',
    title: 'Restore — the recovery bay',
    blurb:
      'A cedar sauna, two contrast plunges and a matted room that is deliberately dim and deliberately quiet. Restore sessions are timetabled like everything else because recovery you have to remember to do is recovery you will skip in week four.',
    weekly: '7 sessions a week',
    forWho: 'Everyone in the back half of a block, when the fatigue lands and the numbers stop moving.',
    coach: 'Led by Marguerite Duplessis',
    icon: LeafIcon,
    sessions: [
      {
        name: 'Slack Water',
        length: '40 min',
        target: 'Mobility flow',
        detail:
          'Hips, thoracic spine and ankles — the three things indoor rowing quietly takes from you if nobody is watching for it.',
      },
      {
        name: 'Cedar & Plunge',
        length: '30 min',
        target: 'Contrast recovery',
        detail:
          'Three rounds from the sauna to the plunge and back, run to the clock on the wall rather than to whoever in the room is most stubborn.',
      },
      {
        name: 'Breath & Ballast',
        length: '35 min',
        target: 'Down-regulation',
        detail:
          'Nasal breathing, longer exhales and a genuinely boring twenty minutes on the mat. Members book it the night before a test week.',
      },
      {
        name: 'Hands On',
        length: '25 min',
        target: 'Soft-tissue clinic',
        detail:
          'Marguerite works one area properly instead of ten badly. Best booked the morning after a 2k, when you can still feel where it went.',
      },
    ],
  },
]

export function TrainingTracks() {
  const [active, setActive] = useState(0)

  return (
    <section id="tracks" className="bg-[#faf6ef]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#12626c]">The programme</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#0b3a41] md:text-5xl">
            Three tracks, one membership
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#2c565c]">
            Everything on the timetable belongs to one of three tracks. Most members row three
            times a week, lift twice and take one Restore session — but the mix is written for you
            in your Landing Session and revised every eight weeks. Pick a track to see what is
            actually in it.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Training tracks"
          className="mt-12 flex flex-wrap gap-3 border-b border-[#0b3a41]/12 pb-5"
        >
          {TRACKS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`track-tab-${item.id}`}
              aria-controls={`track-panel-${item.id}`}
              aria-selected
              data-testid="track-tab"
              onClick={() => setActive(index)}
              className={
                index === active
                  ? 'rounded-full bg-[#0b3a41] px-7 py-3 text-sm font-semibold text-[#faf6ef] shadow-sm'
                  : 'rounded-full border border-[#0b3a41]/20 px-7 py-3 text-sm font-semibold text-[#2c565c] transition hover:border-[#e0813d] hover:text-[#0b3a41]'
              }
            >
              {item.label}
            </button>
          ))}
        </div>

        {TRACKS.map((track) => {
          const Icon = track.icon
          return (
            <div
              key={track.id}
              role="tabpanel"
              id={`track-panel-${track.id}`}
              aria-labelledby={`track-tab-${track.id}`}
              data-testid="track-panel"
              className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#12626c]/12 text-[#12626c]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight text-[#0b3a41]">
                    {track.title}
                  </h3>
                </div>
                <p className="mt-4 max-w-2xl leading-relaxed text-[#2c565c]">{track.blurb}</p>

                <ul className="mt-8 space-y-4">
                  {track.sessions.map((session) => (
                    <li
                      key={session.name}
                      data-testid="track-session"
                      className="rounded-2xl border border-[#0b3a41]/10 bg-white p-6 shadow-[0_1px_2px_rgba(11,58,65,0.06)]"
                    >
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <h4 className="text-lg font-semibold text-[#0b3a41]">{session.name}</h4>
                        <span className="rounded-full bg-[#f1e7d7] px-3 py-1 text-xs font-semibold text-[#2c565c]">
                          {session.length}
                        </span>
                        <span className="text-xs uppercase tracking-[0.16em] text-[#5b7c81]">
                          {session.target}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-[#4a6b70]">{session.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="h-fit rounded-3xl bg-[#0b3a41] p-8 text-[#e9f2f1]">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#8fc0c5]">
                  On the timetable
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-[#faf6ef]">
                  {track.weekly}
                </p>
                <p className="mt-6 text-sm leading-relaxed text-[#cfe0e0]">{track.forWho}</p>
                <p className="mt-6 text-sm font-semibold text-[#f3b27a]">{track.coach}</p>
                <ul className="mt-7 space-y-3 border-t border-[#8fc0c5]/20 pt-6 text-sm text-[#cfe0e0]">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-[#f3b27a]" />
                    Written into your eight-week block
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-[#f3b27a]" />
                    Capped at eighteen, three coaches on the floor
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-[#f3b27a]" />
                    Included on Ebb, Flood and Crew memberships
                  </li>
                </ul>
                <a
                  href="#book"
                  className="mt-8 inline-flex rounded-full bg-[#e0813d] px-6 py-3 text-sm font-semibold text-[#20120a] transition hover:bg-[#f3b27a]"
                >
                  Try this track free
                </a>
              </aside>
            </div>
          )
        })}
      </div>
    </section>
  )
}

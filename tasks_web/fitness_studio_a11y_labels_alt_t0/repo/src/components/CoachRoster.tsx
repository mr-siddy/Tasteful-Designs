import { Figure, SectionHeading, type Shot } from './PageKit'
import { COACH_ART } from '../art'

type Coach = {
  name: string
  role: string
  credentials: string
  shot: Shot
  bio: string
}

const COACHES: Coach[] = [
  {
    name: 'Nadia Okonkwo',
    role: 'Head coach and owner',
    credentials: 'USA Weightlifting Level 2 · twelve years on the floor',
    shot: {
      src: COACH_ART.nadia,
      alt: 'Nadia Okonkwo, head coach and owner of Coalhouse Athletic Club',
    },
    bio: 'Nadia signed the lease on the depot in 2014 with two racks and a borrowed bar. She coaches every Foundations intake herself, which is deliberate — she wants to have watched your first squat before anyone else programmes for you.',
  },
  {
    name: 'Marcus Deane',
    role: 'Strength coach',
    credentials: 'CSCS · former Temple University strength staff',
    shot: {
      src: COACH_ART.marcus,
      alt: 'Marcus Deane, strength coach at Coalhouse Athletic Club',
    },
    bio: 'Marcus writes the Barbell Club blocks and runs the Saturday sessions. He is the person to talk to if you want a number by a date, and the person who will tell you plainly when the date is wrong.',
  },
  {
    name: 'Priya Raghunathan',
    role: 'Rebuild lead',
    credentials: 'Doctor of Physical Therapy · Jefferson, 2016',
    shot: {
      src: COACH_ART.priya,
      alt: 'Priya Raghunathan, Rebuild lead at Coalhouse Athletic Club',
    },
    bio: 'Priya spent six years in outpatient orthopaedics before coming here, and she still takes referrals from three practices on Frankford Avenue. She reads the imaging, talks to your surgeon if you want, and then teaches you to load the thing that hurts.',
  },
  {
    name: 'Tomás Iriarte',
    role: 'Conditioning lead',
    credentials: 'Former lightweight rower · Delaware Rowing Collective',
    shot: {
      src: COACH_ART.tomas,
      alt: 'Tomás Iriarte, conditioning lead at Coalhouse Athletic Club',
    },
    bio: 'Tomás runs the Engine Room and sets the intervals off each lifter’s own tested pace rather than off a screen at the front, which is why the 6:30am class contains both a retired firefighter and somebody training for Broad Street.',
  },
]

export default function CoachRoster() {
  return (
    <section id="coaches" className="bg-[#F7F3EC]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Coaches"
          title="Four people, all of them on the floor"
          blurb="Nobody at Coalhouse coaches from behind a desk, and nobody is a rotating contractor. These are the four people who will be watching you lift for as long as you train here."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {COACHES.map((coach) => (
            <article key={coach.name} data-testid="coach-card" className="flex flex-col">
              <Figure
                shot={coach.shot}
                testId="coach-portrait"
                className="w-full rounded-3xl border border-[#12141A]/10 object-cover"
                frameClassName="flex flex-col"
              />
              <h3 className="mt-5 text-lg font-black tracking-tight text-[#12141A]">{coach.name}</h3>
              <p className="mt-1 text-sm font-bold text-[#E1552B]">{coach.role}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.1em] text-[#12141A]/50">{coach.credentials}</p>
              <p className="mt-4 text-sm leading-relaxed text-[#12141A]/75">{coach.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

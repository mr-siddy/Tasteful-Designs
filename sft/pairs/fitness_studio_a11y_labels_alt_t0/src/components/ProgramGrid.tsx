import { SectionHeading } from './PageKit'

const PROGRAMMES = [
  {
    name: 'Barbell Foundations',
    price: '$180 / month',
    schedule: 'Mon · Wed · Fri — 6:00am, 12:15pm, 5:30pm',
    blurb:
      'The eight week on-ramp. Four lifts taught from an empty bar, one new thing per session, and nobody adds weight until the shape of the movement holds under fatigue.',
    detail: 'Capped at twelve lifters. Two coaches on the floor.',
  },
  {
    name: 'Coalhouse Conditioning',
    price: '$160 / month',
    schedule: 'Tue · Thu — 6:30am, 6:00pm',
    blurb:
      'Forty-five minutes of engine work on the rowers, the bikes and the sled track. Paced off your own numbers, not a screen at the front, so a first timer and a marathoner can share a session.',
    detail: 'No barbell required. Good the day after a heavy squat.',
  },
  {
    name: 'Rebuild',
    price: '$240 / month',
    schedule: 'Tue · Sat — by appointment',
    blurb:
      'One-to-one work in the private studio for people coming back from a shoulder, a back or a knee. Priya reads the imaging and the surgical notes before you lift anything.',
    detail: 'Runs alongside your physical therapist, not instead of them.',
  },
  {
    name: 'Masters Strength',
    price: '$150 / month',
    schedule: 'Mon · Thu — 10:00am',
    blurb:
      'Built for lifters over fifty-five and paced accordingly: longer warm ups, more sets at moderate load, and a bias toward the things that keep you carrying your own groceries at eighty.',
    detail: 'Our largest programme. Forty-one regulars.',
  },
  {
    name: 'Barbell Club',
    price: '$210 / month',
    schedule: 'Sat — 9:00am, plus two open sessions',
    blurb:
      'For members chasing a number. Percentage-based blocks, video review on the main lifts, and a coach who will drive you to a meet in Allentown and count your attempts.',
    detail: 'Nine members competed last season. Seven set a personal best.',
  },
  {
    name: 'Open Gym',
    price: '$120 / month',
    schedule: 'Every day — 5:30am to 9:30pm',
    blurb:
      'The room, the racks and a coach within earshot. For people who already know what they are doing and want somewhere with real bars, real plates and chalk that nobody complains about.',
    detail: 'Includes one programme review each quarter.',
  },
]

export default function ProgramGrid() {
  return (
    <section id="programmes" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Programmes"
          title="Six ways into the room"
          blurb="Everything here is coached and everything here is written down in advance. Pick the one that matches where you are now — you can move between them at any point without paying a change fee."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMMES.map((programme) => (
            <article
              key={programme.name}
              data-testid="programme-card"
              className="flex flex-col rounded-3xl border border-[#12141A]/10 bg-[#F7F3EC] p-7 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-black tracking-tight text-[#12141A]">{programme.name}</h3>
              <p className="mt-2 text-sm font-bold text-[#E1552B]">{programme.price}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#12141A]/50">
                {programme.schedule}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#12141A]/75">{programme.blurb}</p>
              <p className="mt-5 border-t border-[#12141A]/10 pt-4 text-xs leading-relaxed text-[#2F6C7A]">
                {programme.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { BarbellIcon, FloorPlan, OarIcon, SaunaIcon, StrokeArc } from './icons'

const BLOCKS = [
  {
    id: 'floor',
    eyebrow: 'The main floor',
    title: 'A sprung floor, and eighteen seats that all see a coach',
    body: [
      'The room was a sail loft, which is why it has eleven-foot ceilings, six arched windows facing the lock gates, and floorboards that were already sprung when we found them. We laid the ergs in three ranks of six rather than one long line so that a coach standing at the front can see every catch in the room without walking the aisle.',
      'It matters more than it sounds. The single most common reason people bounce off indoor rowing is that they spend six months pulling with their arms in a corner where nobody corrected them, decide rowing is boring and their back hurts, and leave. Nobody trains unseen here.',
    ],
    bullets: [
      'Eighteen water-resistance ergs, serviced monthly',
      'Three ranks of six, every seat in a coach’s sightline',
      'Live splits on the wall board for interval sessions',
    ],
    icon: OarIcon,
    art: 'plan',
  },
  {
    id: 'annexe',
    eyebrow: 'The strength annexe',
    title: 'Six platforms behind the glass, calibrated and quiet',
    body: [
      'Through the glass wall at the back are six lifting platforms, calibrated plates, a competition bar on every rack, and dumbbells that run to fifty kilos because our members are adults who get strong. The annexe is walled off deliberately — you can drop a deadlift without derailing the 2k happening ten metres away.',
      'Every strength session is written from your last testing week, not from a whiteboard someone filled in that morning. If your block says three sets of five at sixty-eight kilos, that is what is on your card when you walk in, and Callum has already decided what happens if it moves badly.',
    ],
    bullets: [
      'Six platforms, competition bars, calibrated plates',
      'Dumbbells to 50kg and two GHD benches',
      'Written progressions revised every eight weeks',
    ],
    icon: BarbellIcon,
    art: 'arc',
  },
  {
    id: 'bay',
    eyebrow: 'The recovery bay',
    title: 'Cedar, cold water, and permission to do nothing',
    body: [
      'A four-person cedar sauna, two plunges held at eleven degrees, and a dim matted room with no mirrors and no clock on the wall you can see from the floor. The bay is included on every membership above a day pass, and it is open from eight in the morning until the club closes.',
      'We built it because the hardest part of coaching adults is not getting them to work — it is getting them to stop. Recovery that lives on a whiteboard as a suggestion gets skipped in week four of every block. Recovery that is a timetabled session with a coach in it does not.',
    ],
    bullets: [
      'Four-person cedar sauna, running from 8:00am daily',
      'Two contrast plunges held at 11°C',
      'Soft-tissue clinic on Fridays with Marguerite',
    ],
    icon: SaunaIcon,
    art: 'plan',
  },
]

export function TheBoathouse() {
  return (
    <section id="boathouse" className="bg-[#faf6ef]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#12626c]">47 Cordage Lane</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#0b3a41] md:text-5xl">
            Three thousand square feet above the old chandlery
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#2c565c]">
            You climb one flight of stairs past the ropemaker’s sign that we were told to keep, and
            the room opens up in front of you. It smells like cedar and chalk. It does not have a
            smoothie bar.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {BLOCKS.map((block, index) => {
            const Icon = block.icon
            return (
              <div
                key={block.id}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
                }`}
              >
                <div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#e0813d]/15 text-[#8a4715]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-5 text-[11px] uppercase tracking-[0.24em] text-[#12626c]">
                    {block.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#0b3a41] md:text-3xl">
                    {block.title}
                  </h3>
                  {block.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)} className="mt-4 leading-relaxed text-[#2c565c]">
                      {paragraph}
                    </p>
                  ))}
                  <ul className="mt-6 space-y-2">
                    {block.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-[#2c565c]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e0813d]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-[#0b3a41]/10 bg-[#f1e7d7] p-8">
                  {block.art === 'plan' ? (
                    <FloorPlan className="h-56 w-full" />
                  ) : (
                    <StrokeArc className="h-56 w-full" />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

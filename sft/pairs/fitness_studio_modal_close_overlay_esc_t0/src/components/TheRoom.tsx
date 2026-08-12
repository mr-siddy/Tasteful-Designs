import { RoomPlan, SoundIcon, SaunaIcon, BarbellIcon } from './Icons'

const BLOCKS = [
  {
    title: 'A press hall, not a basement',
    Icon: BarbellIcon,
    body: 'The Gazette printed here for sixty-one years, and the room still has the cast-iron press bed bolted into the floor by the doors — we left it, cleaned it, and put the bike deck around it. Six metres of ceiling means the air moves; four industrial fans mean it keeps moving when twenty-four people are working at threshold. The strength floor behind the deck runs the length of the old paper store, with eight stations, calibrated plates and a rack you never have to queue for.',
    caption: 'Twenty-four bikes on the deck, eight lifting stations behind, recovery room at the back.',
  },
  {
    title: 'Tuned, not just loud',
    Icon: SoundIcon,
    body: 'A brick box with a six-metre ceiling is an acoustic problem, so we treated it like one: forty-two absorption panels across the back wall, a distributed speaker array instead of two stacks pointed at the front row, and a hard ceiling of 94 decibels at the middle bike. The coach is on a headset mixed above the music, which is the whole point — you should be able to hear a cadence target called from the platform without anybody shouting it twice.',
    caption: 'The playlist is published the night before, so you know what Thursday sounds like.',
  },
  {
    title: 'The ten minutes after',
    Icon: SaunaIcon,
    body: 'Most people quit training because of what happens in the twelve hours after a hard class, not during it. So the recovery room is a real room, not a corner: a six-person sauna at 78 degrees, four massage guns on the wall, rollers and bands, and two shower blocks that never run cold because we replaced the cylinder before we bought the second speaker array. Reset on Thursday evening exists for the same reason, and members can use the room any time we are open.',
    caption: 'Sauna, rollers and two shower blocks — included in every membership tier.',
  },
]

export function TheRoom() {
  return (
    <section id="room" className="bg-[#101826] text-[#faf5ee]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#efa63c]">
            88 Hallam Fields Road
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
            The room does half the coaching
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-[#faf5ee]/70">
            We spent eleven months on this building before we sold a single class, because a
            studio is mostly airflow, sightlines and sound, and none of those can be fixed with a
            better playlist afterwards.
          </p>
        </div>

        <div className="mt-14 space-y-14">
          {BLOCKS.map((block, index) => (
            <article
              key={block.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                index % 2 === 1 ? 'lg:[&>figure]:order-first' : ''
              }`}
            >
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d94a2b] text-[#faf5ee]">
                  <block.Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-2xl font-black tracking-tight sm:text-3xl">
                  {block.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#faf5ee]/70">{block.body}</p>
              </div>

              <figure className="rounded-3xl border border-[#faf5ee]/12 bg-[#1b2436] p-5">
                <RoomPlan className="h-52 w-full" />
                <figcaption className="mt-3 text-xs leading-relaxed text-[#faf5ee]/55">
                  {block.caption}
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

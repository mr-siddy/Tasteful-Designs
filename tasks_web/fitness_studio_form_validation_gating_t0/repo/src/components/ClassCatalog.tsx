import { BreathIcon, ClockIcon, FlameIcon, KettlebellIcon, ReformerIcon, SpineIcon } from './Icons'

type ClassCard = {
  name: string
  room: string
  minutes: string
  intensity: string
  price: string
  blurb: string
  icon: (props: { className?: string; title: string }) => JSX.Element
}

const CLASSES: ClassCard[] = [
  {
    name: 'Reformer Foundations',
    room: 'Studio one',
    minutes: '50 min',
    intensity: 'Gentle · beginner welcome',
    price: '$28 drop-in',
    blurb:
      'The class we put almost everybody in first. Springs, footwork, breath and the six positions you will use in every other reformer class we run. Nobody is asked to do a teaser in week one.',
    icon: ReformerIcon,
  },
  {
    name: 'Reformer Power',
    room: 'Studio one',
    minutes: '50 min',
    intensity: 'Hard · Foundations first',
    price: '$32 drop-in',
    blurb:
      'Heavier springs, longer holds, jumpboard finishes. Tova programs it in four-week blocks so you can actually see the plank hold go from forty seconds to ninety.',
    icon: SpineIcon,
  },
  {
    name: 'Heated Vinyasa',
    room: 'Studio two',
    minutes: '60 min',
    intensity: 'Moderate · 96°F',
    price: '$26 drop-in',
    blurb:
      'Priya teaches to the breath, not the playlist. Room is held at ninety-six degrees, which is warm enough to open your hips and cool enough to think. Mats and towels are on the wall.',
    icon: FlameIcon,
  },
  {
    name: 'Slow Flow & Mobility',
    room: 'Studio two',
    minutes: '60 min',
    intensity: 'Gentle · unheated',
    price: '$24 drop-in',
    blurb:
      'Long holds, props for everything, and ten minutes at the end where nobody says a word. Our most-booked Sunday class and the one physios keep sending people to.',
    icon: BreathIcon,
  },
  {
    name: 'Barbell Strength',
    room: 'The loft',
    minutes: '55 min',
    intensity: 'Hard · coached',
    price: '$30 drop-in',
    blurb:
      'Squat, press, hinge, carry, on a written twelve-week progression. Six lifters, one coach, real percentages in your logbook — not a random workout on a whiteboard.',
    icon: KettlebellIcon,
  },
  {
    name: 'Postnatal Return',
    room: 'Studio one',
    minutes: '45 min',
    intensity: 'Gentle · cleared at six weeks',
    price: '$28 drop-in',
    blurb:
      'Camille runs it in eight-week cohorts with a pelvic-floor screen in week one. Babies are welcome on the mats at the back and have been since the class started in 2019.',
    icon: SpineIcon,
  },
]

export default function ClassCatalog() {
  return (
    <section id="classes" data-testid="classes" aria-labelledby="classes-heading" className="bg-[#FAF6F0]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C4623A]">What we teach</p>
          <h2
            id="classes-heading"
            className="mt-3 text-3xl font-black tracking-tight text-[#16211C] sm:text-4xl"
          >
            Six classes, three rooms, one honest scale for each of them
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B5A52]">
            Every class on this list has a written beginner variation and a
            written hard variation, and the teacher will offer you the one that
            fits the day you have had. Drop-in prices are below; members book any
            of them from the same account.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CLASSES.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.name}
                data-testid="class-card"
                className="flex flex-col rounded-2xl border border-[#E4DCD0] bg-[#FFFCF8] p-7 shadow-[0_18px_40px_-34px_rgba(22,33,28,0.7)] transition hover:border-[#C9D8CF]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E9F0EB]">
                    <Icon title={item.name} className="h-7 w-7" />
                  </span>
                  <span className="rounded-full bg-[#F3E7D8] px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-[#8A5230]">
                    {item.room}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black tracking-tight text-[#16211C]">{item.name}</h3>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#5C6B63]">
                  <span className="inline-flex items-center gap-1.5">
                    <ClockIcon title="Class length" className="h-4 w-4" />
                    {item.minutes}
                  </span>
                  <span>{item.intensity}</span>
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-[#4B5A52]">{item.blurb}</p>

                <p className="mt-6 border-t border-[#EDE3D6] pt-4 text-base font-black text-[#1F4A3C]">
                  {item.price}
                </p>
              </article>
            )
          })}
        </div>

        <p className="mt-10 rounded-2xl border border-[#DCE7E0] bg-[#EDF3EF] px-6 py-5 text-sm leading-relaxed text-[#3C4A42]">
          Class not on the list? We also run a Thursday 7am rowing conditioning
          block and a Saturday teen strength hour, both by request through the
          front desk. Ask Desmond — he builds them if six people want them.
        </p>
      </div>
    </section>
  )
}

const STEPS = [
  {
    time: '3:00pm',
    title: 'The fire is lit',
    body: 'Tomás splits the first load of apple wood and lights the hearth. It takes two hours to build a bed of coals deep enough to cook on, and nothing goes over it before five.',
  },
  {
    time: '4:15pm',
    title: 'The card is written',
    body: 'Whatever came off the boat and out of the valley that morning gets tasted, weighed and written on the board by the pass. If a producer had a thin week, that dish does not run.',
  },
  {
    time: '5:00pm',
    title: 'Doors, and the bar fills',
    body: 'Twelve bar seats and the chef’s counter are held for walk-ins every night. The first reservations are seated at ten past, once the hearth bread has come out of the ash.',
  },
  {
    time: '9:40pm',
    title: 'The ash gets loaded',
    body: 'Lamb shoulders, squash and garlic go into the cooling embers for tomorrow. The last table can still order dessert; the fire is still working long after the kitchen stops.',
  },
]

export default function TheRoom() {
  return (
    <section id="room" className="bg-[#F7F1E8]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#C4653A]">The room</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#12261F] sm:text-5xl">
            How an evening actually runs
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#12261F]/75">
            Sixty-two seats, reclaimed fir, copper sconces, and a twelve-seat counter that faces
            straight into the coals. It is loud in the good way by seven-thirty and calm again by
            ten. Here is the shape of a Thursday.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-[#12261F]/10 bg-white/70 p-7"
            >
              <span className="font-serif text-5xl leading-none text-[#E08B4F]">
                {index + 1}
              </span>
              <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-[#4C6B54]">
                {step.time}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-[#12261F]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#12261F]/70">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-8 rounded-[2rem] bg-[#4C6B54]/10 p-9 lg:grid-cols-3">
          <div>
            <h3 className="font-serif text-2xl text-[#12261F]">Nadia Kowalczyk</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#C4653A]">Chef & owner</p>
            <p className="mt-3 text-sm leading-relaxed text-[#12261F]/70">
              Nine years cooking over wood in Basque country, then eighteen months building this
              hearth by hand. Opened Copperfern in the autumn of 2019.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-[#12261F]">Tomás Iriarte</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#C4653A]">Grill</p>
            <p className="mt-3 text-sm leading-relaxed text-[#12261F]/70">
              Runs the fire six nights a week and has not used a thermometer since 2021. Judges
              the grate by holding a hand over it and counting.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-[#12261F]">June Sasaki</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#C4653A]">Bread & pastry</p>
            <p className="mt-3 text-sm leading-relaxed text-[#12261F]/70">
              Bakes on the hearth floor twice a service and keeps the levain that has been going
              since the week we opened. The buckwheat tart is hers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

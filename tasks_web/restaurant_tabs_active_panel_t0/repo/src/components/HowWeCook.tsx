const DAY = [
  {
    time: '05:40',
    title: 'The oak is lit',
    body: 'Marc opens up and starts the fire with cuttings and three split staves. It needs four hours before anything can be cooked on it, which is why nobody here has ever served an early lunch.',
  },
  {
    time: '07:15',
    title: 'The boats call',
    body: 'Point Judith rings with what came up overnight. Whatever they have decides the fideuà, the suquet and half of what gets written on the board by ten.',
  },
  {
    time: '11:00',
    title: 'Bread, brine, peel',
    body: 'The overnight peppers come out of the ember box and are peeled by hand. Dough that proved in the cold room goes near the fire. Fish goes into salt water for twenty minutes, no longer.',
  },
  {
    time: '17:00',
    title: 'Service begins',
    body: 'One cook stands at the grill for the whole night and does nothing else. Everything else — the rice pans, the clay dishes, the alioli — works around that person.',
  },
  {
    time: '23:30',
    title: 'The ash is banked',
    body: 'The last coals get raked into the ember box with tomorrow’s onions and aubergine on top. The fire is never fully out; it just gets quiet until twenty to six.',
  },
]

export function HowWeCook() {
  return (
    <section id="day" data-testid="how-we-cook" className="bg-stone-950 py-24 text-stone-100">
      <div className="mx-auto max-w-5xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-400">
            One service, start to finish
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            A day at Casa Marisol
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-300">
            Eighteen hours, most of it before anyone sits down. This is the part of a restaurant
            guests almost never see, so here it is in order.
          </p>
        </div>

        <ol className="mt-14 space-y-0">
          {DAY.map((step, index) => (
            <li
              key={step.time}
              data-testid="day-step"
              className="relative grid gap-4 border-l border-stone-800 pb-12 pl-10 last:pb-0 sm:grid-cols-[7rem_1fr] sm:gap-8"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[13px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-[11px] font-bold text-stone-950"
              >
                {index + 1}
              </span>
              <span className="font-serif text-2xl font-semibold text-amber-400">{step.time}</span>
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-stone-400">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

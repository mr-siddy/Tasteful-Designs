const STEPS = [
  {
    step: '01',
    title: 'Book, or do not',
    time: '30 days ahead',
    body: 'Tables open on the first of the month for the month after, and the hearth counter goes in about nine minutes. If you missed it, the nine bar stools are held for walk-ins every single night and the first people usually turn up at 4:50pm.',
  },
  {
    step: '02',
    title: 'Arrive and take the paper menu',
    time: 'From 5:00pm',
    body: 'Tomás Vela runs the floor and will tell you honestly what is best tonight rather than what is most expensive. The menu you are handed was printed at half past four, so it is accurate to within about an hour.',
  },
  {
    step: '03',
    title: 'Order for the table, not for yourself',
    time: 'The first ten minutes',
    body: 'Most people land on four or five small plates between two, one thing from the hearth to share, and a pasta if the evening is going well. Nobody will hurry you and nobody will judge an order of cornbread and two glasses of wine.',
  },
  {
    step: '04',
    title: 'Watch the fire while you wait',
    time: 'Throughout',
    body: 'The pass is open on purpose. You can see the cooks raise and lower the grill, sweep the hearth floor for Ibrahim at four, and rake fresh coals across when a table of eight walks in.',
  },
  {
    step: '05',
    title: 'Sweets, and then the last of it',
    time: 'Around 9:00pm',
    body: 'Junie Park sends out two desserts a night and no more. Last orders from the kitchen are 9:30pm, the bar keeps pouring until 10:30pm, and the room empties itself gently rather than being closed.',
  },
]

export function EveningFlow() {
  return (
    <section id="evening" aria-labelledby="evening-heading" className="border-b border-[#241C17]/10">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4A5D3A]">
            What an evening looks like
          </p>
          <h2 id="evening-heading" className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Five hours, five steps, no ceremony at any of them
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#544940]">
            People ask us what to expect, usually because the words &ldquo;tasting counter&rdquo;
            make a place sound stiffer than it is. Here is the whole shape of a night at Persimmon
            &amp; Rye, start to finish.
          </p>
        </div>

        <ol className="mt-14 space-y-5">
          {STEPS.map((item) => (
            <li
              key={item.step}
              className="grid gap-5 rounded-3xl border border-[#241C17]/12 bg-white p-7 shadow-sm sm:grid-cols-[auto_1fr] sm:items-start"
            >
              <span
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#241C17] text-lg font-black text-[#F2A65A]"
              >
                {item.step}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="text-xl font-black tracking-tight">{item.title}</h3>
                  <span className="rounded-full bg-[#C4552B]/12 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#C4552B]">
                    {item.time}
                  </span>
                </div>
                <p className="mt-3 leading-relaxed text-[#544940]">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const STEPS = [
  {
    time: '4:30',
    title: 'You arrive before you are hungry',
    body: 'The lot fills from the county road end. Margo takes your name at the stand whether you booked or not, and points you at the bar if the table is not turned yet.',
  },
  {
    time: '4:45',
    title: 'A drink stands in for the wait',
    body: 'Pressed and sweet, or a Wanetka cider if you are driving the lake road home. Nobody hurries you off the stool and nobody forgets you are on it.',
  },
  {
    time: '5:10',
    title: 'The tray beats the menu to the table',
    body: 'Relish tray, braunschweiger crock, rye and butter. Menus come after, which surprises first-timers and delights everybody else.',
  },
  {
    time: '5:40',
    title: 'Supper, cooked to the ticket',
    body: 'Curt fires the broiler in the order the tickets land, not the order the tables filled. Prime rib gets cut where you can see it happen.',
  },
  {
    time: '7:15',
    title: 'Pie, or something with ice cream in it',
    body: 'Grasshopper pie, a brandy Alexander, or coffee and the last of the rye. The room turns twice on a Friday and never feels like it did.',
  },
]

export function EveningOrder() {
  return (
    <section className="bg-[#F6F1E4]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#7C2D2D]">How the night goes</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#17130F]">
            An evening here has an order to it
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5C5445]">
            If you have never been to a supper club, the sequence is most of the point. Here is the
            shape of a normal Friday, from the first car in the lot to the last piece of pie.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, index) => (
            <li
              key={step.time}
              data-testid="evening-step"
              className="rounded-2xl border border-[#17130F]/10 bg-[#EFE7D5] p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1C4535] text-sm font-semibold text-[#F6F1E4]">
                  {index + 1}
                </span>
                <span className="text-sm font-semibold tracking-[0.14em] text-[#7C2D2D]">
                  {step.time}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold leading-snug text-[#17130F]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5C5445]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

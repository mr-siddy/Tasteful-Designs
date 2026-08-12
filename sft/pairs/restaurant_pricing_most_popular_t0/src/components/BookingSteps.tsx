const STEPS = [
  {
    number: '01',
    title: 'Tell us the date and the headcount',
    body: 'Send the evening you want, roughly how many people, and anything the group cannot eat. Delphine answers the events line herself and usually comes back inside a working day.',
  },
  {
    number: '02',
    title: 'We hold the date for seven days',
    body: 'A soft hold costs nothing and blocks the room on our book. Nobody else can take that evening while you check with the people you need to check with.',
  },
  {
    number: '03',
    title: 'Build the menu with Margo',
    body: 'Twenty minutes on the phone or at the bar on a Tuesday. She will tell you what will be at its best that week and steer you away from anything that will not travel across a room of twenty-four.',
  },
  {
    number: '04',
    title: 'Confirm with half the estimate',
    body: 'The deposit is half the estimated total and comes straight off the balance. Cancel more than fourteen days out and it is returned in full, no argument.',
  },
  {
    number: '05',
    title: 'Arrive and let the fire do the rest',
    body: 'Doors open thirty minutes before your seating. Bring your own wine if you like, bring a cake, bring a speech. We will have the room lit, the hearth working and your menus on the table.',
  },
]

export default function BookingSteps() {
  return (
    <section className="bg-[#f7f2ea]" aria-labelledby="booking-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b8431a]">
            Booking the back room
          </p>
          <h2
            id="booking-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Five steps, and only one of them is paperwork
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5b5148]">
            We have hosted three hundred and twelve private dinners in this room and the process has
            settled into something predictable. Here is the whole of it, start to finish.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.number}
              data-testid="booking-step"
              className="relative rounded-2xl border border-[#171310]/10 bg-white p-6 shadow-sm"
            >
              <span
                aria-hidden="true"
                className="font-serif text-4xl font-semibold leading-none text-[#e2622a]/35"
              >
                {step.number}
              </span>
              <h3 className="mt-3 font-serif text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#5b5148]">{step.body}</p>
            </li>
          ))}
          <li className="rounded-2xl border border-[#171310]/10 bg-[#171310] p-6 text-[#f7f2ea] shadow-sm">
            <h3 className="font-serif text-xl font-semibold tracking-tight">Still deciding?</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[#c8bcae]">
              Come eat in the dining room first. Mention the private dinner when you book and we will
              walk you through the back room between courses so you can see the table set.
            </p>
            <a
              href="#visit"
              data-testid="booking-cta"
              className="mt-5 inline-block rounded-xl bg-[#e2622a] px-4 py-2.5 text-sm font-semibold text-[#171310] transition hover:bg-[#e8b04b]"
            >
              Book a walkthrough
            </a>
          </li>
        </ol>
      </div>
    </section>
  )
}

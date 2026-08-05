const QUESTIONS = [
  {
    q: 'Do we need a reservation, or can we just come?',
    a: 'Both work. A third of the dining room is held for walk-ins every night and the bar is never reserved. If it is Friday or Saturday and you are a party of six or more, call — the wait after 5:30 can reach an hour and we would rather you spent it at home.',
  },
  {
    q: 'Is there a dress code?',
    a: 'No. People come in from the boat and people come in from a funeral, sometimes at the same table. The only thing we ask is that you leave the wet swimsuits on the dock.',
  },
  {
    q: 'What can you do for vegetarians and for gluten?',
    a: 'There is always a vegetarian plate — usually a roasted squash with wild rice and browned butter — and the walleye can be broiled without flour. The relish tray is naturally gluten free except the rye. Tell Margo when you book and the kitchen will have it ready.',
  },
  {
    q: 'Can we bring the kids?',
    a: 'Please do. There is a children’s supper at $12 with a smaller piece of whatever the table is having, ice cream included, and the booths hold a car seat without a fight.',
  },
  {
    q: 'Can we come by boat?',
    a: 'Yes. Four slips at the end of the dock, first come first served, no charge, and we ask you to be off them by eleven. The channel markers are lit through October.',
  },
  {
    q: 'Do you sell gift certificates?',
    a: 'At the host stand in any amount, and by phone if you want one mailed. They do not expire, which is the law here anyway and also just correct.',
  },
]

export function CommonQuestions() {
  return (
    <section className="bg-[#F6F1E4]">
      <div className="mx-auto max-w-4xl px-5 py-24">
        <p className="text-[11px] uppercase tracking-[0.32em] text-[#7C2D2D]">
          Asked at the host stand
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#17130F]">
          Six questions, answered plainly
        </h2>

        <dl className="mt-12 divide-y divide-[#17130F]/10 border-y border-[#17130F]/10">
          {QUESTIONS.map((entry) => (
            <div key={entry.q} data-testid="faq-entry" className="py-7">
              <dt className="text-lg font-semibold text-[#17130F]">
                <h3>{entry.q}</h3>
              </dt>
              <dd className="mt-3 text-base leading-relaxed text-[#5C5445]">{entry.a}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-sm leading-relaxed text-[#7C6B4B]">
          Anything else, call (555) 0179 between two and four in the afternoon and you will get a
          person instead of a menu tree.
        </p>
      </div>
    </section>
  )
}

const QUESTIONS = [
  {
    question: 'How far ahead should I book?',
    answer:
      'Reservations open thirty days out at 9am. Tuesday and Wednesday usually have something the same week; Friday and Saturday go within an hour of release. The nine hearth stools are held for walk-ins until 6:15pm every night, so an early arrival is a real option.',
  },
  {
    question: 'Can you cook around allergies and diets?',
    answer:
      'Yes, and we would rather know at booking than at the table. Coeliac, shellfish, nut and dairy adjustments are routine. Vegetarians get a full menu built on the fire pit rather than a single substituted plate — tell us and Nadia will write it that afternoon.',
  },
  {
    question: 'Is there a dress code?',
    answer:
      'None. It is a converted foundry with a fire in it, and half the room comes straight from work. The only practical advice we give is that wool holds smoke, so wear the jacket you do not mind smelling like dinner.',
  },
  {
    question: 'Do you take large groups in the main room?',
    answer:
      'Up to six on a normal service. Seven and above moves upstairs to the Brass Room or, on Sundays and Mondays, to a full-room buyout. Both are priced per guest and include the wine pairing.',
  },
  {
    question: 'Are children welcome?',
    answer:
      'Very much so, at the 5:30pm seating. We keep two booster seats, we will grill a plain piece of fish or a bowl of buttered potatoes on request, and nobody here minds a five-year-old who wants to stand and watch the fire.',
  },
]

export function FaqList() {
  return (
    <section id="faq" className="bg-white text-stone-900" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-4xl px-5 py-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-700">
            Before you come
          </p>
          <h2 id="faq-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Questions we answer on the phone every week
          </h2>
        </div>

        <dl className="mt-14 divide-y divide-stone-200 border-y border-stone-200">
          {QUESTIONS.map((item) => (
            <div key={item.question} data-testid="faq-item" className="py-8">
              <dt className="text-lg font-semibold tracking-tight text-stone-900">
                {item.question}
              </dt>
              <dd className="mt-3 leading-relaxed text-stone-600">{item.answer}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-center text-sm text-stone-500">
          Still unsure about something? Call the room between 3pm and 5pm and you will get a person,
          not a machine.
        </p>
      </div>
    </section>
  )
}

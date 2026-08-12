const FAQS = [
  {
    question: 'Can you cook for someone who does not eat meat?',
    answer:
      'Yes, and properly rather than grudgingly. The smoked mushroom rye pie is a real centrepiece and every private menu has a vegetarian run built alongside the main one. Tell Delphine the number when you book and nobody at the table gets handed a plate of sides.',
  },
  {
    question: 'What happens if somebody in the party has a severe allergy?',
    answer:
      'We cook over live fire in one open kitchen, so we will not promise you a nut-free or gluten-free environment. What we will do is build that guest a separate menu, prep it on its own board and have the server carry it out by hand. Tell us at least a week before a private dinner.',
  },
  {
    question: 'Is there a corkage fee?',
    answer:
      'Two bottles per party come in free on any private package. After that it is twenty-five dollars a bottle, waived entirely if the wine is from a grower Priya already stocks — we would rather see the bottle opened than win the argument.',
  },
  {
    question: 'How far ahead do private dinners book?',
    answer:
      'Weekends in October, November and December go five to six months out. A Wednesday or Thursday in February is often available inside a fortnight. We also hold two weeknights a month back for neighbourhood bookings, so it is always worth asking.',
  },
  {
    question: 'Do you take walk-ins?',
    answer:
      'The ten bar stools are walk-in only and we never hold them. The dining room takes reservations thirty days ahead at nine in the morning. If the book looks full, come at half past nine — the second seating usually loosens up.',
  },
  {
    question: 'Is the restaurant step-free?',
    answer:
      'The entrance from Halstead Row is level, the dining room and back room are on one floor, and there is an accessible bathroom past the bar. The mill floor is original brick, so it is uneven in places; tell us when you book and we will seat you on the smoothest run of it.',
  },
]

function EmberBullet() {
  return (
    <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-[#e2622a]" aria-hidden="true">
      <path
        d="M8 1.6c2.5 3 3.8 5.2 3.8 7.2A3.8 3.8 0 0 1 8 12.6 3.8 3.8 0 0 1 4.2 8.8c0-2 1.3-4.2 3.8-7.2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function FaqSection() {
  return (
    <section className="bg-[#efe6d8]" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b8431a]">
              Before you write to us
            </p>
            <h2
              id="faq-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              The six questions the events line gets every week
            </h2>
            <p className="mt-4 leading-relaxed text-[#5b5148]">
              If yours is not here, the events line is answered by a person between ten and five,
              Tuesday to Saturday.
            </p>
            <a
              href="#visit"
              data-testid="faq-cta"
              className="mt-6 inline-block rounded-xl border border-[#171310]/20 px-5 py-3 text-sm font-semibold text-[#171310] transition hover:border-[#b8431a] hover:text-[#b8431a]"
            >
              Ask us something else
            </a>
          </div>

          <dl className="space-y-5">
            {FAQS.map((faq) => (
              <div
                key={faq.question}
                data-testid="faq-item"
                className="rounded-2xl border border-[#171310]/10 bg-white p-6 shadow-sm"
              >
                <dt className="flex gap-3">
                  <EmberBullet />
                  <h3 className="font-serif text-lg font-semibold tracking-tight">{faq.question}</h3>
                </dt>
                <dd className="mt-3 pl-7 text-sm leading-relaxed text-[#5b5148]">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

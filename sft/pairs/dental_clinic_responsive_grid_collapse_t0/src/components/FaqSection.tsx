const FAQS = [
  {
    question: 'Which insurance do you take?',
    answer:
      'We are in-network with Delta Dental, Cigna and Northeast Delta, and we file out-of-network claims for everyone else the same afternoon. Bring the card and Marisol will run a benefits check before your appointment so the estimate you get is the real one.',
  },
  {
    question: 'Does the crown honestly take one appointment?',
    answer:
      'Yes, for roughly nine crowns in ten. The exceptions are teeth that need a root canal first or gum work underneath, and we will tell you that at the scan rather than halfway through. Block out three hours and bring something to read.',
  },
  {
    question: 'I am genuinely frightened of dentists. What now?',
    answer:
      'Book a talk-only visit. You keep your coat on, nothing goes near your mouth, and we spend twenty minutes working out what you can manage. It costs nothing and about forty people a year start that way.',
  },
  {
    question: 'How old should my child be for a first visit?',
    answer:
      'The first tooth or the first birthday, whichever comes first. Under threes are free, and the visit is mostly a ride in the chair and a count of the teeth so that the room stops being frightening long before anything needs doing in it.',
  },
  {
    question: 'Where do I park on Water Street?',
    answer:
      'There is a free eleven-space lot behind the building, entered from the alley beside the co-op. If it is full, the King Street garage validates for two hours and we will stamp your ticket at the desk.',
  },
  {
    question: 'What if something goes wrong at the weekend?',
    answer:
      'The practice number rolls to whichever of us is on call. You will speak to Dr. Okonkwo or Dr. Braga, not an answering service, and if it needs seeing we open up on a Saturday morning rather than sending you to the emergency room.',
  },
]

/** Six questions the front desk answers on the phone every week. */
export default function FaqSection() {
  return (
    <section data-testid="faq" className="bg-[#f2e9da]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c68a3e]">
            Before you call
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#0d2b2e] sm:text-4xl">
            The questions we get every week
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#0d2b2e]/70">
            Anything not answered here, ring the desk on{' '}
            <a href="tel:+18025550142" className="font-semibold text-[#0f4c4f] underline">
              (802) 555 0142
            </a>{' '}
            between eight and five, Monday to Friday.
          </p>
        </div>

        <dl className="space-y-6">
          {FAQS.map((faq) => (
            <div
              key={faq.question}
              data-testid="faq-item"
              className="rounded-2xl border border-[#0f4c4f]/10 bg-[#faf5ec] p-7"
            >
              <dt className="font-serif text-lg font-semibold text-[#0d2b2e]">{faq.question}</dt>
              <dd className="mt-2.5 text-[15px] leading-relaxed text-[#0d2b2e]/70">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

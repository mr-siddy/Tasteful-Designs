const FAQS = [
  {
    question: 'What does a first appointment actually cost?',
    answer:
      'A new patient exam and clean is $189, which covers the sixty-minute appointment, full charting, two bitewing images and the scale and polish. If you have a health fund we bill it on the spot and you pay only the gap. Nothing else is added on the day without you agreeing to it first.',
  },
  {
    question: 'I am genuinely frightened of the dentist. Can you work with that?',
    answer:
      'Yes, and you are far from alone — roughly a third of our new patients say the same thing. Book a talk-only appointment where nobody touches your teeth, bring someone with you, use the agreed hand signal to stop at any point, and ask about inhalation sedation. We charge nothing extra for going slowly.',
  },
  {
    question: 'How fast can you see me if a tooth is hurting right now?',
    answer:
      'Two chairs are held empty every weekday for emergencies. Ring (206) 555-0142 before 11am and you will almost always be seen that afternoon. If we cannot fit you in, we will tell you straight away and call a nearby practice with you on the line.',
  },
  {
    question: 'At what age should my child first come in?',
    answer:
      'Around their first birthday, or whenever the first tooth appears. That visit is a ride in the chair, a quick count and a sticker — it exists to make the room ordinary. Children under six are seen at no charge on our Family plan.',
  },
  {
    question: 'Do you take my health fund?',
    answer:
      'We bill Meridian Health, Cascadia Benefits, Northline, Baywater, Pactolus Care and seven smaller funds directly through the terminal at the desk. If yours is not on the list we give you an itemised receipt that any fund will accept for a claim.',
  },
  {
    question: 'Can I pay for a big treatment plan over time?',
    answer:
      'Yes. Anything over $800 can be split across interest-free monthly instalments for up to a year, arranged here rather than through a third-party lender. Joel will map the payments against your calendar before you commit to the first appointment.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-stone-100">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            Questions we get every week
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            The things people ask before they ring
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-teal-900/70">
            If your question is not here, put it in the note field on the request form. Joel answers
            those personally, and a straight answer costs you nothing.
          </p>
        </div>

        <dl className="mt-12 grid gap-5 md:grid-cols-2">
          {FAQS.map((faq) => (
            <div
              key={faq.question}
              data-testid="faq-item"
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-inset ring-teal-900/10"
            >
              <dt className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-800">
                  ?
                </span>
                <h3 className="text-lg font-semibold leading-snug tracking-tight">{faq.question}</h3>
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-teal-900/70">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

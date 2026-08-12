const FAQS = [
  {
    question: 'Is the price on the index really the price I pay?',
    answer:
      'Yes. The figure beside each treatment is what appears on the invoice, and it already includes the exam, any x-rays needed for that treatment and the follow-up review. The only thing that changes it is you agreeing to something different — and that conversation happens sitting upright at the desk, not mid-treatment.',
  },
  {
    question: 'I have not been to a dentist in years. Will I get a lecture?',
    answer:
      'No. Roughly a third of our new patients are in exactly that position and we have long since stopped finding it remarkable. You will get a list of what is there and what it costs, in three tiers of urgency, and you decide what to do about it and when.',
  },
  {
    question: 'What counts as an emergency, and how fast can you see me?',
    answer:
      'Pain that stops you sleeping, swelling, bleeding that will not settle, or a tooth that has broken or come out. Two triage slots are held open every weekday morning and we keep them free until 9am for exactly this. Ring (555) 014-2200 as early as you can.',
  },
  {
    question: 'Do you treat children, and from what age?',
    answer:
      'From about three, or earlier if something is worrying you. The first checkup is $60 and is mostly a ride in the chair, a count of the teeth and a fluoride varnish. Children on a household membership are included at no extra charge.',
  },
  {
    question: 'Can I spread the cost of a crown or a set of veneers?',
    answer:
      'Any treatment over $300 can be split across three, six or twelve months, interest free, arranged at the desk in about ten minutes. We do not run credit checks for the three-month option and there is no fee for settling early.',
  },
  {
    question: 'Do you take my insurance?',
    answer:
      'We are out of network with everyone, deliberately, because network fee schedules are what force practices into fifteen-minute appointments. Marta will file the claim for you and most plans reimburse between forty and seventy per cent of a published price like ours.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-[#F1F5F7]">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2AA79B]">
            Before you ring
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12263F] sm:text-4xl">
            The six things people ask us on the phone
          </h2>
        </div>

        <dl className="mt-12 space-y-5">
          {FAQS.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-[#12263F]/8 bg-white p-7 shadow-sm shadow-[#12263F]/5"
            >
              <dt className="text-lg font-semibold tracking-tight text-[#12263F]">{faq.question}</dt>
              <dd className="mt-3 leading-relaxed text-[#5B7089]">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

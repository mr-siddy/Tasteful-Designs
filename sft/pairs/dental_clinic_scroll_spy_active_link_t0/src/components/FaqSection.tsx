const QUESTIONS = [
  {
    question: 'I have not been to a dentist in years. How bad is this going to be?',
    answer:
      'Almost certainly less bad than you have decided it is. The common outcome after a long gap is a deep clean, two or three fillings and a plan spread over six months. We see this every single week and there is no version of it that gets a lecture.',
  },
  {
    question: 'Do you take my insurance?',
    answer:
      'We bill directly to most major insurers, so you pay only the gap on the day rather than claiming it back yourself. Bring your card to the first visit and reception will check your cover and your remaining annual limit before anything is booked.',
  },
  {
    question: 'Can I be sedated?',
    answer:
      'Yes, at three levels. Topical anaesthetic gel goes under every injection as standard, nitrous oxide is available in any chair on request, and oral sedation can be arranged in advance if the building itself is the difficult part. Sedation needs a driver home.',
  },
  {
    question: 'How much will it cost before I commit to anything?',
    answer:
      'The examination is $145 and includes X-rays, a scan and the written plan. Everything beyond that is quoted in writing at the end of that appointment, itemised, with the insurer estimate beside it. You take the page home and decide there.',
  },
  {
    question: 'What if something breaks on a Saturday night?',
    answer:
      'Call (503) 555-0164 and the answering service will page the on-call clinician. Genuine emergencies are seen the next morning, including Sundays. For a knocked-out adult tooth, keep it in milk, do not scrub it, and get to us within the hour.',
  },
  {
    question: 'Do you see children, and from what age?',
    answer:
      'From the first tooth, though the first two or three visits are usually a ride in the chair and a count of the teeth rather than anything clinical. Dr Raghavan runs the Saturday morning clinic specifically so children do not miss school.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-28 bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">Questions</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-teal-950 sm:text-4xl">
            The six things people ask before they book
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            If yours is not here, phone the practice and ask reception. Nobody will try to convert the call into an
            appointment.
          </p>
        </div>

        <dl className="mt-14 space-y-4">
          {QUESTIONS.map((entry, index) => (
            <div
              key={entry.question}
              data-testid="faq-item"
              className="rounded-3xl border border-stone-200 bg-white p-7"
            >
              <dt className="flex items-start gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs font-semibold text-teal-800">
                  {index + 1}
                </span>
                <h3 className="text-base font-semibold tracking-tight text-teal-950">{entry.question}</h3>
              </dt>
              <dd className="mt-3 pl-11 text-sm leading-relaxed text-stone-600">{entry.answer}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-center text-sm text-stone-600">
          Still unsure about something?{' '}
          <a href="tel:+15035550164" className="font-semibold text-teal-800 underline underline-offset-4">
            Call (503) 555-0164
          </a>{' '}
          between 7:15 and 19:00 on weekdays and speak to a person, not a menu.
        </p>
      </div>
    </section>
  )
}

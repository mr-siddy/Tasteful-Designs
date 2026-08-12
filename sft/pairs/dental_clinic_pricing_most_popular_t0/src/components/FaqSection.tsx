const FAQS = [
  {
    question: 'Do you take my insurance?',
    answer:
      'We are in-network with Meridian, Harbourline and the Wren Harbor Teachers plan, and we file claims for every other PPO as an out-of-network provider, which usually pays the same percentage. Send us a photo of your card before the first visit and Sasha will tell you what it covers and what it does not, in dollars, before you sit down.',
  },
  {
    question: 'What if I have no insurance at all?',
    answer:
      'About four in ten of our patients do not. That is exactly who the in-house membership was built for: preventive visits are already paid for and everything else comes off the same written price list at 15 or 20 percent less. There is no deductible, no annual maximum, and no waiting period before you can use it.',
  },
  {
    question: 'How long is the wait for a new-patient appointment?',
    answer:
      'Usually nine to fourteen days for a first visit, because we hold the schedule deliberately light. If something hurts, that is a different queue entirely — we keep two emergency slots open every weekday morning and members get one of them at no charge.',
  },
  {
    question: 'I am genuinely frightened of the dentist. Is that a problem?',
    answer:
      'It is the most common thing patients tell us, and nobody here treats it as unusual. Nitrous is included on any appointment at no extra cost, numbing gel goes on before every injection and is given time to work, and there is a raised-hand signal that stops everything immediately. Your first appointment can also just be a conversation with nothing going in your mouth.',
  },
  {
    question: 'At what age should my child first come in?',
    answer:
      'Around their first birthday, or whenever the first tooth arrives, whichever comes first. That visit takes about ten minutes and is mostly your child sitting on your lap while Dr. Tarrant counts teeth and answers your questions. We do not charge for a first check under three.',
  },
  {
    question: 'What happens if something breaks on a weekend?',
    answer:
      'Call the main number and the after-hours message gives you Dr. Raghunathan mobile number directly. She will tell you honestly whether it can wait until Monday morning or whether you need to be seen, and if it is the latter she will meet you at the practice.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-[#FBF8F3]" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr,1.2fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C2557E]">
              Questions
            </p>
            <h2
              id="faq-heading"
              className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#0F3B36] sm:text-4xl"
            >
              The six things people ask on the phone
            </h2>
            <p className="mt-5 leading-relaxed text-[#14201E]/70">
              If yours is not here, call (555) 0172 between 7am and 5pm on a weekday. Sasha will
              answer it herself rather than book you an appointment to find out.
            </p>
            <a
              href="#visit"
              data-testid="faq-cta"
              className="mt-7 inline-block rounded-full border border-[#0F3B36]/25 px-6 py-3 text-sm font-semibold text-[#0F3B36] transition-colors hover:border-[#0F3B36]/60"
            >
              Ask us something else
            </a>
          </div>

          <dl className="divide-y divide-[#0F3B36]/10 border-y border-[#0F3B36]/10">
            {FAQS.map((faq) => (
              <div key={faq.question} data-testid="faq-item" className="py-7">
                <dt>
                  <h3 className="font-serif text-lg font-semibold text-[#0F3B36]">{faq.question}</h3>
                </dt>
                <dd className="mt-3 leading-relaxed text-[#14201E]/75">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

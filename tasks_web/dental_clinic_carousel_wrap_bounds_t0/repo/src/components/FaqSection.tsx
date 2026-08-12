const FAQS = [
  {
    question: 'Are you taking on NHS patients?',
    answer:
      'Not at the moment, and we would rather say so plainly than keep a waiting list that never moves. Our NHS list has been closed since 2021. Children of registered private patients are seen on the Family plan, and anyone in genuine pain gets the 8am emergency slot regardless of whether they are registered with us at all.',
  },
  {
    question: 'What happens if I cannot afford the plan you write me?',
    answer:
      'You tell us, and we re-order it. Almost every plan we write can be broken into stages — the thing that hurts, the thing that will hurt next year, and the thing that is cosmetic. We will tell you honestly which is which. Anything over £500 can go on ten months interest-free through reception.',
  },
  {
    question: 'Do I have to see the same dentist every time?',
    answer:
      'For a course of treatment, yes, and we build the diary around it — the person who starts your crown finishes it. For a routine check-up, if your usual clinician is on leave and you would rather not wait, reception will offer you whoever has space and your notes travel with you.',
  },
  {
    question: 'How quickly can I be seen if something breaks?',
    answer:
      'Every weekday between 8am and 10am is kept clear for emergencies and we hold six slots. Ring at half past eight and you will almost always be seen that morning. Out of hours, the answerphone gives you the local urgent care number, and on a bank holiday Dr. Ashworth carries the practice mobile herself.',
  },
  {
    question: 'Is there parking on the quay?',
    answer:
      'Two spaces behind the building on Marram Lane, and the pay-and-display on Quay Parade is free for the first ninety minutes with a disc from reception. The number 4 bus stops outside the chandlery, sixty yards away. The surgery itself is on the ground floor with a level threshold and a wide door.',
  },
  {
    question: 'What do you do with my records if I move away?',
    answer:
      'We send them wherever you ask, free, usually within three working days, including the scans and photographs. Nobody will ring you to ask why you are leaving. Your details are never sold, never shared with a marketing company, and we do not run a mailing list.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-[#FAF6F1] py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2A7C70]">Questions we get weekly</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F2E4A] sm:text-4xl">
            The awkward ones, answered properly
          </h2>
        </div>

        <dl className="mt-12 divide-y divide-[#0F2E4A]/10 border-y border-[#0F2E4A]/10">
          {FAQS.map((faq) => (
            <div key={faq.question} data-testid="faq-item" className="py-7">
              <dt>
                <h3 className="text-lg font-semibold text-[#0F2E4A]">{faq.question}</h3>
              </dt>
              <dd className="mt-3 text-base leading-relaxed text-[#4A5A64]">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

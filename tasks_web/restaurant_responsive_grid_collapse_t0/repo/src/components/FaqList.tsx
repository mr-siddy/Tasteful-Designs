const QUESTIONS = [
  {
    question: 'Can I book, or do I have to queue?',
    answer:
      'Both. Eighteen seats along the north wall and the fourteen-seat long table take bookings thirty days out. The bar, the four-tops and the standing bench are walk-in only, which is thirty-eight of our fifty-six seats. On a Tuesday you will walk straight in; on a Friday at eight, expect thirty to fifty minutes with a drink.',
  },
  {
    question: 'How hot is hot? I am not good with chilli.',
    answer:
      'Everything on the board carries a heat rating from one to four. Ones and twos are aromatic rather than punishing — the lu rou fan and the three-cup chicken have no chilli in them at all. We can pull the mapo tofu back to a two if you ask when you order, but we will not take the pepper out entirely, because then it is a different dish.',
  },
  {
    question: 'Do you cater for allergies and dietary needs?',
    answer:
      'Yes, with honesty about the limits. Both set feasts go vegetarian with a day’s notice. Roughly half the board can be made gluten-free, though not the wheat noodles, and the wok range is shared, so we cannot promise a nut-free or shellfish-free kitchen. Tell us when you book rather than when you sit down and we will do a better job of it.',
  },
  {
    question: 'Is it suitable for kids?',
    answer:
      'Early, yes. Between five and seven the room is bright, the volume is manageable and there are plenty of mild plates — rice, lu rou fan, charred leek skewers, sesame noodles. After eight it gets loud enough that we would not recommend it. We have four high chairs and no separate children’s menu.',
  },
  {
    question: 'What happens if I am running late?',
    answer:
      'Call the lane phone on 555 0172. We hold booked tables for fifteen minutes on a weeknight and ten on a Friday or Saturday, after which the seat goes to the standing bench — that is the deal that keeps walk-ins moving. Come in anyway; Dai will get you back on the list.',
  },
]

export function FaqList() {
  return (
    <section id="questions" className="bg-[#241B18] py-24">
      <div className="mx-auto max-w-4xl px-5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#F5A623]">
            Asked at the door most nights
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#FBF5EC] sm:text-5xl">
            Before you come
          </h2>
        </div>

        <dl data-testid="faq-list" className="mt-12 space-y-6">
          {QUESTIONS.map((item) => (
            <div
              key={item.question}
              data-testid="faq-item"
              className="rounded-2xl border border-[#FBF5EC]/12 bg-[#1D1512] p-7"
            >
              <dt>
                <h3 className="font-serif text-xl font-semibold text-[#FBF5EC]">{item.question}</h3>
              </dt>
              <dd className="mt-3 text-base leading-relaxed text-[#FBF5EC]/70">{item.answer}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-center text-sm text-[#FBF5EC]/55">
          Anything else, email{' '}
          <a href="mailto:hello@persimmonalley.co" className="text-[#E4572E] underline underline-offset-4">
            hello@persimmonalley.co
          </a>{' '}
          and Dai will answer between services.
        </p>
      </div>
    </section>
  )
}

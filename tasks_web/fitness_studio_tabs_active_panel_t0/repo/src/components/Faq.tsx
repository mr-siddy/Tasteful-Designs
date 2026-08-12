const QUESTIONS = [
  {
    question: 'Do I need to have rowed before?',
    answer:
      'No, and roughly two thirds of our members never had. Your landing session is filmed from two angles precisely so that a coach can correct the four things that matter before they become habits. New rowers spend their first fortnight on technique clinics rather than being thrown into a threshold piece on day one.',
  },
  {
    question: 'Is this going to wreck me for three days afterwards?',
    answer:
      'It should not, and if it does we have programmed badly. The first block is deliberately conservative — most people tell us week one felt too easy and week six did not. Soreness that stops you working or sleeping is a coaching error, not a badge, and we would rather you told us about it.',
  },
  {
    question: 'What is parking like at Cordage Lane?',
    answer:
      'There are eleven free spaces in the yard behind the chandlery and unrestricted street parking on Bellhaven Wharf after 6:00pm. The number 14 bus stops at the lock gates, and there is a covered rack for fourteen bikes inside the ground-floor entrance.',
  },
  {
    question: 'Am I locked into a contract?',
    answer:
      'No. Every membership is monthly with thirty days’ notice, and you can freeze for up to two months a year for travel, injury or a new baby without losing your rate. There is no joining fee and there never has been.',
  },
  {
    question: 'Can I use the sauna and plunges without training?',
    answer:
      'Yes — the recovery bay is open from 8:00am until close on every membership above a day pass, and plenty of members come in purely for a Cedar & Plunge round on a rest day. Book a slot in the app if you want the sauna to yourself.',
  },
  {
    question: 'How full do sessions actually get?',
    answer:
      'Every session is capped at eighteen because that is how many ergs are in the room. The 6:15am slots book out about two days ahead in January and about four hours ahead in July. Cancel more than six hours before and the session goes back into your allowance.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-[#f1e7d7]">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#12626c]">Before you come in</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#0b3a41] md:text-5xl">
            The six things people ask at the desk
          </h2>
        </div>

        <dl className="mt-12 divide-y divide-[#0b3a41]/12 border-y border-[#0b3a41]/12">
          {QUESTIONS.map((entry) => (
            <div key={entry.question} className="grid gap-3 py-8 md:grid-cols-[1fr_1.4fr] md:gap-10">
              <dt className="text-lg font-semibold tracking-tight text-[#0b3a41]">
                {entry.question}
              </dt>
              <dd className="leading-relaxed text-[#2c565c]">{entry.answer}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-sm text-[#5b7c81]">
          Something we have not answered? Call the desk on 01462 550 118 between 7:00am and 8:00pm,
          or ask on your landing session — we would rather you asked twice than joined unsure.
        </p>
      </div>
    </section>
  )
}

const QUESTIONS = [
  {
    question: 'How long does it take to move off what we use now?',
    answer:
      'Nine working days is the average. We import customers, sites, equipment history and open work orders from a CSV or straight out of the database, you dispatch side by side for two weeks, and we sit on a call with your dispatcher for the first three mornings. Nobody has to run two systems past the end of the month.',
  },
  {
    question: 'What happens when a technician has no signal?',
    answer:
      'The field app keeps working. Job details, equipment history, price book and forms are stored on the phone, and photos, parts, time and signatures queue locally until the device reconnects. A tech can work a full day in a mechanical room and everything lands correctly when they get back to the truck.',
  },
  {
    question: 'Are we locked into a contract?',
    answer:
      'Annual billing, cancel any time before renewal, and no early termination fee. If you leave, the nightly export you already have keeps working for thirty days so you walk out with your customers, your history and your invoices in plain CSV.',
  },
  {
    question: 'Do office staff and owners count toward the seat price?',
    answer:
      'No. You pay per technician who is dispatched. Dispatchers, office managers, bookkeepers and owners get free logins, because charging you for the person doing the scheduling seemed like a strange way to sell scheduling software.',
  },
  {
    question: 'Can it handle maintenance agreements and recurring visits?',
    answer:
      'Yes, on the Shop and Fleet plans. Agreements generate their visits on the board automatically, flag the ones going out of window, and roll unused visits forward so you are not paying a renewal argument in January.',
  },
  {
    question: 'What does support actually look like at 4pm on a Friday?',
    answer:
      'You get a phone number, not a ticket portal. Our support desk is eleven people in Pittsburgh who have all dispatched for a living, open 7am to 8pm Eastern Monday through Saturday, with a pager rotation for anything that stops the board.',
  },
]

export default function Faq() {
  return (
    <section id="faq" data-testid="faq" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-4xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">Answers</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What owners ask us before they switch
          </h2>
        </div>

        <dl className="mt-12 divide-y divide-slate-800 border-y border-slate-800">
          {QUESTIONS.map((item) => (
            <div key={item.question} data-testid="faq-item" className="py-7">
              <dt>
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
              </dt>
              <dd className="mt-3 text-base leading-relaxed text-slate-400">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

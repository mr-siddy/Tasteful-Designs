const FAQS = [
  {
    question: 'We have eleven years of history in a competitor. Can you actually move it?',
    answer:
      'Yes, and it is included. Send us a backup or an export and our migration team maps customers, sites, equipment, agreements, open work orders and closed history. Closed history lands read-only so your technicians still see what happened at that address in 2019 without you paying to keep an old license alive.',
  },
  {
    question: 'What happens when a technician has no signal in a mechanical room?',
    answer:
      'The truck app writes to the phone first and syncs when signal returns. Techs can open the call, capture readings, attach photos, pull parts off truck stock and collect a signature entirely offline. If two people edit the same work order while apart, the app shows both versions side by side instead of silently choosing one.',
  },
  {
    question: 'Do office staff count as billable seats?',
    answer:
      'No. Dispatchers, bookkeepers, service coordinators and owners are free on every plan. You are billed per technician who carries the truck app, and you can park a seat for twelve dollars a month during the shoulder season instead of deleting and re-adding people.',
  },
  {
    question: 'Will it fight with QuickBooks?',
    answer:
      'Invoices, customers, items and payments sync both directions with QuickBooks Online, and Desktop runs through a nightly bridge that needs no manual file handling. Sage Intacct customers get departmental job-cost dimensions. Your bookkeeper keeps their chart of accounts exactly as it is.',
  },
  {
    question: 'How long until dispatchers stop hating us for changing systems?',
    answer:
      'Our median is nine days to the point where nobody asks to go back. Training happens on your live board with your own calls, your implementation lead is on the phone through the first go-live Monday, and the old system stays readable for a year in case a dispute needs it.',
  },
  {
    question: 'What does support look like at 5:40 on a Friday in July?',
    answer:
      'Fleet and Regional plans reach a person by phone from 5am to 9pm Eastern, seven days a week, and every plan has an emergency line for a board that is down. Support is staffed by people who have dispatched, so you will not be asked to clear your cache while three techs sit idle.',
  },
]

export default function FaqSection() {
  return (
    <section id="faq" data-testid="faq" className="bg-[#F6F7FB]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1F4FD8]">
            Questions we get on every call
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0A1220] sm:text-4xl">
            The honest answers, before you spend an hour on a demo
          </h2>
        </div>

        <dl className="mt-12 grid gap-6 md:grid-cols-2">
          {FAQS.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-[#E4E8F2] bg-white p-7 shadow-[0_1px_2px_rgba(10,18,32,0.04)]"
            >
              <dt className="flex items-start gap-3">
                <svg
                  viewBox="0 0 20 20"
                  className="mt-1 h-5 w-5 shrink-0"
                  role="img"
                  aria-label="Question"
                >
                  <circle cx="10" cy="10" r="9" fill="#EDF1FD" />
                  <path
                    d="M7.6 7.6a2.4 2.4 0 1 1 3.4 2.2c-.7.3-1 .8-1 1.5"
                    fill="none"
                    stroke="#1F4FD8"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <circle cx="10" cy="14.2" r="1" fill="#1F4FD8" />
                </svg>
                <h3 className="text-base font-black leading-snug tracking-tight text-[#0A1220]">
                  {faq.question}
                </h3>
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-[#5B6577]">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

const FAQS = [
  {
    question: 'Can we switch in the middle of our busy season?',
    answer:
      'Yes, and most shops do — the shadow week exists for exactly that reason. You keep taking calls on your old system while your dispatcher runs Copperline beside it, and you only cut over once the board has beaten the whiteboard for five days straight.',
  },
  {
    question: 'What happens to eleven years of job history?',
    answer:
      'It comes with you. Send a customer export, a price book and whatever job history you have and we load addresses, equipment, agreements and past visits, then show you a reconciliation report so you can see exactly what landed and what needs a second look.',
  },
  {
    question: 'Do my technicians need a data connection?',
    answer:
      'Not while they are working. The technician app runs the whole job offline — notes, photos, parts used, quotes and the customer signature all queue on the phone and sync the moment the truck has a bar of service again.',
  },
  {
    question: 'How is this priced if I add a truck in April and drop it in November?',
    answer:
      'Plans are priced by truck band, not by a headcount you have to true up. Solo covers one truck, Crew covers up to eight and Fleet is unlimited; you move between plans on the day you need to and we prorate it, seasonal trucks included.',
  },
  {
    question: 'Does it replace our accounting software?',
    answer:
      'No, and it should not. Copperline owns the job, the parts and the invoice, then syncs invoices, payments and deposits into QuickBooks Online or Xero every night so your bookkeeper works in the tool they already know.',
  },
  {
    question: 'What if we decide it is not working?',
    answer:
      'There is no minimum term and no implementation fee. Tell us and we export every customer, job, invoice and photo as CSV and a zip of media within one business day, then stop billing at the end of that month.',
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="border-b border-[#EADFCF] bg-[#FBF6EE]">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C25A2B]">Questions owners ask</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-[2.7rem]">Before you move your whole shop</h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3D555F]">
            If your question is not here, call (616) 555 0142 and ask for onboarding — you will get someone who has
            dispatched trucks for a living.
          </p>
        </div>

        <dl className="mt-14 space-y-5">
          {FAQS.map((faq) => (
            <div key={faq.question} data-testid="faq-item" className="rounded-2xl border border-[#EADFCF] bg-white p-7">
              <dt className="text-lg font-semibold tracking-tight text-[#12242C]">{faq.question}</dt>
              <dd className="mt-3 leading-relaxed text-[#3D555F]">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

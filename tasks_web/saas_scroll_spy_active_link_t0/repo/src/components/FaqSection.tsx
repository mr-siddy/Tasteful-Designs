const QUESTIONS = [
  {
    question: 'How long does implementation actually take?',
    answer:
      'Three weeks for a group of up to twenty-five entities. Week one maps your chart of accounts and connects the ledger, week two loads two historical periods so you can see your own numbers rather than a demo tenant, and week three runs your next close in parallel with the process you use today. We do not switch you over until that parallel close ties out.',
  },
  {
    question: 'Does Ledgerloom post entries into our general ledger?',
    answer:
      'Only entries a named human has approved, and only through your ERP’s supported interface. Everything else is read-only. If you would rather post manually for the first few periods, the drafted entries export as a journal file and the audit trail records that they were posted outside the system.',
  },
  {
    question: 'What happens to our existing close checklist?',
    answer:
      'We import it. Most teams arrive with a spreadsheet of between eighty and four hundred tasks; those become Ledgerloom tasks with the same owners and due days, and we then retire the ones the platform has made unnecessary — usually about a third of them by the second close.',
  },
  {
    question: 'Can our external auditors get their own access?',
    answer:
      'Yes, at no extra cost. Auditor accounts are read-only, scoped to the periods and entities you grant, and every document they open is logged. Most firms prefer this to a shared drive because they can pull evidence without waiting on your team.',
  },
  {
    question: 'What if we acquire an entity mid-year?',
    answer:
      'Add it from the entity console, map its chart of accounts against your group template, and set an opening balance date. Ledgerloom handles the stub period and keeps the pre-acquisition comparatives separate so your flux analysis does not report a four hundred percent revenue swing that never happened.',
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">FAQ</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          The questions controllers ask us in procurement
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">
          If yours is not here, our solutions team answers technical diligence questions in writing
          within one business day.
        </p>

        <dl className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {QUESTIONS.map((entry) => (
            <div key={entry.question} className="py-7">
              <dt className="text-lg font-semibold tracking-tight text-slate-900">
                {entry.question}
              </dt>
              <dd className="mt-3 text-base leading-relaxed text-slate-600">{entry.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

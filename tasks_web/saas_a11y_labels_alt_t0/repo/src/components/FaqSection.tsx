const FAQS = [
  {
    question: 'Does Halyard slow down how often we can deploy?',
    answer:
      'It has not, at any customer we can measure. Deploy frequency at Kestrel Payments went up eleven percent in the first quarter, because the changes that used to wait for a weekly board now clear in under a minute and the ones that would have been rejected never get built.',
  },
  {
    question: 'What happens during an incident, when nobody has time to approve anything?',
    answer:
      'Break-glass. A named on-call engineer can push a change with the approval waived, and Halyard writes the record — who opened it, which incident, what shipped — automatically. The point of change control is not to stop you at 03:00, it is to be able to explain 03:00 afterwards.',
  },
  {
    question: 'Do we have to move off GitHub Actions, Jenkins or Argo CD?',
    answer:
      'No. Halyard attaches at the package and deploy boundary through a signed webhook and a short-lived credential. Your build and test stages stay exactly where they are, owned by the same people, on the same runners.',
  },
  {
    question: 'Where do our change records physically live?',
    answer:
      'In the control plane for the region that produced them — Virginia, Frankfurt or Sydney — and nowhere else. On the Regulated plan you get a dedicated control plane and can hold the signing keys yourself, so an evidence bundle is verifiable without trusting us.',
  },
  {
    question: 'How long before an auditor sees the difference?',
    answer:
      'The first full quarter that runs under enforcement is the first quarter you can export in one click. Customers who start in January are generally exporting a clean Q2 bundle, and the change-control section of the audit stops being a project.',
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="bg-[#F7F5F1] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B57A16]">Questions we get</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0B1524] sm:text-[2.75rem]">
            The five that come up on every call
          </h2>
        </div>

        <dl className="mt-12 divide-y divide-[#E3DDD2] border-y border-[#E3DDD2]">
          {FAQS.map((faq) => (
            <div key={faq.question} data-testid="faq-item" className="py-8">
              <dt>
                <h3 className="text-lg font-semibold tracking-tight text-[#0B1524]">{faq.question}</h3>
              </dt>
              <dd className="mt-3 text-base leading-relaxed text-slate-600">{faq.answer}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-sm text-slate-500">
          Something we have not answered? Write to hello@halyard.dev and a solutions engineer — not a form router —
          replies within one business day.
        </p>
      </div>
    </section>
  )
}

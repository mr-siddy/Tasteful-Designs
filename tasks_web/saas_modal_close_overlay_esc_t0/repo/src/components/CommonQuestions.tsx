const QUESTIONS = [
  {
    q: 'Do we have to change customs brokers?',
    a: 'No, and we would rather you did not during onboarding. Portway drafts the filing and hands it to whoever holds your filer code. Six of our customers use in-house licensed brokers, the rest use outside firms, and two use both depending on the gateway.',
  },
  {
    q: 'What happens when it classifies something wrong?',
    a: 'Your entry writer overrides it, picks a reason from a short list, and that decision applies to the rest of the invoice and to future shipments from that shipper. We review every override across the customer base weekly, because a pattern of them usually means our reasoning is thin somewhere.',
  },
  {
    q: 'How long until it stops being extra work?',
    a: 'Most desks are net positive in the third week — the shadow fortnight is genuine extra effort, and then it is not. If you are eight weeks in and it still feels like extra work, that is a failure on our side and we will say so.',
  },
  {
    q: 'Can our importers see their own shipments?',
    a: 'Yes. Read-only customer logins are included on every plan and show status, documents and landed cost estimates for that importer only. Several forwarders use it instead of the status email they were sending by hand every Tuesday.',
  },
  {
    q: 'What about air freight and cross-border trucking?',
    a: 'Air is in beta with four customers and the deadline model already works; truck across the northern border is scheduled for next year. If you are mostly not ocean, we will tell you to wait rather than sell you something half-built.',
  },
  {
    q: 'What does leaving look like?',
    a: 'One export button, thirty days notice, no exit fee. You get every document, every entry packet and the full classification history as CSV and JSON. We would rather be easy to leave than hard to trust.',
  },
]

export function CommonQuestions() {
  return (
    <section className="bg-[#F5F7F9]">
      <div className="mx-auto max-w-4xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0D6E8C]">
            Questions we get
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            The six that come up on every call
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#42566B]">
            Answered the way we would answer them on the phone, including the ones where the honest
            answer is not yet.
          </p>
        </div>

        <dl className="mt-12 divide-y divide-[#0B1F33]/10 border-y border-[#0B1F33]/10">
          {QUESTIONS.map((item) => (
            <div key={item.q} data-testid="faq-item" className="py-7">
              <dt>
                <h3 className="text-lg font-semibold tracking-tight">{item.q}</h3>
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-[#42566B]">{item.a}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-sm text-[#42566B]">
          Something not answered here? Write to{' '}
          <a href="mailto:desk@portway.build" className="font-medium text-[#0D6E8C] hover:underline">
            desk@portway.build
          </a>{' '}
          and one of the two founders will answer it.
        </p>
      </div>
    </section>
  )
}

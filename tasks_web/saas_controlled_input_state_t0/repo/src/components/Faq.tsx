const QUESTIONS = [
  {
    q: 'Do we have to change how we run the incident itself?',
    a: 'No. Keep your pager, your runbooks and your channel naming. Postlude only asks for one slash command at declaration time, and even that is optional — you can create the review afterwards and it will backfill the timeline from the same sources.',
  },
  {
    q: 'What happens to incidents we already reviewed elsewhere?',
    a: 'Import them. Postlude reads Markdown, Google Docs exports and Notion pages, matches them to the alert history where it can, and files them as historical reviews so your contributing-factor trend starts with real data instead of an empty quarter.',
  },
  {
    q: 'Where does our data live, and who can read it?',
    a: 'In Frankfurt by default, in Virginia if you ask, and never in both. Incident content is encrypted at rest, access is scoped per workspace, and support staff cannot open a review without a time-boxed grant that shows up in your audit log.',
  },
  {
    q: 'Is this going to turn into a blame machine?',
    a: 'It is built hard against that. Individual names appear on the on-call rotation and on action-item ownership, and nowhere in the causal narrative. Drafts flag phrasing that assigns fault to a person, and the exported customer summary strips names entirely.',
  },
  {
    q: 'How long does it take to get value out of it?',
    a: 'The first incident. Setup is one OAuth grant for Slack and one for your pager; both take about ten minutes. Teams typically see the timeline pay for itself in the first review meeting they do not have to spend reconstructing a sequence of events.',
  },
  {
    q: 'What if we outgrow it, or want to leave?',
    a: 'Every review exports as Markdown with its timeline as JSON, on demand, from the API or the UI, on every plan including the free one. There is no export fee and no notice period; we would rather you stay because leaving is easy.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">Questions</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1220] sm:text-4xl">
              The six things every platform lead asks us
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              Something missing? Write to hello@postlude.app and a person who has run an on-call rotation will
              answer, usually the same working day.
            </p>
          </div>
          <dl className="space-y-6">
            {QUESTIONS.map((item) => (
              <div key={item.q} data-testid="faq-item" className="rounded-2xl border border-slate-200 bg-white p-6">
                <dt>
                  <h3 className="text-base font-semibold text-[#0B1220]">{item.q}</h3>
                </dt>
                <dd className="mt-2.5 text-sm leading-relaxed text-slate-600">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

const QUOTES = [
  {
    text:
      'I stopped keeping a private copy of the rent roll. That sounds small. It is the first time in nine years I have trusted a system enough to delete my own backup.',
    person: 'Priya Raghunathan',
    role: 'Operations Manager, Cedar Hollow Homes',
  },
  {
    text:
      'Our monitoring visit took ninety minutes. The reviewer asked for four files and I pulled them up while she was still opening her laptop.',
    person: 'Gwen Achebe',
    role: 'Compliance Lead, Riverbend Land Trust',
  },
  {
    text:
      'The onboarding lead had migrated eleven land trusts before ours. She knew what our data was going to look like before she opened it, which is a rare and slightly unnerving feeling.',
    person: 'Sam Ostrowski',
    role: 'Executive Director, Two Rivers Housing',
  },
]

const OUTCOMES = [
  { value: '73%', label: 'less staff time on quarterly funder reporting' },
  { value: '2.4x', label: 'more waitlist applications processed per week' },
  { value: '18 min', label: 'median time to answer a board member’s question' },
  { value: '0', label: 'monitoring findings related to missing files, across the customer base' },
]

export default function Outcomes() {
  return (
    <section id="outcomes" className="border-b border-[#DDE3F0] bg-[#F4F6FB]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0E8F6F]">What changes</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The numbers our customers quote back to us
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#4B5670]">
            Measured across 148 organisations at the twelve-month mark, compared against the baseline each of them
            recorded during implementation week.
          </p>
        </div>

        <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OUTCOMES.map((outcome) => (
            <div key={outcome.label} data-testid="outcome-stat" className="rounded-2xl border border-[#DDE3F0] bg-white p-6">
              <dt className="text-3xl font-bold tracking-tight text-[#3D4EE0]">{outcome.value}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-[#4B5670]">{outcome.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((quote) => (
            <article key={quote.person} data-testid="outcome-quote" className="rounded-2xl border border-[#DDE3F0] bg-white p-7">
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path d="M10 4C5 6 2 10 2 15c0 3 2 5 4.5 5S11 18 11 15.5 9 11 6.5 11c.4-2 2-4 4-5.2zM22 4c-5 2-8 6-8 11 0 3 2 5 4.5 5S23 18 23 15.5 21 11 18.5 11c.4-2 2-4 4-5.2z" fill="#0E8F6F" opacity="0.25" />
              </svg>
              <blockquote className="mt-4 text-sm leading-relaxed text-[#4B5670]">“{quote.text}”</blockquote>
              <p className="mt-5 text-sm font-semibold text-[#131A2A]">{quote.person}</p>
              <p className="text-sm text-[#6B7690]">{quote.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const QUOTES = [
  {
    quote:
      'We were closing on day eleven and finding intercompany breaks on day nine, which meant every month ended in an argument. Ledgerloom drafts the eliminations before consolidation runs, so the argument now happens on day two and takes twenty minutes.',
    name: 'Marisol Reyes',
    role: 'Corporate Controller, Verdant Grocers',
    detail: '14 entities · retail grocery · Sage Intacct',
  },
  {
    quote:
      'I did not hire two more accountants this year, and that was the entire business case. My senior spends her time on the four accounts that actually moved instead of ticking six thousand transactions that never do.',
    name: 'Dev Ramanathan',
    role: 'VP Finance, Halcyon Robotics',
    detail: '6 entities · hardware · NetSuite',
  },
  {
    quote:
      'Our auditors asked for the Q3 evidence package on a Thursday afternoon. I sent a link the same afternoon. In eleven years of healthcare accounting I have never once been able to do that.',
    name: 'Ana Whitfield',
    role: 'Director of Accounting, Tidewater Health',
    detail: '31 entities · healthcare · Dynamics 365',
  },
]

const OUTCOMES = [
  { value: '11.6 → 4.2', label: 'days to close at Verdant Grocers, within two quarters' },
  { value: '7,400', label: 'hours of manual reconciliation removed across our customers in 2025' },
  { value: '96%', label: 'of Ledgerloom customers renew after their first full audit cycle' },
]

export default function CustomersSection() {
  return (
    <section id="customers" className="scroll-mt-24 bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
            Customers
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Controllers who stopped dreading the first week of the month
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            We ask every customer the same question a year in: what would you have to put back if we
            disappeared tomorrow? These are the answers we got.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((entry) => (
            <figure
              key={entry.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 text-amber-400"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9 6c-3 1.5-5 4.4-5 8v4h6v-6H7c0-2 1-3.4 3-4.4zm10 0c-3 1.5-5 4.4-5 8v4h6v-6h-3c0-2 1-3.4 3-4.4z" />
              </svg>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-slate-700">
                {entry.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-100 pt-5">
                <p className="text-sm font-semibold text-slate-900">{entry.name}</p>
                <p className="text-sm text-slate-600">{entry.role}</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-slate-400">
                  {entry.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <dl className="mt-14 grid gap-8 rounded-2xl border border-slate-200 bg-white p-10 sm:grid-cols-3">
          {OUTCOMES.map((outcome) => (
            <div key={outcome.value}>
              <dt className="text-3xl font-semibold tracking-tight text-indigo-700">
                {outcome.value}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-600">{outcome.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

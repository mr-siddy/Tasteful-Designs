const CUSTOMERS = [
  { name: 'Fernpost Bank', sector: 'retail banking' },
  { name: 'Ombra Health', sector: 'clinical systems' },
  { name: 'Tidemark Logistics', sector: 'freight' },
  { name: 'Basalt Energy', sector: 'grid operations' },
  { name: 'Verrick Insurance', sector: 'claims' },
  { name: 'Kestrel Payments', sector: 'card processing' },
]

const NUMBERS = [
  { value: '1.2M', label: 'changes shipped through Halyard' },
  { value: '38 sec', label: 'median time to first approval' },
  { value: '240', label: 'customer audits supported' },
  { value: '0', label: 'change-control findings raised' },
]

function Wordmark({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
  return (
    <div className="flex items-center gap-2.5 opacity-80 transition hover:opacity-100">
      <svg viewBox="0 0 36 36" className="h-8 w-8 flex-none" aria-hidden="true" focusable="false">
        <rect x="2" y="2" width="32" height="32" rx="10" fill="#132238" stroke="#2C3E58" />
        <text
          x="18"
          y="23"
          textAnchor="middle"
          fontSize="13"
          fontWeight="700"
          fill="#8FA6C0"
          fontFamily="ui-sans-serif, system-ui"
        >
          {initials}
        </text>
      </svg>
      <span className="text-sm font-semibold tracking-tight text-slate-300">{name}</span>
    </div>
  )
}

export default function TrustBar() {
  return (
    <section id="customers" className="border-y border-white/10 bg-[#0E1B2C] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
          Change control for teams that get audited
        </h2>
        <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {CUSTOMERS.map((customer) => (
            <div key={customer.name} data-testid="customer-logo">
              <Wordmark name={customer.name} />
              <p className="mt-1.5 pl-[42px] text-[11px] uppercase tracking-wider text-slate-600">
                {customer.sector}
              </p>
            </div>
          ))}
        </div>

        <dl className="mt-14 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {NUMBERS.map((number) => (
            <div key={number.label} className="text-center lg:text-left">
              <dt className="text-3xl font-bold tracking-tight text-white">{number.value}</dt>
              <dd className="mt-1 text-sm text-slate-400">{number.label}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-center text-sm text-slate-500">
          Halyard is SOC 2 Type II and ISO 27001 certified, and runs separate control planes in Virginia, Frankfurt and
          Sydney so change records never leave the region that produced them.
        </p>
      </div>
    </section>
  )
}

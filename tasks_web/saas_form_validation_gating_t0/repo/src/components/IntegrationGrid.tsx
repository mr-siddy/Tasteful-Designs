const INTEGRATIONS = [
  { name: 'QuickBooks Online', kind: 'Accounting', detail: 'Two-way invoice, customer and item sync' },
  { name: 'QuickBooks Desktop', kind: 'Accounting', detail: 'Nightly bridge, no manual IIF files' },
  { name: 'Sage Intacct', kind: 'Accounting', detail: 'Departmental job costing dimensions' },
  { name: 'Ferguson', kind: 'Supply house', detail: 'Live pricing and stock at your branch' },
  { name: 'Watsco / Baker', kind: 'Supply house', detail: 'Purchase orders straight from the work order' },
  { name: 'Verizon Connect', kind: 'Telematics', detail: 'Truck GPS on the dispatch map' },
  { name: 'Samsara', kind: 'Telematics', detail: 'Drive time and idle time on the job cost' },
  { name: 'Gusto', kind: 'Payroll', detail: 'Clocked hours with department splits' },
  { name: 'Twilio', kind: 'Messaging', detail: 'On-my-way texts from your own shop number' },
]

export default function IntegrationGrid() {
  return (
    <section data-testid="integrations" className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1F4FD8]">
              Integrations
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0A1220] sm:text-4xl">
              It has to talk to the systems your office already trusts
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#5B6577]">
              Your bookkeeper is not switching accounting packages because you bought
              dispatch software. Rivetwork writes into the ledger you already balance,
              and a documented REST API covers whatever we have not built yet.
            </p>
          </div>
          <a
            href="#walkthrough"
            className="shrink-0 rounded-xl border border-[#C9D5F3] px-5 py-3 text-sm font-bold text-[#1F4FD8] transition hover:bg-[#EDF1FD]"
          >
            Ask about your stack
          </a>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INTEGRATIONS.map((integration) => (
            <li
              key={integration.name}
              className="flex items-start gap-4 rounded-2xl border border-[#E4E8F2] bg-[#FBFCFE] p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_1px_2px_rgba(10,18,32,0.08)]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-[#1F4FD8]"
                  role="img"
                  aria-label={`${integration.name} connector`}
                >
                  <path
                    d="M10 14 6.8 17.2a3.4 3.4 0 0 1-4.8-4.8L5.2 9.2M14 10l3.2-3.2a3.4 3.4 0 0 1 4.8 4.8L18.8 14.8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <path d="M9 15 15 9" stroke="#FF9F1C" strokeWidth="1.9" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <h3 className="text-base font-black tracking-tight text-[#0A1220]">
                  {integration.name}
                </h3>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#FF9F1C]">
                  {integration.kind}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#5B6577]">
                  {integration.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

type Module = {
  name: string
  spec: string
  blurb: string
  bullets: string[]
  icon: JSX.Element
}

const MODULES: Module[] = [
  {
    name: 'Dispatch board',
    spec: 'Live · drag to assign',
    blurb:
      'Every open call, every truck and every technician on one board that updates the second a job changes hands. Drag a card onto a tech and their phone buzzes with the address, the gate code and the last three visits.',
    bullets: ['Skill and license matching', 'Drive-time aware slotting', 'On-call rotation built in'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" role="img" aria-label="Dispatch board icon">
        <rect x="3" y="4" width="18" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 4v16M3 10h6" stroke="currentColor" strokeWidth="1.7" />
        <rect x="12" y="7.5" width="6" height="3" rx="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Work orders',
    spec: 'Photos · meter readings · signatures',
    blurb:
      'One record follows the call from the phone ringing to the money landing. Techs attach superheat and subcooling readings, nameplate photos and the customer signature without leaving the job.',
    bullets: ['Custom forms per trade', 'Required-field enforcement', 'Warranty claim packets in one tap'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" role="img" aria-label="Work order icon">
        <path d="M6 3h9l4 4v14H6z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M15 3v4h4M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Truck app',
    spec: 'iOS + Android · offline-first',
    blurb:
      'Built for a mechanical room with no signal. The app queues everything locally and syncs the moment a bar comes back, so nobody stands in a parking lot waiting for a spinner.',
    bullets: ['Offline queue with conflict resolution', 'Barcode parts lookup', 'Turn-by-turn from the card'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" role="img" aria-label="Truck app icon">
        <rect x="7" y="2.5" width="10" height="19" rx="2.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M10.5 5.5h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="12" cy="17.5" r="1.3" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Parts & truck stock',
    spec: 'Per-truck bins · reorder points',
    blurb:
      'Know what is on every truck before you promise a same-day fix. Consumption posts off the work order, and reorder points fire a purchase order to your supply house instead of a text to the warehouse.',
    bullets: ['Serialized equipment tracking', 'Supply-house catalogs', 'Cycle counts from the phone'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" role="img" aria-label="Parts inventory icon">
        <path d="M3.5 8 12 3.5 20.5 8v8L12 20.5 3.5 16z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M3.5 8 12 12.5 20.5 8M12 12.5v8" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    name: 'Agreements & PM',
    spec: 'Recurring · auto-scheduled',
    blurb:
      'Maintenance agreements that schedule themselves, escalate on the anniversary date and tell you which customers are three visits behind before the customer notices.',
    bullets: ['Multi-year price escalators', 'Task lists per equipment class', 'Renewal risk scoring'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" role="img" aria-label="Maintenance agreement icon">
        <rect x="3.5" y="5" width="17" height="15" rx="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 3v4M16 3v4M3.5 10h17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M9 15l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Billing & payroll',
    spec: 'Card, ACH, net-30',
    blurb:
      'Price books, flat-rate options and progress billing that push into QuickBooks or Sage without a re-key. Clocked hours flow to payroll with job costing already attached.',
    bullets: ['Flat rate and time & material', 'Deposit and progress invoices', 'Job costing to the labor hour'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" role="img" aria-label="Billing icon">
        <rect x="2.5" y="6" width="19" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M2.5 10h19" stroke="currentColor" strokeWidth="1.7" />
        <path d="M6.5 14.5h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function PlatformModules() {
  return (
    <section id="platform" data-testid="platform-modules" className="bg-[#F6F7FB]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1F4FD8]">
            The platform
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0A1220] sm:text-4xl">
            Six modules that replace nine tabs and a filing cabinet
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5B6577]">
            Most shops we meet are running a scheduling tool, a separate mobile forms app,
            a spreadsheet for truck stock and a shoebox for warranty paperwork. Rivetwork
            is one system with one customer record underneath all of it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((module) => (
            <article
              key={module.name}
              className="rounded-2xl border border-[#E4E8F2] bg-white p-7 shadow-[0_1px_2px_rgba(10,18,32,0.04),0_18px_40px_-28px_rgba(10,18,32,0.35)] transition hover:-translate-y-0.5 hover:border-[#C9D5F3]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDF1FD] text-[#1F4FD8]">
                {module.icon}
              </span>
              <h3 className="mt-5 text-xl font-black tracking-tight text-[#0A1220]">
                {module.name}
              </h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#FF9F1C]">
                {module.spec}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#5B6577]">{module.blurb}</p>
              <ul className="mt-5 space-y-2 border-t border-[#EEF1F8] pt-5">
                {module.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-[#3D4658]">
                    <svg
                      viewBox="0 0 20 20"
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#12B76A]"
                      role="img"
                      aria-label="Included"
                    >
                      <circle cx="10" cy="10" r="9" fill="#E6F7EF" />
                      <path
                        d="M6 10.4l2.6 2.6L14 7.6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

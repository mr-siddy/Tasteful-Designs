type Capability = {
  title: string
  blurb: string
  detail: string
  icon: 'inbox' | 'scale' | 'clock' | 'ledger' | 'flag' | 'handoff'
}

const CAPABILITIES: Capability[] = [
  {
    title: 'Document intake',
    blurb: 'Commercial invoices, packing lists and arrival notices are read the minute they land.',
    detail:
      'Forward the shipper email to a lane address and Portway pulls the PDF apart line by line — part numbers, quantities, unit values, country of origin — and attaches it to the right container before anyone opens the attachment.',
    icon: 'inbox',
  },
  {
    title: 'Classification with a citation',
    blurb: 'Every proposed HTS code arrives with the ruling or note it was drawn from.',
    detail:
      'A brake caliper for a Class 8 truck comes back as 8708.30.5090 with the CROSS ruling that settled it, so your licensed broker approves or overrides in one click instead of reopening the tariff schedule.',
    icon: 'scale',
  },
  {
    title: 'Deadline clocks',
    blurb: 'ISF, entry and post-summary windows counted against the vessel, not a spreadsheet.',
    detail:
      'Portway takes the ETD off the booking, subtracts the twenty-four hour ISF window and the ten working days for the 7501, and escalates to a named person when a clock crosses its threshold.',
    icon: 'clock',
  },
  {
    title: 'Duty and fee math',
    blurb: 'Landed cost estimated per line, including MPF, HMF and any Section 301 exposure.',
    detail:
      'Your customer asks what the container will cost to clear. Portway answers with a line-level breakdown they can read, and flags the two SKUs whose China origin adds seven and a half points.',
    icon: 'ledger',
  },
  {
    title: 'Exception desk',
    blurb: 'One queue for missing documents, mismatched quantities and stale bonds.',
    detail:
      'Instead of six inboxes and a whiteboard, the shipments that need a human sit in one list, sorted by how much time is left, each with the exact document that is missing named on the row.',
    icon: 'flag',
  },
  {
    title: 'Broker handoff',
    blurb: 'A packaged filing your customs broker can accept or send back with a reason.',
    detail:
      'The broker sees the draft, the documents behind it and the classification history in one view, approves it under their filer code, and the audit trail records who touched what and when.',
    icon: 'handoff',
  },
]

function CapabilityIcon({ icon }: { icon: Capability['icon'] }) {
  const common = { fill: 'none', stroke: '#0D6E8C', strokeWidth: 1.9, strokeLinecap: 'round' as const }
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
      <rect x="0.5" y="0.5" width="31" height="31" rx="10" fill="#0D6E8C" opacity="0.08" />
      {icon === 'inbox' && (
        <>
          <path d="M7 12h18v12a2 2 0 01-2 2H9a2 2 0 01-2-2z" {...common} />
          <path d="M7 19h5l1.6 2.6h4.8L20 19h5" {...common} />
          <path d="M16 6v6m0 0l-2.6-2.6M16 12l2.6-2.6" {...common} stroke="#F2A03D" />
        </>
      )}
      {icon === 'scale' && (
        <>
          <path d="M16 7v18M9 11h14" {...common} />
          <path d="M9 11l-3 7h6z" {...common} stroke="#F2A03D" />
          <path d="M23 11l-3 7h6z" {...common} stroke="#F2A03D" />
        </>
      )}
      {icon === 'clock' && (
        <>
          <circle cx="16" cy="16" r="9" {...common} />
          <path d="M16 11v5.4l3.4 2.2" {...common} stroke="#F2A03D" />
        </>
      )}
      {icon === 'ledger' && (
        <>
          <path d="M9 7h12a2 2 0 012 2v16a2 2 0 01-2 2H9z" {...common} />
          <path d="M13 13h6M13 17h6M13 21h4" {...common} stroke="#F2A03D" />
        </>
      )}
      {icon === 'flag' && (
        <>
          <path d="M11 26V7" {...common} />
          <path d="M11 8h11l-2.4 4L22 16H11z" {...common} stroke="#F2A03D" />
        </>
      )}
      {icon === 'handoff' && (
        <>
          <path d="M6 18h9l-3-3M26 14h-9l3 3" {...common} />
          <circle cx="9" cy="10" r="2.4" {...common} stroke="#F2A03D" />
          <circle cx="23" cy="22" r="2.4" {...common} stroke="#F2A03D" />
        </>
      )}
    </svg>
  )
}

export function FilingWorkbench() {
  return (
    <section id="workbench" className="bg-[#F5F7F9]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0D6E8C]">
            The workbench
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Six jobs your desk does every day, done in one place
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#42566B]">
            Portway is not a portal your team logs into once a week. It is the surface the entry desk
            works on all day, and every part of it exists because somebody at a forwarder was doing
            that job by hand at four in the morning.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((item) => (
            <li
              key={item.title}
              data-testid="capability-card"
              className="rounded-3xl border border-[#0B1F33]/10 bg-white p-7 shadow-sm shadow-[#0B1F33]/5 transition-shadow hover:shadow-md"
            >
              <CapabilityIcon icon={item.icon} />
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[#0D6E8C]">{item.blurb}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#42566B]">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

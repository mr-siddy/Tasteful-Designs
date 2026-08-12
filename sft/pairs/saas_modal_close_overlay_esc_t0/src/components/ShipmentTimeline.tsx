const STEPS = [
  {
    stage: 'Booking confirmed',
    when: 'ETD minus 11 days',
    body: 'The carrier booking lands and Portway opens the shipment, pins the vessel and voyage, and starts every downstream clock from the ETD rather than from the day somebody remembered to look.',
  },
  {
    stage: 'Documents in',
    when: 'ETD minus 6 days',
    body: 'Commercial invoice and packing list arrive from the shipper in Ningbo. Line items, values and origins are extracted and reconciled against the booking quantity; a 40-piece discrepancy is raised the same hour.',
  },
  {
    stage: 'ISF-10 drafted',
    when: 'ETD minus 4 days',
    body: 'Ten data elements assembled, manufacturer and stuffing location pulled from the last shipment on the same lane, the draft sitting in your broker queue three days before the twenty-four hour window even opens.',
  },
  {
    stage: 'On the water',
    when: 'ETD plus 1 day',
    body: 'The bill of lading is matched to the filing, arrival is projected against the terminal schedule at Tacoma, and the entry summary work is scheduled backwards from that date.',
  },
  {
    stage: 'Entry filed',
    when: 'Arrival minus 2 days',
    body: 'Classification approved, duty and fees calculated to the line, and the 7501 handed to your broker with every supporting document attached in the order an auditor would want them.',
  },
  {
    stage: 'Released and archived',
    when: 'Arrival plus 4 hours',
    body: 'Release comes back, the drayage team is notified, and the whole packet is written to five-year recordkeeping storage with the approval trail intact.',
  },
]

export function ShipmentTimeline() {
  return (
    <section id="timeline" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0D6E8C]">
              One container, start to finish
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              MSKU 704 118 2, Ningbo to Tacoma
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#42566B]">
              This is a real shipment shape — hydraulic fittings and brake components for an
              aftermarket parts importer, eleven days from booking to release. The point of the
              timeline is not that Portway is fast. It is that every deadline is met with days of
              slack instead of hours, because the work starts when the document arrives rather than
              when somebody notices the clock.
            </p>

            <svg viewBox="0 0 280 160" role="img" aria-label="Diagram of a container ship crossing from origin port to destination port" className="mt-8 w-full max-w-sm">
              <defs>
                <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5AC8D8" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#0D6E8C" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              <rect x="0" y="104" width="280" height="56" rx="12" fill="url(#sea)" />
              <path d="M14 104V72h22v32M22 72V58h8v14" fill="none" stroke="#0B1F33" strokeWidth="2.2" />
              <path d="M244 104V66h22v38M252 66V52h8v14" fill="none" stroke="#0B1F33" strokeWidth="2.2" />
              <path
                d="M52 92c46-26 92-26 138 0"
                fill="none"
                stroke="#F2A03D"
                strokeWidth="2.4"
                strokeDasharray="7 6"
                strokeLinecap="round"
              />
              <g transform="translate(112 76)">
                <rect x="0" y="12" width="58" height="16" rx="3" fill="#0B1F33" />
                <rect x="8" y="0" width="12" height="12" rx="2" fill="#0D6E8C" />
                <rect x="22" y="0" width="12" height="12" rx="2" fill="#F2A03D" />
                <rect x="36" y="0" width="12" height="12" rx="2" fill="#5AC8D8" />
              </g>
              <path d="M0 132h280" stroke="#0D6E8C" strokeWidth="1.4" strokeOpacity="0.35" />
            </svg>
          </div>

          <ol className="relative space-y-8 border-l border-[#0D6E8C]/25 pl-8">
            {STEPS.map((step, index) => (
              <li key={step.stage} data-testid="timeline-step" className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border border-[#0D6E8C]/35 bg-white text-[11px] font-semibold text-[#0D6E8C]"
                >
                  {index + 1}
                </span>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold tracking-tight">{step.stage}</h3>
                  <span className="rounded-full bg-[#0B1F33]/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#42566B]">
                    {step.when}
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-[#42566B]">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

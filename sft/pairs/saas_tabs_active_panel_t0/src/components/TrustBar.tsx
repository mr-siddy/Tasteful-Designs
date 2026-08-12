const SYSTEMS = [
  { name: 'Wallace Brook Water District', short: 'Wallace Brook' },
  { name: 'Kennebec Valley Utilities', short: 'Kennebec Valley' },
  { name: 'Village of Sablefield', short: 'Sablefield' },
  { name: 'Tidewater Regional', short: 'Tidewater' },
  { name: 'Cape Anselm Water & Sewer', short: 'Cape Anselm' },
  { name: 'Ledgemont Public Works', short: 'Ledgemont' },
]

const NUMBERS = [
  { value: '312', label: 'systems filing from Weirline', note: 'across nine states, 800 to 60,000 connections' },
  { value: '0', label: 'late monthly reports in 2025', note: 'fleet-wide, including two ice-storm weeks' },
  { value: '97%', label: 'scheduled samples collected on time', note: 'up from 71% in the year before rollout' },
]

export function TrustBar() {
  return (
    <section id="proof" className="border-b border-[#08312F]/10 bg-white" aria-labelledby="proof-heading">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 id="proof-heading" className="text-center text-[13px] font-semibold uppercase tracking-[0.22em] text-[#08312F]/50">
          Trusted by the operators who sign the report
        </h2>

        <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
          {SYSTEMS.map((s) => (
            <li key={s.name} className="flex items-center gap-2.5 text-[#08312F]/60" data-testid="proof-logo">
              <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
                <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                <path
                  d="M4 14c2.5-3 5.5-3 8 0s5.5 3 8 0"
                  fill="none"
                  stroke="#17A398"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-[14px] font-medium leading-tight">{s.short}</span>
              <span className="sr-only">{s.name}</span>
            </li>
          ))}
        </ul>

        <dl className="mt-16 grid gap-10 border-t border-[#08312F]/10 pt-14 sm:grid-cols-3">
          {NUMBERS.map((n) => (
            <div key={n.label} data-testid="proof-stat">
              <dt className="text-5xl font-semibold tracking-tight text-[#08312F]">{n.value}</dt>
              <dd className="mt-3 text-[15px] font-medium text-[#08312F]">{n.label}</dd>
              <dd className="mt-1.5 text-[14px] leading-relaxed text-[#08312F]/60">{n.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

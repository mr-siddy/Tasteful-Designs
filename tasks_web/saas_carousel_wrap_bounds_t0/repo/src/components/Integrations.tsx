const INTEGRATIONS = [
  { name: 'QuickBooks Online', note: 'Rent receipts and repair spend post to the classes your bookkeeper already uses.' },
  { name: 'Xero', note: 'Same ledger sync, same nightly reconciliation, for the organisations that never left Xero.' },
  { name: 'DocuSign', note: 'Ground leases and recertification packets go out for signature and come back filed.' },
  { name: 'Twilio SMS', note: 'Reminder texts in English, Spanish and Portuguese, from your own number.' },
  { name: 'Google Workspace', note: 'Single sign-on plus a read-only share of the board packet folder.' },
  { name: 'Mailchimp', note: 'Waitlist openings announced to your subscriber list without an export.' },
  { name: 'Yardi Voyager', note: 'Two-way unit sync for trusts that manage some buildings through a third party.' },
  { name: 'Plaid', note: 'Income verification pulled with the applicant’s consent instead of six pay stubs.' },
]

export default function Integrations() {
  return (
    <section id="integrations" className="border-b border-[#DDE3F0] bg-[#131A2A] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8E9AB8]">Integrations</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              It talks to the systems you are not going to replace
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#B7C0D6]">
              Nobody is switching accounting packages to adopt a housing register. Rooftree assumes your finances, your
              signatures and your email already live somewhere and meets them there. Setup for each connection is a
              consent screen and a mapping table, and every sync writes an audit line you can read.
            </p>
            <a
              href="#demo"
              data-testid="integrations-cta"
              className="mt-8 inline-block rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#131A2A] transition hover:bg-[#E6EAF6]"
            >
              Ask about your stack
            </a>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {INTEGRATIONS.map((integration) => (
              <li
                key={integration.name}
                data-testid="integration-item"
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 flex-none" aria-hidden="true">
                    <rect width="24" height="24" rx="7" fill="#3D4EE0" opacity="0.35" />
                    <path d="M8 12h8M12 8v8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <h3 className="text-sm font-semibold tracking-tight">{integration.name}</h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-[#B7C0D6]">{integration.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

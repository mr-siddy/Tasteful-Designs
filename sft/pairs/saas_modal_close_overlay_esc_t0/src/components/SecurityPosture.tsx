const ITEMS = [
  {
    title: 'Five-year recordkeeping, exportable',
    body: 'Customs regulations want the entry packet for five years and an auditor wants it in a week. Portway keeps documents, approvals and overrides together, and exports the whole set for any date range as a signed archive.',
  },
  {
    title: 'The broker stays the broker',
    body: 'Portway holds no filer code and transmits nothing under its own name. A licensed broker approves every filing, and the record shows which human approved it and at what minute.',
  },
  {
    title: 'Data stays in the region it arrived in',
    body: 'US shipments are stored in US regions. Nothing is used to train a shared model across customers — your classification history is yours, and it leaves with you if you leave.',
  },
  {
    title: 'Access that matches the desk',
    body: 'Entry writers, brokers, managers and read-only customer logins each see what their role needs. Single sign-on is included on every plan, not sold back to you as an enterprise line item.',
  },
]

export function SecurityPosture() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0D6E8C]">
            Records and access
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Built for the audit you have not had yet
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#42566B]">
            Compliance software gets judged on a bad day, not a good one. The questions that matter
            are who approved this, what did they see when they approved it, and can you produce it
            eighteen months later without a scramble.
          </p>

          <svg viewBox="0 0 240 200" role="img" aria-label="Layered archive of entry packets protected by a lock" className="mt-9 w-full max-w-xs">
            <defs>
              <linearGradient id="vault" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0D6E8C" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#0B1F33" stopOpacity="0.08" />
              </linearGradient>
            </defs>
            <rect x="24" y="60" width="168" height="112" rx="16" fill="url(#vault)" />
            <rect x="40" y="44" width="168" height="112" rx="16" fill="#F5F7F9" stroke="#0B1F33" strokeOpacity="0.15" strokeWidth="2" />
            <path d="M62 76h124M62 96h124M62 116h86" stroke="#42566B" strokeOpacity="0.45" strokeWidth="3" strokeLinecap="round" />
            <circle cx="168" cy="126" r="24" fill="#0B1F33" />
            <path d="M160 124v-5a8 8 0 0116 0v5" fill="none" stroke="#F2A03D" strokeWidth="2.4" strokeLinecap="round" />
            <rect x="158" y="124" width="20" height="15" rx="3.5" fill="#F2A03D" />
          </svg>
        </div>

        <dl className="grid gap-6 sm:grid-cols-2">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              data-testid="security-item"
              className="rounded-3xl border border-[#0B1F33]/10 bg-[#F5F7F9] p-7"
            >
              <dt className="text-lg font-semibold tracking-tight">{item.title}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-[#42566B]">{item.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

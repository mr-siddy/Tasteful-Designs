const ASSURANCES = [
  {
    title: 'SOC 2 Type II',
    copy: 'Audited annually by Kilmer & Fenn. The full report goes to your IT team under NDA, not a summary badge.',
  },
  {
    title: '99.97% uptime',
    copy: 'Measured over the last eight quarters against the dispatch board, not a status page average. Credits are written into Regional agreements.',
  },
  {
    title: 'Your data stays yours',
    copy: 'Full export in CSV or via the API at any time, including photos and signatures. Cancel and we keep it readable for twelve months.',
  },
  {
    title: 'Role-based access',
    copy: 'A technician sees their calls. A dispatcher sees the yard. Only the roles you grant see pricing, payroll or customer payment methods.',
  },
]

export default function SecurityStrip() {
  return (
    <section
      data-testid="security-strip"
      className="bg-[linear-gradient(120deg,#0F1B33_0%,#0A1220_65%)] text-white"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF9F1C]">
              Trust and uptime
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              The board is down means the shop is down
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#A9BAD9]">
              So we treat availability as a product requirement rather than a support
              policy, and we publish what we are actually measuring.
            </p>
          </div>
          <svg
            viewBox="0 0 120 120"
            className="h-24 w-24 shrink-0"
            role="img"
            aria-label="Shield badge representing the SOC 2 Type II audit"
          >
            <path
              d="M60 8 106 24v34c0 28-19 48-46 54C33 106 14 86 14 58V24z"
              fill="none"
              stroke="#FF9F1C"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              d="M42 60l12 12 26-28"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ASSURANCES.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <dt className="text-lg font-black tracking-tight text-white">{item.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-[#A9BAD9]">{item.copy}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

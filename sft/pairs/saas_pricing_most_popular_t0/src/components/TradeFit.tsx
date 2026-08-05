const TRADES = [
  {
    trade: 'HVAC',
    line: 'Two-visit agreements, refrigerant logs, equipment ages on every address.',
    bullets: ['Seasonal tune-up scheduling', 'Refrigerant tracking per truck', 'System age and warranty on the record'],
  },
  {
    trade: 'Plumbing',
    line: 'Emergency calls that jump the board, and jetting jobs that need two techs.',
    bullets: ['Same-day emergency lane', 'Two-tech and helper assignment', 'Fixture history by property'],
  },
  {
    trade: 'Electrical',
    line: 'Permits, inspections and panel work that has to be photographed properly.',
    bullets: ['Permit and inspection checkpoints', 'Required photo steps per job type', 'Load calculations attached to the job'],
  },
  {
    trade: 'Refrigeration',
    line: 'Commercial routes, service contracts and downtime that costs the customer money.',
    bullets: ['Route-based recurring service', 'Asset list per site, not per address', 'Response-time targets on the contract'],
  },
]

export default function TradeFit() {
  return (
    <section id="trades" className="border-b border-[#EADFCF] bg-[#12242C] text-[#E6EEF0]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E8813F]">Built for your trade</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-[2.7rem]">
            Not a generic scheduler with your logo on it
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#A9C0C4]">
            A plumbing emergency and a commercial refrigeration route do not behave the same way, and software that
            pretends otherwise makes your dispatcher work around it. Copperline ships the workflow your trade already
            runs on.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRADES.map((item) => (
            <article
              key={item.trade}
              data-testid="trade-card"
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
            >
              <h3 className="text-xl font-bold tracking-tight text-white">{item.trade}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A9C0C4]">{item.line}</p>
              <ul className="mt-5 space-y-2.5">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-[#D6E2E4]">
                    <svg viewBox="0 0 16 16" className="mt-1 h-3.5 w-3.5 flex-none" aria-hidden="true" focusable="false">
                      <path d="M3 8.4l3 3L13 4" stroke="#E8813F" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-12 text-sm text-[#A9C0C4]">
          Running more than one trade under a single roof? Copperline handles mixed shops — job types, price books and
          agreements stay separate while the board stays one board.
        </p>
      </div>
    </section>
  )
}

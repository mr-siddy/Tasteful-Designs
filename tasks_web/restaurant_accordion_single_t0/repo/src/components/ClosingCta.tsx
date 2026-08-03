export function ClosingCta() {
  return (
    <section id="book" aria-labelledby="book-heading" className="relative overflow-hidden bg-[#171310]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#C4472A]/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#E08A3C]/20 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#E9C79A]">Wednesday to Sunday</p>
          <h2 id="book-heading" className="mt-3 text-4xl font-semibold tracking-tight text-[#FAF6EF]">
            The fire is lit at half past ten. Come and eat at half past five.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#C9BCA9]">
            Tables of one to five book online in about thirty seconds. Six or more, the Net Loft, or
            anything with a candle on it — ring us and talk to a person, because those evenings are
            easier to plan out loud than through a form.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#book"
              data-testid="cta-book"
              className="rounded-full bg-[#E08A3C] px-7 py-3.5 text-sm font-semibold text-[#1A1006] transition-colors hover:bg-[#EDA054]"
            >
              Book a table online
            </a>
            <a
              href="tel:5550148"
              data-testid="cta-call"
              className="rounded-full border border-[#FAF6EF]/40 px-7 py-3.5 text-sm font-semibold text-[#FAF6EF] transition-colors hover:border-[#FAF6EF] hover:bg-[#FAF6EF]/10"
            >
              Call (555) 0148
            </a>
          </div>
          <p className="mt-6 text-xs text-[#8B8073]">
            Deposits are only held for parties of six and counter seats. No cover charge, no service
            added, and the bread is never billed separately.
          </p>
        </div>

        <div className="rounded-3xl border border-[#FAF6EF]/15 bg-[#FAF6EF]/5 p-8">
          <h3 className="text-lg font-semibold tracking-tight text-[#E9C79A]">Tonight, at a glance</h3>
          <ul className="mt-5 space-y-4 text-sm text-[#D9CFC0]">
            {[
              { k: 'Sittings', v: '5:30 pm and 8:00 pm' },
              { k: "Chef's counter", v: 'Two stools held for the door' },
              { k: 'Kitchen closes', v: '10:30 pm, 11:00 pm on weekends' },
              { k: 'Last cider', v: 'Half an hour after the kitchen' },
            ].map((row) => (
              <li key={row.k} data-testid="cta-fact" className="flex justify-between gap-6 border-b border-[#FAF6EF]/10 pb-3">
                <span className="text-[#A9B7B6]">{row.k}</span>
                <span className="text-right font-medium text-[#FAF6EF]">{row.v}</span>
              </li>
            ))}
          </ul>
          <svg
            viewBox="0 0 240 70"
            role="img"
            aria-label="Illustration of embers glowing along the length of the hearth"
            className="mt-8 h-auto w-full"
          >
            <rect width="240" height="70" rx="14" fill="#0B0806" />
            <g>
              <circle cx="34" cy="42" r="10" fill="#C4472A" />
              <circle cx="70" cy="47" r="7" fill="#E08A3C" />
              <circle cx="104" cy="41" r="11" fill="#F2B25C" />
              <circle cx="140" cy="48" r="7" fill="#C4472A" />
              <circle cx="174" cy="42" r="9" fill="#E08A3C" />
              <circle cx="208" cy="47" r="6" fill="#F2B25C" />
            </g>
            <path d="M16 60h208" stroke="#3E2B24" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  )
}

const CREDENTIALS: ReadonlyArray<{ label: string; detail: string }> = [
  { label: 'USAW Level 2', detail: 'Two coaches certified in weightlifting' },
  { label: 'NSCA CSCS', detail: 'Strength and conditioning specialists' },
  { label: 'Bellwater Rec League', detail: 'Official strength partner since 2019' },
  { label: 'Harbour Physio', detail: 'Referral partner for return-to-lifting' },
]

function StarRow() {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((index) => (
        <svg key={index} viewBox="0 0 20 20" className="h-4 w-4 fill-amber-400">
          <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8z" />
        </svg>
      ))}
    </span>
  )
}

function BadgeGlyph() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden="true" fill="none">
      <path d="M16 3l11 4.5v8c0 6.4-4.5 11.6-11 13.5C9.5 27.1 5 21.9 5 15.5v-8L16 3Z" stroke="#bef264" strokeWidth="1.8" />
      <path d="M11 15.8l3.4 3.4L21.4 12" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function TrustBar() {
  return (
    <section data-testid="trust-bar" className="border-b border-white/10 bg-stone-900">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <h2 className="text-xs font-bold uppercase tracking-[0.28em] text-stone-400">
              Trusted by lifters in Bellwater for eleven years
            </h2>
            <p className="mt-3 flex flex-wrap items-center gap-3 text-sm text-stone-300">
              <StarRow />
              <span className="font-semibold text-stone-100">4.9 out of 5</span>
              <span className="text-stone-400">from 318 member reviews</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-stone-400">
              412 people train here every week, and 84% of members who finish a first twelve-week
              block are still training with us a year later.
            </p>
          </div>

          <ul className="grid flex-1 gap-4 sm:grid-cols-2 lg:max-w-2xl">
            {CREDENTIALS.map((credential) => (
              <li
                key={credential.label}
                data-testid="credential"
                className="flex items-start gap-3 rounded-2xl bg-stone-950/60 p-4 ring-1 ring-white/10"
              >
                <BadgeGlyph />
                <span>
                  <span className="block text-sm font-bold text-stone-100">{credential.label}</span>
                  <span className="block text-xs leading-snug text-stone-400">{credential.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

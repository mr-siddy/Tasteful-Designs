type Module = {
  name: string
  spec: string
  copy: string
  icon: JSX.Element
}

const MODULES: Module[] = [
  {
    name: 'Season board',
    spec: 'Included on every plan',
    copy:
      'One row per title, one column per milestone, from acquisition through to the on-sale date. Drag a date and everything downstream of it moves with a note explaining why.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 9h18M9 9v11M15 9v11" stroke="currentColor" strokeWidth="1.6" />
      </>
    ),
  },
  {
    name: 'Proof rounds',
    spec: 'Unlimited rounds and reviewers',
    copy:
      'First pass, second pass, text proof, cover proof, press-ready. Each round has an owner, a due date and the marked-up file attached to the title, not buried in an email thread.',
    icon: (
      <>
        <path d="M6 3h8l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M14 3v5h5M8.5 14.5l2.5 2.5 4.5-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    name: 'Printer purchase orders',
    spec: 'Quote comparison built in',
    copy:
      'Send the same specification to three printers, put the quotes side by side, and turn the one you pick into a purchase order without retyping the trim size for the fourth time.',
    icon: (
      <>
        <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M4 7.5 12 12l8-4.5M12 12v9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </>
    ),
  },
  {
    name: 'Metadata feeds',
    spec: 'ONIX 3.0, nightly',
    copy:
      'Write the title record once. Colophon renders valid ONIX 3.0 and drops it to your wholesaler, your distributor and the review-copy platforms on a schedule you set, with a receipt for each.',
    icon: (
      <>
        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 3v6M12 15v6M3 12h6M15 12h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="3" r="1.6" fill="currentColor" />
        <circle cx="12" cy="21" r="1.6" fill="currentColor" />
        <circle cx="3" cy="12" r="1.6" fill="currentColor" />
        <circle cx="21" cy="12" r="1.6" fill="currentColor" />
      </>
    ),
  },
  {
    name: 'Review copies',
    spec: 'Galley lists and coverage',
    copy:
      'Build the advance-copy list from your contacts, mail on a date tied to the pub date rather than to a reminder, and log the coverage against the title when it lands.',
    icon: (
      <>
        <path d="M3 6.5 12 12l9-5.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </>
    ),
  },
  {
    name: 'Reprints and stock',
    spec: 'Sell-through from your distributor',
    copy:
      'Weekly sell-through pulled in against every ISBN, with a reorder point per title so a book that is quietly selling out tells you before your distributor does.',
    icon: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
]

export function ModuleGrid() {
  return (
    <section id="platform" className="bg-[#FBF8F2]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C0462A]">
            The platform
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#141B2E] sm:text-5xl">
            Six things a production department does, in one place
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#5C6377]">
            Colophon is not a project-management tool with publishing words pasted over it. Every module
            below exists because a production editor at a fifteen-title press asked for it, and each one
            reads and writes the same title record — so a trim-size change reaches the printer, the
            metadata feed and the cover designer at once.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((module) => (
            <article
              key={module.name}
              data-testid="module-card"
              className="group rounded-3xl border border-[#E3DCCE] bg-white p-7 shadow-sm transition-shadow hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3EDE1] text-[#141B2E]">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                  {module.icon}
                </svg>
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-[#141B2E]">{module.name}</h3>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C0462A]">
                {module.spec}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#5C6377]">{module.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

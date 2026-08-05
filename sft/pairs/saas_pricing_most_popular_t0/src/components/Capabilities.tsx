type Capability = {
  title: string
  body: string
  detail: string
  icon: JSX.Element
}

const CAPABILITIES: Capability[] = [
  {
    title: 'Live dispatch board',
    body: 'Drag a call onto a truck and the tech sees it in about four seconds — no phone tag, no group text, no whiteboard photo.',
    detail: 'Drive time and skill matching built in',
    icon: (
      <>
        <rect x="6" y="9" width="28" height="7" rx="3.5" fill="currentColor" opacity="0.25" />
        <rect x="6" y="20" width="20" height="7" rx="3.5" fill="currentColor" opacity="0.55" />
        <rect x="6" y="31" width="25" height="7" rx="3.5" fill="currentColor" opacity="0.25" />
      </>
    ),
  },
  {
    title: 'Van stock that stays honest',
    body: 'Every truck carries a tracked bin. A technician scans a capacitor onto a job and the count drops, the restock list writes itself overnight.',
    detail: 'Barcode or four-digit part code',
    icon: (
      <>
        <path d="M8 16l12-6 12 6v14l-12 6-12-6z" stroke="currentColor" strokeWidth="2.6" fill="none" strokeLinejoin="round" />
        <path d="M8 16l12 6 12-6M20 22v14" stroke="currentColor" strokeWidth="2.2" fill="none" opacity="0.5" />
      </>
    ),
  },
  {
    title: 'Good, better, best quotes',
    body: 'Techs build a three-option quote in the driveway from your price book. The homeowner taps the option they want and signs on the phone.',
    detail: 'Average ticket up 22% in the first quarter',
    icon: (
      <>
        <rect x="9" y="7" width="22" height="28" rx="4" stroke="currentColor" strokeWidth="2.6" fill="none" />
        <path d="M15 16h10M15 22h10M15 28h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Paid before the truck leaves',
    body: 'Card, ACH or financing at the curb. The invoice posts to your books the moment it clears, so nobody is reconciling receipts on Sunday.',
    detail: 'Deposits land next business day',
    icon: (
      <>
        <rect x="6" y="12" width="28" height="18" rx="4" stroke="currentColor" strokeWidth="2.6" fill="none" />
        <path d="M6 19h28" stroke="currentColor" strokeWidth="2.6" />
        <rect x="11" y="23" width="8" height="3" rx="1.5" fill="currentColor" opacity="0.6" />
      </>
    ),
  },
  {
    title: 'Maintenance agreements',
    body: 'Copperline holds every agreement, schedules both visits a year ahead, and tells you in March which renewals are about to lapse.',
    detail: 'Renewal reminders by text and email',
    icon: (
      <>
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2.6" fill="none" />
        <path d="M20 12v9l6 4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      </>
    ),
  },
  {
    title: 'Works in a crawlspace',
    body: 'The technician app keeps working with no bars — photos, notes, parts and signatures queue up and sync the second the truck reaches the road.',
    detail: 'Offline queue on iOS and Android',
    icon: (
      <>
        <path d="M10 26a8 8 0 0115.2-3.4A6.5 6.5 0 1131 33H15a6 6 0 01-5-7z" stroke="currentColor" strokeWidth="2.6" fill="none" strokeLinejoin="round" />
        <path d="M20 8v5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      </>
    ),
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-[#EADFCF] bg-[#FBF6EE]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C25A2B]">What Copperline runs</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-[2.7rem]">
            One board from the first call to the cleared payment
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3D555F]">
            Most shops we meet are running four systems that do not talk: a scheduling app, a spreadsheet of van stock, a
            quoting PDF and an accounting package somebody logs into on Fridays. Copperline is the one board underneath
            all of it, and the technician's phone is the same board.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((capability) => (
            <article
              key={capability.title}
              data-testid="capability-card"
              className="flex flex-col rounded-2xl border border-[#EADFCF] bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#12242C]/[0.06] text-[#C25A2B]">
                <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden="true" focusable="false">
                  {capability.icon}
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{capability.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#3D555F]">{capability.body}</p>
              <p className="mt-5 border-t border-[#EADFCF] pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#0E6A66]">
                {capability.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

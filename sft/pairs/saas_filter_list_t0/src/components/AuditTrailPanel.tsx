const ENTRIES = [
  {
    time: '09:14:02',
    actor: 'Schedule',
    detail: 'Run #48,201 started from the Vendor onboarding template, version 12.',
  },
  {
    time: '09:14:06',
    actor: 'Stonecrop',
    detail: 'Pulled the signed W-9 from the document store and checked the signature block.',
  },
  {
    time: '09:16:44',
    actor: 'Priya Venkataraman',
    detail: 'Approved the sanctions screen result with a note: cleared, no adverse media.',
  },
  {
    time: '09:18:09',
    actor: 'Stonecrop',
    detail: 'Wrote the payables record, attempt 2 of 3, and captured the response identifier.',
  },
]

export default function AuditTrailPanel() {
  return (
    <section id="audit-trail" className="bg-[#F7F4EC] py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1fr_1.05fr]">
        <div className="order-2 rounded-3xl border border-[#E2DCCE] bg-white p-7 shadow-sm lg:order-1">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#12766A]">
            Run #48,201 &middot; audit trail
          </h3>
          <ol className="mt-6 space-y-6">
            {ENTRIES.map((entry) => (
              <li key={entry.time} className="relative pl-8">
                <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#12766A] bg-white" aria-hidden="true">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#12766A]" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#6B7C77]">
                  {entry.time} &middot; {entry.actor}
                </p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-[#3E524D]">{entry.detail}</p>
              </li>
            ))}
          </ol>
          <p className="mt-7 border-t border-[#E9E3D6] pt-5 text-xs leading-relaxed text-[#6B7C77]">
            Exported as signed JSON or a PDF your auditor will accept. Entries are append-only and
            retained for seven years on every paid plan.
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12766A]">
            Evidence
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1F1B] sm:text-4xl">
            Every run leaves a paper trail nobody had to assemble
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#4A5C57]">
            The worst week of any operations job is the one where a regulator, a customer or a board
            member asks who approved something eleven months ago. If the answer lives in a chat
            thread and two memories, that week costs a fortnight.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-[#5C6B66]">
            Stonecrop writes the answer down as it happens: the version of the workflow that ran, the
            exact payload each system received, the person who approved and what they typed, the
            attempt that finally succeeded, and the identifier the other system handed back. You
            filter it, you export it, and you go back to your actual job.
          </p>
          <ul className="mt-8 space-y-3 text-[15px] text-[#3E524D]">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8A33D]" aria-hidden="true" />
              Field-level redaction so payloads can hold customer data without becoming a liability.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8A33D]" aria-hidden="true" />
              Immutable entries, hash-chained per run, verifiable long after the workflow changed.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8A33D]" aria-hidden="true" />
              Streams straight into the warehouse you already query, on the schedule you set.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

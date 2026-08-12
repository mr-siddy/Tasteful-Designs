const CAPABILITIES = [
  {
    title: 'Run books that actually run',
    body:
      'Write the steps once in plain language, attach the systems they touch, and Stonecrop executes them on a schedule, a webhook or a button someone presses.',
    icon: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Approvals that find the approver',
    body:
      'Route a step to a person, a rota or a role. If they are out, it walks to their backup. If nobody answers inside the SLA, it escalates instead of stalling.',
    icon: (
      <>
        <circle cx="9" cy="8" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3.5 20c.6-3.4 2.8-5.1 5.5-5.1 1.4 0 2.6.4 3.6 1.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M14 17.2l2.2 2.3 4.3-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'Data that moves both ways',
    body:
      'Read a record, transform it, write it back. Stonecrop keeps a typed schema for every system it touches so a renamed field breaks the dry run, not the payroll cycle.',
    icon: (
      <>
        <ellipse cx="12" cy="6.5" rx="7" ry="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M5 6.5v11c0 1.7 3.1 3 7 3s7-1.3 7-3v-11" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </>
    ),
  },
  {
    title: 'Escalation with a clock on it',
    body:
      'Every waiting step carries a deadline. Stonecrop counts it down in business hours, in the right timezone, and pages the next person on the ladder when it expires.',
    icon: (
      <>
        <circle cx="12" cy="13" r="8" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 8.5V13l3 2M9 2.5h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'An audit trail nobody has to assemble',
    body:
      'Who approved it, what the payload looked like, which attempt succeeded and what the system on the other end said back. Exportable, immutable, retained for seven years.',
    icon: (
      <>
        <path d="M6 3h9l4 4v14H6z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M14 3v5h5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Guardrails before production',
    body:
      'Dry-run any workflow against last week’s real traffic, diff what it would have changed, and ship it behind an approval from whoever owns the system it writes to.',
    icon: (
      <>
        <path d="M12 3l8 3.2v6c0 5-3.4 8.4-8 9.8-4.6-1.4-8-4.8-8-9.8v-6z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M8.6 12.2l2.4 2.5 4.6-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
]

export default function PlatformOverview() {
  return (
    <section id="platform" className="bg-[#F7F4EC] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12766A]">
            The platform
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1F1B] sm:text-4xl">
            Six jobs your operations team is doing by hand today
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#4A5C57]">
            Most ops teams are not short on process. They are short on a place to put it that is not
            a document nobody opens, a cron job one engineer understands, or a person who remembers.
            Stonecrop is that place, and it is boring on purpose.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((capability) => (
            <article
              key={capability.title}
              className="rounded-2xl border border-[#E2DCCE] bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F1EE] text-[#12766A]">
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" focusable="false">
                  {capability.icon}
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#0B1F1B]">
                {capability.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#5C6B66]">{capability.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

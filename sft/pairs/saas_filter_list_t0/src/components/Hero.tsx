const TRUST = [
  'No credit card to start',
  'SOC 2 Type II',
  'Runs in your own cloud',
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0B1F1B] text-[#EDF1EE]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_12%_0%,rgba(18,118,106,0.55),transparent_62%),radial-gradient(45%_65%_at_92%_8%,rgba(232,163,61,0.30),transparent_66%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#2A4A43] bg-[#0F2A24] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#7FCFC2]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E8A33D]" aria-hidden="true" />
            Workflow automation for operations teams
          </p>

          <h1 className="mt-7 text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.35rem]">
            The ops work your team keeps doing by hand, running itself.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#B7CCC5]">
            Stonecrop takes the run books living in your spreadsheets and group chats and turns them
            into workflows that execute on schedule, chase down the human who owes an approval,
            retry the step that flaked at 2am, and leave behind a record clean enough to hand
            straight to an auditor.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#trial"
              className="inline-flex items-center justify-center rounded-full bg-[#E8A33D] px-6 py-3 text-base font-semibold text-[#241703] shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
            >
              Start a 14-day trial
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#33544C] px-6 py-3 text-base font-semibold text-[#EDF1EE] transition-colors hover:bg-[#12332C]"
            >
              See how a workflow is built
              <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true" focusable="false">
                <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#8FAAA2]">
            {TRUST.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <svg viewBox="0 0 16 16" className="h-4 w-4 text-[#4FB3A2]" aria-hidden="true" focusable="false">
                  <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M5 8.3l2 2 4-4.4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-[#294842] bg-[#0F2A24] p-5 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-[#22403A] pb-4">
              <div>
                <p className="text-sm font-semibold text-[#EDF1EE]">Vendor onboarding</p>
                <p className="text-xs text-[#7B958E]">run #48,201 &middot; started 09:14</p>
              </div>
              <span className="rounded-full bg-[#14453B] px-2.5 py-1 text-xs font-semibold text-[#7FCFC2]">
                Completed
              </span>
            </div>

            <svg viewBox="0 0 340 210" className="mt-5 w-full" role="img" aria-label="Diagram of a Stonecrop workflow run moving through five completed steps">
              <defs>
                <linearGradient id="heroBar" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4FB3A2" />
                  <stop offset="100%" stopColor="#12766A" />
                </linearGradient>
              </defs>
              <line x1="26" y1="34" x2="26" y2="178" stroke="#22403A" strokeWidth="2" />

              <circle cx="26" cy="34" r="8" fill="#4FB3A2" />
              <path d="M22.5 34l2.5 2.5 4.5-5" fill="none" stroke="#0B1F1B" strokeWidth="1.8" strokeLinecap="round" />
              <rect x="46" y="22" width="270" height="26" rx="8" fill="#143A33" />
              <text x="58" y="39" fill="#CFE3DD" fontSize="12">Collect the signed W-9</text>

              <circle cx="26" cy="82" r="8" fill="#4FB3A2" />
              <path d="M22.5 82l2.5 2.5 4.5-5" fill="none" stroke="#0B1F1B" strokeWidth="1.8" strokeLinecap="round" />
              <rect x="46" y="70" width="270" height="26" rx="8" fill="#143A33" />
              <text x="58" y="87" fill="#CFE3DD" fontSize="12">Run the sanctions screen</text>

              <circle cx="26" cy="130" r="8" fill="#E8A33D" />
              <rect x="46" y="118" width="270" height="26" rx="8" fill="#3A2F14" />
              <text x="58" y="135" fill="#F3D9A8" fontSize="12">Retried once, cleared on attempt 2</text>

              <circle cx="26" cy="178" r="8" fill="#4FB3A2" />
              <path d="M22.5 178l2.5 2.5 4.5-5" fill="none" stroke="#0B1F1B" strokeWidth="1.8" strokeLinecap="round" />
              <rect x="46" y="166" width="270" height="26" rx="8" fill="#143A33" />
              <text x="58" y="183" fill="#CFE3DD" fontSize="12">Open the payables record</text>
            </svg>

            <div className="mt-5 grid grid-cols-3 gap-3 border-t border-[#22403A] pt-5">
              <div>
                <p className="text-xl font-semibold text-[#EDF1EE]">4m 12s</p>
                <p className="text-xs text-[#7B958E]">elapsed</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-[#EDF1EE]">0</p>
                <p className="text-xs text-[#7B958E]">people paged</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-[#EDF1EE]">17</p>
                <p className="text-xs text-[#7B958E]">audit entries</p>
              </div>
            </div>

            <svg viewBox="0 0 340 56" className="mt-5 w-full" aria-hidden="true" focusable="false">
              {[12, 26, 20, 34, 29, 41, 36, 48, 44, 52].map((h, i) => (
                <rect key={h} x={i * 34 + 6} y={54 - h} width="20" height={h} rx="4" fill="url(#heroBar)" />
              ))}
            </svg>
            <p className="mt-2 text-xs text-[#7B958E]">Runs per week since your team turned this one on</p>
          </div>
        </div>
      </div>
    </section>
  )
}

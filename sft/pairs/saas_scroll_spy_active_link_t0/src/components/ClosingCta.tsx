export default function ClosingCta() {
  return (
    <section
      id="demo"
      className="scroll-mt-24 bg-gradient-to-br from-indigo-800 via-indigo-900 to-indigo-950 py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Bring us your worst close
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-indigo-100">
            Show us the month that went badly — the entity that never ties, the reviewer who is
            always travelling, the reconciliation nobody wants to own — and we will walk that exact
            close through Ledgerloom with your numbers. Thirty minutes, no slides, and a written
            summary of what we would automate first.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="rounded-xl bg-amber-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-amber-500/20 transition-colors hover:bg-amber-300"
            >
              Book a 30-minute demo
            </a>
            <a
              href="#faq"
              className="rounded-xl border border-indigo-300/40 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Read the diligence FAQ
            </a>
          </div>
        </div>

        <ul className="space-y-4 rounded-2xl border border-indigo-700/60 bg-indigo-900/40 p-8">
          {[
            'A controller runs the call, not a sales engineer',
            'We use two of your own historical periods',
            'You keep the written automation summary either way',
            'Nothing is installed and no ledger access is needed to see it',
          ].map((line) => (
            <li key={line} className="flex gap-3 text-base leading-relaxed text-indigo-100">
              <svg
                viewBox="0 0 20 20"
                className="mt-1 h-5 w-5 shrink-0 text-amber-400"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 13.5l-3.5-3.5 1.4-1.4L8 10.7l5.1-5.2 1.4 1.4z" />
              </svg>
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

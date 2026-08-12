export function ClosingCta() {
  return (
    <section id="book" className="relative overflow-hidden bg-[#08312F] text-[#F1E9DC]" aria-labelledby="cta-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_120%_at_80%_10%,rgba(23,163,152,0.32),transparent_60%),radial-gradient(50%_80%_at_10%_90%,rgba(217,119,66,0.25),transparent_65%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <h2 id="cta-heading" className="text-4xl font-semibold tracking-tight text-white lg:text-[44px]">
            Bring your last four reports. We will rebuild them.
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#F1E9DC]/80">
            A walkthrough is forty minutes with someone who has held an operator licence. We put your
            own months into Weirline first, so you are not watching a demo of a system that looks
            nothing like yours. Nothing is installed, nothing touches your control system, and if it
            is not a fit we will say so on the call.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#schedule"
              data-testid="closing-cta"
              className="rounded-full bg-[#17A398] px-7 py-3.5 text-[15px] font-semibold text-[#04211F] transition hover:bg-[#22C4B6]"
            >
              Book a walkthrough
            </a>
            <a
              href="#sample-report"
              className="rounded-full border border-[#F1E9DC]/30 px-7 py-3.5 text-[15px] font-medium transition hover:border-[#F1E9DC]/70"
            >
              Download a sample report
            </a>
          </div>
        </div>

        <ul className="space-y-4">
          {[
            'Forty minutes, no slide deck',
            'Your own four months, rebuilt before the call',
            'A written quote the same afternoon',
            'Onboarding included at every tier',
          ].map((line) => (
            <li key={line} data-testid="cta-point" className="flex items-start gap-3 rounded-2xl bg-white/5 px-6 py-4 ring-1 ring-white/10">
              <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-[#7FE3D6]" aria-hidden="true">
                <path
                  d="M3 10.5l4.5 4.5L17 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[15px] text-[#F1E9DC]/85">{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function ClosingCta() {
  return (
    <section id="closing" className="relative overflow-hidden bg-[#10161C] text-[#F4F1EA]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, #C7F04A 0px, #C7F04A 2px, transparent 2px, transparent 22px)',
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center">
        <svg viewBox="0 0 120 40" className="mx-auto h-10 w-32 text-[#C7F04A]" role="img" aria-label="Barbell divider">
          <rect x="10" y="17" width="100" height="6" rx="3" fill="currentColor" />
          <rect x="2" y="9" width="10" height="22" rx="3" fill="currentColor" />
          <rect x="108" y="9" width="10" height="22" rx="3" fill="currentColor" />
        </svg>

        <h2 className="mt-8 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
          Fourteen days. One written program. No card, no contract.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#CFD6CE]">
          The next intake is Monday at 6:15am and there are three platforms free. Send the trial pass
          form and Priya will write back today with a screen time that fits your week.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#trial"
            data-testid="closing-cta"
            className="rounded-full bg-[#C7F04A] px-8 py-4 text-sm font-black uppercase tracking-wide text-[#10161C] shadow-lg shadow-[#C7F04A]/20 transition-transform hover:-translate-y-0.5"
          >
            Claim the two-week trial
          </a>
          <a
            href="tel:5550172"
            className="rounded-full border border-[#F4F1EA]/30 px-8 py-4 text-sm font-bold transition-colors hover:border-[#F4F1EA]/70"
          >
            Or ring the desk on (555) 0172
          </a>
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.24em] text-[#6E7A72]">
          14 Kemp Street, Ashgrove &middot; open 5:30am to 8:30pm weekdays
        </p>
      </div>
    </section>
  )
}

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-[#0D6E8C] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,160,61,0.35),transparent_55%),linear-gradient(120deg,rgba(11,31,51,0.65),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Bring the container that gave you the worst week of last quarter
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
          Forty minutes, one of your own shipments, filed live against the deadlines it actually had.
          If Portway would not have helped that week, we will tell you so on the call and you will
          have lost forty minutes.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#walkthrough"
            className="rounded-full bg-[#0B1F33] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-black/25 transition-colors hover:bg-[#04101C]"
          >
            Book a walkthrough
          </a>
          <a
            href="mailto:desk@portway.build"
            className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Email the desk instead
          </a>
        </div>
        <p className="mt-8 text-sm text-white/70">
          Tacoma · Newark · built by people who filed entries first
        </p>
      </div>
    </section>
  )
}

export default function ClosingCta() {
  return (
    <section
      data-testid="closing-cta"
      className="relative overflow-hidden bg-[linear-gradient(120deg,#1F4FD8_0%,#132A56_58%,#0A1220_100%)] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,159,28,0.32),transparent_66%)]"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-10 px-6 py-20 sm:py-24 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">
            Next July, the whiteboard should be a place you hang the safety calendar
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#C6D2EA]">
            Shops that move in the shoulder season are live before the first heat wave.
            Four weeks from signature to your first Monday, with migration and training
            included and a named implementation lead on the phone.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col">
          <a
            href="#walkthrough"
            className="rounded-xl bg-[#FF9F1C] px-7 py-3.5 text-center text-base font-bold text-[#0A1220] shadow-[0_16px_36px_-16px_rgba(255,159,28,0.95)] transition hover:bg-[#F08C00]"
          >
            Book a walkthrough
          </a>
          <a
            href="#pricing"
            className="rounded-xl border border-white/30 px-7 py-3.5 text-center text-base font-bold text-white transition hover:border-white/70 hover:bg-white/10"
          >
            See what it costs
          </a>
        </div>
      </div>
    </section>
  )
}

export default function ClosingCta() {
  return (
    <section aria-labelledby="closing-heading" className="relative overflow-hidden bg-[#b8451f] text-[#faf5ec]">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(70% 60% at 18% 0%, rgba(224,145,47,0.55), transparent 60%), radial-gradient(60% 70% at 88% 100%, rgba(27,21,18,0.6), transparent 62%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 id="closing-heading" className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
          The fire is lit at three. The table seats sixty.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#fbe6d3]">
          Send us the date and we will send you a menu, a price per head and a hold — usually the same
          afternoon, always within a business day. If it is easier to talk it through, the phone rings on the
          pass and somebody who works here picks it up.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#long-table"
            className="rounded-full bg-[#1b1512] px-8 py-4 text-base font-bold text-[#faf5ec] shadow-lg shadow-black/25 transition hover:bg-[#2f2219]"
          >
            Ask about the Long Table
          </a>
          <a
            href="tel:+19195550164"
            className="rounded-full border border-[#faf5ec]/50 px-8 py-4 text-base font-bold text-[#faf5ec] transition hover:border-[#faf5ec]"
          >
            Call (919) 555-0164
          </a>
        </div>
      </div>
    </section>
  )
}

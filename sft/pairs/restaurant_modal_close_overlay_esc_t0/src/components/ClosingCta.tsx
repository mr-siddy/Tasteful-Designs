export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0C1F17] via-[#123024] to-[#1C4535]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#D2A24C]/25 blur-3xl"
      />
      <div className="relative mx-auto flex max-w-5xl flex-col items-start gap-8 px-5 py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-[#F6F1E4] sm:text-4xl">
            The lot fills at 4:30. Come early, stay late.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#D9D2C0]">
            Book the dining room or the Lantern Room and Margo will call you back the same
            afternoon. If you would rather take your chances at the bar, that has worked for eighty
            years and it will work tonight.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#reserve"
            data-testid="closing-reserve"
            className="rounded-full bg-[#D2A24C] px-7 py-3.5 text-sm font-semibold text-[#17130F] shadow-lg shadow-black/25 transition-colors hover:bg-[#E8C87E]"
          >
            Reserve a table
          </a>
          <a
            href="tel:5550179"
            className="rounded-full border border-[#F6F1E4]/40 px-7 py-3.5 text-sm font-semibold text-[#F6F1E4] transition-colors hover:bg-[#F6F1E4]/10"
          >
            (555) 0179
          </a>
        </div>
      </div>
    </section>
  )
}

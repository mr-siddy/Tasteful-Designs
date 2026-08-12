export default function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-[#171310] text-[#f7f2ea]" aria-labelledby="closing-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_110%,rgba(226,98,42,0.35),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e8b04b]/50 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <svg viewBox="0 0 120 40" className="mx-auto h-10 w-32" aria-hidden="true">
          <path
            d="M4 32h34M82 32h34"
            stroke="#e2622a"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M60 6c6.5 8.4 9.5 14 9.5 19a9.5 9.5 0 0 1-19 0c0-5 3-10.6 9.5-19Z"
            fill="#e2622a"
          />
          <path d="M60 18c2.6 3.6 3.8 6.2 3.8 8.3a3.8 3.8 0 0 1-7.6 0c0-2.1 1.2-4.7 3.8-8.3Z" fill="#f7e3b0" />
        </svg>

        <h2 id="closing-heading" className="mt-6 font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
          The fire is lit by seven.
          <span className="block text-[#e8b04b]">Come sit near it.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#c8bcae]">
          Twenty-eight seats, one hearth, and a menu that changes when the farms tell it to. Book a
          table for a Wednesday, or take the back room for the night and let Margo cook six courses
          an arm’s length from where you are sitting.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#visit"
            data-testid="closing-primary-cta"
            className="rounded-xl bg-[#e2622a] px-7 py-4 text-sm font-semibold text-[#171310] shadow-lg shadow-[#e2622a]/25 transition hover:bg-[#e8b04b]"
          >
            Reserve a table
          </a>
          <a
            href="#packages"
            data-testid="closing-secondary-cta"
            className="rounded-xl border border-[#f7f2ea]/25 px-7 py-4 text-sm font-semibold transition hover:border-[#e8b04b] hover:text-[#e8b04b]"
          >
            See the private packages
          </a>
        </div>

        <p className="mt-8 text-sm text-[#9a8d80]">
          Dining room: (401) 555-0188 · Events: events@emberandrye.com · Open Wednesday to Sunday
        </p>
      </div>
    </section>
  )
}

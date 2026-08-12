import { ArrowIcon, PhoneIcon } from './Icons'

export default function ClosingCta() {
  return (
    <section id="closing" className="relative overflow-hidden bg-[#152046] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#3d519255,transparent_55%),radial-gradient(circle_at_80%_70%,#f2704a33,transparent_55%)]"
      />
      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center lg:py-24">
        <svg viewBox="0 0 120 60" className="mx-auto h-14 w-28" aria-hidden="true" focusable="false">
          <path d="M10 46c14-22 28-30 50-30s36 8 50 30" fill="none" stroke="#f9a88c" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 8" />
          <circle cx="60" cy="16" r="7" fill="#f2704a" />
        </svg>

        <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
          The waiting list is nine days. It is rarely shorter than that.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
          Send the request now and Marta will come back today with the two or three slots we
          actually have. If none of them work, we will hold the next one that opens and text
          you about it rather than making you check the site again.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full bg-[#f2704a] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[#dd5a35]"
          >
            Ask us for a time
            <ArrowIcon className="h-4 w-4" />
          </a>
          <a
            href="tel:+15550142118"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white transition hover:border-white/60"
          >
            <PhoneIcon className="h-4 w-4" />
            (555) 014-2118
          </a>
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.18em] text-white/45">
          42 Lantern Lane, Kelso Park · free patient parking in the yard
        </p>
      </div>
    </section>
  )
}

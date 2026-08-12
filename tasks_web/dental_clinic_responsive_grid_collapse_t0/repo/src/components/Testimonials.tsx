const QUOTES = [
  {
    quote:
      'I chipped a molar on a Thursday morning and had a permanent crown in it by four that afternoon. I had booked the whole of the following week off work for nothing.',
    name: 'Marguerite Feeley',
    detail: 'Patient since 2021 · South End',
  },
  {
    quote:
      'Eleven years since my last dentist and I sat in the car for ten minutes working up to going in. Dr. Braga did not say one word about the gap. We started with the tooth that hurt.',
    name: 'Tomas Ruiz-Aldridge',
    detail: 'Patient since 2023 · Winooski',
  },
  {
    quote:
      'They handed me a printed plan with a price on every line and told me which half could wait a year. No dentist has ever done that for me before.',
    name: 'Priya Raghunathan',
    detail: 'Patient since 2019 · Grand Isle',
  },
]

/** Three patients, named, with the detail that makes them read as real people. */
export default function Testimonials() {
  return (
    <section data-testid="testimonials" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c68a3e]">
            In their words
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#0d2b2e] sm:text-4xl">
            What patients tell us on the way out
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {QUOTES.map((entry) => (
            <figure
              key={entry.name}
              data-testid="testimonial"
              className="flex h-full flex-col rounded-2xl bg-[#f2e9da] p-8"
            >
              <svg viewBox="0 0 40 32" className="h-8 w-10" aria-hidden="true">
                <path
                  d="M16 4v10c0 8-5 13-12 14v-5c4-1 6-3.5 6-7H4V4h12zm20 0v10c0 8-5 13-12 14v-5c4-1 6-3.5 6-7h-6V4h12z"
                  fill="#0f4c4f"
                  opacity="0.22"
                />
              </svg>
              <blockquote className="mt-5 flex-1 text-[16px] leading-relaxed text-[#0d2b2e]/80">
                {entry.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-[#0f4c4f]/15 pt-5">
                <p className="font-serif text-lg font-semibold text-[#0d2b2e]">{entry.name}</p>
                <p className="mt-0.5 text-sm text-[#0d2b2e]/60">{entry.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

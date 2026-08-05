const QUOTES = [
  {
    quote:
      'I had not seen a dentist in nine years and I was genuinely embarrassed about it. Nadia looked at the x-rays, said "right, none of this is a disaster", and wrote me a plan I could pay for over three visits. Nobody made me feel stupid. I have been back four times since.',
    name: 'Priya Raghunathan',
    detail: 'Primary school teacher, Kestrel Park',
    initials: 'PR',
  },
  {
    quote:
      'Cracked a molar on a Sunday ride and rang at 8am Monday expecting to be told to wait a fortnight. I was in the chair by two, walked out with a ceramic crown the same afternoon, and the fee was exactly the number Joel quoted me on the phone.',
    name: 'Doug Whitfield',
    detail: 'Retired postmaster, Ferndale',
    initials: 'DW',
  },
  {
    quote:
      'Both my kids actually ask when they are going back, which I still find hard to believe. Tessa lets them hold the mirror and count their own teeth. Meanwhile I got my aligners done here and the whole thing cost less than the mall clinic quoted for half the work.',
    name: 'Alina Mercado',
    detail: 'Parent of two, Bellview',
    initials: 'AM',
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="bg-stone-100">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            In their words
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Three patients, three reasons they stayed
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-teal-900/70">
            These are lightly trimmed for length and published with permission. We do not offer
            anyone a discount for a review, which is probably why we only have 612 of them.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((item) => (
            <figure
              key={item.name}
              data-testid="testimonial"
              className="flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-inset ring-teal-900/10"
            >
              <div className="flex gap-1" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((star) => (
                  <svg key={star} viewBox="0 0 20 20" className="h-4 w-4 text-amber-500" fill="currentColor">
                    <path d="m10 1.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.6 7.7l5.8-.8z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-teal-900/80">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-teal-900/10 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-800">
                  {item.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-teal-900">{item.name}</span>
                  <span className="block text-sm text-teal-900/60">{item.detail}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

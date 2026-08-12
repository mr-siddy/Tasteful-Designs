const REVIEWS = [
  {
    quote:
      'I had not been to a dentist since 2014 and I genuinely cried in the car park before going in. Dr Ellison looked at the scan, said “right, none of this is a disaster”, and booked four visits. Two of them turned out not to be necessary and she took them off the bill without me asking.',
    name: 'Delia Moreau',
    detail: 'ceramicist, two streets over on Falk Lane',
    treatment: 'Rebuild after a long gap',
  },
  {
    quote:
      'The crown was done between a morning class and an afternoon one. They scanned it, milled it in the back, and I ate a sandwich on the way home with my own tooth shape. My old practice had me in a temporary for three weeks and it fell off twice.',
    name: 'Owen Pratchett',
    detail: 'teaches history at Rivermill Secondary',
    treatment: 'Same-day porcelain crown',
  },
  {
    quote:
      'Night shifts mean I miss every appointment anyone else can make, and they put me in the 7:30 slot without a word about it. Hana has sorted out gums that three hygienists told me were just “sensitive”. Six months later there is no bleeding at all.',
    name: 'Sofia Berglund',
    detail: 'theatre nurse, St Alder Hospital',
    treatment: 'Periodontal therapy',
  },
]

function QuoteGlyph() {
  return (
    <svg viewBox="0 0 32 24" className="h-7 w-9 text-teal-200" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.6 0v9.4c0 8.2-3.9 13-11.4 14.6L0 21.3c4-1 6.2-3 6.6-6H2.4V0Zm19 0v9.4c0 8.2-3.8 13-11.3 14.6L19 21.3c4-1 6.2-3 6.6-6h-4.2V0Z"
      />
    </svg>
  )
}

function Stars() {
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {['one', 'two', 'three', 'four', 'five'].map((id) => (
        <svg key={id} viewBox="0 0 20 20" className="h-4 w-4 text-amber-500">
          <path fill="currentColor" d="m10 1.8 2.5 5.1 5.6.8-4 3.9 1 5.6L10 14.6 4.9 17.2l1-5.6-4-3.9 5.6-.8z" />
        </svg>
      ))}
    </span>
  )
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-28 border-y border-stone-200 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">Patients</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-teal-950 sm:text-4xl">
              What people say once the appointment is over
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone-600">
              Every review below was left by a real patient on our public listing, reproduced with their permission and
              their first name intact. We do not screen them and we do not take them down.
            </p>
          </div>
          <p className="shrink-0 rounded-2xl bg-stone-50 px-6 py-4 text-sm text-stone-600 ring-1 ring-stone-200">
            <span className="block text-3xl font-semibold tracking-tight text-teal-900">4.9 / 5</span>
            averaged across 812 reviews since 2019
          </p>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <li
              key={review.name}
              data-testid="review-card"
              className="flex flex-col rounded-3xl border border-stone-200 bg-stone-50 p-8"
            >
              <QuoteGlyph />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-stone-700">“{review.quote}”</blockquote>
              <div className="mt-6 border-t border-stone-200 pt-5">
                <Stars />
                <p className="mt-3 text-sm font-semibold text-teal-950">{review.name}</p>
                <p className="text-xs text-stone-500">{review.detail}</p>
                <p className="mt-2 inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800">
                  {review.treatment}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const REVIEWS = [
  {
    id: 'halvorsen',
    quote:
      'We came for my mother\'s seventieth and they carved the celeriac at the table like it was a rib of beef. She has talked about it every week since, mostly to people who were not there.',
    name: 'Ingrid Halvorsen',
    context: 'Table of nine, the Net Loft',
  },
  {
    id: 'obeng',
    quote:
      'I booked the counter on my own on a wet Thursday expecting to feel conspicuous, and instead spent two hours being handed plates and told which boat everything came off. Best meal I have eaten alone.',
    name: 'Daniel Obeng',
    context: "Chef's counter, six o'clock",
  },
  {
    id: 'sant',
    quote:
      'Coeliac, and I have been to enough places that make it awkward. Here they had already thought about it — the whole menu came without gluten, nothing was a substitute, and nobody made a performance of it.',
    name: 'Rekha Sant',
    context: 'Regular since 2021',
  },
]

const PRESS = [
  { id: 'harbour-guide', outlet: 'The Harbour Guide', line: 'Two flames, and the fish cookery of the year.' },
  { id: 'quay-review', outlet: 'Quay Review', line: 'The best argument on this coast for cooking with nothing but wood.' },
  { id: 'north-table', outlet: 'North Table', line: 'A room that knows exactly what it is and refuses to be talked out of it.' },
]

export function GuestReviews() {
  return (
    <section aria-labelledby="reviews-heading" className="bg-[#F3EADC]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#8B8073]">In the book</p>
          <h2 id="reviews-heading" className="mt-3 text-4xl font-semibold tracking-tight text-[#123C43]">
            What people write to us afterwards
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#6B6155]">
            Three of the notes pinned by the pass. We ask permission before we put anyone's name on
            the website, and we have never paid for a review in nine years.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <li
              key={review.id}
              data-testid="guest-review"
              className="flex flex-col rounded-3xl border border-[#E4DACB] bg-white p-7 shadow-sm"
            >
              <svg viewBox="0 0 32 24" aria-hidden="true" className="h-7 w-9 text-[#E08A3C]">
                <path
                  d="M0 24V12C0 5.4 4.6 0 11 0v5c-3.2 0-5.6 2.6-5.6 5.6H11V24Zm18 0V12C18 5.4 22.6 0 29 0v5c-3.2 0-5.6 2.6-5.6 5.6H29V24Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-[#4A423A]">
                {review.quote}
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-[#EFE6D8] pt-5">
                <svg viewBox="0 0 40 40" aria-hidden="true" className="h-10 w-10 flex-none">
                  <circle cx="20" cy="20" r="20" fill="#123C43" />
                  <circle cx="20" cy="16" r="6.5" fill="#E9C79A" />
                  <path d="M7 37c1.6-8 7.2-11 13-11s11.4 3 13 11Z" fill="#C4472A" />
                </svg>
                <div>
                  <h3 className="text-sm font-semibold tracking-tight text-[#171310]">
                    {review.name}
                  </h3>
                  <p className="text-xs text-[#8B8073]">{review.context}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {PRESS.map((item) => (
            <li
              key={item.id}
              data-testid="press-line"
              className="rounded-2xl border border-[#E4DACB] bg-[#FAF6EF] px-5 py-4"
            >
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C4472A]">
                {item.outlet}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4A423A]">{item.line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

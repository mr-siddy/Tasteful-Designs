const QUOTES = [
  {
    quote:
      'We took the back room for my father’s seventieth and Margo cooked the whole six courses two metres from where he was sitting. He talked about the carrots for a month. Not the beef, the carrots.',
    name: 'Ruth Abernathy',
    detail: 'Booked the Chef’s Table for 22 guests, March',
    rating: 5,
  },
  {
    quote:
      'Our firm has done its year-end dinner here three years running. Fifty-eight people, one bill, no surprises on it, and the kitchen has never once been late to a course. Delphine runs it like a railway.',
    name: 'Ike Solberg',
    detail: 'Partner, Solberg & Voss — Full House buyout',
    rating: 5,
  },
  {
    quote:
      'I eat at the bar alone most Thursdays. They have never made me feel like a table they are waiting to turn, and Priya has poured me ninety dollars of wine education thirty-eight dollars at a time.',
    name: 'Constance Iwu',
    detail: 'Regular since the second week they opened',
    rating: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-1" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, index) => (
        <svg key={index} viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
          <path
            d="m10 1.8 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8Z"
            fill="#e2622a"
          />
        </svg>
      ))}
    </span>
  )
}

function QuoteMark() {
  return (
    <svg viewBox="0 0 40 32" className="h-8 w-10" aria-hidden="true">
      <path
        d="M15 2C7 6 2 13 2 22c0 5 3 8 7.5 8S17 26.6 17 22c0-4.2-3-7.2-7-7.2-.6 0-1.2.1-1.7.2C9.6 11 12 7.6 16.4 4.8ZM38 2c-8 4-13 11-13 20 0 5 3 8 7.5 8S40 26.6 40 22c0-4.2-3-7.2-7-7.2-.6 0-1.2.1-1.7.2 1.3-4 3.7-7.4 8.1-10.2Z"
        fill="#e2622a"
        opacity="0.28"
      />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-[#f7f2ea]" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b8431a]">
            What people say afterwards
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Three notes we kept
          </h2>
          <p className="mt-4 leading-relaxed text-[#5b5148]">
            Pulled from the guest book by the door and from the follow-up notes Delphine sends after
            every private dinner. Printed with permission, names and all.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((entry) => (
            <figure
              key={entry.name}
              data-testid="testimonial"
              className="flex h-full flex-col rounded-2xl border border-[#171310]/10 bg-white p-7 shadow-sm"
            >
              <QuoteMark />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-[#3b322b]">
                {entry.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-[#171310]/10 pt-5">
                <Stars count={entry.rating} />
                <p className="mt-3 font-serif text-lg font-semibold tracking-tight">{entry.name}</p>
                <p className="text-sm text-[#6f645b]">{entry.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

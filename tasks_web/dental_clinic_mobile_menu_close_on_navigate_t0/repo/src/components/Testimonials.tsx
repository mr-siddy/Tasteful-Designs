const QUOTES = [
  {
    quote:
      'I had not sat in a dentist chair since 2013 and I told them so on the phone. Dr. Raman spent the first appointment just looking and talking, and did not once make me feel stupid about the gap. Four visits later I have my back teeth working again.',
    name: 'Teresa Nwoye',
    role: 'Bookbinder, Kilnwood Street',
    detail: 'Patient since 2023',
  },
  {
    quote:
      'Cracked a molar on a Sunday. They saw me at ten past seven on Monday, scanned it, and I was back on site by half nine with a permanent crown in. My old dentist would still have had me in a temporary in October.',
    name: 'Dev Whitlock',
    role: 'Site foreman, Ardall Construction',
    detail: 'Same-day crown, March 2025',
  },
  {
    quote:
      'Both children actually ask to go, which I appreciate is an insane sentence. Ilse taught them to brush with a timer and a chart and they have not had a filling between them. The membership works out cheaper than our old insurance.',
    name: 'Marguerite Okafor',
    role: 'Runs the flower stall on Bell Yard',
    detail: 'Kilnwood Care member',
  },
]

function QuoteMark() {
  return (
    <svg viewBox="0 0 40 32" className="h-8 w-10" aria-hidden="true">
      <path
        d="M0 32V18C0 8 5.6 1.6 15.2 0l1.6 4.8C11.2 6.4 8 10 8 14.4h6.4V32zm22.4 0V18C22.4 8 28 1.6 37.6 0l1.6 4.8C33.6 6.4 30.4 10 30.4 14.4h6.4V32z"
        fill="#d9682f"
        opacity="0.35"
      />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section id="reviews" className="bg-[#fbf6f0]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9682f]">
            In their words
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#14312c] sm:text-4xl">
            What the Foundry Quarter says
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#3f524b]">
            Three of the six hundred and twelve reviews we have collected since we started asking
            after every appointment. We publish the two-star ones as well, on the door by
            reception.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {QUOTES.map((q) => (
            <li
              key={q.name}
              data-testid="testimonial-card"
              className="flex flex-col rounded-2xl border border-[#14312c]/10 bg-white p-8 shadow-sm"
            >
              <QuoteMark />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-[#3f524b]">
                {q.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-[#14312c]/10 pt-5">
                <h3 className="font-serif text-lg font-semibold text-[#14312c]">{q.name}</h3>
                <p className="text-sm text-[#6b7d75]">{q.role}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#d9682f]">
                  {q.detail}
                </p>
              </figcaption>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

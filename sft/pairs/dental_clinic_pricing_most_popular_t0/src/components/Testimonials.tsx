const QUOTES = [
  {
    quote:
      'I had not been to a dentist in eleven years and I was fully prepared to be lectured about it. Instead Dr. Raghunathan asked what happened, wrote down that I needed the nitrous, and we did the first filling six weeks later with me holding the stop signal the whole time. I did not need to use it.',
    name: 'Delia Marchetti',
    detail: 'Patient since 2022 · Cobblehill Ward',
  },
  {
    quote:
      'The written plan is the thing. I took it home, showed it to my sister who is a nurse, and she said it was the first dental quote she had ever seen that separated "do this now" from "keep an eye on it". We did the urgent half in March and the rest in September. Nobody chased me in between.',
    name: 'Tobias Renner',
    detail: 'Complete Care member since 2021',
  },
  {
    quote:
      'Four of us on one plan, one invoice, and Dr. Tarrant sees both kids back-to-back on a Thursday morning so we are out by half past nine. Before this we were making three separate trips across town and I was losing a day of work each time.',
    name: 'Nadia Osei-Clarke',
    detail: 'Whole Family member since 2019',
  },
]

function QuoteMark() {
  return (
    <svg viewBox="0 0 40 32" className="h-8 w-10 text-[#C2557E]" aria-hidden="true">
      <path
        d="M0 32V18C0 8 5 2 15 0l2 5c-5 1.6-7.6 4.6-7.8 9H16v18zm23 0V18C23 8 28 2 38 0l2 5c-5 1.6-7.6 4.6-7.8 9H39v18z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  )
}

function Stars() {
  return (
    <div className="flex gap-1" role="img" aria-label="Rated five out of five">
      {[0, 1, 2, 3, 4].map((index) => (
        <svg key={index} viewBox="0 0 20 20" className="h-4 w-4 text-[#C2557E]" aria-hidden="true">
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L1.5 7.7l5.9-.8z" fill="currentColor" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="patients" className="bg-[#F3EDE4]" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C2557E]">
            In their words
          </p>
          <h2
            id="testimonials-heading"
            className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#0F3B36] sm:text-4xl"
          >
            Three patients, printed with their permission
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {QUOTES.map((entry) => (
            <figure
              key={entry.name}
              data-testid="testimonial"
              className="flex h-full flex-col rounded-3xl border border-[#0F3B36]/10 bg-[#FBF8F3] p-7 shadow-sm"
            >
              <QuoteMark />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[#14201E]/80">
                {entry.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-[#0F3B36]/10 pt-5">
                <Stars />
                <p className="mt-3 font-semibold text-[#0F3B36]">{entry.name}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-[#14201E]/50">{entry.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
